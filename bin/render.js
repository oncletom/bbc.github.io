'use strict';

require("node-jsx").install({ extension: ".jsx" });

// neutralizes any require('foo/bar.less');
require.extensions['.less'] = function(){
  return '';
};

var fs = require('fs');
var path = require('path');
var through = require('through2');
var React = require('react');

var App = require('../app.js');
var repos = require('../data/repos.json');

var body = React.renderToString(React.createElement(App, { repos: repos }));
var inputFile = path.join(__dirname, '..', 'src', 'index.html');
var outputFile = path.join(__dirname, '..', 'dist', 'index.html');

fs.createReadStream(inputFile)
  .pipe(through(function(chunk, enc, done){
    chunk = String(chunk)

    if (chunk.indexOf('<main>') !== -1){
      chunk = chunk.replace(/(<main>)/, '$1' + body);
    }

    done(null, chunk);
  }))
  .pipe(fs.createWriteStream(outputFile));
