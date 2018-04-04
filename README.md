# commitlint-config

Commitlint configuration

## Using

Install packages: 
```shell
npm i --save-dev husky @commitlint/cli @commitlint/config-conventional @ptsecurity/commitlint-config
```

Create file `commitlint.config.js` with extending preset and define set of scopes:
```javascript
module.exports = {
    extends: ['@ptsecurity/commitlint-config'],
    rules: {
        'scope-enum': [ 
            2,
            'always',
            [
                // as examples
                'app', 
                'common'
            ]
        ]
    }
};
```

Add to `package.json` in section `scripts` following line `"commitmsg": "commitlint -x=./commitlint.config.js -e $GIT_PARAMS"`, where value of argument `-x` is path to your commit configuration file
