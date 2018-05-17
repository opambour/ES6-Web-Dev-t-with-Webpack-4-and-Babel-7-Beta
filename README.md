# ES6 Web Dev't with Webpack 4 and Babel 7 Beta

Webpack is our automation build tool/bundler/task runner that incorporates babel to transpile or compile our es6 code to es5. With the help of .babelrc, it is well configured to handle react project as well to use its react presets in additon with "flow" that strips flow types and transform JSX into createElement calls.

Working with React projects you require the ff:
a. @babel/preset-react
b. @babel-preset-flow

Install the above presets using npm: npm i -D @babel/preset-react babel-preset-flow. Agter installation, add them to .babelrc as a preset environment:

{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "node": "current"
            }
        }],
        ["@babel/preset-react", {
            "pragma": "dom", // default pragma is React.createElement
            "pragmaFrag": "DomFrag", // default is React.Fragment
            "throwIfNamespace": false // defaults to true
        }],
        ["@babel/preset-flow"]
    ]
}

## Little Know How

* babel-core: Transforms your ES6 code into ES5

* babel-loader: Webpack helper to transform your JavaScript dependencies (for example, when you import your 
  components into other components) with Babel

* babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on   older browsers that do not natively support it) based on the browser matrix you want to support

* babel-preset-react: Babel preset for all React plugins, for example turning JSX into functions
