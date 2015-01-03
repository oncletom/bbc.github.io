'use strict';

var Promise = require('es6-promise').Promise;
var linkParse = require('parse-link-header');

function excludeRepos(orgsConfig){
  var config = {};

  Object.keys(orgsConfig).forEach(function(org){
    var orgConfig = orgsConfig[org];

    if (typeof orgConfig === 'boolean') {
      orgConfig = {
        exclude: []
      };
    }

    orgConfig.exclude.push('.github.io$');

    config[org] = orgConfig;
  });

  return function arrayFilterFn(repo){
    var orgConfig = config[repo.owner.login];

    return !orgConfig.exclude.some(function(re){
      return (new RegExp(re, 'i')).test(repo.name);
    });
  };
}

module.exports = function(client){
  return {
    /**
     * Lookups for GitHub organisation which are possibly 'BBC' related.
     *
     * @returns {Promise}
     */
    organisations: function getOrganisations(){
      return new Promise(function(resolve, reject){
        var query = 'bbc in:fullname type:org';

        client.search().users({ q: query, per_page: 100 }, function(err, response){
          if (err){
            return reject(err);
          }

          resolve(response.items);
        });
      });
    },

    /**
     * Returns a complete list of organisations related GitHub repositories
     *
     * @param {Object} organisations An object of organisation configuration
     * @returns {Promise}
     */
    list: function getRepositoriesList(orgsConfig){
      var items = [];
      var page = 1;

      var search = function(query, resolve, reject){
        client.search().repos(query, function(err, response, h){
          if (err){
            return reject(err);
          }

          items = items.concat(response.items);

          var links = linkParse(h.link);

          if (!links.next){
            resolve(items);
          }
          else {
            query.page = links.next.page;

            search(query, resolve, reject);
          }
        });
      };

      return new Promise(function(resolve, reject){
        var organisations = Object.keys(orgsConfig);

        var query = ['fork:true', 'size:>60'].concat(organisations.map(function(org){
          return 'user:' + org;
        }));

        search({ q: query.join('+'), page: page, per_page: 100 }, resolve, reject);
      });
    },

    /**
     * Filter out unwanted repositories and output a lighter data structure
     *
     * @param {Array.<Object>} repos
     */
    filter: function(orgsConfig, repos){
      return repos.filter(excludeRepos(orgsConfig))
        .map(function(repo){
          return {
            "id": repo.id,
            "description": repo.description,
            "language": repo.language,
            "name": repo.name,
            "full_name": repo.full_name,
            // metadata
            "homepage": repo.homepage,
            "html_url": repo.html_url,
            "fork": repo.fork,
            // stats
            "forks_count": repo.forks_count,
            "stargazers_count": repo.stargazers_count
          };
        });
    }
  };
};