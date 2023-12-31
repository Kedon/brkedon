const Fs = require('fs');
const Path = require('path');
const Sass = require('node-sass');
const buildDir = 'lib';

const getComponents = () => {
    let allComponents = []

    const types = ['atoms', 'molecules']

    types.forEach(type => {
        const allFiles = Fs.readdirSync(`src/${type}`).map(file => ({
            input: `src/${type}/${file}`,
            output: `${buildDir}/${file.slice(0, -4) + 'css'}`
        }))

        allComponents = [
            ...allComponents,
            ...allFiles
        ]
    })

    return allComponents
}

const compile = (path, filename) => {
    const result = Sass.renderSync({
        data: Fs.readFileSync(
            Path.resolve(path)
        ).toString(),
        outputStyle: 'expanded',
        includePaths: [Path.resolve('src')]
    })

    Fs.writeFileSync(
        Path.resolve(filename),
        result.css.toString()
    );
}

try {
    Fs.mkdirSync(Path.resolve(buildDir))
} catch(e) {}

compile('src/global.scss', `${buildDir}/global.css`);


getComponents().forEach(component => {
    compile(component.input, component.output);
})