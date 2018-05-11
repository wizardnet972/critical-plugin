import fs from 'fs';
import path from 'path';

import webpack from 'webpack';


describe('TestCases', () => {

    const casesDirectory = path.resolve(__dirname, 'cases');
    const outputDirectory = path.resolve(__dirname, 'output');

    for (const directory of fs.readdirSync(casesDirectory)) {

        it(`${directory} should compile to the expected result`, (done) => {
          
            const directoryForCase = path.resolve(casesDirectory, directory);
            const outputDirectoryForCase = path.resolve(outputDirectory, directory);

            const webpackConfig = require(path.resolve(directoryForCase, 'webpack.config.js'));

            webpack({
                mode: 'none',
                context: directoryForCase,
                output: {
                    path: outputDirectoryForCase,
                },
                ...webpackConfig
            }, (err, stats) => {
                if (err) {
                    done(err);
                    return;
                }
              
                if (stats.hasErrors()) {
                    done(new Error(stats.toString({
                        context: path.resolve(__dirname, '..'),
                        errorDetails: true,
                    })));
                    return;
                }

                const expectedDirectory = path.resolve(directoryForCase, 'expected');

                for (const file of fs.readdirSync(expectedDirectory)) {
                    const content = fs.readFileSync(path.resolve(expectedDirectory, file), 'utf-8');
                    const actualContent = fs.readFileSync(path.resolve(outputDirectoryForCase, file), 'utf-8');
                    expect(actualContent).toEqual(content);
                }

                done();
            });
        }, 20000);
    }
});