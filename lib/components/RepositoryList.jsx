'use strict';

var React = require('react');
var Repo = require('./Repository.jsx');

module.exports = React.createClass({
  render: function(){
    var repos = this.props.repos.map(function(repo) {
      return (<Repo data={repo} key={'ghid-' + repo.id} />);
    });

    return (<div className="repositories-list">{repos}</div>);
  }
});