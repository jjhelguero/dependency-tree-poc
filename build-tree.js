const dependencyTree = require('dependency-tree');

const filePaths = ['test/a.js','test/b.js','test/c/c.js']

filePaths.forEach(filePath => {
    const dep = dependencyTree({
        filename: filePath,
        directory: 'test'
    })
    console.log(dep)
})