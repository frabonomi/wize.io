const preprocess = require('svelte-preprocess')

function createPreprocessors(sourceMap) {
  return preprocess({
    sourceMap,
    postcss: true,
  })
}

module.exports = {
  preprocess: createPreprocessors(true),
  createPreprocessors,
}
