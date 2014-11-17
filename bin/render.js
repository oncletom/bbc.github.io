'use strict';

/**
 * @example node bin/render.js input.html -o output.html
 */

require("node-jsx").install({ extension: ".jsx" });

// neutralizes any require('foo/bar.less');
require.extensions['.less'] = function(){
  return '';
};

var fs = require('fs');
var path = require('path');
var through = require('through2');
var React = require('react');

var basePath = path.join(__dirname, '..');
var inputFile = path.join(basePath, process.argv[2]);
var outputFile = path.join(basePath, process.argv[4]);

fs.createReadStream(inputFile)
  .pipe(through(function(chunk, enc, done){
    var frag = chunk.toString('utf8');
    var html = '';
    var reactMod = null;

    var attrMatch = frag.match('data-react-inject="([^"]+)"([^>]*)>');

    if (attrMatch){
      reactMod = require(path.join(basePath, attrMatch[1]));
      html = React.renderToString(React.createElement(reactMod, reactMod.__reactData || null));

      done(null, frag.replace(attrMatch[0], attrMatch[0] + html));
    }
    else {
      done(null, frag);
    }

  }))
  .pipe(fs.createWriteStream(outputFile));
