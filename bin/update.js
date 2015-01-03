'use strict';

var fs = require('fs');
var join = require('path').join;

var config = require('../package.json').config;
var github = require('octonode').client();
var repos = require('../lib/repos')(github);

var debug = console.error.bind(console);

repos.list(config.orgs)
  .then(writeTo('repos-all.json'))
  .then(repos.filter.bind(repos, config.orgs))
  .then(writeTo('repos.json'))
  .catch(debug);

function writeTo(filename){
  return function(data){
    fs.writeFile(join(__dirname, '..', 'data', filename), JSON.stringify(data, null, 2));

    return data;
  };
}