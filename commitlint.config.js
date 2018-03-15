module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 120],
        'lang': [0],
        'subject-case': [
            2,
            'always',
            [
                'lower-case',
                'sentence-case'
            ]
        ],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'refactor',
                'test',
                'perf',
                'bump',
                'chore',
                'revert'
            ]
        ],
        'scope-empty': [
            0,
            'always'
        ]
    }
};