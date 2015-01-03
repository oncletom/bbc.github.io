/** @jsx React.DOM */

var React = require('react');
var Language = require('./Language.jsx');

var Repo = React.createClass({
  render: function(){
    var repo = this.props.data;
    return (<article className="repository">
      <h2>{repo.name}</h2>

      <p>{repo.description}</p>

      <ul className="repository__metadata">
        <li><Language id={repo.language} /></li>
        <li><span className="metadata">{repo.stargazers_count}★</span></li>
        <li><a href={repo.html_url} className="metadata">{repo.full_name}</a></li>
        <li>{this.renderHomepageLink()}</li>
      </ul>
    </article>);
  },

  renderHomepageLink: function(){
    if (!this.props.data.homepage){
      return null;
    }

    return (<a href={this.props.data.homepage} className="metadata">website</a>);
  }
});

module.exports = Repo;