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

Add to `package.json` next section:
```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }  
  }
}
```
Argument `-g` is path to your commit configuration file. More details [about it](http://marionebl.github.io/commitlint/#/reference-cli)
