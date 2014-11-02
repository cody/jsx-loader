var loaderUtils = require('loader-utils');
var reactTools = require('react-tools');

module.exports = function(source) {
  this.cacheable();

  var params = loaderUtils.parseQuery(this.query);

  return reactTools.transform(source, params);
};
