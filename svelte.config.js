const preprocess = require('svelte-preprocess')
const postcssNesting = require('postcss-nesting')

function createPreprocessors(sourceMap) {
  return preprocess({
    sourceMap,
    postcss: {
      plugins: [postcssNesting()],
    },
  })
}

module.exports = {
  preprocess: createPreprocessors(true),
  createPreprocessors,
}
