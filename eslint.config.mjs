import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '.nuxt/**',
      '.output/**',
      'dist/**',
      'node_modules/**',
      'public/**',
      'scratch/**',
      'legacy_archive/**',
      '*.log'
    ]
  },
  eslintConfigPrettier
]
