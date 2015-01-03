'use strict';

var rewire = require('rewire');
var expect = require('chai').expect;
var repos = rewire('../../lib/repos.js');

describe('lib/repos.js', function(){
  describe('excludeRepos()', function(){
    var excludeRepos = repos.__get__('excludeRepos');
    var fn = excludeRepos({
      foo: true,
      bar: {
        exclude: [
          "^newsspec"
        ]
      }
    });

    it('should include any matching org repo', function(){
      var repo = {
        "name": "hello-world",
        "owner": {
          "login": "foo"
        }
      };

      expect(fn(repo)).to.equal(true);
    });

    it('should exclude github.io repos by default', function(){
      var repos = [{
        "name": "foo.github.io",
        "owner": {
          "login": "foo"
        }
      },
      {
        "name": "bar.github.io",
        "owner": {
          "login": "bar"
        }
      }];

      expect(repos.filter(fn)).to.be.empty;
    });

    it('should exclude repos matching regexp-based rules', function(){
      var repo = {
        "name": "NEWSSPEC-1234",
        "owner": {
          "login": "bar"
        }
      };

      expect(fn(repo)).to.equal(false);
    });
  });
});