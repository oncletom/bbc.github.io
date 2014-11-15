'use strict';

var Promise = require('es6-promise').Promise;
var config = require('../package.json').config;
var linkParse = require('parse-link-header');

module.exports = function(client){
  return {
    organisations: function getOrganisations(){
      return new Promise(function(resolve, reject){
        var query = 'bbc in:fullname type:org';

        client.search().users({ q: query, per_page: 100 }, function(err, response){
          if (err){
            return reject(err);
          }

          resolve(response.items.filter(function(item){
            return config.orgs.whitelist.indexOf(item.login) !== -1;
          }));
        });
      });
    },

    list: function getRepositoriesList(organisations){
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
        var query = ['fork:false', 'size:>60'].concat(organisations.map(function(org){
          return 'user:' + org.login;
        }));

        search({ q: query.join('+'), page: page, per_page: 100 }, resolve, reject);
      });
    }
  };
};