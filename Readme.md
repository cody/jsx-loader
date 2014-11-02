# JSX Loader

A JSX loader for [Webpack](http://webpack.github.io/).

## Install

```
npm install --save-dev git://github.com/cody/jsx-loader
```

## Usage

With the webpack.config:
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
