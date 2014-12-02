/** @jsx React.DOM */

var React = require('react');
var Language = require('./Language.jsx');
var cx = require('react-classset');

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
            <input type="search" ref="search" onChange={this.executeSearch} autofocus placeholder="TV, responsive, linked data …" />
            <button type="button" onClick={this.executeSearch}>Search</button>
          </li>
        </ul>
      </nav>
    );
  },

  componentWillUpdate: function(nextProps, nextState){
    if (this.state === nextState){
      return false;
    }

    this.notifyUpdate({
      search: nextState.search,
      languages: nextState.languagesWhitelist
    });
  },

  notifyUpdate: function(filters){
    this.props.onUpdate(function(repos){
      return repos.filter(function(repo){
        if (filters.languages.length && filters.languages.indexOf(repo.language) === -1) {
          return false;
        }

        if (filters.search){
          var re = new RegExp(filters.search.split(' ').join('.+'), 'i');

          if (!(repo.name + ' ' + repo.description).match(re)){
            return false;
          }
        }

        return true;
      });
    });
  },

  executeSearch: function(){
    var node = this.refs.search.getDOMNode();

    this.setState({ search: node.value.trim() });
  },

  toggleLang: function(lang){
    var activeLangs = this.state.languagesWhitelist;

    if (this.isLangActive(lang)) {
      activeLangs = activeLangs.filter(function(l){
        return l !== lang;
      });
    }
    else {
      activeLangs.push(lang);
    }

    this.setState({ languagesWhitelist: activeLangs });
  },

  isLangActive: function(lang){
    return this.state.languagesWhitelist.indexOf(lang) !== -1;
  },

  printLanguagesButtons: function(){
    var languages = this.getLanguagesFromList(this.props.repos);

    return languages.map(function(lang){
      var classNames = cx({
        'selected': this.isLangActive(lang)
      });

      return (<button onClick={this.toggleLang.bind(this, lang)} className={classNames}>
        <Language id={lang} />
      </button>)
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