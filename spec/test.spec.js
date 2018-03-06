const fs = require('fs');
const {
    resolve
} = require('path');
const webpack = require('webpack');

describe("A main suite for running all the cases", function () {

    const casesDirectory = resolve(__dirname, 'cases');
    const outputDirectory = resolve(__dirname, 'output');

    for (const directory of fs.readdirSync(casesDirectory)) {

        it(`${directory} should compile to the expected result`, (done) => {
            const directoryForCase = resolve(casesDirectory, directory);
            const outputDirectoryForCase = resolve(outputDirectory, directory);

            const webpackConfig = require(resolve(directoryForCase, 'webpack.config.js'));

            webpack(Object.assign({
                context: directoryForCase,
                output: {
                    path: outputDirectoryForCase,
                },
                mode: 'none'
            }, webpackConfig), (err, stats) => {
                if (err) {
                    done(err);
                    return;
                }
                done();

                if (stats.hasErrors()) {
                    done(new Error(stats.toString({
                        context: resolve(__dirname, '..'),
                        errorDetails: true,
                    })));
                    return;
                }

                const expectedDirectory = resolve(directoryForCase, 'expected');

                for (const file of fs.readdirSync(expectedDirectory)) {
                    const content = fs.readFileSync(resolve(expectedDirectory, file), 'utf-8');
                    const actualContent = fs.readFileSync(resolve(outputDirectoryForCase, file), 'utf-8');
                    expect(actualContent).toEqual(content);
                }

                done();
            });
        });
    }
});