'use strict';

var React = require('react');
var repos = require('./data/repos.json');

var RepoFilters = require('./lib/components/RepoFilters.jsx');
var RepositoryList = require('./lib/components/RepositoryList.jsx');

var App = React.createClass({
  propTypes: {
    repos: React.PropTypes.array
  },

  getDefaultProps: function(){
    return { repos: repos };
  },

  getInitialState: function(){
    return { filteredRepos: [] };
  },

  render: function(){
    return (<div>
      <header>
        <h1>BBC Open Source</h1>

        <p>Proudly sharing {this.props.repos.length} Open Source initiatives.</p>

        <RepoFilters repos={this.props.repos} onUpdate={this.handleFilters} />
      </header>
      <main>
        <RepositoryList repos={this.getRepositories()} />
      </main>
    </div>);
  },

  getRepositories: function(){
    return this.state.filteredRepos.length
      ? this.state.filteredRepos
      : this.props.repos;
  },

  handleFilters: function(filterFn){
    this.setState({
      filteredRepos: filterFn(this.props.repos)
    })
  }
});

module.exports = App;

if (typeof window !== 'undefined') {

  React.render(
    React.createElement(App),
    document.querySelector('div#app__container')
  );
}

