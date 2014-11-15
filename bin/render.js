'use strict';

require("node-jsx").install({ extension: ".jsx" });

var fs = require('fs');
var path = require('path');

var React = require('react');

var App = require('../app.js');
var repos = require('../data/repos.json');

var body = React.renderToString(React.createElement(App, { repos: repos }));

fs.readFile(path.join(__dirname, '..', 'src', 'index.html'), function(err, binaryContent){
  if (err){
    throw err;
  }

  fs.writeFile(
    path.join(__dirname, '..', 'dist', 'index.html'),
    String(binaryContent).replace('<main></main>', '<main>' + body + '</main>')
  );
});