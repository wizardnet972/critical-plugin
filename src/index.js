'use strict';

const chalk = require('chalk');
const critical = require('critical');
const path = require('path');
const fs = require('fs');

class CriticalPlugin {

    constructor(options) {
        this.options = options || {};
        this.criticalOptions = this.options.critical || {};
    }

    apply(compiler) {

        compiler.hooks.afterEmit.tapAsync('CriticalPlugin', (chunk, callback) => {

            const assets = Object.keys(chunk.assets)
                .filter(key => key && key.toLowerCase().endsWith('.html'))
                .map(key => chunk.assets[key])
                .map(asset => ({
                    asset,
                    options: Object.assign({
                        base: path.dirname(asset.existsAt),
                        src: path.basename(asset.existsAt),
                        inline: true,
                    }, this.criticalOptions)
                }))
                .map(({
                        asset,
                        options
                    }) =>
                    critical.generate(options).then(html => {
                        return this.writeFile(html, asset.existsAt);
                    }).catch(e => {
                        console.log(chalk.yellow(`[${options.src} Ignored] ${e.message}. Please report this issue to https://github.com/wizardnet972/critical-plugin/issues.`));
                    }));

            if (assets && assets.length) {
                console.log(chalk.yellow('resolving critical path...'))
            }

            Promise.all(assets)
                .then(() => {
                    console.log(chalk.green('critical path is set.'));
                    callback();
                });
        });
    }

    writeFile(html, filename) {
        return new Promise((resolve, reject) => {

            if (!filename) return reject(new Error('outputPath & filename must be set to update output file'));

            if (!html) return resolve()

            fs.writeFile(filename, html, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })
        })
    }
}

module.exports = CriticalPlugin;