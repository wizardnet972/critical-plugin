'use strict';

const chalk = require('chalk');
const critical = require('critical');
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

class HtmlWebpackCriticalPlugin {

    constructor(options) {
        this.options = options;

        this.userConfig = ''
        this.outputPath = ''

        this.files = []
    }

    apply(compiler) {

        compiler.hooks.compilation.tap('HtmlWebpackPluginHooks', compilation => {

            compilation.hooks.htmlWebpackPluginAfterEmit.tap('PreloadPlugin', HtmlWebpackPlugin => {

                const filename = HtmlWebpackPlugin.outputName || '';
                if (!filename) {
                    console.log(chalk.yellow('Asset ignored. no provide filename in HtmlWebpackPlugin'));
                    return;
                }

                this.outputPath = compilation.outputOptions && compilation.outputOptions.path || '';
                if (!this.outputPath) {
                    console.log(chalk.yellow('Asset ignored. no provide outputPath in HtmlWebpackPlugin'));
                    return;
                }

                this.files.push({
                    filename,
                    html: HtmlWebpackPlugin.html.source(),
                });
            });
        });

        compiler.plugin('after-emit', (compilation, callback) => {

            console.log(chalk.blue('Processing critical files, this may take a few seconds...'));

            Promise.all(
                this.files.map(f => this.critical({
                    html: f.html,
                    ...this.options.critical
                }).then((html) => {
                    return this.updateOutputFile(html, f.filename);
                }))
            ).then(() => {
                callback();

            }).catch(error => {
                callback(error);
            });
        });
    }

    updateOutputFile(html, filename) {

        if (!this.outputPath || !filename) return Promise.reject(new Error('outputPath & filename must be set to update output file'))

        else if (!html) return Promise.resolve()

        return new Promise((resolve, reject) => {
            fs.writeFile(path.resolve(this.outputPath, filename), html, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })
        })
    }

    critical(options) {
        return critical.generate(options);
    }

}

module.exports = HtmlWebpackCriticalPlugin;