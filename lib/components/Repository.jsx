/** @jsx React.DOM */

var React = require('react');
var Language = require('./Language.jsx');

require('./Repository.less');

var Repo = React.createClass({
  render: function(){
    var repo = this.props.data;

    return (
      <article className="repository">
        <h2>{repo.name}</h2>

        <p>{repo.description}</p>

        <ul className="repository__metadata">
          <li><Language id={repo.language} /></li>
          <li><strong>Forks</strong>: {repo.forks_count}</li>
          <li><strong>Stargazers</strong>: {repo.stargazers_count}</li>
          <li><a href={repo.html_url}>{repo.full_name}</a></li>
        </ul>
      </article>
    );
  }
});

module.exports = Repo;