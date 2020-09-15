module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: [   
        'standard',    
        'plugin:flowtype/recommended'
    ],  
    plugins: [
        'html',
        'flowtype'
    ],
    rules: {
       
    }
};
