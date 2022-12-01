const dependencyTree = require('dependency-tree');

const dep = dependencyTree({
    filename: 'test/c/c.js',
    directory: 'test'
})


console.log(dep)