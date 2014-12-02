/** @jsx React.DOM */

var React = require('react');
var Language = require('./Language.jsx');

module.exports  = React.createClass({
  propTypes: {
    repos: React.PropTypes.array.isRequired,
    onUpdate: React.PropTypes.func.isRequired
  },

  getInitialState: function(){
    return {
      search: '',
      languagesWhitelist: []
    };
  },

  render: function(){
    return (
      <nav>
        <ul>
          <li>{this.printLanguagesButtons()}</li>
          <li>
            <input type="search" ref="search" autofocus placeholder="TV, responsive, linked data …" />
            <button type="button">Search</button>
          </li>
        </ul>
      </nav>
    );
  },

  printLanguagesButtons: function(){
    var languages = this.getLanguagesFromList(this.props.repos);

    return languages.map(function(lang){
      return (<button><Language id={lang} /></button>)
    }, this);
  },

  getLanguagesFromList: function(repos){
    var languages = [];

    repos.forEach(function(repo){
      if (repo.language && languages.indexOf(repo.language) === -1) {
        languages.push(repo.language);
      }
    });

    return languages.sort();
  }
});