# JSX Loader

A JSX loader for [Webpack](http://webpack.github.io/).

> **Deprecated in favor of [babel-loader](https://github.com/babel/babel-loader).**

## Install

```
npm install --save-dev git://github.com/cody/jsx-loader
```
The [react-tools](https://www.npmjs.org/package/react-tools) are a peer
dependency for the jsx-loader. This enables you to control which version of
react-tools should be used:
```
npm install --save-dev react-tools
```

## Usage

Configure the loader via `webpack.config.js`:
```
module: {
	loaders: [
		{test: /\.jsx$/, loader: 'jsx?harmony&stripTypes'}
	]
}
```

### Options

option | effect
-------|-------
`harmony` | enable ES6 features
`stripTypes` | strips out type annotations

## Licence

[The MIT License (MIT)](http://opensource.org/licenses/mit-license.php).
