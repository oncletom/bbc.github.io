'use strict';

var github = require('octonode').client();
var repos = require('../lib/repos')(github);

var debug = console.error.bind(console);

repos
  .organisations()
  .then(repos.list)
  .catch(debug);