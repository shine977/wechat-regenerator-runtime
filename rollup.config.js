const uglify = require('rollup-plugin-uglify').uglify;

module.exports = {
    input: './regenerator.js',
    output:{
        file: './regenerator/index.js',
        format: 'umd',
        name: 'regenerator-runtime',
        sourcemap: false
    },
    plugins:[
        uglify()
    ]
}