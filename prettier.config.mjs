/** @type {import('prettier').Config} */
const config = {
  importOrder: [
    '^react$',
    '^next(/.*)?$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^\\.\\./',
    '^\\./',
    '^[./].*\\.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderSideEffects: false,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-css-order',
  ],
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  cssDeclarationSorterOrder: 'alphabetical',
}

export default config
