'use strict';

var Promise = require('es6-promise').Promise;
var config = require('../package.json').config;

module.exports = function(client){
  return {
    organisations: function getOrganisations(){
      return new Promise(function(resolve, reject){
        var query = 'bbc in:fullname type:org';

        client.search().users({ q: query }, function(err, response){
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
      console.log('ok');
      return new Promise(function(resolve, reject){
        var query = ['fork:false', 'size:>5'].concat(organisations.map(function(org){
          return 'user:' + org.login;
        }));

        client.search().repos({ q: query.join('+') }, function(err, response){
          if (err){
            return reject(err);
          }

          resolve(response.items);
        });
      });
    }
  };
};