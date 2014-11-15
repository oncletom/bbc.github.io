'use strict';

require('./lib/ui/app.less');

var React = require('react');

var repos = require('./data/repos.json');
var RepositoryList = require('./lib/components/RepositoryList.jsx');

module.exports = RepositoryList;

if (typeof window !== 'undefined') {

  React.render(
    React.createElement(RepositoryList, { repos: repos }),
    document.querySelector('main')
  );
}

