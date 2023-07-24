const fs = require('node:fs')
const babel = require('@babel/core')

const rawCode = fs.readFileSync('./example.jsx', {
  encoding: 'utf8',
})
const result = babel.transformSync(rawCode, {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'vhtml',
      },
    ],
  ],
})
console.log(result)
