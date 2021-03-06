module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'value-list-comma-newline-after': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
