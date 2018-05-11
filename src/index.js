'use strict';

const chalk = require('chalk');
const critical = require('critical');
const path = require('path');
const fs = require('fs');

const pluginName = 'CriticalPlugin';

class CriticalPlugin {

    constructor(options = { critical: {} }) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tapAsync(pluginName, (chunk, callback) => this.onAfterEmit(chunk, callback));
    }

    onAfterEmit(chunk, callback) {

        let assets = Object.keys(chunk.assets)
            .filter(key => key && key.toLowerCase().endsWith('.html'))
            .map(key => chunk.assets[key])
            .map(asset => this.critical({
                asset,
                options: {
                    base: path.dirname(asset.existsAt),
                    src: path.basename(asset.existsAt),
                    inline: true,
                    ...this.options.critical
                }
            }));
            
        assets && assets.length && console.info(`${pluginName} `, chalk.yellow('critical your html...'));
        
        Promise.all([...assets]).then(() => {
            console.info(`${pluginName} `, chalk.green('critical complete.'));
            callback();
        });
    }
 
    critical({ asset, options }) {
        return new Promise((resolve, reject) => {

            critical.generate(options)
                .then(html => this.save(asset.existsAt, html).then(() => resolve()))
                 .catch(e => {
                     if (e.message.indexOf('No usable stylesheets found in html source') === 0){
                         console.warn(`${pluginName} `, chalk.yellow(`IGN!  File ignored: ${options.src} at ${e}.`, '\n\r'));
                         resolve();
                         return;
                     }
                     console.error(`${pluginName} `, chalk.red(`ERR!`), `Please report this issue to`, chalk.yellow(`https://github.com/wizardnet972/critical-plugin/issues`), '\n\r', chalk.red(`File: ${options.src} at ${e}.`, '\n\r'));
                     reject(e);
                });
        });
    }

    save(filename, html) {
        return new Promise((resolve, reject) => {

            if (!filename) return reject(new Error('outputPath & filename must be set to update output file'));

            if (!html) return resolve();

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