(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var React=require("react"),repos=require("./data/repos.json"),RepoFilters=require("./lib/components/RepoFilters.jsx"),RepositoryList=require("./lib/components/RepositoryList.jsx"),App=React.createClass({displayName:"App",propTypes:{repos:React.PropTypes.array},getDefaultProps:function(){return{repos:repos}},getInitialState:function(){return{filteredRepos:[]}},render:function(){return React.createElement("div",null,React.createElement("header",null,React.createElement("h1",null,"BBC Open Source"),React.createElement("p",null,"Proudly sharing ",this.props.repos.length," Open Source initiatives we ",React.createElement("em",null,"make")," and ",React.createElement("em",null,"contribute")," to."),React.createElement(RepoFilters,{repos:this.props.repos,onUpdate:this.handleFilters})),React.createElement("main",null,React.createElement(RepositoryList,{repos:this.getRepositories()})))},getRepositories:function(){return this.state.filteredRepos.length?this.state.filteredRepos:this.props.repos},handleFilters:function(e){this.setState({filteredRepos:e(this.props.repos)})}});module.exports=App,"undefined"!=typeof window&&React.render(React.createElement(App),document.querySelector("div#app__container"));
},{"./data/repos.json":2,"./lib/components/RepoFilters.jsx":4,"./lib/components/RepositoryList.jsx":6,"react":150}],2:[function(require,module,exports){
module.exports=[
  {
    "id": 11944782,
    "description": "Responsive images while we wait for srcset to finish cooking",
    "language": "JavaScript",
    "name": "Imager.js",
    "full_name": "BBC-News/Imager.js",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/Imager.js",
    "fork": false,
    "forks_count": 176,
    "stargazers_count": 3323
  },
  {
    "id": 7777332,
    "description": "Wraith — A responsive screenshot comparison tool",
    "language": "Ruby",
    "name": "wraith",
    "full_name": "BBC-News/wraith",
    "homepage": "http://bbc-news.github.io/wraith/index.html",
    "html_url": "https://github.com/BBC-News/wraith",
    "fork": false,
    "forks_count": 135,
    "stargazers_count": 2660
  },
  {
    "id": 7134260,
    "description": "TV Application Layer",
    "language": "JavaScript",
    "name": "tal",
    "full_name": "fmtvp/tal",
    "homepage": "http://fmtvp.github.com/tal",
    "html_url": "https://github.com/fmtvp/tal",
    "fork": false,
    "forks_count": 81,
    "stargazers_count": 245
  },
  {
    "id": 22220349,
    "description": "Monitor datasets, gets alerts when something happens",
    "language": "JavaScript",
    "name": "datastringer",
    "full_name": "BBC-News-Labs/datastringer",
    "homepage": "http://bbc-news-labs.github.io/datastringer/",
    "html_url": "https://github.com/BBC-News-Labs/datastringer",
    "fork": false,
    "forks_count": 21,
    "stargazers_count": 173
  },
  {
    "id": 13561166,
    "description": "JavaScript UI component for interacting with waveforms.",
    "language": "JavaScript",
    "name": "peaks.js",
    "full_name": "bbcrd/peaks.js",
    "homepage": "http://waveform.prototyping.bbc.co.uk",
    "html_url": "https://github.com/bbcrd/peaks.js",
    "fork": false,
    "forks_count": 20,
    "stargazers_count": 139
  },
  {
    "id": 16726550,
    "description": "In-browser responsive viewport",
    "language": "CSS",
    "name": "viewporter",
    "full_name": "bbc-sport/viewporter",
    "homepage": null,
    "html_url": "https://github.com/bbc-sport/viewporter",
    "fork": false,
    "forks_count": 7,
    "stargazers_count": 117
  },
  {
    "id": 1406441,
    "description": "Simple REST API example in Sinatra",
    "language": "Ruby",
    "name": "REST-API-example",
    "full_name": "bbcrd/REST-API-example",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/REST-API-example",
    "fork": false,
    "forks_count": 24,
    "stargazers_count": 106
  },
  {
    "id": 13561710,
    "description": "Audio Waveform Data Manipulation API – resample, offset and segment waveform data in JavaScript.",
    "language": "JavaScript",
    "name": "waveform-data.js",
    "full_name": "bbcrd/waveform-data.js",
    "homepage": "http://waveform.prototyping.bbc.co.uk",
    "html_url": "https://github.com/bbcrd/waveform-data.js",
    "fork": false,
    "forks_count": 12,
    "stargazers_count": 87
  },
  {
    "id": 13561076,
    "description": "C++ program to generate waveform data and render waveform images from audio files",
    "language": "C++",
    "name": "audiowaveform",
    "full_name": "bbcrd/audiowaveform",
    "homepage": "http://waveform.prototyping.bbc.co.uk",
    "html_url": "https://github.com/bbcrd/audiowaveform",
    "fork": false,
    "forks_count": 17,
    "stargazers_count": 86
  },
  {
    "id": 945627,
    "description": "Twitter Zeitgeist",
    "language": "Ruby",
    "name": "zeitgeist",
    "full_name": "bbcrd/zeitgeist",
    "homepage": "http://zeitgeist.prototyping.bbc.co.uk/",
    "html_url": "https://github.com/bbcrd/zeitgeist",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 61
  },
  {
    "id": 2053330,
    "description": "Calculate similarity between documents using TF-IDF weights",
    "language": "Ruby",
    "name": "Similarity",
    "full_name": "bbcrd/Similarity",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/Similarity",
    "fork": false,
    "forks_count": 19,
    "stargazers_count": 57
  },
  {
    "id": 4957973,
    "description": "Cucumber feature viewer and navigator",
    "language": "Ruby",
    "name": "wally",
    "full_name": "BBC-News/wally",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/wally",
    "fork": false,
    "forks_count": 10,
    "stargazers_count": 46
  },
  {
    "id": 12137906,
    "description": "RDFSpace constructs a vector space from any RDF dataset which can be used for computing similarities between resources in that dataset.",
    "language": "Python",
    "name": "rdfspace",
    "full_name": "bbcrd/rdfspace",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/rdfspace",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 29
  },
  {
    "id": 2155816,
    "description": "Distributed web testing tool",
    "language": "JavaScript",
    "name": "spassky",
    "full_name": "BBC/spassky",
    "homepage": "https://github.com/BBC/spassky",
    "html_url": "https://github.com/BBC/spassky",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 26
  },
  {
    "id": 8136796,
    "description": "A collection of audio feature extraction algorithms written in the Vamp plugin format.",
    "language": "C++",
    "name": "bbc-vamp-plugins",
    "full_name": "bbcrd/bbc-vamp-plugins",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/bbc-vamp-plugins",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 25
  },
  {
    "id": 1105603,
    "description": "A simple demo of Publish/Subscribe in the browser using Strophe.js",
    "language": "JavaScript",
    "name": "Strophejs-PubSub-Demo",
    "full_name": "bbcrd/Strophejs-PubSub-Demo",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/Strophejs-PubSub-Demo",
    "fork": false,
    "forks_count": 11,
    "stargazers_count": 24
  },
  {
    "id": 9620534,
    "description": "A client-side recommender system implemented in Javascript.",
    "language": "Java",
    "name": "clientside-recommender",
    "full_name": "bbcrd/clientside-recommender",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/clientside-recommender",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 19
  },
  {
    "id": 1550606,
    "description": "A full implementation of Universal Control 0.6.0 for use on a computer running Mythbuntu with a slightly modified version of MythTV (patches and configure script included).",
    "language": "Python",
    "name": "UCMythTV",
    "full_name": "bbcrd/UCMythTV",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/UCMythTV",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 19
  },
  {
    "id": 7168687,
    "description": "Locality Sensitive Hashing in Ruby",
    "language": "Ruby",
    "name": "ruby-lsh",
    "full_name": "bbcrd/ruby-lsh",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/ruby-lsh",
    "fork": false,
    "forks_count": 6,
    "stargazers_count": 18
  },
  {
    "id": 19575894,
    "description": "An implementation of Bayesian Personalised Ranking in Theano",
    "language": "Python",
    "name": "theano-bpr",
    "full_name": "bbcrd/theano-bpr",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/theano-bpr",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 16
  },
  {
    "id": 13561115,
    "description": "Ruby gem that provides access to audio waveform data files generated by audiowaveform",
    "language": "Ruby",
    "name": "audio_waveform-ruby",
    "full_name": "bbcrd/audio_waveform-ruby",
    "homepage": "http://waveform.prototyping.bbc.co.uk",
    "html_url": "https://github.com/bbcrd/audio_waveform-ruby",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 16
  },
  {
    "id": 16189090,
    "description": "Ask @ResponsiveNews anything!",
    "language": null,
    "name": "feedback",
    "full_name": "BBC-News/feedback",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/feedback",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 14
  },
  {
    "id": 2849846,
    "description": "Large RDF hierarchies as vector spaces",
    "language": "Python",
    "name": "rdfsim",
    "full_name": "bbcrd/rdfsim",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/rdfsim",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 14
  },
  {
    "id": 20927859,
    "description": "HTML5 media sequenced playback API: play one or multiple sequences of a same audio or video with plain JavaScript.",
    "language": "JavaScript",
    "name": "media-sequence",
    "full_name": "bbcrd/media-sequence",
    "homepage": "https://npmjs.org/package/media-sequence",
    "html_url": "https://github.com/bbcrd/media-sequence",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 13
  },
  {
    "id": 2280139,
    "description": "A Sinatra application that will generate QRCodes for a BBC url with a BBC logo embedded in it.",
    "language": "Ruby",
    "name": "BBC-QRCode-Generator",
    "full_name": "bbcrd/BBC-QRCode-Generator",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/BBC-QRCode-Generator",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 11
  },
  {
    "id": 10692692,
    "description": "A simple toolkit for speaker segmentation and identification",
    "language": "Ruby",
    "name": "diarize-jruby",
    "full_name": "bbcrd/diarize-jruby",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/diarize-jruby",
    "fork": false,
    "forks_count": 4,
    "stargazers_count": 11
  },
  {
    "id": 4356640,
    "description": "Evaluation dataset and script for automated DBpedia tagging of speech audio",
    "language": "Python",
    "name": "automated-audio-tagging-evaluation",
    "full_name": "bbcrd/automated-audio-tagging-evaluation",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/automated-audio-tagging-evaluation",
    "fork": false,
    "forks_count": 7,
    "stargazers_count": 10
  },
  {
    "id": 21975501,
    "description": "A language agnostic BDD framework.",
    "language": "JavaScript",
    "name": "ShouldIT",
    "full_name": "bbc-sport/ShouldIT",
    "homepage": "http://bbc-sport.github.io/ShouldIT/",
    "html_url": "https://github.com/bbc-sport/ShouldIT",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 9
  },
  {
    "id": 242407,
    "description": "RadioDNS and RadioVIS Visualisation Protocol Demo",
    "language": "Python",
    "name": "RadioVisDemo",
    "full_name": "bbcrd/RadioVisDemo",
    "homepage": "http://www.bbc.co.uk/rd/projects/radiovis",
    "html_url": "https://github.com/bbcrd/RadioVisDemo",
    "fork": false,
    "forks_count": 7,
    "stargazers_count": 9
  },
  {
    "id": 11616707,
    "description": "BBC Curriculum Instance Data",
    "language": null,
    "name": "curriculum-data",
    "full_name": "BBC-Knowlearn/curriculum-data",
    "homepage": "http://www.bbc.co.uk/education",
    "html_url": "https://github.com/BBC-Knowlearn/curriculum-data",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 9
  },
  {
    "id": 2561383,
    "description": "Ruby client for BBC Redux",
    "language": "Ruby",
    "name": "redux-client-ruby",
    "full_name": "bbcsnippets/redux-client-ruby",
    "homepage": "",
    "html_url": "https://github.com/bbcsnippets/redux-client-ruby",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 8
  },
  {
    "id": 16315067,
    "description": "Find the offset of an audio file within another audio file",
    "language": "Python",
    "name": "audio-offset-finder",
    "full_name": "bbcrd/audio-offset-finder",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/audio-offset-finder",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 8
  },
  {
    "id": 24228029,
    "description": "Gatling load tests",
    "language": "Scala",
    "name": "gatling-load-tests",
    "full_name": "BBC/gatling-load-tests",
    "homepage": null,
    "html_url": "https://github.com/BBC/gatling-load-tests",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 8
  },
  {
    "id": 16798664,
    "description": "Analysis and background research on discovery and pairing for the MediaScape project",
    "language": null,
    "name": "device-discovery-pairing",
    "full_name": "bbcrd/device-discovery-pairing",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/device-discovery-pairing",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 7
  },
  {
    "id": 7959635,
    "description": "Simple TV schedule API",
    "language": "JavaScript",
    "name": "rd-broadcast-bookmarks",
    "full_name": "bbcrd/rd-broadcast-bookmarks",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/rd-broadcast-bookmarks",
    "fork": false,
    "forks_count": 4,
    "stargazers_count": 6
  },
  {
    "id": 20559153,
    "description": "Location Services Core Javascript Modules",
    "language": "JavaScript",
    "name": "locservices-core-js",
    "full_name": "BBC-Location-Services/locservices-core-js",
    "homepage": "",
    "html_url": "https://github.com/BBC-Location-Services/locservices-core-js",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 6
  },
  {
    "id": 7525659,
    "description": "The CoffeeScript source code for our Radiophonics Workshop Web Audio demos (http://webaudio.prototyping.bbc.co.uk)",
    "language": "CoffeeScript",
    "name": "radiophonics",
    "full_name": "bbcrd/radiophonics",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/radiophonics",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 6
  },
  {
    "id": 2149103,
    "description": "A Ruby Gem that tries to resolves urls to the canonical version",
    "language": "Ruby",
    "name": "Linkr",
    "full_name": "bbcrd/Linkr",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/Linkr",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 5
  },
  {
    "id": 24778648,
    "description": "Raspberry Pi based catflap-triggered camera. As seen on TV.",
    "language": "Python",
    "name": "catflap-camera",
    "full_name": "bbcrd/catflap-camera",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/catflap-camera",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 5
  },
  {
    "id": 16765957,
    "description": "Creating an md5 hash of a number, string, array, or hash in Ruby",
    "language": "Ruby",
    "name": "crimp",
    "full_name": "BBC-News/crimp",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/crimp",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 5
  },
  {
    "id": 20891880,
    "description": "JavaScript time series spike detection for Node.js; like the Octave findpeaks function.",
    "language": "JavaScript",
    "name": "slayer",
    "full_name": "bbcrd/slayer",
    "homepage": "https://www.npmjs.org/package/slayer",
    "html_url": "https://github.com/bbcrd/slayer",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 5
  },
  {
    "id": 7799647,
    "description": "Generates HAR files automatically based on a schedule",
    "language": "Ruby",
    "name": "harhar",
    "full_name": "BBC-News/harhar",
    "homepage": "http://responsivenews.co.uk",
    "html_url": "https://github.com/BBC-News/harhar",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 5
  },
  {
    "id": 19583175,
    "description": "The newsQuery NPM package provides a simple interface to BBC News Labs APIs",
    "language": "JavaScript",
    "name": "newsQuery",
    "full_name": "BBC-News-Labs/newsQuery",
    "homepage": null,
    "html_url": "https://github.com/BBC-News-Labs/newsQuery",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 5
  },
  {
    "id": 16916717,
    "description": "Lancaster Vision TAL Application.",
    "language": "JavaScript",
    "name": "tal-vision",
    "full_name": "bbcrd/tal-vision",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/tal-vision",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 4
  },
  {
    "id": 1421814,
    "description": "A browser-based AudioSync client. It can tell you what radio station you're tuned to just by listening to it.",
    "language": "JavaScript",
    "name": "AudioSyncClientDemo",
    "full_name": "bbcrd/AudioSyncClientDemo",
    "homepage": "http://audiosync.prototype0.net",
    "html_url": "https://github.com/bbcrd/AudioSyncClientDemo",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 4
  },
  {
    "id": 16202844,
    "description": "Changes the current .npmrc file in use.",
    "language": "JavaScript",
    "name": "npmrc-switcher",
    "full_name": "BBC-News/npmrc-switcher",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/npmrc-switcher",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 4
  },
  {
    "id": 2178909,
    "description": "A simple Ruby implementation of a Circular Buffer",
    "language": "Ruby",
    "name": "CBuffer",
    "full_name": "bbcrd/CBuffer",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/CBuffer",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 3
  },
  {
    "id": 6706418,
    "description": "A gem to explore SPARQL end-points easily",
    "language": "Ruby",
    "name": "easy-sparql",
    "full_name": "bbcrd/easy-sparql",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/easy-sparql",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 13592022,
    "description": "Node.js backend library and connect middleware to serve your TAL application quickly.",
    "language": "JavaScript",
    "name": "node-tal",
    "full_name": "bbcrd/node-tal",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/node-tal",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 15679697,
    "description": "Locator News Responsive Javascript Bower component",
    "language": "JavaScript",
    "name": "locator_news_responsive_js",
    "full_name": "BBC-Location-Services/locator_news_responsive_js",
    "homepage": null,
    "html_url": "https://github.com/BBC-Location-Services/locator_news_responsive_js",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 16732285,
    "description": "The Objective-C Style Guide used by The New York Times",
    "language": null,
    "name": "objective-c-style-guide",
    "full_name": "BBC-News/objective-c-style-guide",
    "homepage": "http://open.blogs.nytimes.com/2013/08/01/objectively-stylish/",
    "html_url": "https://github.com/BBC-News/objective-c-style-guide",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 15680862,
    "description": "The Alephant framework is a collection of isolated Ruby gems, which interconnect to offer powerful message passing functionality built up around the \"Broker\" pattern. ",
    "language": "Ruby",
    "name": "alephant",
    "full_name": "BBC-News/alephant",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/alephant",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 3
  },
  {
    "id": 16810125,
    "description": "Render HTML snippets inside Alephant",
    "language": "Ruby",
    "name": "alephant-renderer",
    "full_name": "BBC-News/alephant-renderer",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/alephant-renderer",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 2829500,
    "description": "A VAMP plugin for Speech/Music segmentation",
    "language": "C++",
    "name": "vamp-speechmusic-segmenter",
    "full_name": "bbcrd/vamp-speechmusic-segmenter",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/vamp-speechmusic-segmenter",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 4958984,
    "description": "a ajaxy front-end for exploring triple stores",
    "language": "JavaScript",
    "name": "SNORQL",
    "full_name": "bbcrd/SNORQL",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/SNORQL",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 4727849,
    "description": "A little parser for Wikipedia's 'In the News' content",
    "language": "Ruby",
    "name": "inthenews",
    "full_name": "bbcrd/inthenews",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/inthenews",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 3
  },
  {
    "id": 5017347,
    "description": "Evaluation script for CMU Sphinx3 on the BBC Reith Lectures",
    "language": "Shell",
    "name": "bbc-reith-lectures-sphinx-evaluation",
    "full_name": "bbcrd/bbc-reith-lectures-sphinx-evaluation",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/bbc-reith-lectures-sphinx-evaluation",
    "fork": false,
    "forks_count": 5,
    "stargazers_count": 3
  },
  {
    "id": 2392388,
    "description": "Ruby wrapper for the Viewtext API",
    "language": "Ruby",
    "name": "Viewtext",
    "full_name": "bbcrd/Viewtext",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/Viewtext",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 3
  },
  {
    "id": 14395108,
    "description": "Chef Cookbooks",
    "language": "Ruby",
    "name": "chef-cookbooks",
    "full_name": "BBC-News/chef-cookbooks",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/chef-cookbooks",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 3
  },
  {
    "id": 27134008,
    "description": "CURL-based URIHandler for GStreamer",
    "language": "C",
    "name": "gst-curlhttpsrc",
    "full_name": "BBC/gst-curlhttpsrc",
    "homepage": null,
    "html_url": "https://github.com/BBC/gst-curlhttpsrc",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 3
  },
  {
    "id": 2533577,
    "description": "HTTP Basic Authentication support for sunspot_rails",
    "language": "Ruby",
    "name": "sunspot-rails-http-basic-auth",
    "full_name": "bbcsnippets/sunspot-rails-http-basic-auth",
    "homepage": "",
    "html_url": "https://github.com/bbcsnippets/sunspot-rails-http-basic-auth",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 2
  },
  {
    "id": 21171826,
    "description": "Simple service discovery viewer",
    "language": "JavaScript",
    "name": "service-disco",
    "full_name": "bbcrd/service-disco",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/service-disco",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 2
  },
  {
    "id": 2620229,
    "description": "A basic HTML5 Slideshow template for BBC / FutureMedia / R&D",
    "language": "JavaScript",
    "name": "BBC-HTML5-Slideshow",
    "full_name": "bbcrd/BBC-HTML5-Slideshow",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/BBC-HTML5-Slideshow",
    "fork": true,
    "forks_count": 2,
    "stargazers_count": 2
  },
  {
    "id": 5659107,
    "description": "A little parser for Wikipedia's \"On This Day\" block",
    "language": "Ruby",
    "name": "onthisday",
    "full_name": "bbcrd/onthisday",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/onthisday",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 2
  },
  {
    "id": 9835004,
    "description": "Provides a visualisation of TV and radio stream viewing patterns",
    "language": "JavaScript",
    "name": "vistatv_live_dashboard",
    "full_name": "bbcrd/vistatv_live_dashboard",
    "homepage": "http://www.bbc.co.uk/rd/projects/vista-tv",
    "html_url": "https://github.com/bbcrd/vistatv_live_dashboard",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 2
  },
  {
    "id": 13644375,
    "description": "Group project for BBC #newsHACK 17/10/2013",
    "language": "JavaScript",
    "name": "newsHACK",
    "full_name": "bbcrd/newsHACK",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/newsHACK",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 2
  },
  {
    "id": 18592947,
    "description": "Python modules for handling Broadcast Wave Format files.",
    "language": "Python",
    "name": "wave_bwf",
    "full_name": "bbcrd/wave_bwf",
    "homepage": "http://www.bbc.co.uk/rd/publications/saqas",
    "html_url": "https://github.com/bbcrd/wave_bwf",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 2
  },
  {
    "id": 19106806,
    "description": "Packages graylog2-web-interface for the BBC Cloud Platform",
    "language": null,
    "name": "graylog2-web",
    "full_name": "BBC-News/graylog2-web",
    "homepage": "http://m.bbc.co.uk/news",
    "html_url": "https://github.com/BBC-News/graylog2-web",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 2
  },
  {
    "id": 14021661,
    "description": "Runs template engine at grunt's compile time.",
    "language": "JavaScript",
    "name": "grunt-multi-lang-site-generator",
    "full_name": "BBCVisualJournalism/grunt-multi-lang-site-generator",
    "homepage": null,
    "html_url": "https://github.com/BBCVisualJournalism/grunt-multi-lang-site-generator",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 2
  },
  {
    "id": 16804646,
    "description": "Simple abstraction layer over S3 for get/put.",
    "language": "Ruby",
    "name": "alephant-cache",
    "full_name": "BBC-News/alephant-cache",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/alephant-cache",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 2
  },
  {
    "id": 2249603,
    "description": "A solr plugin that displays the term frequencies for search terms",
    "language": "Java",
    "name": "solr-num-mentions",
    "full_name": "bbcsnippets/solr-num-mentions",
    "homepage": "",
    "html_url": "https://github.com/bbcsnippets/solr-num-mentions",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 5999488,
    "description": "SPARQL client for Ruby.",
    "language": "Ruby",
    "name": "sparql-client",
    "full_name": "bbcrd/sparql-client",
    "homepage": "http://rubygems.org/gems/sparql-client",
    "html_url": "https://github.com/bbcrd/sparql-client",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 11338428,
    "description": "Assertion library for BBC Media Player media events",
    "language": "Ruby",
    "name": "media-player-media-events",
    "full_name": "BBC/media-player-media-events",
    "homepage": null,
    "html_url": "https://github.com/BBC/media-player-media-events",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 16108608,
    "description": "Responsive data visualisation code template for designers",
    "language": "CSS",
    "name": "dataPicsTemplates",
    "full_name": "BBCVisualJournalism/dataPicsTemplates",
    "homepage": null,
    "html_url": "https://github.com/BBCVisualJournalism/dataPicsTemplates",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 23067484,
    "description": "The official iOS SDK for the HockeyApp service (Releases are in the master branch, current development in the default develop branch)",
    "language": null,
    "name": "HockeySDK-iOS",
    "full_name": "BBC-News/HockeySDK-iOS",
    "homepage": "http://hockeyapp.net/releases",
    "html_url": "https://github.com/BBC-News/HockeySDK-iOS",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 21975516,
    "description": "Simple examples to help you get going with ShouldIT?",
    "language": "JavaScript",
    "name": "ShouldIT-Examples",
    "full_name": "bbc-sport/ShouldIT-Examples",
    "homepage": "",
    "html_url": "https://github.com/bbc-sport/ShouldIT-Examples",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 20128005,
    "description": "Simple status check web server.",
    "language": "Ruby",
    "name": "quietus",
    "full_name": "BBC-News/quietus",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/quietus",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 19242310,
    "description": "A BBC / Google Maps util bower component",
    "language": "JavaScript",
    "name": "bbc-google-maps-util",
    "full_name": "BBC-Location-Services/bbc-google-maps-util",
    "homepage": null,
    "html_url": "https://github.com/BBC-Location-Services/bbc-google-maps-util",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 17865465,
    "description": "A Linked Open Data workflow engine",
    "language": "C",
    "name": "twine",
    "full_name": "bbcarchdev/twine",
    "homepage": "http://bbcarchdev.github.io/twine/",
    "html_url": "https://github.com/bbcarchdev/twine",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 23705940,
    "description": "Checks if URL is valid.",
    "language": "Ruby",
    "name": "alephant-scout",
    "full_name": "BBC-News/alephant-scout",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/alephant-scout",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 25054613,
    "description": "Docker Containers for the Forge Sandbox",
    "language": null,
    "name": "docker-pal",
    "full_name": "BBC-News/docker-pal",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/docker-pal",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 20328854,
    "description": "BBC News Labs experiments with Google Glass",
    "language": "Java",
    "name": "newslabs-glass",
    "full_name": "BBC-News-Labs/newslabs-glass",
    "homepage": "",
    "html_url": "https://github.com/BBC-News-Labs/newslabs-glass",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 18874640,
    "description": "A guide to the Research & Education Space for contributors and developers",
    "language": "CSS",
    "name": "inside-acropolis",
    "full_name": "bbcarchdev/inside-acropolis",
    "homepage": "https://bbcarchdev.github.io/inside-acropolis/",
    "html_url": "https://github.com/bbcarchdev/inside-acropolis",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 19343871,
    "description": "#newsHACK",
    "language": "JavaScript",
    "name": "newsmap",
    "full_name": "BBC-News-Labs/newsmap",
    "homepage": null,
    "html_url": "https://github.com/BBC-News-Labs/newsmap",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 23067585,
    "description": "RPM for PHP Composer",
    "language": null,
    "name": "php-composer-rpm",
    "full_name": "BBC/php-composer-rpm",
    "homepage": null,
    "html_url": "https://github.com/BBC/php-composer-rpm",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 21029750,
    "description": "Supporting classes for running the alephant framework locally",
    "language": "Ruby",
    "name": "alephant-harness",
    "full_name": "BBC-News/alephant-harness",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/alephant-harness",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 1
  },
  {
    "id": 3707161,
    "description": "Patches to implement startOffsetTime attribute for HTML5 video using WebM",
    "language": null,
    "name": "HTML5-MediaElement-startOffsetTime",
    "full_name": "bbcrd/HTML5-MediaElement-startOffsetTime",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/HTML5-MediaElement-startOffsetTime",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 1
  },
  {
    "id": 2550100,
    "description": "A Ruby client for Apache Solr",
    "language": "Ruby",
    "name": "rsolr",
    "full_name": "bbcsnippets/rsolr",
    "homepage": "",
    "html_url": "https://github.com/bbcsnippets/rsolr",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 2606913,
    "description": "Xml to Ruby hash",
    "language": "Ruby",
    "name": "xapper",
    "full_name": "bbcsnippets/xapper",
    "homepage": "",
    "html_url": "https://github.com/bbcsnippets/xapper",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 1581439,
    "description": "Solr Ruby",
    "language": "Ruby",
    "name": "solr-ruby",
    "full_name": "bbcrd/solr-ruby",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/solr-ruby",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 2291344,
    "description": "Scala client for BBC Redux",
    "language": "Scala",
    "name": "redux-client-scala",
    "full_name": "bbcsnippets/redux-client-scala",
    "homepage": "",
    "html_url": "https://github.com/bbcsnippets/redux-client-scala",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 5719111,
    "description": "This repo is an ebook about the locomotive cms that is currently in work. Feel free to Fork !!",
    "language": null,
    "name": "Locomotive-fundamentals",
    "full_name": "bbcrd/Locomotive-fundamentals",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/Locomotive-fundamentals",
    "fork": true,
    "forks_count": 2,
    "stargazers_count": 1
  },
  {
    "id": 13454488,
    "description": "Static site generation plugin for WordPress",
    "language": "PHP",
    "name": "static",
    "full_name": "bbcarchdev/static",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/static",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 17050273,
    "description": "Static publishing to S3 based on SQS messages",
    "language": "Ruby",
    "name": "alephant-publisher",
    "full_name": "BBC-News/alephant-publisher",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/alephant-publisher",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 16308971,
    "description": "Proxylocal",
    "language": "Erlang",
    "name": "proxylocal-server",
    "full_name": "BBC-News/proxylocal-server",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/proxylocal-server",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 17544099,
    "description": "Debian packaging: qpid broker and libraries",
    "language": "C++",
    "name": "qpid-cpp",
    "full_name": "bbcarchdev/qpid-cpp",
    "homepage": "http://qpid.apache.org",
    "html_url": "https://github.com/bbcarchdev/qpid-cpp",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 17543535,
    "description": "qpid-proton (http://qpid.apache.org/proton/) packaging for Debian-based systems",
    "language": "Java",
    "name": "qpid-proton",
    "full_name": "bbcarchdev/qpid-proton",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/qpid-proton",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 19106022,
    "description": "Packages graylog2-server for the BBC Cloud Platform",
    "language": null,
    "name": "graylog2-server",
    "full_name": "BBC-News/graylog2-server",
    "homepage": "http://m.bbc.co.uk/news",
    "html_url": "https://github.com/BBC-News/graylog2-server",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 24369142,
    "description": "Javascript audio visualization element based on tiled bitmap images",
    "language": "JavaScript",
    "name": "beatmap",
    "full_name": "bbcrd/beatmap",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/beatmap",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 24371974,
    "description": "A program and plugin framework for generating images from audio files, using Vamp audio analysis plugins",
    "language": "C++",
    "name": "vampeyer",
    "full_name": "bbcrd/vampeyer",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/vampeyer",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 25199188,
    "description": "A Ruby API client library for the Juicer API",
    "language": "Ruby",
    "name": "juicer-client",
    "full_name": "BBC-News-Labs/juicer-client",
    "homepage": null,
    "html_url": "https://github.com/BBC-News-Labs/juicer-client",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 2088809,
    "description": "Map between the multiplicity of BBC service identifiers for radio.",
    "language": "Ruby",
    "name": "bbc_service_map",
    "full_name": "bbcrd/bbc_service_map",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/bbc_service_map",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 1
  },
  {
    "id": 1859389,
    "description": "This Ruby Gem provides utilities for working with RadioDNS.",
    "language": "Ruby",
    "name": "radiodns-ruby",
    "full_name": "bbcrd/radiodns-ruby",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/radiodns-ruby",
    "fork": false,
    "forks_count": 4,
    "stargazers_count": 1
  },
  {
    "id": 4652154,
    "description": "Documentation on the RadioDNS RadioTAG specification",
    "language": null,
    "name": "radiotag-doc",
    "full_name": "bbcrd/radiotag-doc",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/radiotag-doc",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 1
  },
  {
    "id": 17027275,
    "description": "Supporting classes for the alephant framework",
    "language": "Ruby",
    "name": "alephant-support",
    "full_name": "BBC-News/alephant-support",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/alephant-support",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 16769772,
    "description": "Keep track of message sequence in SQS",
    "language": "Ruby",
    "name": "alephant-sequencer",
    "full_name": "BBC-News/alephant-sequencer",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/alephant-sequencer",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 16804000,
    "description": "Logger functionality for Alephant",
    "language": "Ruby",
    "name": "alephant-logger",
    "full_name": "BBC-News/alephant-logger",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/alephant-logger",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 25925589,
    "description": "Real stubs and spies for HTTP(S) services",
    "language": null,
    "name": "REST-assured",
    "full_name": "BBC/REST-assured",
    "homepage": "http://artemave.github.com/2012/05/27/stub-like-a-surgeon-spy-like-james-bond-with-rest-assured/",
    "html_url": "https://github.com/BBC/REST-assured",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 1
  },
  {
    "id": 16767440,
    "description": "Lookup a location in S3 using DynamoDB",
    "language": "Ruby",
    "name": "alephant-lookup",
    "full_name": "BBC-News/alephant-lookup",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/alephant-lookup",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 1
  },
  {
    "id": 15733103,
    "description": "JRuby RPM",
    "language": "Makefile",
    "name": "jruby-rpm",
    "full_name": "BBC-News/jruby-rpm",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/jruby-rpm",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 1
  },
  {
    "id": 5626979,
    "description": "a brand new CMS system with super sexy UI and cool features",
    "language": "Ruby",
    "name": "engine",
    "full_name": "bbcrd/engine",
    "homepage": "http://www.locomotivecms.com",
    "html_url": "https://github.com/bbcrd/engine",
    "fork": true,
    "forks_count": 2,
    "stargazers_count": 0
  },
  {
    "id": 7608083,
    "description": "A rich Ruby API and DSL for the ElasticSearch search engine",
    "language": "Ruby",
    "name": "tire",
    "full_name": "bbcrd/tire",
    "homepage": "http://karmi.github.com/tire/",
    "html_url": "https://github.com/bbcrd/tire",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 12456675,
    "description": "Ruby wrapped client API for Sikuli Server",
    "language": "Ruby",
    "name": "sikulirc",
    "full_name": "BBC/sikulirc",
    "homepage": "",
    "html_url": "https://github.com/BBC/sikulirc",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 11240338,
    "description": "X.509 Certificate-based authentication for WordPress",
    "language": "PHP",
    "name": "certauth",
    "full_name": "bbcarchdev/certauth",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/certauth",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 13592048,
    "description": "Device configuration package for the TAL backend components.",
    "language": "JavaScript",
    "name": "tal-config",
    "full_name": "bbcrd/tal-config",
    "homepage": "http://fmtvp.github.com/tal",
    "html_url": "https://github.com/bbcrd/tal-config",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 10079106,
    "description": "A companion to https://github.com/bbcrd/vistatv_live_dashboard to demonstrate its use.",
    "language": "Ruby",
    "name": "vistatv_random_stats_server",
    "full_name": "bbcrd/vistatv_random_stats_server",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/vistatv_random_stats_server",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 0
  },
  {
    "id": 16174744,
    "description": "A suite of scala libraries for building and consuming RESTful web services on top of Akka: lightweight, asynchronous, non-blocking, actor-based, testable",
    "language": "Scala",
    "name": "spray",
    "full_name": "BBC-Childrens/spray",
    "homepage": "http://spray.io",
    "html_url": "https://github.com/BBC-Childrens/spray",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 16117125,
    "description": "HTML fragments used to generate published web pages",
    "language": null,
    "name": "fragments",
    "full_name": "bbcarchdev/fragments",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/fragments",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 16117149,
    "description": "Tools used to generate published web pages",
    "language": "Perl",
    "name": "tools",
    "full_name": "bbcarchdev/tools",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/tools",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 15255600,
    "description": "Allows you to render XML documents with XSLT in Laravel",
    "language": "PHP",
    "name": "laravel-xslt-view",
    "full_name": "BBC-Knowlearn/laravel-xslt-view",
    "homepage": null,
    "html_url": "https://github.com/BBC-Knowlearn/laravel-xslt-view",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 17575328,
    "description": "Backported Debian packaging of raptor (http://librdf.org/raptor/)",
    "language": "C",
    "name": "deb-raptor2",
    "full_name": "bbcarchdev/deb-raptor2",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/deb-raptor2",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 17575427,
    "description": "Backported Debian packaging of Redland librdf (http://librdf.org)",
    "language": "C",
    "name": "deb-redland",
    "full_name": "bbcarchdev/deb-redland",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/deb-redland",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 17907727,
    "description": "SPARQL client library",
    "language": "C",
    "name": "libsparqlclient",
    "full_name": "bbcarchdev/libsparqlclient",
    "homepage": "http://bbcarchdev.github.io/libsparqlclient/",
    "html_url": "https://github.com/bbcarchdev/libsparqlclient",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 19535092,
    "description": "Experimenting using Git",
    "language": null,
    "name": "sps-experiment",
    "full_name": "myBBC/sps-experiment",
    "homepage": null,
    "html_url": "https://github.com/myBBC/sps-experiment",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 19568744,
    "description": "Test web page performance using the YSlow library invoked by a grunt task",
    "language": "JavaScript",
    "name": "grunt-yslow",
    "full_name": "BBC-Knowlearn/grunt-yslow",
    "homepage": null,
    "html_url": "https://github.com/BBC-Knowlearn/grunt-yslow",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 19694096,
    "description": "Python modules for generating BWF files with Audio Definition Model XML data.  http://www.bbc.co.uk/rd/publications/saqas",
    "language": "Python",
    "name": "gen_adm",
    "full_name": "bbcrd/gen_adm",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/gen_adm",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 18593493,
    "description": "Python modules for playing Broadcast Wave Format sound files that use the new Audio Definition Model extension, with the SoundScape Renderer.",
    "language": "Python",
    "name": "ssr_utils",
    "full_name": "bbcrd/ssr_utils",
    "homepage": "http://www.bbc.co.uk/rd/publications/saqas",
    "html_url": "https://github.com/bbcrd/ssr_utils",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 0
  },
  {
    "id": 20216539,
    "description": "A web Linked Open Data crawler",
    "language": "C",
    "name": "anansi",
    "full_name": "bbcarchdev/anansi",
    "homepage": "",
    "html_url": "https://github.com/bbcarchdev/anansi",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 18839409,
    "description": "BBC R&D fork of the SoundScape Renderer project http://spatialaudio.net/ssr/",
    "language": "C++",
    "name": "ssr",
    "full_name": "bbcrd/ssr",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/ssr",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 21012983,
    "description": "Tool to help map designers build maps",
    "language": "JavaScript",
    "name": "map-maker",
    "full_name": "BBCVisualJournalism/map-maker",
    "homepage": null,
    "html_url": "https://github.com/BBCVisualJournalism/map-maker",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 23385962,
    "description": "Resource-oriented architectures in Ruby. Roar focuses on object-oriented REST documents.",
    "language": "Ruby",
    "name": "roar",
    "full_name": "bbc-test/roar",
    "homepage": "http://roar.apotomo.de",
    "html_url": "https://github.com/bbc-test/roar",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 21780109,
    "description": "Abstraction layer for RDBMS client libraries which speak SQL",
    "language": "C",
    "name": "libsql",
    "full_name": "bbcarchdev/libsql",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/libsql",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 22910149,
    "description": "A small template extension to add JSONP support to Jbuilder.",
    "language": "Ruby",
    "name": "jpbuilder",
    "full_name": "bbc-test/jpbuilder",
    "homepage": "",
    "html_url": "https://github.com/bbc-test/jpbuilder",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 21780055,
    "description": "A collection of useful m4 macros",
    "language": "Shell",
    "name": "m4",
    "full_name": "bbcarchdev/m4",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/m4",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 21780031,
    "description": "JSON data structures, parsing, generation in C.",
    "language": "C",
    "name": "jsondata",
    "full_name": "bbcarchdev/jsondata",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/jsondata",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 21780042,
    "description": "A URI (and IRI) parser with a straightforward API, based upon uriparser",
    "language": "C",
    "name": "liburi",
    "full_name": "bbcarchdev/liburi",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/liburi",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 21386534,
    "description": "RackTest driver for Capybara with remote request support",
    "language": "Ruby",
    "name": "capybara-mechanize",
    "full_name": "bbc-contentdiscovery/capybara-mechanize",
    "homepage": "",
    "html_url": "https://github.com/bbc-contentdiscovery/capybara-mechanize",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 22751980,
    "description": "Sinatra project to produce a slimmed down dbpedia with stable identifiers.",
    "language": "Ruby",
    "name": "dbpedialite",
    "full_name": "bbcarchdev/dbpedialite",
    "homepage": "http://www.dbpedialite.org/",
    "html_url": "https://github.com/bbcarchdev/dbpedialite",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 20216405,
    "description": "Linked Open Data publication engine",
    "language": "C",
    "name": "quilt",
    "full_name": "bbcarchdev/quilt",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/quilt",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 16053687,
    "description": "iPlayer IRC bot",
    "language": "CoffeeScript",
    "name": "hubot",
    "full_name": "iplayer/hubot",
    "homepage": null,
    "html_url": "https://github.com/iplayer/hubot",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 18595587,
    "description": "XSLT to transform DocBook-XML to (X)HTML5",
    "language": "XSLT",
    "name": "docbook-html5",
    "full_name": "bbcarchdev/docbook-html5",
    "homepage": "http://bbcarchdev.github.io/docbook-html5/",
    "html_url": "https://github.com/bbcarchdev/docbook-html5",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 24149110,
    "description": "Set environment variables for your environment and Node.js OpsWorks project",
    "language": null,
    "name": "OpsWorksEnvy",
    "full_name": "BBC-Data/OpsWorksEnvy",
    "homepage": null,
    "html_url": "https://github.com/BBC-Data/OpsWorksEnvy",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 14360824,
    "description": "A set of java libraries that are shared by a bunch of projects.",
    "language": "Java",
    "name": "ibl-common",
    "full_name": "BBC/ibl-common",
    "homepage": "",
    "html_url": "https://github.com/BBC/ibl-common",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 0
  },
  {
    "id": 25364327,
    "description": "HTML/CSS/JS Remote Debugger for crap devices",
    "language": null,
    "name": "ezDBug",
    "full_name": "fmtvp/ezDBug",
    "homepage": null,
    "html_url": "https://github.com/fmtvp/ezDBug",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 3161409,
    "description": "A ruby gem for sending and receiving messages from a Stomp protocol compliant message queue. Includes: failover logic, ssl support. This version includes changes made by BBC R&D to support our RadioVIS prototype.",
    "language": "Ruby",
    "name": "stomp",
    "full_name": "bbcrd/stomp",
    "homepage": "http://rubyforge.org/projects/stomp/",
    "html_url": "https://github.com/bbcrd/stomp",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 2308045,
    "description": "Demonstration web front end for RadioTAG",
    "language": "Ruby",
    "name": "radiotag-web",
    "full_name": "bbcrd/radiotag-web",
    "homepage": "http://www.bbc.co.uk/rd/",
    "html_url": "https://github.com/bbcrd/radiotag-web",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 942254,
    "description": "Fun with Quartz Composer on Snow Leopard and the BBC Radio Schedule",
    "language": null,
    "name": "Radio-Now-Next-QC",
    "full_name": "bbcrd/Radio-Now-Next-QC",
    "homepage": "http://www.bbc.co.uk/radio",
    "html_url": "https://github.com/bbcrd/Radio-Now-Next-QC",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 16006542,
    "description": "Selectize is the hybrid of a textbox and <select> box. It's jQuery based and it has autocomplete and native-feeling keyboard navigation; useful for tagging, contact lists, etc.",
    "language": "JavaScript",
    "name": "selectize.js",
    "full_name": "BBC/selectize.js",
    "homepage": "http://brianreavis.github.io/selectize.js/",
    "html_url": "https://github.com/BBC/selectize.js",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 26915818,
    "description": "Selectize is the hybrid of a textbox and <select> box. It's jQuery based and it has autocomplete and native-feeling keyboard navigation; useful for tagging, contact lists, etc.",
    "language": "JavaScript",
    "name": "selectize.js",
    "full_name": "bbc-fm-nk-core-eng/selectize.js",
    "homepage": "http://brianreavis.github.io/selectize.js/",
    "html_url": "https://github.com/bbc-fm-nk-core-eng/selectize.js",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 18874943,
    "description": "Research & Education Space website",
    "language": "PHP",
    "name": "res",
    "full_name": "bbcarchdev/res",
    "homepage": "http://bbcarchdev.github.io/res/",
    "html_url": "https://github.com/bbcarchdev/res",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 18628913,
    "description": "Visual style and mark-up guide for the Research & Education Space",
    "language": "CSS",
    "name": "painting-by-numbers",
    "full_name": "bbcarchdev/painting-by-numbers",
    "homepage": "https://bbcarchdev.github.io/painting-by-numbers/",
    "html_url": "https://github.com/bbcarchdev/painting-by-numbers",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 13556435,
    "description": "IE Virtual Machines",
    "language": "Shell",
    "name": "packer-ies",
    "full_name": "BBC-News/packer-ies",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/packer-ies",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 26540272,
    "description": "Some exploratory prototyping apps",
    "language": "Ruby",
    "name": "neurotech-data-rig",
    "full_name": "BBC-News-Labs/neurotech-data-rig",
    "homepage": null,
    "html_url": "https://github.com/BBC-News-Labs/neurotech-data-rig",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 27185201,
    "description": "Image Crop directive for AngularJS",
    "language": "JavaScript",
    "name": "ngImgCrop",
    "full_name": "bbc-fm-nk-core-eng/ngImgCrop",
    "homepage": null,
    "html_url": "https://github.com/bbc-fm-nk-core-eng/ngImgCrop",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 24887711,
    "description": "Publisher gem for doing request based rendering",
    "language": "Ruby",
    "name": "alephant-publisher-request",
    "full_name": "BBC-News/alephant-publisher-request",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/alephant-publisher-request",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 28185718,
    "description": "Build SQS-based Node applications without the boilerplate",
    "language": "JavaScript",
    "name": "sqs-consumer",
    "full_name": "BBC/sqs-consumer",
    "homepage": null,
    "html_url": "https://github.com/BBC/sqs-consumer",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 5626983,
    "description": "Manage custom fields to a mongoid document or a collection",
    "language": "Ruby",
    "name": "custom_fields",
    "full_name": "bbcrd/custom_fields",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/custom_fields",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 6570472,
    "description": "A toolset for recording trails between waypoints by tagging tags against readers.",
    "language": "Python",
    "name": "waypoint",
    "full_name": "bbcrd/waypoint",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/waypoint",
    "fork": true,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 946736,
    "description": "A Google Chrome extension that displays BBC Now Next information. Blog Post: [http://littl.me/p1ew]",
    "language": "CSS",
    "name": "BBC-Now-Next-Chrome",
    "full_name": "bbcrd/BBC-Now-Next-Chrome",
    "homepage": "http://goo.gl/t4Qb",
    "html_url": "https://github.com/bbcrd/BBC-Now-Next-Chrome",
    "fork": true,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 11868544,
    "description": "BBC Curriculum Instance Data",
    "language": null,
    "name": "curriculum-data",
    "full_name": "bbcarchdev/curriculum-data",
    "homepage": "http://www.bbc.co.uk/education",
    "html_url": "https://github.com/bbcarchdev/curriculum-data",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 13456389,
    "description": "WordPress plugin to strip all except path, query-string and fragment from local public-facing URLs",
    "language": "PHP",
    "name": "freedom-ain",
    "full_name": "bbcarchdev/freedom-ain",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/freedom-ain",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 10625775,
    "description": "A small gem to serialize Ruby objects as RDF",
    "language": "Ruby",
    "name": "to-rdf",
    "full_name": "bbcrd/to-rdf",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/to-rdf",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 17412859,
    "description": "A grunt wrapper for composer",
    "language": "CoffeeScript",
    "name": "grunt-composer",
    "full_name": "BBC-Knowlearn/grunt-composer",
    "homepage": null,
    "html_url": "https://github.com/BBC-Knowlearn/grunt-composer",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 17281961,
    "description": "TAL Input Text Widget",
    "language": "JavaScript",
    "name": "tal-input-text",
    "full_name": "bbcrd/tal-input-text",
    "homepage": null,
    "html_url": "https://github.com/bbcrd/tal-input-text",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 16117050,
    "description": "Licenses published by BBC Archive Development",
    "language": null,
    "name": "licences",
    "full_name": "bbcarchdev/licences",
    "homepage": "http://bbcarchdev.github.io/licences/dps/1.0",
    "html_url": "https://github.com/bbcarchdev/licences",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 15935844,
    "description": "Test Data supporting Mobile Platforms Recruitment",
    "language": null,
    "name": "recruit-test-data",
    "full_name": "fmtvp/recruit-test-data",
    "homepage": null,
    "html_url": "https://github.com/fmtvp/recruit-test-data",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 18435176,
    "description": "The iPlayer style guide.",
    "language": "CSS",
    "name": "styleguide",
    "full_name": "iplayer/styleguide",
    "homepage": "http://iplayer.github.io/styleguide/",
    "html_url": "https://github.com/iplayer/styleguide",
    "fork": false,
    "forks_count": 4,
    "stargazers_count": 0
  },
  {
    "id": 15137253,
    "description": "Java/Spring annotations to create JSON for Mashery's IO-Docs",
    "language": null,
    "name": "mashery-io-docs",
    "full_name": "iplayer/mashery-io-docs",
    "homepage": null,
    "html_url": "https://github.com/iplayer/mashery-io-docs",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 17575389,
    "description": "Backported Debian packaging of rasqal (http://librdf.org/rasqal/)",
    "language": "C",
    "name": "deb-rasqal",
    "full_name": "bbcarchdev/deb-rasqal",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/deb-rasqal",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 16559247,
    "description": "Simple initial build for devops recruitment",
    "language": "Shell",
    "name": "recruit-devops",
    "full_name": "fmtvp/recruit-devops",
    "homepage": null,
    "html_url": "https://github.com/fmtvp/recruit-devops",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 18593449,
    "description": "Python modules for handling Audio Definition Model XML data.",
    "language": "Python",
    "name": "adm_xml",
    "full_name": "bbcrd/adm_xml",
    "homepage": "http://www.bbc.co.uk/rd/publications/saqas",
    "html_url": "https://github.com/bbcrd/adm_xml",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 19862506,
    "description": "Load test artefacts for the load test team",
    "language": null,
    "name": "load-test-artefacts",
    "full_name": "bbc-contentdiscovery/load-test-artefacts",
    "homepage": null,
    "html_url": "https://github.com/bbc-contentdiscovery/load-test-artefacts",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 20270824,
    "description": "iPlayer metrics docker container",
    "language": "Shell",
    "name": "docker-metrics",
    "full_name": "iplayer/docker-metrics",
    "homepage": "",
    "html_url": "https://github.com/iplayer/docker-metrics",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 21780049,
    "description": "Minor development fork of uriparser (http://uriparser.sourceforge.net/)",
    "language": null,
    "name": "uriparser",
    "full_name": "bbcarchdev/uriparser",
    "homepage": null,
    "html_url": "https://github.com/bbcarchdev/uriparser",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 19040357,
    "description": "The getting started guide for Git",
    "language": null,
    "name": "getting-started",
    "full_name": "myBBC/getting-started",
    "homepage": null,
    "html_url": "https://github.com/myBBC/getting-started",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 19543566,
    "description": "Host configuration for running TViPlayer sandboxes in docker",
    "language": "Shell",
    "name": "tviplayer-docker",
    "full_name": "iplayer/tviplayer-docker",
    "homepage": null,
    "html_url": "https://github.com/iplayer/tviplayer-docker",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 19250394,
    "description": "Linked Open Data client library",
    "language": "C",
    "name": "liblod",
    "full_name": "bbcarchdev/liblod",
    "homepage": "http://bbcarchdev.github.io/liblod/",
    "html_url": "https://github.com/bbcarchdev/liblod",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 25210263,
    "description": "Parallax Engine that reacts to the orientation of a smart device",
    "language": "JavaScript",
    "name": "kandl-parallax",
    "full_name": "BBC-Knowlearn/kandl-parallax",
    "homepage": "http://wagerfield.github.io/parallax/",
    "html_url": "https://github.com/BBC-Knowlearn/kandl-parallax",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 24639465,
    "description": "Test spies, stubs and mocks for JavaScript.",
    "language": "JavaScript",
    "name": "Sinon-NodeFakeServer",
    "full_name": "bbc-contentdiscovery/Sinon-NodeFakeServer",
    "homepage": "http://cjohansen.no/sinon/",
    "html_url": "https://github.com/bbc-contentdiscovery/Sinon-NodeFakeServer",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 17472981,
    "description": "Fixture generator for iBL feeds",
    "language": "JavaScript",
    "name": "fixturator",
    "full_name": "iplayer/fixturator",
    "homepage": "",
    "html_url": "https://github.com/iplayer/fixturator",
    "fork": false,
    "forks_count": 4,
    "stargazers_count": 0
  },
  {
    "id": 19614312,
    "description": "Responsive images while we wait for srcset to finish cooking",
    "language": "JavaScript",
    "name": "Imager.js",
    "full_name": "bbc-sport/Imager.js",
    "homepage": null,
    "html_url": "https://github.com/bbc-sport/Imager.js",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 16956628,
    "description": "Component previewer",
    "language": "Ruby",
    "name": "alephant-preview",
    "full_name": "BBC-News/alephant-preview",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/alephant-preview",
    "fork": false,
    "forks_count": 2,
    "stargazers_count": 0
  },
  {
    "id": 2113305,
    "description": "DataMapper models for the RadioTAG suite of applications",
    "language": "Ruby",
    "name": "radiotag-models",
    "full_name": "bbcrd/radiotag-models",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/radiotag-models",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 2100226,
    "description": "Reference implementation of RadioTAG protocol version 1.00",
    "language": "Ruby",
    "name": "radiotag-tagserver",
    "full_name": "bbcrd/radiotag-tagserver",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/radiotag-tagserver",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 2112340,
    "description": "An authorization server for BBC R&D's RadioTAG reference implementation (radiotag-tagserver)",
    "language": "Ruby",
    "name": "radiotag-authserver",
    "full_name": "bbcrd/radiotag-authserver",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/radiotag-authserver",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 2112508,
    "description": "Example implementation of RadioTAG client",
    "language": "Ruby",
    "name": "radiotag-radio",
    "full_name": "bbcrd/radiotag-radio",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/radiotag-radio",
    "fork": false,
    "forks_count": 3,
    "stargazers_count": 0
  },
  {
    "id": 19956056,
    "description": "A proof-of-concept linked data aggregator developed in 2011",
    "language": "PHP",
    "name": "prototype-aggregator",
    "full_name": "bbcarchdev/prototype-aggregator",
    "homepage": "",
    "html_url": "https://github.com/bbcarchdev/prototype-aggregator",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 26870123,
    "description": "Export ini files to a global JS object",
    "language": "JavaScript",
    "name": "grunt-ini-export",
    "full_name": "BBC/grunt-ini-export",
    "homepage": null,
    "html_url": "https://github.com/BBC/grunt-ini-export",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 27278780,
    "description": "Grunt task for running jasmine-node",
    "language": "JavaScript",
    "name": "grunt-jasmine-node",
    "full_name": "bbc-sport/grunt-jasmine-node",
    "homepage": null,
    "html_url": "https://github.com/bbc-sport/grunt-jasmine-node",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 25030986,
    "description": "Static publishing to S3 based on SQS messages",
    "language": "Ruby",
    "name": "alephant-publisher-queue",
    "full_name": "BBC-News/alephant-publisher-queue",
    "homepage": "",
    "html_url": "https://github.com/BBC-News/alephant-publisher-queue",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 27830298,
    "description": "A Hubot script that list / merge the pull request",
    "language": "CoffeeScript",
    "name": "hubot-pr",
    "full_name": "BBC-News/hubot-pr",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/hubot-pr",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 27879343,
    "description": "Internet of Toys (An IOT stack for Toys & Devices)",
    "language": "Python",
    "name": "iotoy",
    "full_name": "bbcrd/iotoy",
    "homepage": "",
    "html_url": "https://github.com/bbcrd/iotoy",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 15974621,
    "description": "Grunt task for running parallel behat features",
    "language": "JavaScript",
    "name": "grunt-parallel-behat",
    "full_name": "BBC/grunt-parallel-behat",
    "homepage": null,
    "html_url": "https://github.com/BBC/grunt-parallel-behat",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 16946373,
    "description": "Brokers requests for alephant components",
    "language": "Ruby",
    "name": "alephant-broker",
    "full_name": "BBC-News/alephant-broker",
    "homepage": null,
    "html_url": "https://github.com/BBC-News/alephant-broker",
    "fork": false,
    "forks_count": 1,
    "stargazers_count": 0
  },
  {
    "id": 28082335,
    "description": "The official iOS SDK for the HockeyApp service (Releases are in the master branch, current development in the default develop branch)",
    "language": "Objective-C",
    "name": "HockeySDK-iOS",
    "full_name": "BBC/HockeySDK-iOS",
    "homepage": "http://hockeyapp.net/releases",
    "html_url": "https://github.com/BBC/HockeySDK-iOS",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 14171436,
    "description": "Processes any spreadsheet in the cloud into a set of vocab json files.",
    "language": "JavaScript",
    "name": "grunt-cloudfile-to-vocab",
    "full_name": "BBCVisualJournalism/grunt-cloudfile-to-vocab",
    "homepage": null,
    "html_url": "https://github.com/BBCVisualJournalism/grunt-cloudfile-to-vocab",
    "fork": false,
    "forks_count": 0,
    "stargazers_count": 0
  },
  {
    "id": 28404557,
    "description": "Pure Javascript Cucumber",
    "language": "JavaScript",
    "name": "cucumber-js",
    "full_name": "bbc-fm-nk-core-eng/cucumber-js",
    "homepage": "",
    "html_url": "https://github.com/bbc-fm-nk-core-eng/cucumber-js",
    "fork": true,
    "forks_count": 0,
    "stargazers_count": 0
  }
]
},{}],3:[function(require,module,exports){
var React=require("react"),languageMap=require("language-map");module.exports=React.createClass({displayName:"exports",propTypes:{id:React.PropTypes.string},render:function(){if(null===this.props.id)return null;var e={backgroundColor:languageMap[this.props.id].color};return React.createElement("span",{className:"software-language",style:e},this.props.id)}});
},{"language-map":7,"react":150}],4:[function(require,module,exports){
var React=require("react"),Language=require("./Language.jsx"),cx=require("react-classset");module.exports=React.createClass({displayName:"exports",propTypes:{repos:React.PropTypes.array.isRequired,onUpdate:React.PropTypes.func.isRequired},getInitialState:function(){return{search:"",languagesWhitelist:[]}},printLanguagesButtons:function(){var e=this.getLanguagesFromList(this.props.repos);return e.map(function(e){var t=cx({"language__toggle-button":!0,"language__toggle-button--selected":this.isLangActive(e)});return React.createElement("button",{onClick:this.toggleLang.bind(this,e),className:t},React.createElement(Language,{id:e}))},this)},render:function(){return React.createElement("nav",null,React.createElement("ul",null,React.createElement("li",null,this.printLanguagesButtons()),React.createElement("li",null,React.createElement("input",{type:"search",ref:"search",onChange:this.executeSearch,autofocus:!0,placeholder:"TV, responsive, linked data …"}),React.createElement("button",{type:"button",onClick:this.executeSearch},"Search"))))},componentWillUpdate:function(e,t){return this.state===t?!1:void this.notifyUpdate({search:t.search,languages:t.languagesWhitelist})},notifyUpdate:function(e){this.props.onUpdate(function(t){return t.filter(function(t){if(e.languages.length&&-1===e.languages.indexOf(t.language))return!1;if(e.search){var a=new RegExp(e.search.split(" ").join(".+"),"i");if(!(t.name+" "+t.description).match(a))return!1}return!0})})},executeSearch:function(){var e=this.refs.search.getDOMNode();this.setState({search:e.value.trim()})},toggleLang:function(e){var t=this.state.languagesWhitelist;this.isLangActive(e)?t=t.filter(function(t){return t!==e}):t.push(e),this.setState({languagesWhitelist:t})},isLangActive:function(e){return-1!==this.state.languagesWhitelist.indexOf(e)},getLanguagesFromList:function(e){var t=[];return e.forEach(function(e){e.language&&-1===t.indexOf(e.language)&&t.push(e.language)}),t.sort()}});
},{"./Language.jsx":3,"react":150,"react-classset":8}],5:[function(require,module,exports){
var React=require("react"),Language=require("./Language.jsx"),Repo=React.createClass({displayName:"Repo",render:function(){var e=this.props.data;return React.createElement("article",{className:"repository"},React.createElement("h2",null,e.name),React.createElement("p",null,e.description),React.createElement("ul",{className:"repository__metadata"},React.createElement("li",null,React.createElement(Language,{id:e.language})),React.createElement("li",null,React.createElement("span",{className:"metadata"},e.stargazers_count,"★")),React.createElement("li",null,React.createElement("a",{href:e.html_url,className:"metadata"},e.full_name)),React.createElement("li",null,this.renderHomepageLink())))},renderHomepageLink:function(){return this.props.data.homepage?React.createElement("a",{href:this.props.data.homepage,className:"metadata"},"website"):null}});module.exports=Repo;
},{"./Language.jsx":3,"react":150}],6:[function(require,module,exports){
"use strict";var React=require("react"),Repo=require("./Repository.jsx");module.exports=React.createClass({displayName:"exports",render:function(){var e=this.props.repos.map(function(e){return React.createElement(Repo,{data:e,key:"ghid-"+e.id})});return React.createElement("div",{className:"repositories-list"},e)}});
},{"./Repository.jsx":5,"react":150}],7:[function(require,module,exports){
module.exports={
  "ABAP": {
    "type": "programming",
    "lexer": "ABAP",
    "extensions": [
      ".abap"
    ]
  },
  "ANTLR": {
    "type": "programming",
    "color": "#9DC3FF",
    "lexer": "ANTLR",
    "extensions": [
      ".g4"
    ]
  },
  "ASP": {
    "type": "programming",
    "color": "#6a40fd",
    "lexer": "aspx-vb",
    "searchTerm": "aspx-vb",
    "aliases": [
      "aspx",
      "aspx-vb"
    ],
    "extensions": [
      ".asp",
      ".asax",
      ".ascx",
      ".ashx",
      ".asmx",
      ".aspx",
      ".axd"
    ]
  },
  "ATS": {
    "type": "programming",
    "color": "#1ac620",
    "lexer": "OCaml",
    "aliases": [
      "ats2"
    ],
    "extensions": [
      ".dats",
      ".atxt",
      ".hats",
      ".sats"
    ]
  },
  "ActionScript": {
    "type": "programming",
    "lexer": "ActionScript 3",
    "color": "#e3491a",
    "searchTerm": "as3",
    "aliases": [
      "as3"
    ],
    "extensions": [
      ".as"
    ]
  },
  "Ada": {
    "type": "programming",
    "color": "#02f88c",
    "extensions": [
      ".adb",
      ".ads"
    ]
  },
  "Agda": {
    "type": "programming",
    "color": "#467C91",
    "extensions": [
      ".agda"
    ]
  },
  "Alloy": {
    "type": "programming",
    "lexer": "Alloy",
    "color": "#cc5c24",
    "extensions": [
      ".als"
    ]
  },
  "ApacheConf": {
    "type": "markup",
    "aliases": [
      "apache"
    ],
    "extensions": [
      ".apacheconf"
    ]
  },
  "Apex": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".cls"
    ]
  },
  "AppleScript": {
    "type": "programming",
    "aliases": [
      "osascript"
    ],
    "extensions": [
      ".applescript",
      ".scpt"
    ],
    "interpreters": [
      "osascript"
    ]
  },
  "Arc": {
    "type": "programming",
    "color": "#ca2afe",
    "lexer": "Text only",
    "extensions": [
      ".arc"
    ]
  },
  "Arduino": {
    "type": "programming",
    "color": "#bd79d1",
    "lexer": "C++",
    "extensions": [
      ".ino"
    ]
  },
  "AsciiDoc": {
    "type": "prose",
    "lexer": "Text only",
    "aceMode": "asciidoc",
    "wrap": true,
    "extensions": [
      ".asciidoc",
      ".adoc",
      ".asc"
    ]
  },
  "AspectJ": {
    "type": "programming",
    "lexer": "AspectJ",
    "color": "#1957b0",
    "extensions": [
      ".aj"
    ]
  },
  "Assembly": {
    "type": "programming",
    "lexer": "NASM",
    "color": "#a67219",
    "searchTerm": "nasm",
    "aliases": [
      "nasm"
    ],
    "extensions": [
      ".asm"
    ]
  },
  "Augeas": {
    "type": "programming",
    "extensions": [
      ".aug"
    ]
  },
  "AutoHotkey": {
    "type": "programming",
    "lexer": "autohotkey",
    "color": "#6594b9",
    "aliases": [
      "ahk"
    ],
    "extensions": [
      ".ahk"
    ]
  },
  "AutoIt": {
    "type": "programming",
    "color": "#36699B",
    "aliases": [
      "au3",
      "AutoIt3",
      "AutoItScript"
    ],
    "extensions": [
      ".au3"
    ]
  },
  "Awk": {
    "type": "programming",
    "lexer": "Awk",
    "extensions": [
      ".awk",
      ".auk",
      ".gawk",
      ".mawk",
      ".nawk"
    ],
    "interpreters": [
      "awk",
      "gawk",
      "mawk",
      "nawk"
    ]
  },
  "Batchfile": {
    "type": "programming",
    "group": "Shell",
    "searchTerm": "bat",
    "aliases": [
      "bat"
    ],
    "extensions": [
      ".bat",
      ".cmd"
    ]
  },
  "Befunge": {
    "extensions": [
      ".befunge"
    ]
  },
  "BlitzBasic": {
    "type": "programming",
    "aliases": [
      "blitzplus",
      "blitz3d"
    ],
    "extensions": [
      ".bb",
      ".decls"
    ]
  },
  "BlitzMax": {
    "type": "programming",
    "color": "#cd6400",
    "extensions": [
      ".bmx"
    ]
  },
  "Bluespec": {
    "type": "programming",
    "lexer": "verilog",
    "extensions": [
      ".bsv"
    ]
  },
  "Boo": {
    "type": "programming",
    "color": "#d4bec1",
    "extensions": [
      ".boo"
    ]
  },
  "Brainfuck": {
    "extensions": [
      ".b",
      ".bf"
    ]
  },
  "Brightscript": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".brs"
    ]
  },
  "Bro": {
    "type": "programming",
    "extensions": [
      ".bro"
    ]
  },
  "C": {
    "type": "programming",
    "color": "#555",
    "extensions": [
      ".c",
      ".cats",
      ".h",
      ".w"
    ]
  },
  "C#": {
    "type": "programming",
    "aceMode": "csharp",
    "searchTerm": "csharp",
    "color": "#5a25a2",
    "aliases": [
      "csharp"
    ],
    "extensions": [
      ".cs",
      ".cshtml",
      ".csx"
    ]
  },
  "C++": {
    "type": "programming",
    "aceMode": "c_cpp",
    "searchTerm": "cpp",
    "color": "#f34b7d",
    "aliases": [
      "cpp"
    ],
    "extensions": [
      ".cpp",
      ".C",
      ".c++",
      ".cc",
      ".cxx",
      ".H",
      ".h",
      ".h++",
      ".hh",
      ".hpp",
      ".hxx",
      ".inl",
      ".tcc",
      ".tpp",
      ".ipp"
    ]
  },
  "C-ObjDump": {
    "type": "data",
    "lexer": "c-objdump",
    "extensions": [
      ".c-objdump"
    ]
  },
  "C2hs Haskell": {
    "type": "programming",
    "lexer": "Haskell",
    "group": "Haskell",
    "aliases": [
      "c2hs"
    ],
    "extensions": [
      ".chs"
    ]
  },
  "CLIPS": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".clp"
    ]
  },
  "CMake": {
    "extensions": [
      ".cmake",
      ".in"
    ],
    "filenames": [
      "CMakeLists.txt"
    ]
  },
  "COBOL": {
    "type": "programming",
    "extensions": [
      ".cob",
      ".cbl",
      ".ccp",
      ".cobol",
      ".cpy"
    ]
  },
  "CSS": {
    "aceMode": "css",
    "color": "#563d7c",
    "extensions": [
      ".css"
    ]
  },
  "Ceylon": {
    "type": "programming",
    "lexer": "Ceylon",
    "extensions": [
      ".ceylon"
    ]
  },
  "Chapel": {
    "type": "programming",
    "color": "#8dc63f",
    "aliases": [
      "chpl"
    ],
    "extensions": [
      ".chpl"
    ]
  },
  "ChucK": {
    "lexer": "Java",
    "extensions": [
      ".ck"
    ]
  },
  "Cirru": {
    "type": "programming",
    "color": "#aaaaff",
    "lexer": "Text only",
    "extensions": [
      ".cirru"
    ]
  },
  "Clean": {
    "type": "programming",
    "color": "#3a81ad",
    "lexer": "Text only",
    "extensions": [
      ".icl",
      ".dcl"
    ]
  },
  "Clojure": {
    "type": "programming",
    "aceMode": "clojure",
    "color": "#db5855",
    "extensions": [
      ".clj",
      ".cl2",
      ".cljc",
      ".cljs",
      ".cljscm",
      ".cljx",
      ".hic",
      ".hl"
    ],
    "filenames": [
      "riemann.config"
    ]
  },
  "CoffeeScript": {
    "type": "programming",
    "aceMode": "coffee",
    "color": "#244776",
    "aliases": [
      "coffee",
      "coffee-script"
    ],
    "extensions": [
      ".coffee",
      "._coffee",
      ".cson",
      ".iced"
    ],
    "filenames": [
      "Cakefile"
    ],
    "interpreters": [
      "coffee"
    ]
  },
  "ColdFusion": {
    "type": "programming",
    "group": "ColdFusion",
    "lexer": "Coldfusion HTML",
    "aceMode": "coldfusion",
    "color": "#ed2cd6",
    "searchTerm": "cfm",
    "aliases": [
      "cfm",
      "cfml"
    ],
    "extensions": [
      ".cfm"
    ]
  },
  "ColdFusion CFC": {
    "type": "programming",
    "group": "ColdFusion",
    "lexer": "Coldfusion CFC",
    "aceMode": "coldfusion",
    "color": "#ed2cd6",
    "searchTerm": "cfc",
    "aliases": [
      "cfc"
    ],
    "extensions": [
      ".cfc"
    ]
  },
  "Common Lisp": {
    "type": "programming",
    "color": "#3fb68b",
    "aliases": [
      "lisp"
    ],
    "extensions": [
      ".lisp",
      ".asd",
      ".cl",
      ".lsp",
      ".ny",
      ".podsl"
    ],
    "interpreters": [
      "lisp",
      "sbcl",
      "ccl",
      "clisp",
      "ecl"
    ]
  },
  "Component Pascal": {
    "type": "programming",
    "lexer": "Delphi",
    "color": "#b0ce4e",
    "extensions": [
      ".cp",
      ".cps"
    ]
  },
  "Coq": {
    "type": "programming",
    "extensions": [
      ".coq",
      ".v"
    ]
  },
  "Cpp-ObjDump": {
    "type": "data",
    "lexer": "cpp-objdump",
    "extensions": [
      ".cppobjdump",
      ".c++objdump",
      ".cxx-objdump"
    ]
  },
  "Creole": {
    "type": "prose",
    "lexer": "Text only",
    "wrap": true,
    "extensions": [
      ".creole"
    ]
  },
  "Crystal": {
    "type": "programming",
    "lexer": "Ruby",
    "extensions": [
      ".cr"
    ],
    "aceMode": "ruby"
  },
  "Cucumber": {
    "lexer": "Gherkin",
    "extensions": [
      ".feature"
    ]
  },
  "Cuda": {
    "type": "programming",
    "lexer": "CUDA",
    "extensions": [
      ".cu",
      ".cuh"
    ]
  },
  "Cycript": {
    "type": "programming",
    "lexer": "JavaScript",
    "extensions": [
      ".cy"
    ]
  },
  "Cython": {
    "type": "programming",
    "group": "Python",
    "extensions": [
      ".pyx",
      ".pxd",
      ".pxi"
    ]
  },
  "D": {
    "type": "programming",
    "color": "#fcd46d",
    "extensions": [
      ".d",
      ".di"
    ]
  },
  "D-ObjDump": {
    "type": "data",
    "lexer": "d-objdump",
    "extensions": [
      ".d-objdump"
    ]
  },
  "DM": {
    "type": "programming",
    "color": "#075ff1",
    "lexer": "C++",
    "extensions": [
      ".dm"
    ],
    "aliases": [
      "byond"
    ]
  },
  "DOT": {
    "type": "data",
    "lexer": "Text only",
    "extensions": [
      ".dot",
      ".gv"
    ]
  },
  "Darcs Patch": {
    "searchTerm": "dpatch",
    "aliases": [
      "dpatch"
    ],
    "extensions": [
      ".darcspatch",
      ".dpatch"
    ]
  },
  "Dart": {
    "type": "programming",
    "color": "#98BAD6",
    "extensions": [
      ".dart"
    ]
  },
  "Diff": {
    "extensions": [
      ".diff",
      ".patch"
    ]
  },
  "Dogescript": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#cca760",
    "extensions": [
      ".djs"
    ]
  },
  "Dylan": {
    "type": "programming",
    "color": "#3ebc27",
    "extensions": [
      ".dylan",
      ".intr",
      ".lid"
    ]
  },
  "E": {
    "type": "programming",
    "color": "#ccce35",
    "lexer": "Text only",
    "extensions": [
      ".E"
    ]
  },
  "Ecere Projects": {
    "type": "data",
    "group": "JavaScript",
    "lexer": "JSON",
    "extensions": [
      ".epj"
    ]
  },
  "ECL": {
    "type": "programming",
    "color": "#8a1267",
    "lexer": "ECL",
    "extensions": [
      ".ecl",
      ".eclxml"
    ]
  },
  "Eagle": {
    "type": "markup",
    "color": "#3994bc",
    "lexer": "XML",
    "extensions": [
      ".sch",
      ".brd"
    ]
  },
  "Eiffel": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#946d57",
    "extensions": [
      ".e"
    ]
  },
  "Elixir": {
    "type": "programming",
    "color": "#6e4a7e",
    "extensions": [
      ".ex",
      ".exs"
    ]
  },
  "Elm": {
    "type": "programming",
    "lexer": "Haskell",
    "extensions": [
      ".elm"
    ]
  },
  "Emacs Lisp": {
    "type": "programming",
    "lexer": "Scheme",
    "color": "#c065db",
    "aliases": [
      "elisp",
      "emacs"
    ],
    "filenames": [
      ".emacs"
    ],
    "extensions": [
      ".el",
      ".emacs"
    ]
  },
  "Erlang": {
    "type": "programming",
    "color": "#0faf8d",
    "extensions": [
      ".erl",
      ".escript",
      ".hrl"
    ]
  },
  "F#": {
    "type": "programming",
    "lexer": "FSharp",
    "color": "#b845fc",
    "searchTerm": "fsharp",
    "aliases": [
      "fsharp"
    ],
    "extensions": [
      ".fs",
      ".fsi",
      ".fsx"
    ]
  },
  "FLUX": {
    "type": "programming",
    "color": "#33CCFF",
    "lexer": "Text only",
    "extensions": [
      ".fx",
      ".flux"
    ]
  },
  "FORTRAN": {
    "type": "programming",
    "lexer": "Fortran",
    "color": "#4d41b1",
    "extensions": [
      ".f90",
      ".F",
      ".F03",
      ".F08",
      ".F77",
      ".F90",
      ".F95",
      ".FOR",
      ".FPP",
      ".f",
      ".f03",
      ".f08",
      ".f77",
      ".f95",
      ".for",
      ".fpp"
    ]
  },
  "Factor": {
    "type": "programming",
    "color": "#636746",
    "extensions": [
      ".factor"
    ],
    "filenames": [
      ".factor-rc",
      ".factor-boot-rc"
    ]
  },
  "Fancy": {
    "type": "programming",
    "color": "#7b9db4",
    "extensions": [
      ".fy",
      ".fancypack"
    ],
    "filenames": [
      "Fakefile"
    ]
  },
  "Fantom": {
    "type": "programming",
    "color": "#dbded5",
    "extensions": [
      ".fan"
    ]
  },
  "Forth": {
    "type": "programming",
    "color": "#341708",
    "lexer": "Text only",
    "extensions": [
      ".fth",
      ".4th",
      ".forth"
    ]
  },
  "Frege": {
    "type": "programming",
    "color": "#00cafe",
    "lexer": "Haskell",
    "extensions": [
      ".fr"
    ]
  },
  "Game Maker Language": {
    "type": "programming",
    "color": "#8ad353",
    "lexer": "JavaScript",
    "extensions": [
      ".gml"
    ]
  },
  "GAMS": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".gms"
    ]
  },
  "GAP": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".g",
      ".gap",
      ".gd",
      ".gi"
    ]
  },
  "GAS": {
    "type": "programming",
    "group": "Assembly",
    "extensions": [
      ".s",
      ".S"
    ]
  },
  "GLSL": {
    "group": "C",
    "type": "programming",
    "extensions": [
      ".glsl",
      ".fp",
      ".frag",
      ".frg",
      ".fshader",
      ".geom",
      ".glslv",
      ".gshader",
      ".shader",
      ".vert",
      ".vrx",
      ".vshader"
    ]
  },
  "Genshi": {
    "extensions": [
      ".kid"
    ]
  },
  "Gentoo Ebuild": {
    "group": "Shell",
    "lexer": "Bash",
    "extensions": [
      ".ebuild"
    ]
  },
  "Gentoo Eclass": {
    "group": "Shell",
    "lexer": "Bash",
    "extensions": [
      ".eclass"
    ]
  },
  "Gettext Catalog": {
    "searchTerm": "pot",
    "searchable": false,
    "aliases": [
      "pot"
    ],
    "extensions": [
      ".po",
      ".pot"
    ]
  },
  "Glyph": {
    "type": "programming",
    "color": "#e4cc98",
    "lexer": "Tcl",
    "extensions": [
      ".glf"
    ]
  },
  "Gnuplot": {
    "type": "programming",
    "color": "#f0a9f0",
    "lexer": "Gnuplot",
    "extensions": [
      ".gp",
      ".gnu",
      ".gnuplot",
      ".plot",
      ".plt"
    ]
  },
  "Go": {
    "type": "programming",
    "color": "#375eab",
    "extensions": [
      ".go"
    ]
  },
  "Gosu": {
    "type": "programming",
    "color": "#82937f",
    "extensions": [
      ".gs",
      ".gst",
      ".gsx",
      ".vark"
    ]
  },
  "Grace": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".grace"
    ]
  },
  "Grammatical Framework": {
    "type": "programming",
    "lexer": "Haskell",
    "aliases": [
      "gf"
    ],
    "wrap": false,
    "extensions": [
      ".gf"
    ],
    "searchable": true,
    "color": "#ff0000"
  },
  "Groff": {
    "extensions": [
      ".man",
      ".1",
      ".2",
      ".3",
      ".4",
      ".5",
      ".6",
      ".7"
    ]
  },
  "Groovy": {
    "type": "programming",
    "aceMode": "groovy",
    "color": "#e69f56",
    "extensions": [
      ".groovy",
      ".gradle",
      ".grt",
      ".gtpl",
      ".gvy"
    ],
    "interpreters": [
      "groovy"
    ]
  },
  "Groovy Server Pages": {
    "group": "Groovy",
    "lexer": "Java Server Page",
    "aliases": [
      "gsp"
    ],
    "extensions": [
      ".gsp"
    ]
  },
  "HTML": {
    "type": "markup",
    "aceMode": "html",
    "aliases": [
      "xhtml"
    ],
    "extensions": [
      ".html",
      ".htm",
      ".st",
      ".xhtml"
    ]
  },
  "HTML+Django": {
    "type": "markup",
    "group": "HTML",
    "lexer": "HTML+Django/Jinja",
    "extensions": [
      ".mustache",
      ".jinja"
    ]
  },
  "HTML+ERB": {
    "type": "markup",
    "group": "HTML",
    "lexer": "RHTML",
    "aliases": [
      "erb"
    ],
    "extensions": [
      ".erb",
      ".deface"
    ]
  },
  "HTML+PHP": {
    "type": "markup",
    "group": "HTML",
    "extensions": [
      ".phtml"
    ]
  },
  "HTTP": {
    "type": "data",
    "extensions": [
      ".http"
    ]
  },
  "Haml": {
    "group": "HTML",
    "type": "markup",
    "extensions": [
      ".haml",
      ".deface"
    ]
  },
  "Handlebars": {
    "type": "markup",
    "lexer": "Handlebars",
    "extensions": [
      ".handlebars",
      ".hbs"
    ]
  },
  "Harbour": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#0e60e3",
    "extensions": [
      ".hb"
    ]
  },
  "Haskell": {
    "type": "programming",
    "color": "#29b544",
    "extensions": [
      ".hs",
      ".hsc"
    ]
  },
  "Haxe": {
    "type": "programming",
    "aceMode": "haxe",
    "color": "#f7941e",
    "extensions": [
      ".hx",
      ".hxsl"
    ]
  },
  "Hy": {
    "type": "programming",
    "lexer": "Clojure",
    "aceMode": "clojure",
    "color": "#7891b1",
    "extensions": [
      ".hy"
    ]
  },
  "IDL": {
    "type": "programming",
    "lexer": "IDL",
    "color": "#e3592c",
    "extensions": [
      ".pro",
      ".dlm"
    ]
  },
  "INI": {
    "type": "data",
    "extensions": [
      ".ini",
      ".prefs",
      ".properties"
    ]
  },
  "Inno Setup": {
    "extensions": [
      ".iss"
    ],
    "lexer": "Text only"
  },
  "Idris": {
    "type": "programming",
    "lexer": "Idris",
    "extensions": [
      ".idr",
      ".lidr"
    ]
  },
  "Inform 7": {
    "type": "programming",
    "lexer": "Text only",
    "wrap": true,
    "extensions": [
      ".ni",
      ".i7x"
    ]
  },
  "IRC log": {
    "lexer": "IRC logs",
    "searchTerm": "irc",
    "aliases": [
      "irc"
    ],
    "extensions": [
      ".irclog",
      ".weechatlog"
    ]
  },
  "Io": {
    "type": "programming",
    "color": "#a9188d",
    "extensions": [
      ".io"
    ]
  },
  "Ioke": {
    "type": "programming",
    "color": "#078193",
    "extensions": [
      ".ik"
    ]
  },
  "Isabelle": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#fdcd00",
    "extensions": [
      ".thy"
    ]
  },
  "J": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".ijs"
    ]
  },
  "JSON": {
    "type": "data",
    "group": "JavaScript",
    "aceMode": "json",
    "searchable": false,
    "extensions": [
      ".json",
      ".lock",
      ".sublime-keymap",
      ".sublime-mousemap",
      ".sublime-project",
      ".sublime-settings",
      ".sublime-workspace",
      ".sublime_metrics",
      ".sublime_session"
    ],
    "filenames": [
      ".jshintrc",
      "composer.lock"
    ]
  },
  "JSON5": {
    "type": "data",
    "lexer": "JavaScript",
    "extensions": [
      ".json5"
    ]
  },
  "JSONLD": {
    "type": "data",
    "group": "JavaScript",
    "aceMode": "json",
    "lexer": "JavaScript",
    "extensions": [
      ".jsonld"
    ]
  },
  "JSONiq": {
    "type": "programming",
    "aceMode": "jsoniq",
    "lexer": "XQuery",
    "extensions": [
      ".jq"
    ]
  },
  "Jade": {
    "group": "HTML",
    "type": "markup",
    "extensions": [
      ".jade"
    ]
  },
  "Java": {
    "type": "programming",
    "aceMode": "java",
    "color": "#b07219",
    "extensions": [
      ".java"
    ]
  },
  "Java Server Pages": {
    "group": "Java",
    "lexer": "Java Server Page",
    "searchTerm": "jsp",
    "aliases": [
      "jsp"
    ],
    "extensions": [
      ".jsp"
    ]
  },
  "JavaScript": {
    "type": "programming",
    "aceMode": "javascript",
    "color": "#f1e05a",
    "aliases": [
      "js",
      "node"
    ],
    "extensions": [
      ".js",
      "._js",
      ".bones",
      ".es6",
      ".frag",
      ".jake",
      ".jsfl",
      ".jsm",
      ".jss",
      ".jsx",
      ".njs",
      ".pac",
      ".sjs",
      ".ssjs",
      ".xsjs",
      ".xsjslib"
    ],
    "filenames": [
      "Jakefile"
    ],
    "interpreters": [
      "node"
    ]
  },
  "Julia": {
    "type": "programming",
    "extensions": [
      ".jl"
    ],
    "color": "#a270ba"
  },
  "KRL": {
    "lexer": "Text only",
    "type": "programming",
    "color": "#f5c800",
    "extensions": [
      ".krl"
    ]
  },
  "Kit": {
    "type": "markup",
    "lexer": "HTML",
    "aceMode": "html",
    "extensions": [
      ".kit"
    ]
  },
  "Kotlin": {
    "type": "programming",
    "extensions": [
      ".kt",
      ".ktm",
      ".kts"
    ]
  },
  "LFE": {
    "type": "programming",
    "extensions": [
      ".lfe"
    ],
    "color": "#004200",
    "lexer": "Common Lisp",
    "group": "Erlang"
  },
  "LLVM": {
    "extensions": [
      ".ll"
    ]
  },
  "LabVIEW": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".lvproj"
    ]
  },
  "Lasso": {
    "type": "programming",
    "lexer": "Lasso",
    "color": "#2584c3",
    "extensions": [
      ".lasso",
      ".las",
      ".lasso9",
      ".ldml"
    ]
  },
  "Latte": {
    "type": "markup",
    "color": "#A8FF97",
    "group": "HTML",
    "lexer": "Smarty",
    "extensions": [
      ".latte"
    ]
  },
  "Less": {
    "type": "markup",
    "group": "CSS",
    "lexer": "CSS",
    "extensions": [
      ".less"
    ]
  },
  "LilyPond": {
    "lexer": "Text only",
    "extensions": [
      ".ly",
      ".ily"
    ]
  },
  "Liquid": {
    "type": "markup",
    "lexer": "Text only",
    "extensions": [
      ".liquid"
    ]
  },
  "Literate Agda": {
    "type": "programming",
    "group": "Agda",
    "extensions": [
      ".lagda"
    ]
  },
  "Literate CoffeeScript": {
    "type": "programming",
    "group": "CoffeeScript",
    "lexer": "Text only",
    "aceMode": "markdown",
    "wrap": true,
    "searchTerm": "litcoffee",
    "aliases": [
      "litcoffee"
    ],
    "extensions": [
      ".litcoffee"
    ]
  },
  "Literate Haskell": {
    "type": "programming",
    "group": "Haskell",
    "searchTerm": "lhs",
    "aliases": [
      "lhs"
    ],
    "extensions": [
      ".lhs"
    ]
  },
  "LiveScript": {
    "type": "programming",
    "aceMode": "ls",
    "color": "#499886",
    "aliases": [
      "ls"
    ],
    "extensions": [
      ".ls",
      "._ls"
    ],
    "filenames": [
      "Slakefile"
    ]
  },
  "Logos": {
    "type": "programming",
    "extensions": [
      ".xm"
    ]
  },
  "Logtalk": {
    "type": "programming",
    "extensions": [
      ".lgt",
      ".logtalk"
    ]
  },
  "LookML": {
    "type": "programming",
    "lexer": "YAML",
    "aceMode": "yaml",
    "color": "#652B81",
    "extensions": [
      ".lookml"
    ]
  },
  "Lua": {
    "type": "programming",
    "aceMode": "lua",
    "color": "#fa1fa1",
    "extensions": [
      ".lua",
      ".nse",
      ".pd_lua",
      ".rbxs"
    ],
    "interpreters": [
      "lua"
    ]
  },
  "M": {
    "type": "programming",
    "lexer": "Common Lisp",
    "aliases": [
      "mumps"
    ],
    "extensions": [
      ".mumps",
      ".m"
    ]
  },
  "MTML": {
    "type": "markup",
    "lexer": "HTML",
    "color": "#0095d9",
    "extensions": [
      ".mtml"
    ]
  },
  "Makefile": {
    "aliases": [
      "make"
    ],
    "extensions": [
      ".mak",
      ".mk"
    ],
    "filenames": [
      "makefile",
      "Makefile",
      "GNUmakefile"
    ],
    "interpreters": [
      "make"
    ]
  },
  "Mako": {
    "extensions": [
      ".mako",
      ".mao"
    ]
  },
  "Markdown": {
    "type": "prose",
    "lexer": "Text only",
    "aceMode": "markdown",
    "wrap": true,
    "extensions": [
      ".md",
      ".markdown",
      ".mkd",
      ".mkdn",
      ".mkdown",
      ".ron"
    ]
  },
  "Mask": {
    "type": "markup",
    "lexer": "SCSS",
    "color": "#f97732",
    "aceMode": "scss",
    "extensions": [
      ".mask"
    ]
  },
  "Mathematica": {
    "type": "programming",
    "extensions": [
      ".mathematica",
      ".m",
      ".nb"
    ],
    "lexer": "Text only"
  },
  "Matlab": {
    "type": "programming",
    "color": "#bb92ac",
    "extensions": [
      ".matlab",
      ".m"
    ]
  },
  "Max": {
    "type": "programming",
    "color": "#ce279c",
    "lexer": "JSON",
    "aliases": [
      "max/msp",
      "maxmsp"
    ],
    "searchTerm": "max/msp",
    "extensions": [
      ".maxpat",
      ".maxhelp",
      ".maxproj",
      ".mxt",
      ".pat"
    ]
  },
  "MediaWiki": {
    "type": "prose",
    "lexer": "Text only",
    "wrap": true,
    "extensions": [
      ".mediawiki"
    ]
  },
  "Mercury": {
    "type": "programming",
    "color": "#abcdef",
    "lexer": "Prolog",
    "aceMode": "prolog",
    "extensions": [
      ".m",
      ".moo"
    ]
  },
  "MiniD": {
    "searchable": false,
    "extensions": [
      ".minid"
    ]
  },
  "Mirah": {
    "type": "programming",
    "lexer": "Ruby",
    "searchTerm": "mirah",
    "color": "#c7a938",
    "extensions": [
      ".druby",
      ".duby",
      ".mir",
      ".mirah"
    ]
  },
  "Monkey": {
    "type": "programming",
    "lexer": "Monkey",
    "extensions": [
      ".monkey"
    ]
  },
  "Moocode": {
    "type": "programming",
    "lexer": "MOOCode",
    "extensions": [
      ".moo"
    ]
  },
  "MoonScript": {
    "type": "programming",
    "extensions": [
      ".moon"
    ]
  },
  "Myghty": {
    "extensions": [
      ".myt"
    ]
  },
  "NSIS": {
    "extensions": [
      ".nsi",
      ".nsh"
    ]
  },
  "Nemerle": {
    "type": "programming",
    "color": "#0d3c6e",
    "extensions": [
      ".n"
    ]
  },
  "NetLogo": {
    "type": "programming",
    "lexer": "Common Lisp",
    "color": "#ff2b2b",
    "extensions": [
      ".nlogo"
    ]
  },
  "Nginx": {
    "type": "markup",
    "lexer": "Nginx configuration file",
    "extensions": [
      ".nginxconf"
    ]
  },
  "Nimrod": {
    "type": "programming",
    "color": "#37775b",
    "extensions": [
      ".nim",
      ".nimrod"
    ]
  },
  "Nit": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#0d8921",
    "extensions": [
      ".nit"
    ]
  },
  "Nix": {
    "type": "programming",
    "lexer": "Nix",
    "extensions": [
      ".nix"
    ]
  },
  "Nu": {
    "type": "programming",
    "lexer": "Scheme",
    "color": "#c9df40",
    "aliases": [
      "nush"
    ],
    "extensions": [
      ".nu"
    ],
    "filenames": [
      "Nukefile"
    ]
  },
  "NumPy": {
    "group": "Python",
    "extensions": [
      ".numpy",
      ".numpyw",
      ".numsc"
    ]
  },
  "OCaml": {
    "type": "programming",
    "aceMode": "ocaml",
    "color": "#3be133",
    "extensions": [
      ".ml",
      ".eliom",
      ".eliomi",
      ".ml4",
      ".mli",
      ".mll",
      ".mly"
    ]
  },
  "ObjDump": {
    "type": "data",
    "lexer": "objdump",
    "extensions": [
      ".objdump"
    ]
  },
  "Objective-C": {
    "type": "programming",
    "color": "#438eff",
    "aliases": [
      "obj-c",
      "objc"
    ],
    "extensions": [
      ".m",
      ".h"
    ]
  },
  "Objective-C++": {
    "type": "programming",
    "color": "#4886FC",
    "aliases": [
      "obj-c++",
      "objc++"
    ],
    "extensions": [
      ".mm"
    ]
  },
  "Objective-J": {
    "type": "programming",
    "color": "#ff0c5a",
    "aliases": [
      "obj-j"
    ],
    "extensions": [
      ".j",
      ".sj"
    ]
  },
  "Omgrofl": {
    "type": "programming",
    "extensions": [
      ".omgrofl"
    ],
    "color": "#cabbff",
    "lexer": "Text only"
  },
  "Opa": {
    "type": "programming",
    "extensions": [
      ".opa"
    ]
  },
  "OpenCL": {
    "type": "programming",
    "group": "C",
    "lexer": "C",
    "extensions": [
      ".cl",
      ".opencl"
    ]
  },
  "OpenEdge ABL": {
    "type": "programming",
    "aliases": [
      "progress",
      "openedge",
      "abl"
    ],
    "extensions": [
      ".p",
      ".cls"
    ]
  },
  "OpenSCAD": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".scad"
    ]
  },
  "Org": {
    "type": "prose",
    "lexer": "Text only",
    "wrap": true,
    "extensions": [
      ".org"
    ]
  },
  "Ox": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".ox",
      ".oxh",
      ".oxo"
    ]
  },
  "Oxygene": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#5a63a3",
    "extensions": [
      ".oxygene"
    ]
  },
  "PAWN": {
    "type": "programming",
    "lexer": "C++",
    "color": "#dbb284",
    "extensions": [
      ".pwn"
    ]
  },
  "PHP": {
    "type": "programming",
    "aceMode": "php",
    "color": "#4F5D95",
    "extensions": [
      ".php",
      ".aw",
      ".ctp",
      ".module",
      ".php3",
      ".php4",
      ".php5",
      ".phpt"
    ],
    "filenames": [
      "Phakefile"
    ],
    "interpreters": [
      "php"
    ]
  },
  "Pan": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#cc0000",
    "extensions": [
      ".pan"
    ]
  },
  "Parrot": {
    "type": "programming",
    "color": "#f3ca0a",
    "lexer": "Text only",
    "extensions": [
      ".parrot"
    ]
  },
  "Parrot Internal Representation": {
    "group": "Parrot",
    "type": "programming",
    "lexer": "Text only",
    "aliases": [
      "pir"
    ],
    "extensions": [
      ".pir"
    ]
  },
  "Parrot Assembly": {
    "group": "Parrot",
    "type": "programming",
    "lexer": "Text only",
    "aliases": [
      "pasm"
    ],
    "extensions": [
      ".pasm"
    ]
  },
  "Pascal": {
    "type": "programming",
    "lexer": "Delphi",
    "color": "#b0ce4e",
    "extensions": [
      ".pas",
      ".dfm",
      ".dpr",
      ".lpr"
    ]
  },
  "Perl": {
    "type": "programming",
    "aceMode": "perl",
    "color": "#0298c3",
    "extensions": [
      ".pl",
      ".PL",
      ".cgi",
      ".fcgi",
      ".perl",
      ".ph",
      ".plx",
      ".pm",
      ".pod",
      ".psgi",
      ".t"
    ],
    "interpreters": [
      "perl"
    ]
  },
  "Perl6": {
    "type": "programming",
    "color": "#0298c3",
    "extensions": [
      ".p6",
      ".6pl",
      ".6pm",
      ".nqp",
      ".p6l",
      ".p6m",
      ".pl6",
      ".pm6"
    ]
  },
  "Pike": {
    "type": "programming",
    "color": "#066ab2",
    "lexer": "Pike",
    "extensions": [
      ".pike",
      ".pmod"
    ]
  },
  "Pod": {
    "type": "prose",
    "lexer": "Text only",
    "aceMode": "perl",
    "wrap": true,
    "extensions": [
      ".pod"
    ]
  },
  "PogoScript": {
    "type": "programming",
    "color": "#d80074",
    "lexer": "Text only",
    "extensions": [
      ".pogo"
    ]
  },
  "PostScript": {
    "type": "markup",
    "extensions": [
      ".ps",
      ".eps"
    ]
  },
  "PowerShell": {
    "type": "programming",
    "aceMode": "powershell",
    "aliases": [
      "posh"
    ],
    "extensions": [
      ".ps1",
      ".psd1",
      ".psm1"
    ]
  },
  "Processing": {
    "type": "programming",
    "lexer": "Java",
    "color": "#2779ab",
    "extensions": [
      ".pde"
    ]
  },
  "Prolog": {
    "type": "programming",
    "color": "#74283c",
    "extensions": [
      ".prolog",
      ".ecl",
      ".pl"
    ]
  },
  "Propeller Spin": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#2b446d",
    "extensions": [
      ".spin"
    ]
  },
  "Protocol Buffer": {
    "type": "markup",
    "aliases": [
      "protobuf",
      "Protocol Buffers"
    ],
    "extensions": [
      ".proto"
    ]
  },
  "Puppet": {
    "type": "programming",
    "color": "#cc5555",
    "extensions": [
      ".pp"
    ],
    "filenames": [
      "Modulefile"
    ]
  },
  "Pure Data": {
    "type": "programming",
    "color": "#91de79",
    "lexer": "Text only",
    "extensions": [
      ".pd"
    ]
  },
  "PureScript": {
    "type": "programming",
    "color": "#bcdc53",
    "lexer": "Haskell",
    "extensions": [
      ".purs"
    ]
  },
  "Python": {
    "type": "programming",
    "aceMode": "python",
    "color": "#3581ba",
    "extensions": [
      ".py",
      ".gyp",
      ".lmi",
      ".pyde",
      ".pyp",
      ".pyt",
      ".pyw",
      ".wsgi",
      ".xpy"
    ],
    "filenames": [
      "wscript",
      "SConstruct",
      "SConscript"
    ],
    "interpreters": [
      "python"
    ]
  },
  "Python traceback": {
    "type": "data",
    "group": "Python",
    "lexer": "Python Traceback",
    "searchable": false,
    "extensions": [
      ".pytb"
    ]
  },
  "QML": {
    "type": "markup",
    "color": "#44a51c",
    "extensions": [
      ".qml"
    ]
  },
  "QMake": {
    "lexer": "Text only",
    "extensions": [
      ".pro",
      ".pri"
    ]
  },
  "R": {
    "type": "programming",
    "color": "#198ce7",
    "lexer": "S",
    "aliases": [
      "R",
      "Rscript"
    ],
    "extensions": [
      ".r",
      ".R",
      ".Rd",
      ".rd",
      ".rsx"
    ],
    "filenames": [
      ".Rprofile"
    ],
    "interpreters": [
      "Rscript"
    ]
  },
  "RDoc": {
    "type": "prose",
    "lexer": "Text only",
    "aceMode": "rdoc",
    "wrap": true,
    "extensions": [
      ".rdoc"
    ]
  },
  "REALbasic": {
    "type": "programming",
    "lexer": "VB.net",
    "extensions": [
      ".rbbas",
      ".rbfrm",
      ".rbmnu",
      ".rbres",
      ".rbtbar",
      ".rbuistate"
    ]
  },
  "RHTML": {
    "type": "markup",
    "group": "HTML",
    "extensions": [
      ".rhtml"
    ]
  },
  "RMarkdown": {
    "type": "prose",
    "lexer": "Text only",
    "wrap": true,
    "aceMode": "markdown",
    "extensions": [
      ".rmd",
      ".Rmd"
    ]
  },
  "Racket": {
    "type": "programming",
    "lexer": "Racket",
    "color": "#ae17ff",
    "extensions": [
      ".rkt",
      ".rktd",
      ".rktl",
      ".scrbl"
    ]
  },
  "Ragel in Ruby Host": {
    "type": "programming",
    "lexer": "Ragel in Ruby Host",
    "color": "#ff9c2e",
    "extensions": [
      ".rl"
    ]
  },
  "Raw token data": {
    "searchTerm": "raw",
    "aliases": [
      "raw"
    ],
    "extensions": [
      ".raw"
    ]
  },
  "Rebol": {
    "type": "programming",
    "lexer": "REBOL",
    "color": "#358a5b",
    "extensions": [
      ".reb",
      ".r",
      ".r2",
      ".r3",
      ".rebol"
    ]
  },
  "Red": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#ee0000",
    "extensions": [
      ".red",
      ".reds"
    ]
  },
  "Redcode": {
    "extensions": [
      ".cw"
    ]
  },
  "RobotFramework": {
    "type": "programming",
    "extensions": [
      ".robot"
    ]
  },
  "Rouge": {
    "type": "programming",
    "lexer": "Clojure",
    "aceMode": "clojure",
    "color": "#cc0088",
    "extensions": [
      ".rg"
    ]
  },
  "Ruby": {
    "type": "programming",
    "aceMode": "ruby",
    "color": "#701516",
    "aliases": [
      "jruby",
      "macruby",
      "rake",
      "rb",
      "rbx"
    ],
    "extensions": [
      ".rb",
      ".builder",
      ".gemspec",
      ".god",
      ".irbrc",
      ".mspec",
      ".pluginspec",
      ".podspec",
      ".rabl",
      ".rake",
      ".rbuild",
      ".rbw",
      ".rbx",
      ".ru",
      ".thor",
      ".watchr"
    ],
    "interpreters": [
      "ruby"
    ],
    "filenames": [
      ".pryrc",
      "Appraisals",
      "Berksfile",
      "Buildfile",
      "Gemfile",
      "Gemfile.lock",
      "Guardfile",
      "Jarfile",
      "Mavenfile",
      "Podfile",
      "Puppetfile",
      "Thorfile",
      "Vagrantfile",
      "buildfile"
    ]
  },
  "Rust": {
    "type": "programming",
    "color": "#dea584",
    "extensions": [
      ".rs"
    ]
  },
  "SAS": {
    "type": "programming",
    "color": "#1E90FF",
    "lexer": "Text only",
    "extensions": [
      ".sas"
    ]
  },
  "SCSS": {
    "type": "markup",
    "group": "CSS",
    "aceMode": "scss",
    "extensions": [
      ".scss"
    ]
  },
  "SQF": {
    "type": "programming",
    "color": "#FFCB1F",
    "lexer": "C++",
    "extensions": [
      ".sqf",
      ".hqf"
    ]
  },
  "SQL": {
    "type": "data",
    "aceMode": "sql",
    "extensions": [
      ".sql",
      ".prc",
      ".tab",
      ".udf",
      ".viw"
    ]
  },
  "STON": {
    "type": "data",
    "group": "Smalltalk",
    "lexer": "JSON",
    "extensions": [
      ".ston"
    ]
  },
  "Sage": {
    "type": "programming",
    "lexer": "Python",
    "group": "Python",
    "extensions": [
      ".sage"
    ]
  },
  "Sass": {
    "type": "markup",
    "group": "CSS",
    "extensions": [
      ".sass",
      ".scss"
    ]
  },
  "Scala": {
    "type": "programming",
    "aceMode": "scala",
    "color": "#7dd3b0",
    "extensions": [
      ".scala",
      ".sbt",
      ".sc"
    ]
  },
  "Scaml": {
    "group": "HTML",
    "type": "markup",
    "extensions": [
      ".scaml"
    ]
  },
  "Scheme": {
    "type": "programming",
    "color": "#1e4aec",
    "extensions": [
      ".scm",
      ".sld",
      ".sls",
      ".sps",
      ".ss"
    ],
    "interpreters": [
      "guile",
      "racket",
      "bigloo",
      "chicken"
    ]
  },
  "Scilab": {
    "type": "programming",
    "extensions": [
      ".sci",
      ".sce",
      ".tst"
    ]
  },
  "Self": {
    "type": "programming",
    "color": "#0579aa",
    "lexer": "Text only",
    "extensions": [
      ".self"
    ]
  },
  "Shell": {
    "type": "programming",
    "lexer": "Bash",
    "searchTerm": "bash",
    "color": "#5861ce",
    "aliases": [
      "sh",
      "bash",
      "zsh"
    ],
    "extensions": [
      ".sh",
      ".bash",
      ".bats",
      ".tmux",
      ".zsh"
    ],
    "interpreters": [
      "bash",
      "sh",
      "zsh"
    ],
    "filenames": [
      "Dockerfile"
    ]
  },
  "ShellSession": {
    "type": "programming",
    "lexer": "Bash Session",
    "extensions": [
      ".sh-session"
    ]
  },
  "Shen": {
    "type": "programming",
    "color": "#120F14",
    "lexer": "Text only",
    "extensions": [
      ".shen"
    ]
  },
  "Slash": {
    "type": "programming",
    "color": "#007eff",
    "extensions": [
      ".sl"
    ]
  },
  "Slim": {
    "group": "HTML",
    "type": "markup",
    "lexer": "Slim",
    "color": "#ff8877",
    "extensions": [
      ".slim"
    ]
  },
  "Smalltalk": {
    "type": "programming",
    "color": "#596706",
    "extensions": [
      ".st"
    ]
  },
  "Smarty": {
    "extensions": [
      ".tpl"
    ]
  },
  "SourcePawn": {
    "type": "programming",
    "color": "#f69e1d",
    "aliases": [
      "sourcemod"
    ],
    "extensions": [
      ".sp"
    ]
  },
  "Squirrel": {
    "type": "programming",
    "lexer": "C++",
    "extensions": [
      ".nut"
    ]
  },
  "Standard ML": {
    "type": "programming",
    "color": "#dc566d",
    "aliases": [
      "sml"
    ],
    "extensions": [
      ".ML",
      ".fun",
      ".sig",
      ".sml"
    ]
  },
  "Stata": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".do",
      ".ado",
      ".doh",
      ".ihlp",
      ".mata",
      ".matah",
      ".sthlp"
    ]
  },
  "Stylus": {
    "type": "markup",
    "group": "CSS",
    "lexer": "Text only",
    "extensions": [
      ".styl"
    ]
  },
  "SuperCollider": {
    "type": "programming",
    "color": "#46390b",
    "lexer": "Text only",
    "extensions": [
      ".scd"
    ]
  },
  "Swift": {
    "type": "programming",
    "lexer": "Swift",
    "color": "#ffac45",
    "extensions": [
      ".swift"
    ]
  },
  "SystemVerilog": {
    "type": "programming",
    "color": "#343761",
    "lexer": "systemverilog",
    "extensions": [
      ".sv",
      ".svh",
      ".vh"
    ]
  },
  "TOML": {
    "type": "data",
    "extensions": [
      ".toml"
    ]
  },
  "TXL": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".txl"
    ]
  },
  "Tcl": {
    "type": "programming",
    "color": "#e4cc98",
    "extensions": [
      ".tcl",
      ".adp",
      ".tm"
    ]
  },
  "Tcsh": {
    "type": "programming",
    "group": "Shell",
    "extensions": [
      ".tcsh",
      ".csh"
    ]
  },
  "TeX": {
    "type": "markup",
    "color": "#3D6117",
    "aceMode": "latex",
    "wrap": true,
    "aliases": [
      "latex"
    ],
    "extensions": [
      ".tex",
      ".aux",
      ".bbx",
      ".bib",
      ".cbx",
      ".cls",
      ".dtx",
      ".ins",
      ".lbx",
      ".ltx",
      ".mkii",
      ".mkiv",
      ".mkvi",
      ".sty",
      ".toc"
    ]
  },
  "Tea": {
    "type": "markup",
    "extensions": [
      ".tea"
    ]
  },
  "Textile": {
    "type": "prose",
    "lexer": "Text only",
    "aceMode": "textile",
    "wrap": true,
    "extensions": [
      ".textile"
    ]
  },
  "Turing": {
    "type": "programming",
    "color": "#45f715",
    "lexer": "Text only",
    "extensions": [
      ".t",
      ".tu"
    ]
  },
  "Twig": {
    "type": "markup",
    "group": "PHP",
    "lexer": "HTML+Django/Jinja",
    "extensions": [
      ".twig"
    ]
  },
  "TypeScript": {
    "type": "programming",
    "color": "#31859c",
    "aliases": [
      "ts"
    ],
    "extensions": [
      ".ts"
    ]
  },
  "Unified Parallel C": {
    "type": "programming",
    "group": "C",
    "lexer": "C",
    "aceMode": "c_cpp",
    "color": "#755223",
    "extensions": [
      ".upc"
    ]
  },
  "UnrealScript": {
    "type": "programming",
    "color": "#a54c4d",
    "lexer": "Java",
    "extensions": [
      ".uc"
    ]
  },
  "VCL": {
    "type": "programming",
    "lexer": "Perl",
    "aceMode": "perl",
    "color": "#0298c3",
    "extensions": [
      ".vcl"
    ]
  },
  "VHDL": {
    "type": "programming",
    "lexer": "vhdl",
    "color": "#543978",
    "extensions": [
      ".vhdl",
      ".vhd",
      ".vhf",
      ".vhi",
      ".vho",
      ".vhs",
      ".vht",
      ".vhw"
    ]
  },
  "Vala": {
    "type": "programming",
    "color": "#ee7d06",
    "extensions": [
      ".vala",
      ".vapi"
    ]
  },
  "Verilog": {
    "type": "programming",
    "lexer": "verilog",
    "color": "#848bf3",
    "extensions": [
      ".v",
      ".veo"
    ]
  },
  "VimL": {
    "type": "programming",
    "color": "#199c4b",
    "searchTerm": "vim",
    "aliases": [
      "vim"
    ],
    "extensions": [
      ".vim"
    ],
    "filenames": [
      ".vimrc",
      "vimrc",
      "gvimrc"
    ]
  },
  "Visual Basic": {
    "type": "programming",
    "lexer": "VB.net",
    "color": "#945db7",
    "extensions": [
      ".vb",
      ".bas",
      ".cls",
      ".frm",
      ".frx",
      ".vba",
      ".vbhtml",
      ".vbs"
    ]
  },
  "Volt": {
    "type": "programming",
    "lexer": "D",
    "color": "#0098db",
    "extensions": [
      ".volt"
    ]
  },
  "XC": {
    "type": "programming",
    "lexer": "C",
    "extensions": [
      ".xc"
    ]
  },
  "XML": {
    "type": "markup",
    "aceMode": "xml",
    "aliases": [
      "rss",
      "xsd",
      "wsdl"
    ],
    "extensions": [
      ".xml",
      ".ant",
      ".axml",
      ".ccxml",
      ".clixml",
      ".cproject",
      ".csproj",
      ".ct",
      ".dita",
      ".ditamap",
      ".ditaval",
      ".filters",
      ".fsproj",
      ".glade",
      ".grxml",
      ".ivy",
      ".jelly",
      ".kml",
      ".launch",
      ".mxml",
      ".nproj",
      ".nuspec",
      ".osm",
      ".plist",
      ".pluginspec",
      ".ps1xml",
      ".psc1",
      ".pt",
      ".rdf",
      ".rss",
      ".scxml",
      ".srdf",
      ".svg",
      ".targets",
      ".tmCommand",
      ".tmLanguage",
      ".tmPreferences",
      ".tmSnippet",
      ".tmTheme",
      ".tml",
      ".ui",
      ".urdf",
      ".vbproj",
      ".vcxproj",
      ".vxml",
      ".wsdl",
      ".wxi",
      ".wxl",
      ".wxs",
      ".x3d",
      ".xacro",
      ".xaml",
      ".xlf",
      ".xliff",
      ".xmi",
      ".xsd",
      ".xul",
      ".zcml"
    ],
    "filenames": [
      ".classpath",
      ".project",
      "phpunit.xml.dist"
    ]
  },
  "XProc": {
    "type": "programming",
    "lexer": "XML",
    "extensions": [
      ".xpl",
      ".xproc"
    ]
  },
  "XQuery": {
    "type": "programming",
    "color": "#2700e2",
    "extensions": [
      ".xquery",
      ".xq",
      ".xql",
      ".xqm",
      ".xqy"
    ]
  },
  "XS": {
    "lexer": "C",
    "extensions": [
      ".xs"
    ]
  },
  "XSLT": {
    "type": "programming",
    "aliases": [
      "xsl"
    ],
    "extensions": [
      ".xslt",
      ".xsl"
    ]
  },
  "Xojo": {
    "type": "programming",
    "lexer": "VB.net",
    "extensions": [
      ".xojo_code",
      ".xojo_menu",
      ".xojo_report",
      ".xojo_script",
      ".xojo_toolbar",
      ".xojo_window"
    ]
  },
  "Xtend": {
    "type": "programming",
    "extensions": [
      ".xtend"
    ]
  },
  "YAML": {
    "type": "data",
    "aliases": [
      "yml"
    ],
    "extensions": [
      ".yml",
      ".reek",
      ".rviz",
      ".yaml"
    ]
  },
  "Zephir": {
    "type": "programming",
    "lexer": "PHP",
    "color": "#118f9e",
    "extensions": [
      ".zep"
    ]
  },
  "Zimpl": {
    "type": "programming",
    "lexer": "Text only",
    "extensions": [
      ".zimpl",
      ".zmpl",
      ".zpl"
    ]
  },
  "eC": {
    "type": "programming",
    "searchTerm": "ec",
    "extensions": [
      ".ec",
      ".eh"
    ]
  },
  "edn": {
    "type": "data",
    "lexer": "Clojure",
    "aceMode": "clojure",
    "color": "#db5855",
    "extensions": [
      ".edn"
    ]
  },
  "fish": {
    "type": "programming",
    "group": "Shell",
    "lexer": "Text only",
    "extensions": [
      ".fish"
    ]
  },
  "mupad": {
    "lexer": "MuPAD",
    "extensions": [
      ".mu"
    ]
  },
  "nesC": {
    "type": "programming",
    "color": "#ffce3b",
    "lexer": "nesC",
    "extensions": [
      ".nc"
    ]
  },
  "ooc": {
    "type": "programming",
    "lexer": "Ooc",
    "color": "#b0b77e",
    "extensions": [
      ".ooc"
    ]
  },
  "reStructuredText": {
    "type": "prose",
    "wrap": true,
    "searchTerm": "rst",
    "aliases": [
      "rst"
    ],
    "extensions": [
      ".rst",
      ".rest"
    ]
  },
  "wisp": {
    "type": "programming",
    "lexer": "Clojure",
    "aceMode": "clojure",
    "color": "#7582D1",
    "extensions": [
      ".wisp"
    ]
  },
  "xBase": {
    "type": "programming",
    "lexer": "Text only",
    "color": "#3a4040",
    "extensions": [
      ".prg"
    ]
  }
}
},{}],8:[function(require,module,exports){
function cx(n){return"object"==typeof n?Object.keys(n).map(function(t){return n[t]?t:""}).join(" "):Array.prototype.filter.call(arguments,function(n){return"boolean"==typeof n||null===n||""===n||void 0===n||"number"==typeof n&&isNaN(n)?null:String(n)}).join(" ")}module.exports=cx;
},{}],9:[function(require,module,exports){
"use strict";var focusNode=require("./focusNode"),AutoFocusMixin={componentDidMount:function(){this.props.autoFocus&&focusNode(this.getDOMNode())}};module.exports=AutoFocusMixin;
},{"./focusNode":117}],10:[function(require,module,exports){
"use strict";function isPresto(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function isKeypressCommand(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("./ExecutionEnvironment"),SyntheticInputEvent=require("./SyntheticInputEvent"),keyOf=require("./keyOf"),canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&"TextEvent"in window&&!("documentMode"in document||isPresto()),SPACEBAR_CODE=32,SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE),topLevelTypes=EventConstants.topLevelTypes,eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]}},fallbackChars=null,hasSpaceKeypress=!1,BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,s){var r;if(canUseTextInputEvent)switch(e){case topLevelTypes.topKeyPress:var a=s.which;if(a!==SPACEBAR_CODE)return;hasSpaceKeypress=!0,r=SPACEBAR_CHAR;break;case topLevelTypes.topTextInput:if(r=s.data,r===SPACEBAR_CHAR&&hasSpaceKeypress)return;break;default:return}else{switch(e){case topLevelTypes.topPaste:fallbackChars=null;break;case topLevelTypes.topKeyPress:s.which&&!isKeypressCommand(s)&&(fallbackChars=String.fromCharCode(s.which));break;case topLevelTypes.topCompositionEnd:fallbackChars=s.data}if(null===fallbackChars)return;r=fallbackChars}if(r){var o=SyntheticInputEvent.getPooled(eventTypes.beforeInput,n,s);return o.data=r,fallbackChars=null,EventPropagators.accumulateTwoPhaseDispatches(o),o}}};module.exports=BeforeInputEventPlugin;
},{"./EventConstants":23,"./EventPropagators":28,"./ExecutionEnvironment":29,"./SyntheticInputEvent":95,"./keyOf":139}],11:[function(require,module,exports){
"use strict";function prefixKey(r,o){return r+o.charAt(0).toUpperCase()+o.substring(1)}var isUnitlessNumber={columnCount:!0,fillOpacity:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},prefixes=["Webkit","ms","Moz","O"];Object.keys(isUnitlessNumber).forEach(function(r){prefixes.forEach(function(o){isUnitlessNumber[prefixKey(o,r)]=isUnitlessNumber[r]})});var shorthandPropertyExpansions={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};module.exports=CSSProperty;
},{}],12:[function(require,module,exports){
"use strict";var CSSProperty=require("./CSSProperty"),ExecutionEnvironment=require("./ExecutionEnvironment"),camelizeStyleName=require("./camelizeStyleName"),dangerousStyleValue=require("./dangerousStyleValue"),hyphenateStyleName=require("./hyphenateStyleName"),memoizeStringOnly=require("./memoizeStringOnly"),warning=require("./warning"),processStyleName=memoizeStringOnly(function(e){return hyphenateStyleName(e)}),styleFloatAccessor="cssFloat";ExecutionEnvironment.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(styleFloatAccessor="styleFloat");var warnedStyleNames,warnHyphenatedStyleName,CSSPropertyOperations={createMarkupForStyles:function(e){var r="";for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];null!=n&&(r+=processStyleName(t)+":",r+=dangerousStyleValue(t,n)+";")}return r||null},setValueForStyles:function(e,r){var t=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=dangerousStyleValue(n,r[n]);if("float"===n&&(n=styleFloatAccessor),a)t[n]=a;else{var o=CSSProperty.shorthandPropertyExpansions[n];if(o)for(var l in o)t[l]="";else t[n]=""}}}};module.exports=CSSPropertyOperations;
},{"./CSSProperty":11,"./ExecutionEnvironment":29,"./camelizeStyleName":106,"./dangerousStyleValue":111,"./hyphenateStyleName":130,"./memoizeStringOnly":141,"./warning":149}],13:[function(require,module,exports){
"use strict";function CallbackQueue(){this._callbacks=null,this._contexts=null}var PooledClass=require("./PooledClass"),assign=require("./Object.assign"),invariant=require("./invariant");assign(CallbackQueue.prototype,{enqueue:function(t,l){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(t),this._contexts.push(l)},notifyAll:function(){var t=this._callbacks,l=this._contexts;if(t){invariant(t.length===l.length),this._callbacks=null,this._contexts=null;for(var s=0,e=t.length;e>s;s++)t[s].call(l[s]);t.length=0,l.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),PooledClass.addPoolingTo(CallbackQueue),module.exports=CallbackQueue;
},{"./Object.assign":34,"./PooledClass":35,"./invariant":132}],14:[function(require,module,exports){
"use strict";function shouldUseChangeEvent(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function manualDispatchChangeEvent(e){var t=SyntheticEvent.getPooled(eventTypes.change,activeElementID,e);EventPropagators.accumulateTwoPhaseDispatches(t),ReactUpdates.batchedUpdates(runEventInBatch,t)}function runEventInBatch(e){EventPluginHub.enqueueEvents(e),EventPluginHub.processEventQueue()}function startWatchingForChangeEventIE8(e,t){activeElement=e,activeElementID=t,activeElement.attachEvent("onchange",manualDispatchChangeEvent)}function stopWatchingForChangeEventIE8(){activeElement&&(activeElement.detachEvent("onchange",manualDispatchChangeEvent),activeElement=null,activeElementID=null)}function getTargetIDForChangeEvent(e,t,n){return e===topLevelTypes.topChange?n:void 0}function handleEventsForChangeEventIE8(e,t,n){e===topLevelTypes.topFocus?(stopWatchingForChangeEventIE8(),startWatchingForChangeEventIE8(t,n)):e===topLevelTypes.topBlur&&stopWatchingForChangeEventIE8()}function startWatchingForValueChange(e,t){activeElement=e,activeElementID=t,activeElementValue=e.value,activeElementValueProp=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(activeElement,"value",newValueProp),activeElement.attachEvent("onpropertychange",handlePropertyChange)}function stopWatchingForValueChange(){activeElement&&(delete activeElement.value,activeElement.detachEvent("onpropertychange",handlePropertyChange),activeElement=null,activeElementID=null,activeElementValue=null,activeElementValueProp=null)}function handlePropertyChange(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==activeElementValue&&(activeElementValue=t,manualDispatchChangeEvent(e))}}function getTargetIDForInputEvent(e,t,n){return e===topLevelTypes.topInput?n:void 0}function handleEventsForInputEventIE(e,t,n){e===topLevelTypes.topFocus?(stopWatchingForValueChange(),startWatchingForValueChange(t,n)):e===topLevelTypes.topBlur&&stopWatchingForValueChange()}function getTargetIDForInputEventIE(e){return e!==topLevelTypes.topSelectionChange&&e!==topLevelTypes.topKeyUp&&e!==topLevelTypes.topKeyDown||!activeElement||activeElement.value===activeElementValue?void 0:(activeElementValue=activeElement.value,activeElementID)}function shouldUseClickEvent(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function getTargetIDForClickEvent(e,t,n){return e===topLevelTypes.topClick?n:void 0}var EventConstants=require("./EventConstants"),EventPluginHub=require("./EventPluginHub"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("./ExecutionEnvironment"),ReactUpdates=require("./ReactUpdates"),SyntheticEvent=require("./SyntheticEvent"),isEventSupported=require("./isEventSupported"),isTextInputElement=require("./isTextInputElement"),keyOf=require("./keyOf"),topLevelTypes=EventConstants.topLevelTypes,eventTypes={change:{phasedRegistrationNames:{bubbled:keyOf({onChange:null}),captured:keyOf({onChangeCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topChange,topLevelTypes.topClick,topLevelTypes.topFocus,topLevelTypes.topInput,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topSelectionChange]}},activeElement=null,activeElementID=null,activeElementValue=null,activeElementValueProp=null,doesChangeEventBubble=!1;ExecutionEnvironment.canUseDOM&&(doesChangeEventBubble=isEventSupported("change")&&(!("documentMode"in document)||document.documentMode>8));var isInputEventSupported=!1;ExecutionEnvironment.canUseDOM&&(isInputEventSupported=isEventSupported("input")&&(!("documentMode"in document)||document.documentMode>9));var newValueProp={get:function(){return activeElementValueProp.get.call(this)},set:function(e){activeElementValue=""+e,activeElementValueProp.set.call(this,e)}},ChangeEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,a){var o,l;if(shouldUseChangeEvent(t)?doesChangeEventBubble?o=getTargetIDForChangeEvent:l=handleEventsForChangeEventIE8:isTextInputElement(t)?isInputEventSupported?o=getTargetIDForInputEvent:(o=getTargetIDForInputEventIE,l=handleEventsForInputEventIE):shouldUseClickEvent(t)&&(o=getTargetIDForClickEvent),o){var u=o(e,t,n);if(u){var v=SyntheticEvent.getPooled(eventTypes.change,u,a);return EventPropagators.accumulateTwoPhaseDispatches(v),v}}l&&l(e,t,n)}};module.exports=ChangeEventPlugin;
},{"./EventConstants":23,"./EventPluginHub":25,"./EventPropagators":28,"./ExecutionEnvironment":29,"./ReactUpdates":85,"./SyntheticEvent":93,"./isEventSupported":133,"./isTextInputElement":135,"./keyOf":139}],15:[function(require,module,exports){
"use strict";var nextReactRootIndex=0,ClientReactRootIndex={createReactRootIndex:function(){return nextReactRootIndex++}};module.exports=ClientReactRootIndex;
},{}],16:[function(require,module,exports){
"use strict";function getCompositionEventType(e){switch(e){case topLevelTypes.topCompositionStart:return eventTypes.compositionStart;case topLevelTypes.topCompositionEnd:return eventTypes.compositionEnd;case topLevelTypes.topCompositionUpdate:return eventTypes.compositionUpdate}}function isFallbackStart(e,t){return e===topLevelTypes.topKeyDown&&t.keyCode===START_KEYCODE}function isFallbackEnd(e,t){switch(e){case topLevelTypes.topKeyUp:return-1!==END_KEYCODES.indexOf(t.keyCode);case topLevelTypes.topKeyDown:return t.keyCode!==START_KEYCODE;case topLevelTypes.topKeyPress:case topLevelTypes.topMouseDown:case topLevelTypes.topBlur:return!0;default:return!1}}function FallbackCompositionState(e){this.root=e,this.startSelection=ReactInputSelection.getSelection(e),this.startValue=this.getText()}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("./ExecutionEnvironment"),ReactInputSelection=require("./ReactInputSelection"),SyntheticCompositionEvent=require("./SyntheticCompositionEvent"),getTextContentAccessor=require("./getTextContentAccessor"),keyOf=require("./keyOf"),END_KEYCODES=[9,13,27,32],START_KEYCODE=229,useCompositionEvent=ExecutionEnvironment.canUseDOM&&"CompositionEvent"in window,useFallbackData=!useCompositionEvent||"documentMode"in document&&document.documentMode>8&&document.documentMode<=11,topLevelTypes=EventConstants.topLevelTypes,currentComposition=null,eventTypes={compositionEnd:{phasedRegistrationNames:{bubbled:keyOf({onCompositionEnd:null}),captured:keyOf({onCompositionEndCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionEnd,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:keyOf({onCompositionStart:null}),captured:keyOf({onCompositionStartCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionStart,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf({onCompositionUpdate:null}),captured:keyOf({onCompositionUpdateCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionUpdate,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]}};FallbackCompositionState.prototype.getText=function(){return this.root.value||this.root[getTextContentAccessor()]},FallbackCompositionState.prototype.getData=function(){var e=this.getText(),t=this.startSelection.start,o=this.startValue.length-this.startSelection.end;return e.substr(t,e.length-o-t)};var CompositionEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,o,n){var p,s;if(useCompositionEvent?p=getCompositionEventType(e):currentComposition?isFallbackEnd(e,n)&&(p=eventTypes.compositionEnd):isFallbackStart(e,n)&&(p=eventTypes.compositionStart),useFallbackData&&(currentComposition||p!==eventTypes.compositionStart?p===eventTypes.compositionEnd&&currentComposition&&(s=currentComposition.getData(),currentComposition=null):currentComposition=new FallbackCompositionState(t)),p){var i=SyntheticCompositionEvent.getPooled(p,o,n);return s&&(i.data=s),EventPropagators.accumulateTwoPhaseDispatches(i),i}}};module.exports=CompositionEventPlugin;
},{"./EventConstants":23,"./EventPropagators":28,"./ExecutionEnvironment":29,"./ReactInputSelection":65,"./SyntheticCompositionEvent":91,"./getTextContentAccessor":127,"./keyOf":139}],17:[function(require,module,exports){
"use strict";function insertChildAt(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var Danger=require("./Danger"),ReactMultiChildUpdateTypes=require("./ReactMultiChildUpdateTypes"),getTextContentAccessor=require("./getTextContentAccessor"),invariant=require("./invariant"),textContentAccessor=getTextContentAccessor(),updateTextContent;updateTextContent="textContent"===textContentAccessor?function(e,t){e.textContent=t}:function(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);if(t){var n=e.ownerDocument||document;e.appendChild(n.createTextNode(t))}};var DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:Danger.dangerouslyReplaceNodeWithMarkup,updateTextContent:updateTextContent,processUpdates:function(e,t){for(var n,r=null,a=null,i=0;n=e[i];i++)if(n.type===ReactMultiChildUpdateTypes.MOVE_EXISTING||n.type===ReactMultiChildUpdateTypes.REMOVE_NODE){var d=n.fromIndex,o=n.parentNode.childNodes[d],p=n.parentID;invariant(o),r=r||{},r[p]=r[p]||[],r[p][d]=o,a=a||[],a.push(o)}var s=Danger.dangerouslyRenderMarkup(t);if(a)for(var l=0;l<a.length;l++)a[l].parentNode.removeChild(a[l]);for(var c=0;n=e[c];c++)switch(n.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertChildAt(n.parentNode,s[n.markupIndex],n.toIndex);break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:insertChildAt(n.parentNode,r[n.parentID][n.fromIndex],n.toIndex);break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:updateTextContent(n.parentNode,n.textContent);break;case ReactMultiChildUpdateTypes.REMOVE_NODE:}}};module.exports=DOMChildrenOperations;
},{"./Danger":20,"./ReactMultiChildUpdateTypes":71,"./getTextContentAccessor":127,"./invariant":132}],18:[function(require,module,exports){
"use strict";function checkMask(e,t){return(e&t)===t}var invariant=require("./invariant"),DOMPropertyInjection={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},r=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},o=e.DOMMutationMethods||{};e.isCustomAttribute&&DOMProperty._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var i in t){invariant(!DOMProperty.isStandardName.hasOwnProperty(i)),DOMProperty.isStandardName[i]=!0;var s=i.toLowerCase();if(DOMProperty.getPossibleStandardName[s]=i,r.hasOwnProperty(i)){var n=r[i];DOMProperty.getPossibleStandardName[n]=i,DOMProperty.getAttributeName[i]=n}else DOMProperty.getAttributeName[i]=s;DOMProperty.getPropertyName[i]=a.hasOwnProperty(i)?a[i]:i,DOMProperty.getMutationMethod[i]=o.hasOwnProperty(i)?o[i]:null;var u=t[i];DOMProperty.mustUseAttribute[i]=checkMask(u,DOMPropertyInjection.MUST_USE_ATTRIBUTE),DOMProperty.mustUseProperty[i]=checkMask(u,DOMPropertyInjection.MUST_USE_PROPERTY),DOMProperty.hasSideEffects[i]=checkMask(u,DOMPropertyInjection.HAS_SIDE_EFFECTS),DOMProperty.hasBooleanValue[i]=checkMask(u,DOMPropertyInjection.HAS_BOOLEAN_VALUE),DOMProperty.hasNumericValue[i]=checkMask(u,DOMPropertyInjection.HAS_NUMERIC_VALUE),DOMProperty.hasPositiveNumericValue[i]=checkMask(u,DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE),DOMProperty.hasOverloadedBooleanValue[i]=checkMask(u,DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE),invariant(!DOMProperty.mustUseAttribute[i]||!DOMProperty.mustUseProperty[i]),invariant(DOMProperty.mustUseProperty[i]||!DOMProperty.hasSideEffects[i]),invariant(!!DOMProperty.hasBooleanValue[i]+!!DOMProperty.hasNumericValue[i]+!!DOMProperty.hasOverloadedBooleanValue[i]<=1)}}},defaultValueCache={},DOMProperty={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<DOMProperty._isCustomAttributeFunctions.length;t++){var r=DOMProperty._isCustomAttributeFunctions[t];if(r(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var r,a=defaultValueCache[e];return a||(defaultValueCache[e]=a={}),t in a||(r=document.createElement(e),a[t]=r[t]),a[t]},injection:DOMPropertyInjection};module.exports=DOMProperty;
},{"./invariant":132}],19:[function(require,module,exports){
"use strict";function shouldIgnoreValue(e,r){return null==r||DOMProperty.hasBooleanValue[e]&&!r||DOMProperty.hasNumericValue[e]&&isNaN(r)||DOMProperty.hasPositiveNumericValue[e]&&1>r||DOMProperty.hasOverloadedBooleanValue[e]&&r===!1}var DOMProperty=require("./DOMProperty"),escapeTextForBrowser=require("./escapeTextForBrowser"),memoizeStringOnly=require("./memoizeStringOnly"),warning=require("./warning"),processAttributeNameAndPrefix=memoizeStringOnly(function(e){return escapeTextForBrowser(e)+'="'}),reactProps,warnedProperties,warnUnknownProperty,DOMPropertyOperations={createMarkupForID:function(e){return processAttributeNameAndPrefix(DOMProperty.ID_ATTRIBUTE_NAME)+escapeTextForBrowser(e)+'"'},createMarkupForProperty:function(e,r){if(DOMProperty.isStandardName.hasOwnProperty(e)&&DOMProperty.isStandardName[e]){if(shouldIgnoreValue(e,r))return"";var t=DOMProperty.getAttributeName[e];return DOMProperty.hasBooleanValue[e]||DOMProperty.hasOverloadedBooleanValue[e]&&r===!0?escapeTextForBrowser(t):processAttributeNameAndPrefix(t)+escapeTextForBrowser(r)+'"'}return DOMProperty.isCustomAttribute(e)?null==r?"":processAttributeNameAndPrefix(e)+escapeTextForBrowser(r)+'"':null},setValueForProperty:function(e,r,t){if(DOMProperty.isStandardName.hasOwnProperty(r)&&DOMProperty.isStandardName[r]){var o=DOMProperty.getMutationMethod[r];if(o)o(e,t);else if(shouldIgnoreValue(r,t))this.deleteValueForProperty(e,r);else if(DOMProperty.mustUseAttribute[r])e.setAttribute(DOMProperty.getAttributeName[r],""+t);else{var a=DOMProperty.getPropertyName[r];DOMProperty.hasSideEffects[r]&&""+e[a]==""+t||(e[a]=t)}}else DOMProperty.isCustomAttribute(r)&&(null==t?e.removeAttribute(r):e.setAttribute(r,""+t))},deleteValueForProperty:function(e,r){if(DOMProperty.isStandardName.hasOwnProperty(r)&&DOMProperty.isStandardName[r]){var t=DOMProperty.getMutationMethod[r];if(t)t(e,void 0);else if(DOMProperty.mustUseAttribute[r])e.removeAttribute(DOMProperty.getAttributeName[r]);else{var o=DOMProperty.getPropertyName[r],a=DOMProperty.getDefaultValueForProperty(e.nodeName,o);DOMProperty.hasSideEffects[r]&&""+e[o]===a||(e[o]=a)}}else DOMProperty.isCustomAttribute(r)&&e.removeAttribute(r)}};module.exports=DOMPropertyOperations;
},{"./DOMProperty":18,"./escapeTextForBrowser":115,"./memoizeStringOnly":141,"./warning":149}],20:[function(require,module,exports){
"use strict";function getNodeName(e){return e.substring(1,e.indexOf(" "))}var ExecutionEnvironment=require("./ExecutionEnvironment"),createNodesFromMarkup=require("./createNodesFromMarkup"),emptyFunction=require("./emptyFunction"),getMarkupWrap=require("./getMarkupWrap"),invariant=require("./invariant"),OPEN_TAG_NAME_EXP=/^(<[^ \/>]+)/,RESULT_INDEX_ATTR="data-danger-index",Danger={dangerouslyRenderMarkup:function(e){invariant(ExecutionEnvironment.canUseDOM);for(var r,n={},t=0;t<e.length;t++)invariant(e[t]),r=getNodeName(e[t]),r=getMarkupWrap(r)?r:"*",n[r]=n[r]||[],n[r][t]=e[t];var a=[],i=0;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];for(var u in o)if(o.hasOwnProperty(u)){var p=o[u];o[u]=p.replace(OPEN_TAG_NAME_EXP,"$1 "+RESULT_INDEX_ATTR+'="'+u+'" ')}var v=createNodesFromMarkup(o.join(""),emptyFunction);for(t=0;t<v.length;++t){var E=v[t];E.hasAttribute&&E.hasAttribute(RESULT_INDEX_ATTR)&&(u=+E.getAttribute(RESULT_INDEX_ATTR),E.removeAttribute(RESULT_INDEX_ATTR),invariant(!a.hasOwnProperty(u)),a[u]=E,i+=1)}}return invariant(i===a.length),invariant(a.length===e.length),a},dangerouslyReplaceNodeWithMarkup:function(e,r){invariant(ExecutionEnvironment.canUseDOM),invariant(r),invariant("html"!==e.tagName.toLowerCase());var n=createNodesFromMarkup(r,emptyFunction)[0];e.parentNode.replaceChild(n,e)}};module.exports=Danger;
},{"./ExecutionEnvironment":29,"./createNodesFromMarkup":110,"./emptyFunction":113,"./getMarkupWrap":124,"./invariant":132}],21:[function(require,module,exports){
"use strict";var keyOf=require("./keyOf"),DefaultEventPluginOrder=[keyOf({ResponderEventPlugin:null}),keyOf({SimpleEventPlugin:null}),keyOf({TapEventPlugin:null}),keyOf({EnterLeaveEventPlugin:null}),keyOf({ChangeEventPlugin:null}),keyOf({SelectEventPlugin:null}),keyOf({CompositionEventPlugin:null}),keyOf({BeforeInputEventPlugin:null}),keyOf({AnalyticsEventPlugin:null}),keyOf({MobileSafariClickEventPlugin:null})];module.exports=DefaultEventPluginOrder;
},{"./keyOf":139}],22:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),SyntheticMouseEvent=require("./SyntheticMouseEvent"),ReactMount=require("./ReactMount"),keyOf=require("./keyOf"),topLevelTypes=EventConstants.topLevelTypes,getFirstReactDOM=ReactMount.getFirstReactDOM,eventTypes={mouseEnter:{registrationName:keyOf({onMouseEnter:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]},mouseLeave:{registrationName:keyOf({onMouseLeave:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]}},extractedEvents=[null,null],EnterLeaveEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,o){if(e===topLevelTypes.topMouseOver&&(o.relatedTarget||o.fromElement))return null;if(e!==topLevelTypes.topMouseOut&&e!==topLevelTypes.topMouseOver)return null;var r;if(t.window===t)r=t;else{var s=t.ownerDocument;r=s?s.defaultView||s.parentWindow:window}var a,u;if(e===topLevelTypes.topMouseOut?(a=t,u=getFirstReactDOM(o.relatedTarget||o.toElement)||r):(a=r,u=t),a===u)return null;var v=a?ReactMount.getID(a):"",p=u?ReactMount.getID(u):"",l=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,v,o);l.type="mouseleave",l.target=a,l.relatedTarget=u;var i=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,p,o);return i.type="mouseenter",i.target=u,i.relatedTarget=a,EventPropagators.accumulateEnterLeaveDispatches(l,i,v,p),extractedEvents[0]=l,extractedEvents[1]=i,extractedEvents}};module.exports=EnterLeaveEventPlugin;
},{"./EventConstants":23,"./EventPropagators":28,"./ReactMount":69,"./SyntheticMouseEvent":97,"./keyOf":139}],23:[function(require,module,exports){
"use strict";var keyMirror=require("./keyMirror"),PropagationPhases=keyMirror({bubbled:null,captured:null}),topLevelTypes=keyMirror({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),EventConstants={topLevelTypes:topLevelTypes,PropagationPhases:PropagationPhases};module.exports=EventConstants;
},{"./keyMirror":138}],24:[function(require,module,exports){
var emptyFunction=require("./emptyFunction"),EventListener={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:emptyFunction}},registerDefault:function(){}};module.exports=EventListener;
},{"./emptyFunction":113}],25:[function(require,module,exports){
"use strict";function validateInstanceHandle(){var e=!InstanceHandle||!InstanceHandle.traverseTwoPhase||!InstanceHandle.traverseEnterLeave;if(e)throw new Error("InstanceHandle not injected before use!")}var EventPluginRegistry=require("./EventPluginRegistry"),EventPluginUtils=require("./EventPluginUtils"),accumulateInto=require("./accumulateInto"),forEachAccumulated=require("./forEachAccumulated"),invariant=require("./invariant"),listenerBank={},eventQueue=null,executeDispatchesAndRelease=function(e){if(e){var n=EventPluginUtils.executeDispatch,t=EventPluginRegistry.getPluginModuleForEvent(e);t&&t.executeDispatch&&(n=t.executeDispatch),EventPluginUtils.executeDispatchesInOrder(e,n),e.isPersistent()||e.constructor.release(e)}},InstanceHandle=null,EventPluginHub={injection:{injectMount:EventPluginUtils.injection.injectMount,injectInstanceHandle:function(e){InstanceHandle=e},getInstanceHandle:function(){return InstanceHandle},injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder,injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},eventNameDispatchConfigs:EventPluginRegistry.eventNameDispatchConfigs,registrationNameModules:EventPluginRegistry.registrationNameModules,putListener:function(e,n,t){invariant(!t||"function"==typeof t);var i=listenerBank[n]||(listenerBank[n]={});i[e]=t},getListener:function(e,n){var t=listenerBank[n];return t&&t[e]},deleteListener:function(e,n){var t=listenerBank[n];t&&delete t[e]},deleteAllListeners:function(e){for(var n in listenerBank)delete listenerBank[n][e]},extractEvents:function(e,n,t,i){for(var u,r=EventPluginRegistry.plugins,a=0,s=r.length;s>a;a++){var l=r[a];if(l){var c=l.extractEvents(e,n,t,i);c&&(u=accumulateInto(u,c))}}return u},enqueueEvents:function(e){e&&(eventQueue=accumulateInto(eventQueue,e))},processEventQueue:function(){var e=eventQueue;eventQueue=null,forEachAccumulated(e,executeDispatchesAndRelease),invariant(!eventQueue)},__purge:function(){listenerBank={}},__getListenerBank:function(){return listenerBank}};module.exports=EventPluginHub;
},{"./EventPluginRegistry":26,"./EventPluginUtils":27,"./accumulateInto":103,"./forEachAccumulated":118,"./invariant":132}],26:[function(require,module,exports){
"use strict";function recomputePluginOrdering(){if(EventPluginOrder)for(var e in namesToPlugins){var n=namesToPlugins[e],i=EventPluginOrder.indexOf(e);if(invariant(i>-1),!EventPluginRegistry.plugins[i]){invariant(n.extractEvents),EventPluginRegistry.plugins[i]=n;var r=n.eventTypes;for(var t in r)invariant(publishEventForPlugin(r[t],n,t))}}}function publishEventForPlugin(e,n,i){invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(i)),EventPluginRegistry.eventNameDispatchConfigs[i]=e;var r=e.phasedRegistrationNames;if(r){for(var t in r)if(r.hasOwnProperty(t)){var a=r[t];publishRegistrationName(a,n,i)}return!0}return e.registrationName?(publishRegistrationName(e.registrationName,n,i),!0):!1}function publishRegistrationName(e,n,i){invariant(!EventPluginRegistry.registrationNameModules[e]),EventPluginRegistry.registrationNameModules[e]=n,EventPluginRegistry.registrationNameDependencies[e]=n.eventTypes[i].dependencies}var invariant=require("./invariant"),EventPluginOrder=null,namesToPlugins={},EventPluginRegistry={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){invariant(!EventPluginOrder),EventPluginOrder=Array.prototype.slice.call(e),recomputePluginOrdering()},injectEventPluginsByName:function(e){var n=!1;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i];namesToPlugins.hasOwnProperty(i)&&namesToPlugins[i]===r||(invariant(!namesToPlugins[i]),namesToPlugins[i]=r,n=!0)}n&&recomputePluginOrdering()},getPluginModuleForEvent:function(e){var n=e.dispatchConfig;if(n.registrationName)return EventPluginRegistry.registrationNameModules[n.registrationName]||null;for(var i in n.phasedRegistrationNames)if(n.phasedRegistrationNames.hasOwnProperty(i)){var r=EventPluginRegistry.registrationNameModules[n.phasedRegistrationNames[i]];if(r)return r}return null},_resetEventPlugins:function(){EventPluginOrder=null;for(var e in namesToPlugins)namesToPlugins.hasOwnProperty(e)&&delete namesToPlugins[e];EventPluginRegistry.plugins.length=0;var n=EventPluginRegistry.eventNameDispatchConfigs;for(var i in n)n.hasOwnProperty(i)&&delete n[i];var r=EventPluginRegistry.registrationNameModules;for(var t in r)r.hasOwnProperty(t)&&delete r[t]}};module.exports=EventPluginRegistry;
},{"./invariant":132}],27:[function(require,module,exports){
"use strict";function isEndish(e){return e===topLevelTypes.topMouseUp||e===topLevelTypes.topTouchEnd||e===topLevelTypes.topTouchCancel}function isMoveish(e){return e===topLevelTypes.topMouseMove||e===topLevelTypes.topTouchMove}function isStartish(e){return e===topLevelTypes.topMouseDown||e===topLevelTypes.topTouchStart}function forEachEventDispatch(e,t){var s=e._dispatchListeners,i=e._dispatchIDs;if(Array.isArray(s))for(var n=0;n<s.length&&!e.isPropagationStopped();n++)t(e,s[n],i[n]);else s&&t(e,s,i)}function executeDispatch(e,t,s){e.currentTarget=injection.Mount.getNode(s);var i=t(e,s);return e.currentTarget=null,i}function executeDispatchesInOrder(e,t){forEachEventDispatch(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function executeDispatchesInOrderStopAtTrueImpl(e){var t=e._dispatchListeners,s=e._dispatchIDs;if(Array.isArray(t)){for(var i=0;i<t.length&&!e.isPropagationStopped();i++)if(t[i](e,s[i]))return s[i]}else if(t&&t(e,s))return s;return null}function executeDispatchesInOrderStopAtTrue(e){var t=executeDispatchesInOrderStopAtTrueImpl(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function executeDirectDispatch(e){var t=e._dispatchListeners,s=e._dispatchIDs;invariant(!Array.isArray(t));var i=t?t(e,s):null;return e._dispatchListeners=null,e._dispatchIDs=null,i}function hasDispatches(e){return!!e._dispatchListeners}var EventConstants=require("./EventConstants"),invariant=require("./invariant"),injection={Mount:null,injectMount:function(e){injection.Mount=e}},topLevelTypes=EventConstants.topLevelTypes,validateEventDispatches,EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatch:executeDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,injection:injection,useTouchEvents:!1};module.exports=EventPluginUtils;
},{"./EventConstants":23,"./invariant":132}],28:[function(require,module,exports){
"use strict";function listenerAtPhase(e,a,t){var c=a.dispatchConfig.phasedRegistrationNames[t];return getListener(e,c)}function accumulateDirectionalDispatches(e,a,t){var c=a?PropagationPhases.bubbled:PropagationPhases.captured,s=listenerAtPhase(e,t,c);s&&(t._dispatchListeners=accumulateInto(t._dispatchListeners,s),t._dispatchIDs=accumulateInto(t._dispatchIDs,e))}function accumulateTwoPhaseDispatchesSingle(e){e&&e.dispatchConfig.phasedRegistrationNames&&EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,accumulateDirectionalDispatches,e)}function accumulateDispatches(e,a,t){if(t&&t.dispatchConfig.registrationName){var c=t.dispatchConfig.registrationName,s=getListener(e,c);s&&(t._dispatchListeners=accumulateInto(t._dispatchListeners,s),t._dispatchIDs=accumulateInto(t._dispatchIDs,e))}}function accumulateDirectDispatchesSingle(e){e&&e.dispatchConfig.registrationName&&accumulateDispatches(e.dispatchMarker,null,e)}function accumulateTwoPhaseDispatches(e){forEachAccumulated(e,accumulateTwoPhaseDispatchesSingle)}function accumulateEnterLeaveDispatches(e,a,t,c){EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(t,c,accumulateDispatches,e,a)}function accumulateDirectDispatches(e){forEachAccumulated(e,accumulateDirectDispatchesSingle)}var EventConstants=require("./EventConstants"),EventPluginHub=require("./EventPluginHub"),accumulateInto=require("./accumulateInto"),forEachAccumulated=require("./forEachAccumulated"),PropagationPhases=EventConstants.PropagationPhases,getListener=EventPluginHub.getListener,EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports=EventPropagators;
},{"./EventConstants":23,"./EventPluginHub":25,"./accumulateInto":103,"./forEachAccumulated":118}],29:[function(require,module,exports){
"use strict";var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:canUseDOM&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM};module.exports=ExecutionEnvironment;
},{}],30:[function(require,module,exports){
"use strict";var DOMProperty=require("./DOMProperty"),ExecutionEnvironment=require("./ExecutionEnvironment"),MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE,MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY,HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE,HAS_SIDE_EFFECTS=DOMProperty.injection.HAS_SIDE_EFFECTS,HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE,HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE,HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE,hasSVG;if(ExecutionEnvironment.canUseDOM){var implementation=document.implementation;hasSVG=implementation&&implementation.hasFeature&&implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,allowTransparency:MUST_USE_ATTRIBUTE,alt:null,async:HAS_BOOLEAN_VALUE,autoComplete:null,autoPlay:HAS_BOOLEAN_VALUE,cellPadding:null,cellSpacing:null,charSet:MUST_USE_ATTRIBUTE,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,classID:MUST_USE_ATTRIBUTE,className:hasSVG?MUST_USE_ATTRIBUTE:MUST_USE_PROPERTY,cols:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,colSpan:null,content:null,contentEditable:null,contextMenu:MUST_USE_ATTRIBUTE,controls:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,coords:null,crossOrigin:null,data:null,dateTime:MUST_USE_ATTRIBUTE,defer:HAS_BOOLEAN_VALUE,dir:null,disabled:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:null,encType:null,form:MUST_USE_ATTRIBUTE,formNoValidate:HAS_BOOLEAN_VALUE,frameBorder:MUST_USE_ATTRIBUTE,height:MUST_USE_ATTRIBUTE,hidden:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:MUST_USE_PROPERTY,label:null,lang:null,list:MUST_USE_ATTRIBUTE,loop:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,manifest:MUST_USE_ATTRIBUTE,max:null,maxLength:MUST_USE_ATTRIBUTE,media:MUST_USE_ATTRIBUTE,mediaGroup:null,method:null,min:null,multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:null,noValidate:HAS_BOOLEAN_VALUE,open:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,rel:null,required:HAS_BOOLEAN_VALUE,role:MUST_USE_ATTRIBUTE,rows:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,rowSpan:null,sandbox:null,scope:null,scrolling:null,seamless:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:null,size:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,sizes:MUST_USE_ATTRIBUTE,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:null,src:null,srcDoc:MUST_USE_PROPERTY,srcSet:MUST_USE_ATTRIBUTE,start:HAS_NUMERIC_VALUE,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:MUST_USE_PROPERTY|HAS_SIDE_EFFECTS,width:MUST_USE_ATTRIBUTE,wmode:MUST_USE_ATTRIBUTE,autoCapitalize:null,autoCorrect:null,itemProp:MUST_USE_ATTRIBUTE,itemScope:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,itemType:MUST_USE_ATTRIBUTE,property:null},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};module.exports=HTMLDOMPropertyConfig;
},{"./DOMProperty":18,"./ExecutionEnvironment":29}],31:[function(require,module,exports){
"use strict";function _assertSingleLink(e){invariant(null==e.props.checkedLink||null==e.props.valueLink)}function _assertValueLink(e){_assertSingleLink(e),invariant(null==e.props.value&&null==e.props.onChange)}function _assertCheckedLink(e){_assertSingleLink(e),invariant(null==e.props.checked&&null==e.props.onChange)}function _handleLinkedValueChange(e){this.props.valueLink.requestChange(e.target.value)}function _handleLinkedCheckChange(e){this.props.checkedLink.requestChange(e.target.checked)}var ReactPropTypes=require("./ReactPropTypes"),invariant=require("./invariant"),hasReadOnlyValue={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},LinkedValueUtils={Mixin:{propTypes:{value:function(e,n){return!e[n]||hasReadOnlyValue[e.type]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,n){return!e[n]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:ReactPropTypes.func}},getValue:function(e){return e.props.valueLink?(_assertValueLink(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(_assertCheckedLink(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(_assertValueLink(e),_handleLinkedValueChange):e.props.checkedLink?(_assertCheckedLink(e),_handleLinkedCheckChange):e.props.onChange}};module.exports=LinkedValueUtils;
},{"./ReactPropTypes":78,"./invariant":132}],32:[function(require,module,exports){
"use strict";function remove(e){e.remove()}var ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),accumulateInto=require("./accumulateInto"),forEachAccumulated=require("./forEachAccumulated"),invariant=require("./invariant"),LocalEventTrapMixin={trapBubbledEvent:function(e,t){invariant(this.isMounted());var r=ReactBrowserEventEmitter.trapBubbledEvent(e,t,this.getDOMNode());this._localEventListeners=accumulateInto(this._localEventListeners,r)},componentWillUnmount:function(){this._localEventListeners&&forEachAccumulated(this._localEventListeners,remove)}};module.exports=LocalEventTrapMixin;
},{"./ReactBrowserEventEmitter":38,"./accumulateInto":103,"./forEachAccumulated":118,"./invariant":132}],33:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),emptyFunction=require("./emptyFunction"),topLevelTypes=EventConstants.topLevelTypes,MobileSafariClickEventPlugin={eventTypes:null,extractEvents:function(t,e,n,i){if(t===topLevelTypes.topTouchStart){var o=i.target;o&&!o.onclick&&(o.onclick=emptyFunction)}}};module.exports=MobileSafariClickEventPlugin;
},{"./EventConstants":23,"./emptyFunction":113}],34:[function(require,module,exports){
function assign(r){if(null==r)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(r),e=Object.prototype.hasOwnProperty,t=1;t<arguments.length;t++){var a=arguments[t];if(null!=a){var o=Object(a);for(var l in o)e.call(o,l)&&(n[l]=o[l])}}return n}module.exports=assign;
},{}],35:[function(require,module,exports){
"use strict";var invariant=require("./invariant"),oneArgumentPooler=function(e){var o=this;if(o.instancePool.length){var n=o.instancePool.pop();return o.call(n,e),n}return new o(e)},twoArgumentPooler=function(e,o){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,o),r}return new n(e,o)},threeArgumentPooler=function(e,o,n){var r=this;if(r.instancePool.length){var t=r.instancePool.pop();return r.call(t,e,o,n),t}return new r(e,o,n)},fiveArgumentPooler=function(e,o,n,r,t){var l=this;if(l.instancePool.length){var a=l.instancePool.pop();return l.call(a,e,o,n,r,t),a}return new l(e,o,n,r,t)},standardReleaser=function(e){var o=this;invariant(e instanceof o),e.destructor&&e.destructor(),o.instancePool.length<o.poolSize&&o.instancePool.push(e)},DEFAULT_POOL_SIZE=10,DEFAULT_POOLER=oneArgumentPooler,addPoolingTo=function(e,o){var n=e;return n.instancePool=[],n.getPooled=o||DEFAULT_POOLER,n.poolSize||(n.poolSize=DEFAULT_POOL_SIZE),n.release=standardReleaser,n},PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports=PooledClass;
},{"./invariant":132}],36:[function(require,module,exports){
"use strict";var DOMPropertyOperations=require("./DOMPropertyOperations"),EventPluginUtils=require("./EventPluginUtils"),ReactChildren=require("./ReactChildren"),ReactComponent=require("./ReactComponent"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactContext=require("./ReactContext"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactElement=require("./ReactElement"),ReactElementValidator=require("./ReactElementValidator"),ReactDOM=require("./ReactDOM"),ReactDOMComponent=require("./ReactDOMComponent"),ReactDefaultInjection=require("./ReactDefaultInjection"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactLegacyElement=require("./ReactLegacyElement"),ReactMount=require("./ReactMount"),ReactMultiChild=require("./ReactMultiChild"),ReactPerf=require("./ReactPerf"),ReactPropTypes=require("./ReactPropTypes"),ReactServerRendering=require("./ReactServerRendering"),ReactTextComponent=require("./ReactTextComponent"),assign=require("./Object.assign"),deprecated=require("./deprecated"),onlyChild=require("./onlyChild");ReactDefaultInjection.inject();var createElement=ReactElement.createElement,createFactory=ReactElement.createFactory;createElement=ReactLegacyElement.wrapCreateElement(createElement),createFactory=ReactLegacyElement.wrapCreateFactory(createFactory);var render=ReactPerf.measure("React","render",ReactMount.render),React={Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,only:onlyChild},DOM:ReactDOM,PropTypes:ReactPropTypes,initializeTouchEvents:function(e){EventPluginUtils.useTouchEvents=e},createClass:ReactCompositeComponent.createClass,createElement:createElement,createFactory:createFactory,constructAndRenderComponent:ReactMount.constructAndRenderComponent,constructAndRenderComponentByID:ReactMount.constructAndRenderComponentByID,render:render,renderToString:ReactServerRendering.renderToString,renderToStaticMarkup:ReactServerRendering.renderToStaticMarkup,unmountComponentAtNode:ReactMount.unmountComponentAtNode,isValidClass:ReactLegacyElement.isValidClass,isValidElement:ReactElement.isValidElement,withContext:ReactContext.withContext,__spread:assign,renderComponent:deprecated("React","renderComponent","render",this,render),renderComponentToString:deprecated("React","renderComponentToString","renderToString",this,ReactServerRendering.renderToString),renderComponentToStaticMarkup:deprecated("React","renderComponentToStaticMarkup","renderToStaticMarkup",this,ReactServerRendering.renderToStaticMarkup),isValidComponent:deprecated("React","isValidComponent","isValidElement",this,ReactElement.isValidElement)};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({Component:ReactComponent,CurrentOwner:ReactCurrentOwner,DOMComponent:ReactDOMComponent,DOMPropertyOperations:DOMPropertyOperations,InstanceHandles:ReactInstanceHandles,Mount:ReactMount,MultiChild:ReactMultiChild,TextComponent:ReactTextComponent});var ExecutionEnvironment,expectedFeatures,i;React.version="0.12.0",module.exports=React;
},{"./DOMPropertyOperations":19,"./EventPluginUtils":27,"./Object.assign":34,"./ReactChildren":39,"./ReactComponent":40,"./ReactCompositeComponent":42,"./ReactContext":43,"./ReactCurrentOwner":44,"./ReactDOM":45,"./ReactDOMComponent":47,"./ReactDefaultInjection":57,"./ReactElement":58,"./ReactElementValidator":59,"./ReactInstanceHandles":66,"./ReactLegacyElement":67,"./ReactMount":69,"./ReactMultiChild":70,"./ReactPerf":74,"./ReactPropTypes":78,"./ReactServerRendering":82,"./ReactTextComponent":84,"./deprecated":112,"./onlyChild":143}],37:[function(require,module,exports){
"use strict";var ReactEmptyComponent=require("./ReactEmptyComponent"),ReactMount=require("./ReactMount"),invariant=require("./invariant"),ReactBrowserComponentMixin={getDOMNode:function(){return invariant(this.isMounted()),ReactEmptyComponent.isNullComponentID(this._rootNodeID)?null:ReactMount.getNode(this._rootNodeID)}};module.exports=ReactBrowserComponentMixin;
},{"./ReactEmptyComponent":60,"./ReactMount":69,"./invariant":132}],38:[function(require,module,exports){
"use strict";function getListeningForDocument(e){return Object.prototype.hasOwnProperty.call(e,topListenersIDKey)||(e[topListenersIDKey]=reactTopListenersCounter++,alreadyListeningTo[e[topListenersIDKey]]={}),alreadyListeningTo[e[topListenersIDKey]]}var EventConstants=require("./EventConstants"),EventPluginHub=require("./EventPluginHub"),EventPluginRegistry=require("./EventPluginRegistry"),ReactEventEmitterMixin=require("./ReactEventEmitterMixin"),ViewportMetrics=require("./ViewportMetrics"),assign=require("./Object.assign"),isEventSupported=require("./isEventSupported"),alreadyListeningTo={},isMonitoringScrollValue=!1,reactTopListenersCounter=0,topEventMapping={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},topListenersIDKey="_reactListenersID"+String(Math.random()).slice(2),ReactBrowserEventEmitter=assign({},ReactEventEmitterMixin,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel),ReactBrowserEventEmitter.ReactEventListener=e}},setEnabled:function(e){ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!ReactBrowserEventEmitter.ReactEventListener||!ReactBrowserEventEmitter.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var r=t,n=getListeningForDocument(r),o=EventPluginRegistry.registrationNameDependencies[e],i=EventConstants.topLevelTypes,s=0,a=o.length;a>s;s++){var p=o[s];n.hasOwnProperty(p)&&n[p]||(p===i.topWheel?isEventSupported("wheel")?ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topWheel,"wheel",r):isEventSupported("mousewheel")?ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topWheel,"mousewheel",r):ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topWheel,"DOMMouseScroll",r):p===i.topScroll?isEventSupported("scroll",!0)?ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(i.topScroll,"scroll",r):ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topScroll,"scroll",ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE):p===i.topFocus||p===i.topBlur?(isEventSupported("focus",!0)?(ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(i.topFocus,"focus",r),ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(i.topBlur,"blur",r)):isEventSupported("focusin")&&(ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topFocus,"focusin",r),ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topBlur,"focusout",r)),n[i.topBlur]=!0,n[i.topFocus]=!0):topEventMapping.hasOwnProperty(p)&&ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(p,topEventMapping[p],r),n[p]=!0)}},trapBubbledEvent:function(e,t,r){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(e,t,r)},trapCapturedEvent:function(e,t,r){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(e,t,r)},ensureScrollValueMonitoring:function(){if(!isMonitoringScrollValue){var e=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(e),isMonitoringScrollValue=!0}},eventNameDispatchConfigs:EventPluginHub.eventNameDispatchConfigs,registrationNameModules:EventPluginHub.registrationNameModules,putListener:EventPluginHub.putListener,getListener:EventPluginHub.getListener,deleteListener:EventPluginHub.deleteListener,deleteAllListeners:EventPluginHub.deleteAllListeners});module.exports=ReactBrowserEventEmitter;
},{"./EventConstants":23,"./EventPluginHub":25,"./EventPluginRegistry":26,"./Object.assign":34,"./ReactEventEmitterMixin":62,"./ViewportMetrics":102,"./isEventSupported":133}],39:[function(require,module,exports){
"use strict";function ForEachBookKeeping(e,o){this.forEachFunction=e,this.forEachContext=o}function forEachSingleChild(e,o,n,r){var l=e;l.forEachFunction.call(l.forEachContext,o,r)}function forEachChildren(e,o,n){if(null==e)return e;var r=ForEachBookKeeping.getPooled(o,n);traverseAllChildren(e,forEachSingleChild,r),ForEachBookKeeping.release(r)}function MapBookKeeping(e,o,n){this.mapResult=e,this.mapFunction=o,this.mapContext=n}function mapSingleChildIntoContext(e,o,n,r){var l=e,t=l.mapResult,i=!t.hasOwnProperty(n);if(i){var a=l.mapFunction.call(l.mapContext,o,r);t[n]=a}}function mapChildren(e,o,n){if(null==e)return e;var r={},l=MapBookKeeping.getPooled(r,o,n);return traverseAllChildren(e,mapSingleChildIntoContext,l),MapBookKeeping.release(l),r}function forEachSingleChildDummy(){return null}function countChildren(e){return traverseAllChildren(e,forEachSingleChildDummy,null)}var PooledClass=require("./PooledClass"),traverseAllChildren=require("./traverseAllChildren"),warning=require("./warning"),twoArgumentPooler=PooledClass.twoArgumentPooler,threeArgumentPooler=PooledClass.threeArgumentPooler;PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler),PooledClass.addPoolingTo(MapBookKeeping,threeArgumentPooler);var ReactChildren={forEach:forEachChildren,map:mapChildren,count:countChildren};module.exports=ReactChildren;
},{"./PooledClass":35,"./traverseAllChildren":148,"./warning":149}],40:[function(require,module,exports){
"use strict";var ReactElement=require("./ReactElement"),ReactOwner=require("./ReactOwner"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),invariant=require("./invariant"),keyMirror=require("./keyMirror"),ComponentLifeCycle=keyMirror({MOUNTED:null,UNMOUNTED:null}),injected=!1,unmountIDFromEnvironment=null,mountImageIntoNode=null,ReactComponent={injection:{injectEnvironment:function(e){invariant(!injected),mountImageIntoNode=e.mountImageIntoNode,unmountIDFromEnvironment=e.unmountIDFromEnvironment,ReactComponent.BackendIDOperations=e.BackendIDOperations,injected=!0}},LifeCycle:ComponentLifeCycle,BackendIDOperations:null,Mixin:{isMounted:function(){return this._lifeCycleState===ComponentLifeCycle.MOUNTED},setProps:function(e,n){var t=this._pendingElement||this._currentElement;this.replaceProps(assign({},t.props,e),n)},replaceProps:function(e,n){invariant(this.isMounted()),invariant(0===this._mountDepth),this._pendingElement=ReactElement.cloneAndReplaceProps(this._pendingElement||this._currentElement,e),ReactUpdates.enqueueUpdate(this,n)},_setPropsInternal:function(e,n){var t=this._pendingElement||this._currentElement;this._pendingElement=ReactElement.cloneAndReplaceProps(t,assign({},t.props,e)),ReactUpdates.enqueueUpdate(this,n)},construct:function(e){this.props=e.props,this._owner=e._owner,this._lifeCycleState=ComponentLifeCycle.UNMOUNTED,this._pendingCallbacks=null,this._currentElement=e,this._pendingElement=null},mountComponent:function(e,n,t){invariant(!this.isMounted());var o=this._currentElement.ref;if(null!=o){var i=this._currentElement._owner;ReactOwner.addComponentAsRefTo(this,o,i)}this._rootNodeID=e,this._lifeCycleState=ComponentLifeCycle.MOUNTED,this._mountDepth=t},unmountComponent:function(){invariant(this.isMounted());var e=this._currentElement.ref;null!=e&&ReactOwner.removeComponentAsRefFrom(this,e,this._owner),unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null,this._lifeCycleState=ComponentLifeCycle.UNMOUNTED},receiveComponent:function(e,n){invariant(this.isMounted()),this._pendingElement=e,this.performUpdateIfNecessary(n)},performUpdateIfNecessary:function(e){if(null!=this._pendingElement){var n=this._currentElement,t=this._pendingElement;this._currentElement=t,this.props=t.props,this._owner=t._owner,this._pendingElement=null,this.updateComponent(e,n)}},updateComponent:function(e,n){var t=this._currentElement;(t._owner!==n._owner||t.ref!==n.ref)&&(null!=n.ref&&ReactOwner.removeComponentAsRefFrom(this,n.ref,n._owner),null!=t.ref&&ReactOwner.addComponentAsRefTo(this,t.ref,t._owner))},mountComponentIntoNode:function(e,n,t){var o=ReactUpdates.ReactReconcileTransaction.getPooled();o.perform(this._mountComponentIntoNode,this,e,n,o,t),ReactUpdates.ReactReconcileTransaction.release(o)},_mountComponentIntoNode:function(e,n,t,o){var i=this.mountComponent(e,t,0);mountImageIntoNode(i,n,o)},isOwnedBy:function(e){return this._owner===e},getSiblingByRef:function(e){var n=this._owner;return n&&n.refs?n.refs[e]:null}}};module.exports=ReactComponent;
},{"./Object.assign":34,"./ReactElement":58,"./ReactOwner":73,"./ReactUpdates":85,"./invariant":132,"./keyMirror":138}],41:[function(require,module,exports){
"use strict";var ReactDOMIDOperations=require("./ReactDOMIDOperations"),ReactMarkupChecksum=require("./ReactMarkupChecksum"),ReactMount=require("./ReactMount"),ReactPerf=require("./ReactPerf"),ReactReconcileTransaction=require("./ReactReconcileTransaction"),getReactRootElementInContainer=require("./getReactRootElementInContainer"),invariant=require("./invariant"),setInnerHTML=require("./setInnerHTML"),ELEMENT_NODE_TYPE=1,DOC_NODE_TYPE=9,ReactComponentBrowserEnvironment={ReactReconcileTransaction:ReactReconcileTransaction,BackendIDOperations:ReactDOMIDOperations,unmountIDFromEnvironment:function(e){ReactMount.purgeID(e)},mountImageIntoNode:ReactPerf.measure("ReactComponentBrowserEnvironment","mountImageIntoNode",function(e,n,t){if(invariant(n&&(n.nodeType===ELEMENT_NODE_TYPE||n.nodeType===DOC_NODE_TYPE)),t){if(ReactMarkupChecksum.canReuseMarkup(e,getReactRootElementInContainer(n)))return;invariant(n.nodeType!==DOC_NODE_TYPE)}invariant(n.nodeType!==DOC_NODE_TYPE),setInnerHTML(n,e)})};module.exports=ReactComponentBrowserEnvironment;
},{"./ReactDOMIDOperations":49,"./ReactMarkupChecksum":68,"./ReactMount":69,"./ReactPerf":74,"./ReactReconcileTransaction":80,"./getReactRootElementInContainer":126,"./invariant":132,"./setInnerHTML":144}],42:[function(require,module,exports){
"use strict";function getDeclarationErrorAddendum(e){var t=e._owner||null;return t&&t.constructor&&t.constructor.displayName?" Check the render method of `"+t.constructor.displayName+"`.":""}function validateTypeDef(e,t,n){for(var o in t)t.hasOwnProperty(o)&&invariant("function"==typeof t[o])}function validateMethodOverride(e,t){var n=ReactCompositeComponentInterface.hasOwnProperty(t)?ReactCompositeComponentInterface[t]:null;ReactCompositeComponentMixin.hasOwnProperty(t)&&invariant(n===SpecPolicy.OVERRIDE_BASE),e.hasOwnProperty(t)&&invariant(n===SpecPolicy.DEFINE_MANY||n===SpecPolicy.DEFINE_MANY_MERGED)}function validateLifeCycleOnReplaceState(e){var t=e._compositeLifeCycleState;invariant(e.isMounted()||t===CompositeLifeCycle.MOUNTING),invariant(null==ReactCurrentOwner.current),invariant(t!==CompositeLifeCycle.UNMOUNTING)}function mixSpecIntoComponent(e,t){if(t){invariant(!ReactLegacyElement.isValidFactory(t)),invariant(!ReactElement.isValidElement(t));var n=e.prototype;t.hasOwnProperty(MIXINS_KEY)&&RESERVED_SPEC_KEYS.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==MIXINS_KEY){var i=t[o];if(validateMethodOverride(n,o),RESERVED_SPEC_KEYS.hasOwnProperty(o))RESERVED_SPEC_KEYS[o](e,i);else{var r=ReactCompositeComponentInterface.hasOwnProperty(o),a=n.hasOwnProperty(o),c=i&&i.__reactDontBind,p="function"==typeof i,s=p&&!r&&!a&&!c;if(s)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(a){var l=ReactCompositeComponentInterface[o];invariant(r&&(l===SpecPolicy.DEFINE_MANY_MERGED||l===SpecPolicy.DEFINE_MANY)),l===SpecPolicy.DEFINE_MANY_MERGED?n[o]=createMergedResultFunction(n[o],i):l===SpecPolicy.DEFINE_MANY&&(n[o]=createChainedFunction(n[o],i))}else n[o]=i}}}}function mixStaticSpecIntoComponent(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var i=n in RESERVED_SPEC_KEYS;invariant(!i);var r=n in e;invariant(!r),e[n]=o}}}function mergeObjectsWithNoDuplicateKeys(e,t){return invariant(e&&t&&"object"==typeof e&&"object"==typeof t),mapObject(t,function(t,n){invariant(void 0===e[n]),e[n]=t}),e}function createMergedResultFunction(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);return null==n?o:null==o?n:mergeObjectsWithNoDuplicateKeys(n,o)}}function createChainedFunction(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}var ReactComponent=require("./ReactComponent"),ReactContext=require("./ReactContext"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactElement=require("./ReactElement"),ReactElementValidator=require("./ReactElementValidator"),ReactEmptyComponent=require("./ReactEmptyComponent"),ReactErrorUtils=require("./ReactErrorUtils"),ReactLegacyElement=require("./ReactLegacyElement"),ReactOwner=require("./ReactOwner"),ReactPerf=require("./ReactPerf"),ReactPropTransferer=require("./ReactPropTransferer"),ReactPropTypeLocations=require("./ReactPropTypeLocations"),ReactPropTypeLocationNames=require("./ReactPropTypeLocationNames"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),instantiateReactComponent=require("./instantiateReactComponent"),invariant=require("./invariant"),keyMirror=require("./keyMirror"),keyOf=require("./keyOf"),monitorCodeUse=require("./monitorCodeUse"),mapObject=require("./mapObject"),shouldUpdateReactComponent=require("./shouldUpdateReactComponent"),warning=require("./warning"),MIXINS_KEY=keyOf({mixins:null}),SpecPolicy=keyMirror({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),injectedMixins=[],ReactCompositeComponentInterface={mixins:SpecPolicy.DEFINE_MANY,statics:SpecPolicy.DEFINE_MANY,propTypes:SpecPolicy.DEFINE_MANY,contextTypes:SpecPolicy.DEFINE_MANY,childContextTypes:SpecPolicy.DEFINE_MANY,getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED,getInitialState:SpecPolicy.DEFINE_MANY_MERGED,getChildContext:SpecPolicy.DEFINE_MANY_MERGED,render:SpecPolicy.DEFINE_ONCE,componentWillMount:SpecPolicy.DEFINE_MANY,componentDidMount:SpecPolicy.DEFINE_MANY,componentWillReceiveProps:SpecPolicy.DEFINE_MANY,shouldComponentUpdate:SpecPolicy.DEFINE_ONCE,componentWillUpdate:SpecPolicy.DEFINE_MANY,componentDidUpdate:SpecPolicy.DEFINE_MANY,componentWillUnmount:SpecPolicy.DEFINE_MANY,updateComponent:SpecPolicy.OVERRIDE_BASE},RESERVED_SPEC_KEYS={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)mixSpecIntoComponent(e,t[n])},childContextTypes:function(e,t){validateTypeDef(e,t,ReactPropTypeLocations.childContext),e.childContextTypes=assign({},e.childContextTypes,t)},contextTypes:function(e,t){validateTypeDef(e,t,ReactPropTypeLocations.context),e.contextTypes=assign({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?createMergedResultFunction(e.getDefaultProps,t):t},propTypes:function(e,t){validateTypeDef(e,t,ReactPropTypeLocations.prop),e.propTypes=assign({},e.propTypes,t)},statics:function(e,t){mixStaticSpecIntoComponent(e,t)}},CompositeLifeCycle=keyMirror({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null}),ReactCompositeComponentMixin={construct:function(){ReactComponent.Mixin.construct.apply(this,arguments),ReactOwner.Mixin.construct.apply(this,arguments),this.state=null,this._pendingState=null,this.context=null,this._compositeLifeCycleState=null},isMounted:function(){return ReactComponent.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==CompositeLifeCycle.MOUNTING},mountComponent:ReactPerf.measure("ReactCompositeComponent","mountComponent",function(e,t,n){ReactComponent.Mixin.mountComponent.call(this,e,t,n),this._compositeLifeCycleState=CompositeLifeCycle.MOUNTING,this.__reactAutoBindMap&&this._bindAutoBindMethods(),this.context=this._processContext(this._currentElement._context),this.props=this._processProps(this.props),this.state=this.getInitialState?this.getInitialState():null,invariant("object"==typeof this.state&&!Array.isArray(this.state)),this._pendingState=null,this._pendingForceUpdate=!1,this.componentWillMount&&(this.componentWillMount(),this._pendingState&&(this.state=this._pendingState,this._pendingState=null)),this._renderedComponent=instantiateReactComponent(this._renderValidatedComponent(),this._currentElement.type),this._compositeLifeCycleState=null;var o=this._renderedComponent.mountComponent(e,t,n+1);return this.componentDidMount&&t.getReactMountReady().enqueue(this.componentDidMount,this),o}),unmountComponent:function(){this._compositeLifeCycleState=CompositeLifeCycle.UNMOUNTING,this.componentWillUnmount&&this.componentWillUnmount(),this._compositeLifeCycleState=null,this._renderedComponent.unmountComponent(),this._renderedComponent=null,ReactComponent.Mixin.unmountComponent.call(this)},setState:function(e,t){invariant("object"==typeof e||null==e),this.replaceState(assign({},this._pendingState||this.state,e),t)},replaceState:function(e,t){validateLifeCycleOnReplaceState(this),this._pendingState=e,this._compositeLifeCycleState!==CompositeLifeCycle.MOUNTING&&ReactUpdates.enqueueUpdate(this,t)},_processContext:function(e){var t=null,n=this.constructor.contextTypes;if(n){t={};for(var o in n)t[o]=e[o]}return t},_processChildContext:function(e){{var t=this.getChildContext&&this.getChildContext();this.constructor.displayName||"ReactCompositeComponent"}if(t){invariant("object"==typeof this.constructor.childContextTypes);for(var n in t)invariant(n in this.constructor.childContextTypes);return assign({},e,t)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.constructor.displayName;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i](t,i,o,n);if(r instanceof Error){getDeclarationErrorAddendum(this)}}},performUpdateIfNecessary:function(e){var t=this._compositeLifeCycleState;if(t!==CompositeLifeCycle.MOUNTING&&t!==CompositeLifeCycle.RECEIVING_PROPS&&(null!=this._pendingElement||null!=this._pendingState||this._pendingForceUpdate)){var n=this.context,o=this.props,i=this._currentElement;null!=this._pendingElement&&(i=this._pendingElement,n=this._processContext(i._context),o=this._processProps(i.props),this._pendingElement=null,this._compositeLifeCycleState=CompositeLifeCycle.RECEIVING_PROPS,this.componentWillReceiveProps&&this.componentWillReceiveProps(o,n)),this._compositeLifeCycleState=null;var r=this._pendingState||this.state;this._pendingState=null;var a=this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(o,r,n);a?(this._pendingForceUpdate=!1,this._performComponentUpdate(i,o,r,n,e)):(this._currentElement=i,this.props=o,this.state=r,this.context=n,this._owner=i._owner)}},_performComponentUpdate:function(e,t,n,o,i){var r=this._currentElement,a=this.props,c=this.state,p=this.context;this.componentWillUpdate&&this.componentWillUpdate(t,n,o),this._currentElement=e,this.props=t,this.state=n,this.context=o,this._owner=e._owner,this.updateComponent(i,r),this.componentDidUpdate&&i.getReactMountReady().enqueue(this.componentDidUpdate.bind(this,a,c,p),this)},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&ReactComponent.Mixin.receiveComponent.call(this,e,t)},updateComponent:ReactPerf.measure("ReactCompositeComponent","updateComponent",function(e,t){ReactComponent.Mixin.updateComponent.call(this,e,t);var n=this._renderedComponent,o=n._currentElement,i=this._renderValidatedComponent();if(shouldUpdateReactComponent(o,i))n.receiveComponent(i,e);else{var r=this._rootNodeID,a=n._rootNodeID;n.unmountComponent(),this._renderedComponent=instantiateReactComponent(i,this._currentElement.type);var c=this._renderedComponent.mountComponent(r,e,this._mountDepth+1);ReactComponent.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(a,c)}}),forceUpdate:function(e){var t=this._compositeLifeCycleState;invariant(this.isMounted()||t===CompositeLifeCycle.MOUNTING),invariant(t!==CompositeLifeCycle.UNMOUNTING&&null==ReactCurrentOwner.current),this._pendingForceUpdate=!0,ReactUpdates.enqueueUpdate(this,e)},_renderValidatedComponent:ReactPerf.measure("ReactCompositeComponent","_renderValidatedComponent",function(){var e,t=ReactContext.current;ReactContext.current=this._processChildContext(this._currentElement._context),ReactCurrentOwner.current=this;try{e=this.render(),null===e||e===!1?(e=ReactEmptyComponent.getEmptyComponent(),ReactEmptyComponent.registerNullComponentID(this._rootNodeID)):ReactEmptyComponent.deregisterNullComponentID(this._rootNodeID)}finally{ReactContext.current=t,ReactCurrentOwner.current=null}return invariant(ReactElement.isValidElement(e)),e}),_bindAutoBindMethods:function(){for(var e in this.__reactAutoBindMap)if(this.__reactAutoBindMap.hasOwnProperty(e)){var t=this.__reactAutoBindMap[e];this[e]=this._bindAutoBindMethod(ReactErrorUtils.guard(t,this.constructor.displayName+"."+e))}},_bindAutoBindMethod:function(e){var t=this,n=e.bind(t);return n}},ReactCompositeComponentBase=function(){};assign(ReactCompositeComponentBase.prototype,ReactComponent.Mixin,ReactOwner.Mixin,ReactPropTransferer.Mixin,ReactCompositeComponentMixin);var ReactCompositeComponent={LifeCycle:CompositeLifeCycle,Base:ReactCompositeComponentBase,createClass:function(e){var t=function(){};t.prototype=new ReactCompositeComponentBase,t.prototype.constructor=t,injectedMixins.forEach(mixSpecIntoComponent.bind(null,t)),mixSpecIntoComponent(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),invariant(t.prototype.render);for(var n in ReactCompositeComponentInterface)t.prototype[n]||(t.prototype[n]=null);return ReactLegacyElement.wrapFactory(ReactElement.createFactory(t))},injection:{injectMixin:function(e){injectedMixins.push(e)}}};module.exports=ReactCompositeComponent;
},{"./Object.assign":34,"./ReactComponent":40,"./ReactContext":43,"./ReactCurrentOwner":44,"./ReactElement":58,"./ReactElementValidator":59,"./ReactEmptyComponent":60,"./ReactErrorUtils":61,"./ReactLegacyElement":67,"./ReactOwner":73,"./ReactPerf":74,"./ReactPropTransferer":75,"./ReactPropTypeLocationNames":76,"./ReactPropTypeLocations":77,"./ReactUpdates":85,"./instantiateReactComponent":131,"./invariant":132,"./keyMirror":138,"./keyOf":139,"./mapObject":140,"./monitorCodeUse":142,"./shouldUpdateReactComponent":146,"./warning":149}],43:[function(require,module,exports){
"use strict";var assign=require("./Object.assign"),ReactContext={current:{},withContext:function(t,e){var n,r=ReactContext.current;ReactContext.current=assign({},r,t);try{n=e()}finally{ReactContext.current=r}return n}};module.exports=ReactContext;
},{"./Object.assign":34}],44:[function(require,module,exports){
"use strict";var ReactCurrentOwner={current:null};module.exports=ReactCurrentOwner;
},{}],45:[function(require,module,exports){
"use strict";function createDOMFactory(e){return ReactLegacyElement.markNonLegacyFactory(ReactElement.createFactory(e))}var ReactElement=require("./ReactElement"),ReactElementValidator=require("./ReactElementValidator"),ReactLegacyElement=require("./ReactLegacyElement"),mapObject=require("./mapObject"),ReactDOM=mapObject({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},createDOMFactory);module.exports=ReactDOM;
},{"./ReactElement":58,"./ReactElementValidator":59,"./ReactLegacyElement":67,"./mapObject":140}],46:[function(require,module,exports){
"use strict";var AutoFocusMixin=require("./AutoFocusMixin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),keyMirror=require("./keyMirror"),button=ReactElement.createFactory(ReactDOM.button.type),mouseListenerNames=keyMirror({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),ReactDOMButton=ReactCompositeComponent.createClass({displayName:"ReactDOMButton",mixins:[AutoFocusMixin,ReactBrowserComponentMixin],render:function(){var e={};for(var o in this.props)!this.props.hasOwnProperty(o)||this.props.disabled&&mouseListenerNames[o]||(e[o]=this.props[o]);return button(e,this.props.children)}});module.exports=ReactDOMButton;
},{"./AutoFocusMixin":9,"./ReactBrowserComponentMixin":37,"./ReactCompositeComponent":42,"./ReactDOM":45,"./ReactElement":58,"./keyMirror":138}],47:[function(require,module,exports){
"use strict";function assertValidProps(e){e&&(invariant(null==e.children||null==e.dangerouslySetInnerHTML),invariant(null==e.style||"object"==typeof e.style))}function putListener(e,t,r,n){var o=ReactMount.findReactContainerForID(e);if(o){var i=o.nodeType===ELEMENT_NODE_TYPE?o.ownerDocument:o;listenTo(t,i)}n.getPutListenerQueue().enqueuePutListener(e,t,r)}function validateDangerousTag(e){hasOwnProperty.call(validatedTagCache,e)||(invariant(VALID_TAG_REGEX.test(e)),validatedTagCache[e]=!0)}function ReactDOMComponent(e){validateDangerousTag(e),this._tag=e,this.tagName=e.toUpperCase()}var CSSPropertyOperations=require("./CSSPropertyOperations"),DOMProperty=require("./DOMProperty"),DOMPropertyOperations=require("./DOMPropertyOperations"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactComponent=require("./ReactComponent"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactMount=require("./ReactMount"),ReactMultiChild=require("./ReactMultiChild"),ReactPerf=require("./ReactPerf"),assign=require("./Object.assign"),escapeTextForBrowser=require("./escapeTextForBrowser"),invariant=require("./invariant"),isEventSupported=require("./isEventSupported"),keyOf=require("./keyOf"),monitorCodeUse=require("./monitorCodeUse"),deleteListener=ReactBrowserEventEmitter.deleteListener,listenTo=ReactBrowserEventEmitter.listenTo,registrationNameModules=ReactBrowserEventEmitter.registrationNameModules,CONTENT_TYPES={string:!0,number:!0},STYLE=keyOf({style:null}),ELEMENT_NODE_TYPE=1,omittedCloseTags={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,validatedTagCache={},hasOwnProperty={}.hasOwnProperty;ReactDOMComponent.displayName="ReactDOMComponent",ReactDOMComponent.Mixin={mountComponent:ReactPerf.measure("ReactDOMComponent","mountComponent",function(e,t,r){ReactComponent.Mixin.mountComponent.call(this,e,t,r),assertValidProps(this.props);var n=omittedCloseTags[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t)+n}),_createOpenTagMarkupAndPutListeners:function(e){var t=this.props,r="<"+this._tag;for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];if(null!=o)if(registrationNameModules.hasOwnProperty(n))putListener(this._rootNodeID,n,o,e);else{n===STYLE&&(o&&(o=t.style=assign({},t.style)),o=CSSPropertyOperations.createMarkupForStyles(o));var i=DOMPropertyOperations.createMarkupForProperty(n,o);i&&(r+=" "+i)}}if(e.renderToStaticMarkup)return r+">";var a=DOMPropertyOperations.createMarkupForID(this._rootNodeID);return r+" "+a+">"},_createContentMarkup:function(e){var t=this.props.dangerouslySetInnerHTML;if(null!=t){if(null!=t.__html)return t.__html}else{var r=CONTENT_TYPES[typeof this.props.children]?this.props.children:null,n=null!=r?null:this.props.children;if(null!=r)return escapeTextForBrowser(r);if(null!=n){var o=this.mountChildren(n,e);return o.join("")}}return""},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&ReactComponent.Mixin.receiveComponent.call(this,e,t)},updateComponent:ReactPerf.measure("ReactDOMComponent","updateComponent",function(e,t){assertValidProps(this._currentElement.props),ReactComponent.Mixin.updateComponent.call(this,e,t),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e)}),_updateDOMProperties:function(e,t){var r,n,o,i=this.props;for(r in e)if(!i.hasOwnProperty(r)&&e.hasOwnProperty(r))if(r===STYLE){var a=e[r];for(n in a)a.hasOwnProperty(n)&&(o=o||{},o[n]="")}else registrationNameModules.hasOwnProperty(r)?deleteListener(this._rootNodeID,r):(DOMProperty.isStandardName[r]||DOMProperty.isCustomAttribute(r))&&ReactComponent.BackendIDOperations.deletePropertyByID(this._rootNodeID,r);for(r in i){var s=i[r],p=e[r];if(i.hasOwnProperty(r)&&s!==p)if(r===STYLE)if(s&&(s=i.style=assign({},s)),p){for(n in p)!p.hasOwnProperty(n)||s&&s.hasOwnProperty(n)||(o=o||{},o[n]="");for(n in s)s.hasOwnProperty(n)&&p[n]!==s[n]&&(o=o||{},o[n]=s[n])}else o=s;else registrationNameModules.hasOwnProperty(r)?putListener(this._rootNodeID,r,s,t):(DOMProperty.isStandardName[r]||DOMProperty.isCustomAttribute(r))&&ReactComponent.BackendIDOperations.updatePropertyByID(this._rootNodeID,r,s)}o&&ReactComponent.BackendIDOperations.updateStylesByID(this._rootNodeID,o)},_updateDOMChildren:function(e,t){var r=this.props,n=CONTENT_TYPES[typeof e.children]?e.children:null,o=CONTENT_TYPES[typeof r.children]?r.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,a=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,s=null!=n?null:e.children,p=null!=o?null:r.children,l=null!=n||null!=i,u=null!=o||null!=a;null!=s&&null==p?this.updateChildren(null,t):l&&!u&&this.updateTextContent(""),null!=o?n!==o&&this.updateTextContent(""+o):null!=a?i!==a&&ReactComponent.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,a):null!=p&&this.updateChildren(p,t)},unmountComponent:function(){this.unmountChildren(),ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID),ReactComponent.Mixin.unmountComponent.call(this)}},assign(ReactDOMComponent.prototype,ReactComponent.Mixin,ReactDOMComponent.Mixin,ReactMultiChild.Mixin,ReactBrowserComponentMixin),module.exports=ReactDOMComponent;
},{"./CSSPropertyOperations":12,"./DOMProperty":18,"./DOMPropertyOperations":19,"./Object.assign":34,"./ReactBrowserComponentMixin":37,"./ReactBrowserEventEmitter":38,"./ReactComponent":40,"./ReactMount":69,"./ReactMultiChild":70,"./ReactPerf":74,"./escapeTextForBrowser":115,"./invariant":132,"./isEventSupported":133,"./keyOf":139,"./monitorCodeUse":142}],48:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),LocalEventTrapMixin=require("./LocalEventTrapMixin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),form=ReactElement.createFactory(ReactDOM.form.type),ReactDOMForm=ReactCompositeComponent.createClass({displayName:"ReactDOMForm",mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function(){return form(this.props)},componentDidMount:function(){this.trapBubbledEvent(EventConstants.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit,"submit")}});module.exports=ReactDOMForm;
},{"./EventConstants":23,"./LocalEventTrapMixin":32,"./ReactBrowserComponentMixin":37,"./ReactCompositeComponent":42,"./ReactDOM":45,"./ReactElement":58}],49:[function(require,module,exports){
"use strict";var CSSPropertyOperations=require("./CSSPropertyOperations"),DOMChildrenOperations=require("./DOMChildrenOperations"),DOMPropertyOperations=require("./DOMPropertyOperations"),ReactMount=require("./ReactMount"),ReactPerf=require("./ReactPerf"),invariant=require("./invariant"),setInnerHTML=require("./setInnerHTML"),INVALID_PROPERTY_ERRORS={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},ReactDOMIDOperations={updatePropertyByID:ReactPerf.measure("ReactDOMIDOperations","updatePropertyByID",function(e,t,r){var a=ReactMount.getNode(e);invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t)),null!=r?DOMPropertyOperations.setValueForProperty(a,t,r):DOMPropertyOperations.deleteValueForProperty(a,t)}),deletePropertyByID:ReactPerf.measure("ReactDOMIDOperations","deletePropertyByID",function(e,t,r){var a=ReactMount.getNode(e);invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t)),DOMPropertyOperations.deleteValueForProperty(a,t,r)}),updateStylesByID:ReactPerf.measure("ReactDOMIDOperations","updateStylesByID",function(e,t){var r=ReactMount.getNode(e);CSSPropertyOperations.setValueForStyles(r,t)}),updateInnerHTMLByID:ReactPerf.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(e,t){var r=ReactMount.getNode(e);setInnerHTML(r,t)}),updateTextContentByID:ReactPerf.measure("ReactDOMIDOperations","updateTextContentByID",function(e,t){var r=ReactMount.getNode(e);DOMChildrenOperations.updateTextContent(r,t)}),dangerouslyReplaceNodeWithMarkupByID:ReactPerf.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(e,t){var r=ReactMount.getNode(e);DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(r,t)}),dangerouslyProcessChildrenUpdates:ReactPerf.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(e,t){for(var r=0;r<e.length;r++)e[r].parentNode=ReactMount.getNode(e[r].parentID);DOMChildrenOperations.processUpdates(e,t)})};module.exports=ReactDOMIDOperations;
},{"./CSSPropertyOperations":12,"./DOMChildrenOperations":17,"./DOMPropertyOperations":19,"./ReactMount":69,"./ReactPerf":74,"./invariant":132,"./setInnerHTML":144}],50:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),LocalEventTrapMixin=require("./LocalEventTrapMixin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),img=ReactElement.createFactory(ReactDOM.img.type),ReactDOMImg=ReactCompositeComponent.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function(){return img(this.props)},componentDidMount:function(){this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(EventConstants.topLevelTypes.topError,"error")}});module.exports=ReactDOMImg;
},{"./EventConstants":23,"./LocalEventTrapMixin":32,"./ReactBrowserComponentMixin":37,"./ReactCompositeComponent":42,"./ReactDOM":45,"./ReactElement":58}],51:[function(require,module,exports){
"use strict";function forceUpdateIfMounted(){this.isMounted()&&this.forceUpdate()}var AutoFocusMixin=require("./AutoFocusMixin"),DOMPropertyOperations=require("./DOMPropertyOperations"),LinkedValueUtils=require("./LinkedValueUtils"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),ReactMount=require("./ReactMount"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),invariant=require("./invariant"),input=ReactElement.createFactory(ReactDOM.input.type),instancesByReactID={},ReactDOMInput=ReactCompositeComponent.createClass({displayName:"ReactDOMInput",mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=assign({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=LinkedValueUtils.getValue(this);e.value=null!=t?t:this.state.initialValue;var i=LinkedValueUtils.getChecked(this);return e.checked=null!=i?i:this.state.initialChecked,e.onChange=this._handleChange,input(e,this.props.children)},componentDidMount:function(){var e=ReactMount.getID(this.getDOMNode());instancesByReactID[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=ReactMount.getID(e);delete instancesByReactID[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&DOMPropertyOperations.setValueForProperty(e,"checked",this.props.checked||!1);var t=LinkedValueUtils.getValue(this);null!=t&&DOMPropertyOperations.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,i=LinkedValueUtils.getOnChange(this);i&&(t=i.call(this,e)),ReactUpdates.asap(forceUpdateIfMounted,this);var n=this.props.name;if("radio"===this.props.type&&null!=n){for(var a=this.getDOMNode(),r=a;r.parentNode;)r=r.parentNode;for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),s=0,u=o.length;u>s;s++){var c=o[s];if(c!==a&&c.form===a.form){var l=ReactMount.getID(c);invariant(l);var p=instancesByReactID[l];invariant(p),ReactUpdates.asap(forceUpdateIfMounted,p)}}}return t}});module.exports=ReactDOMInput;
},{"./AutoFocusMixin":9,"./DOMPropertyOperations":19,"./LinkedValueUtils":31,"./Object.assign":34,"./ReactBrowserComponentMixin":37,"./ReactCompositeComponent":42,"./ReactDOM":45,"./ReactElement":58,"./ReactMount":69,"./ReactUpdates":85,"./invariant":132}],52:[function(require,module,exports){
"use strict";var ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),warning=require("./warning"),option=ReactElement.createFactory(ReactDOM.option.type),ReactDOMOption=ReactCompositeComponent.createClass({displayName:"ReactDOMOption",mixins:[ReactBrowserComponentMixin],componentWillMount:function(){},render:function(){return option(this.props,this.props.children)}});module.exports=ReactDOMOption;
},{"./ReactBrowserComponentMixin":37,"./ReactCompositeComponent":42,"./ReactDOM":45,"./ReactElement":58,"./warning":149}],53:[function(require,module,exports){
"use strict";function updateWithPendingValueIfMounted(){this.isMounted()&&(this.setState({value:this._pendingValue}),this._pendingValue=0)}function selectValueType(e,t){if(null!=e[t])if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function updateOptions(e,t){var i,l,a,n=e.props.multiple,s=null!=t?t:e.state.value,u=e.getDOMNode().options;if(n)for(i={},l=0,a=s.length;a>l;++l)i[""+s[l]]=!0;else i=""+s;for(l=0,a=u.length;a>l;l++){var r=n?i.hasOwnProperty(u[l].value):u[l].value===i;r!==u[l].selected&&(u[l].selected=r)}}var AutoFocusMixin=require("./AutoFocusMixin"),LinkedValueUtils=require("./LinkedValueUtils"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),select=ReactElement.createFactory(ReactDOM.select.type),ReactDOMSelect=ReactCompositeComponent.createClass({displayName:"ReactDOMSelect",mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],propTypes:{defaultValue:selectValueType,value:selectValueType},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillMount:function(){this._pendingValue=null},componentWillReceiveProps:function(e){!this.props.multiple&&e.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!e.multiple&&this.setState({value:this.state.value[0]})},render:function(){var e=assign({},this.props);return e.onChange=this._handleChange,e.value=null,select(e,this.props.children)},componentDidMount:function(){updateOptions(this,LinkedValueUtils.getValue(this))},componentDidUpdate:function(e){var t=LinkedValueUtils.getValue(this),i=!!e.multiple,l=!!this.props.multiple;(null!=t||i!==l)&&updateOptions(this,t)},_handleChange:function(e){var t,i=LinkedValueUtils.getOnChange(this);i&&(t=i.call(this,e));var l;if(this.props.multiple){l=[];for(var a=e.target.options,n=0,s=a.length;s>n;n++)a[n].selected&&l.push(a[n].value)}else l=e.target.value;return this._pendingValue=l,ReactUpdates.asap(updateWithPendingValueIfMounted,this),t}});module.exports=ReactDOMSelect;
},{"./AutoFocusMixin":9,"./LinkedValueUtils":31,"./Object.assign":34,"./ReactBrowserComponentMixin":37,"./ReactCompositeComponent":42,"./ReactDOM":45,"./ReactElement":58,"./ReactUpdates":85}],54:[function(require,module,exports){
"use strict";function isCollapsed(e,t,n,s){return e===n&&t===s}function getIEOffsets(e){var t=document.selection,n=t.createRange(),s=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var r=o.text.length,a=r+s;return{start:r,end:a}}function getModernOffsets(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,s=t.anchorOffset,o=t.focusNode,r=t.focusOffset,a=t.getRangeAt(0),f=isCollapsed(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),d=f?0:a.toString().length,c=a.cloneRange();c.selectNodeContents(e),c.setEnd(a.startContainer,a.startOffset);var i=isCollapsed(c.startContainer,c.startOffset,c.endContainer,c.endOffset),u=i?0:c.toString().length,g=u+d,l=document.createRange();l.setStart(n,s),l.setEnd(o,r);var O=l.collapsed;return{start:O?g:u,end:O?u:g}}function setIEOffsets(e,t){var n,s,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,s=n):t.start>t.end?(n=t.end,s=t.start):(n=t.start,s=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",s-n),o.select()}function setModernOffsets(e,t){if(window.getSelection){var n=window.getSelection(),s=e[getTextContentAccessor()].length,o=Math.min(t.start,s),r="undefined"==typeof t.end?o:Math.min(t.end,s);if(!n.extend&&o>r){var a=r;r=o,o=a}var f=getNodeForCharacterOffset(e,o),d=getNodeForCharacterOffset(e,r);if(f&&d){var c=document.createRange();c.setStart(f.node,f.offset),n.removeAllRanges(),o>r?(n.addRange(c),n.extend(d.node,d.offset)):(c.setEnd(d.node,d.offset),n.addRange(c))}}}var ExecutionEnvironment=require("./ExecutionEnvironment"),getNodeForCharacterOffset=require("./getNodeForCharacterOffset"),getTextContentAccessor=require("./getTextContentAccessor"),useIEOffsets=ExecutionEnvironment.canUseDOM&&document.selection,ReactDOMSelection={getOffsets:useIEOffsets?getIEOffsets:getModernOffsets,setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};module.exports=ReactDOMSelection;
},{"./ExecutionEnvironment":29,"./getNodeForCharacterOffset":125,"./getTextContentAccessor":127}],55:[function(require,module,exports){
"use strict";function forceUpdateIfMounted(){this.isMounted()&&this.forceUpdate()}var AutoFocusMixin=require("./AutoFocusMixin"),DOMPropertyOperations=require("./DOMPropertyOperations"),LinkedValueUtils=require("./LinkedValueUtils"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),invariant=require("./invariant"),warning=require("./warning"),textarea=ReactElement.createFactory(ReactDOM.textarea.type),ReactDOMTextarea=ReactCompositeComponent.createClass({displayName:"ReactDOMTextarea",mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(invariant(null==e),Array.isArray(t)&&(invariant(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var a=LinkedValueUtils.getValue(this);return{initialValue:""+(null!=a?a:e)}},render:function(){var e=assign({},this.props);return invariant(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,textarea(e,this.state.initialValue)},componentDidUpdate:function(){var e=LinkedValueUtils.getValue(this);if(null!=e){var t=this.getDOMNode();DOMPropertyOperations.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,a=LinkedValueUtils.getOnChange(this);return a&&(t=a.call(this,e)),ReactUpdates.asap(forceUpdateIfMounted,this),t}});module.exports=ReactDOMTextarea;
},{"./AutoFocusMixin":9,"./DOMPropertyOperations":19,"./LinkedValueUtils":31,"./Object.assign":34,"./ReactBrowserComponentMixin":37,"./ReactCompositeComponent":42,"./ReactDOM":45,"./ReactElement":58,"./ReactUpdates":85,"./invariant":132,"./warning":149}],56:[function(require,module,exports){
"use strict";function ReactDefaultBatchingStrategyTransaction(){this.reinitializeTransaction()}var ReactUpdates=require("./ReactUpdates"),Transaction=require("./Transaction"),assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),RESET_BATCHED_UPDATES={initialize:emptyFunction,close:function(){ReactDefaultBatchingStrategy.isBatchingUpdates=!1}},FLUSH_BATCHED_UPDATES={initialize:emptyFunction,close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)},TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function(){return TRANSACTION_WRAPPERS}});var transaction=new ReactDefaultBatchingStrategyTransaction,ReactDefaultBatchingStrategy={isBatchingUpdates:!1,batchedUpdates:function(t,a,e){var n=ReactDefaultBatchingStrategy.isBatchingUpdates;ReactDefaultBatchingStrategy.isBatchingUpdates=!0,n?t(a,e):transaction.perform(t,null,a,e)}};module.exports=ReactDefaultBatchingStrategy;
},{"./Object.assign":34,"./ReactUpdates":85,"./Transaction":101,"./emptyFunction":113}],57:[function(require,module,exports){
"use strict";function inject(){ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener),ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder),ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles),ReactInjection.EventPluginHub.injectMount(ReactMount),ReactInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,CompositionEventPlugin:CompositionEventPlugin,MobileSafariClickEventPlugin:MobileSafariClickEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin}),ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent),ReactInjection.NativeComponent.injectComponentClasses({button:ReactDOMButton,form:ReactDOMForm,img:ReactDOMImg,input:ReactDOMInput,option:ReactDOMOption,select:ReactDOMSelect,textarea:ReactDOMTextarea,html:createFullPageComponent("html"),head:createFullPageComponent("head"),body:createFullPageComponent("body")}),ReactInjection.CompositeComponent.injectMixin(ReactBrowserComponentMixin),ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig),ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig),ReactInjection.EmptyComponent.injectEmptyComponent("noscript"),ReactInjection.Updates.injectReconcileTransaction(ReactComponentBrowserEnvironment.ReactReconcileTransaction),ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy),ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM?ClientReactRootIndex.createReactRootIndex:ServerReactRootIndex.createReactRootIndex),ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment)}var BeforeInputEventPlugin=require("./BeforeInputEventPlugin"),ChangeEventPlugin=require("./ChangeEventPlugin"),ClientReactRootIndex=require("./ClientReactRootIndex"),CompositionEventPlugin=require("./CompositionEventPlugin"),DefaultEventPluginOrder=require("./DefaultEventPluginOrder"),EnterLeaveEventPlugin=require("./EnterLeaveEventPlugin"),ExecutionEnvironment=require("./ExecutionEnvironment"),HTMLDOMPropertyConfig=require("./HTMLDOMPropertyConfig"),MobileSafariClickEventPlugin=require("./MobileSafariClickEventPlugin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactComponentBrowserEnvironment=require("./ReactComponentBrowserEnvironment"),ReactDefaultBatchingStrategy=require("./ReactDefaultBatchingStrategy"),ReactDOMComponent=require("./ReactDOMComponent"),ReactDOMButton=require("./ReactDOMButton"),ReactDOMForm=require("./ReactDOMForm"),ReactDOMImg=require("./ReactDOMImg"),ReactDOMInput=require("./ReactDOMInput"),ReactDOMOption=require("./ReactDOMOption"),ReactDOMSelect=require("./ReactDOMSelect"),ReactDOMTextarea=require("./ReactDOMTextarea"),ReactEventListener=require("./ReactEventListener"),ReactInjection=require("./ReactInjection"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactMount=require("./ReactMount"),SelectEventPlugin=require("./SelectEventPlugin"),ServerReactRootIndex=require("./ServerReactRootIndex"),SimpleEventPlugin=require("./SimpleEventPlugin"),SVGDOMPropertyConfig=require("./SVGDOMPropertyConfig"),createFullPageComponent=require("./createFullPageComponent");module.exports={inject:inject};
},{"./BeforeInputEventPlugin":10,"./ChangeEventPlugin":14,"./ClientReactRootIndex":15,"./CompositionEventPlugin":16,"./DefaultEventPluginOrder":21,"./EnterLeaveEventPlugin":22,"./ExecutionEnvironment":29,"./HTMLDOMPropertyConfig":30,"./MobileSafariClickEventPlugin":33,"./ReactBrowserComponentMixin":37,"./ReactComponentBrowserEnvironment":41,"./ReactDOMButton":46,"./ReactDOMComponent":47,"./ReactDOMForm":48,"./ReactDOMImg":50,"./ReactDOMInput":51,"./ReactDOMOption":52,"./ReactDOMSelect":53,"./ReactDOMTextarea":55,"./ReactDefaultBatchingStrategy":56,"./ReactEventListener":63,"./ReactInjection":64,"./ReactInstanceHandles":66,"./ReactMount":69,"./SVGDOMPropertyConfig":86,"./SelectEventPlugin":87,"./ServerReactRootIndex":88,"./SimpleEventPlugin":89,"./createFullPageComponent":109}],58:[function(require,module,exports){
"use strict";function defineWarningProperty(e,t){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:function(){return this._store?this._store[t]:null},set:function(e){this._store[t]=e}})}function defineMutationMembrane(e){try{var t={props:!0};for(var n in t)defineWarningProperty(e,n);useMutationMembrane=!0}catch(r){}}var ReactContext=require("./ReactContext"),ReactCurrentOwner=require("./ReactCurrentOwner"),warning=require("./warning"),RESERVED_PROPS={key:!0,ref:!0},useMutationMembrane=!1,ReactElement=function(e,t,n,r,a,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=a,this.props=i};ReactElement.prototype={_isReactElement:!0},ReactElement.createElement=function(e,t,n){var r,a={},i=null,o=null;if(null!=t){o=void 0===t.ref?null:t.ref,i=null==t.key?null:""+t.key;for(r in t)t.hasOwnProperty(r)&&!RESERVED_PROPS.hasOwnProperty(r)&&(a[r]=t[r])}var c=arguments.length-2;if(1===c)a.children=n;else if(c>1){for(var u=Array(c),l=0;c>l;l++)u[l]=arguments[l+2];a.children=u}if(e.defaultProps){var f=e.defaultProps;for(r in f)"undefined"==typeof a[r]&&(a[r]=f[r])}return new ReactElement(e,i,o,ReactCurrentOwner.current,ReactContext.current,a)},ReactElement.createFactory=function(e){var t=ReactElement.createElement.bind(null,e);return t.type=e,t},ReactElement.cloneAndReplaceProps=function(e,t){var n=new ReactElement(e.type,e.key,e.ref,e._owner,e._context,t);return n},ReactElement.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},module.exports=ReactElement;
},{"./ReactContext":43,"./ReactCurrentOwner":44,"./warning":149}],59:[function(require,module,exports){
"use strict";function getCurrentOwnerDisplayName(){var e=ReactCurrentOwner.current;return e&&e.constructor.displayName||void 0}function validateExplicitKey(e,r){e._store.validated||null!=e.key||(e._store.validated=!0,warnAndMonitorForKeyUse("react_key_warning",'Each child in an array should have a unique "key" prop.',e,r))}function validatePropertyKey(e,r,t){NUMERIC_PROPERTY_REGEX.test(e)&&warnAndMonitorForKeyUse("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",r,t)}function warnAndMonitorForKeyUse(e,r,t,n){var a=getCurrentOwnerDisplayName(),o=n.displayName,i=a||o,c=ownerHasKeyUseWarning[e];if(!c.hasOwnProperty(i)){c[i]=!0,r+=a?" Check the render method of "+a+".":" Check the renderComponent call using <"+o+">.";var s=null;t._owner&&t._owner!==ReactCurrentOwner.current&&(s=t._owner.constructor.displayName,r+=" It was passed a child from "+s+"."),r+=" See http://fb.me/react-warning-keys for more information.",monitorCodeUse(e,{component:i,componentOwner:s}),console.warn(r)}}function monitorUseOfObjectMap(){var e=getCurrentOwnerDisplayName()||"";ownerHasMonitoredObjectMap.hasOwnProperty(e)||(ownerHasMonitoredObjectMap[e]=!0,monitorCodeUse("react_object_map_children"))}function validateChildKeys(e,r){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];ReactElement.isValidElement(n)&&validateExplicitKey(n,r)}else if(ReactElement.isValidElement(e))e._store.validated=!0;else if(e&&"object"==typeof e){monitorUseOfObjectMap();for(var a in e)validatePropertyKey(a,e[a],r)}}function checkPropTypes(e,r,t,n){for(var a in r)if(r.hasOwnProperty(a)){var o;try{o=r[a](t,a,e,n)}catch(i){o=i}o instanceof Error&&!(o.message in loggedTypeFailures)&&(loggedTypeFailures[o.message]=!0,monitorCodeUse("react_failed_descriptor_type_check",{message:o.message}))}}var ReactElement=require("./ReactElement"),ReactPropTypeLocations=require("./ReactPropTypeLocations"),ReactCurrentOwner=require("./ReactCurrentOwner"),monitorCodeUse=require("./monitorCodeUse"),ownerHasKeyUseWarning={react_key_warning:{},react_numeric_key_warning:{}},ownerHasMonitoredObjectMap={},loggedTypeFailures={},NUMERIC_PROPERTY_REGEX=/^\d+$/,ReactElementValidator={createElement:function(e){var r=ReactElement.createElement.apply(this,arguments);if(null==r)return r;for(var t=2;t<arguments.length;t++)validateChildKeys(arguments[t],e);var n=e.displayName;return e.propTypes&&checkPropTypes(n,e.propTypes,r.props,ReactPropTypeLocations.prop),e.contextTypes&&checkPropTypes(n,e.contextTypes,r._context,ReactPropTypeLocations.context),r},createFactory:function(e){var r=ReactElementValidator.createElement.bind(null,e);return r.type=e,r}};module.exports=ReactElementValidator;
},{"./ReactCurrentOwner":44,"./ReactElement":58,"./ReactPropTypeLocations":77,"./monitorCodeUse":142}],60:[function(require,module,exports){
"use strict";function getEmptyComponent(){return invariant(component),component()}function registerNullComponentID(n){nullComponentIdsRegistry[n]=!0}function deregisterNullComponentID(n){delete nullComponentIdsRegistry[n]}function isNullComponentID(n){return nullComponentIdsRegistry[n]}var ReactElement=require("./ReactElement"),invariant=require("./invariant"),component,nullComponentIdsRegistry={},ReactEmptyComponentInjection={injectEmptyComponent:function(n){component=ReactElement.createFactory(n)}},ReactEmptyComponent={deregisterNullComponentID:deregisterNullComponentID,getEmptyComponent:getEmptyComponent,injection:ReactEmptyComponentInjection,isNullComponentID:isNullComponentID,registerNullComponentID:registerNullComponentID};module.exports=ReactEmptyComponent;
},{"./ReactElement":58,"./invariant":132}],61:[function(require,module,exports){
"use strict";var ReactErrorUtils={guard:function(r){return r}};module.exports=ReactErrorUtils;
},{}],62:[function(require,module,exports){
"use strict";function runEventQueueInBatch(e){EventPluginHub.enqueueEvents(e),EventPluginHub.processEventQueue()}var EventPluginHub=require("./EventPluginHub"),ReactEventEmitterMixin={handleTopLevel:function(e,n,t,u){var i=EventPluginHub.extractEvents(e,n,t,u);runEventQueueInBatch(i)}};module.exports=ReactEventEmitterMixin;
},{"./EventPluginHub":25}],63:[function(require,module,exports){
"use strict";function findParent(e){var t=ReactMount.getID(e),n=ReactInstanceHandles.getReactRootIDFromNodeID(t),o=ReactMount.findReactContainerForID(n),a=ReactMount.getFirstReactDOM(o);return a}function TopLevelCallbackBookKeeping(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function handleTopLevelImpl(e){for(var t=ReactMount.getFirstReactDOM(getEventTarget(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=findParent(n);for(var o=0,a=e.ancestors.length;a>o;o++){t=e.ancestors[o];var i=ReactMount.getID(t)||"";ReactEventListener._handleTopLevel(e.topLevelType,t,i,e.nativeEvent)}}function scrollValueMonitor(e){var t=getUnboundedScrollPosition(window);e(t)}var EventListener=require("./EventListener"),ExecutionEnvironment=require("./ExecutionEnvironment"),PooledClass=require("./PooledClass"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactMount=require("./ReactMount"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),getEventTarget=require("./getEventTarget"),getUnboundedScrollPosition=require("./getUnboundedScrollPosition");assign(TopLevelCallbackBookKeeping.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);var ReactEventListener={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function(e){ReactEventListener._handleTopLevel=e},setEnabled:function(e){ReactEventListener._enabled=!!e},isEnabled:function(){return ReactEventListener._enabled},trapBubbledEvent:function(e,t,n){var o=n;if(o)return EventListener.listen(o,t,ReactEventListener.dispatchEvent.bind(null,e))},trapCapturedEvent:function(e,t,n){var o=n;if(o)return EventListener.capture(o,t,ReactEventListener.dispatchEvent.bind(null,e))},monitorScrollValue:function(e){var t=scrollValueMonitor.bind(null,e);EventListener.listen(window,"scroll",t),EventListener.listen(window,"resize",t)},dispatchEvent:function(e,t){if(ReactEventListener._enabled){var n=TopLevelCallbackBookKeeping.getPooled(e,t);try{ReactUpdates.batchedUpdates(handleTopLevelImpl,n)}finally{TopLevelCallbackBookKeeping.release(n)}}}};module.exports=ReactEventListener;
},{"./EventListener":24,"./ExecutionEnvironment":29,"./Object.assign":34,"./PooledClass":35,"./ReactInstanceHandles":66,"./ReactMount":69,"./ReactUpdates":85,"./getEventTarget":123,"./getUnboundedScrollPosition":128}],64:[function(require,module,exports){
"use strict";var DOMProperty=require("./DOMProperty"),EventPluginHub=require("./EventPluginHub"),ReactComponent=require("./ReactComponent"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactEmptyComponent=require("./ReactEmptyComponent"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactNativeComponent=require("./ReactNativeComponent"),ReactPerf=require("./ReactPerf"),ReactRootIndex=require("./ReactRootIndex"),ReactUpdates=require("./ReactUpdates"),ReactInjection={Component:ReactComponent.injection,CompositeComponent:ReactCompositeComponent.injection,DOMProperty:DOMProperty.injection,EmptyComponent:ReactEmptyComponent.injection,EventPluginHub:EventPluginHub.injection,EventEmitter:ReactBrowserEventEmitter.injection,NativeComponent:ReactNativeComponent.injection,Perf:ReactPerf.injection,RootIndex:ReactRootIndex.injection,Updates:ReactUpdates.injection};module.exports=ReactInjection;
},{"./DOMProperty":18,"./EventPluginHub":25,"./ReactBrowserEventEmitter":38,"./ReactComponent":40,"./ReactCompositeComponent":42,"./ReactEmptyComponent":60,"./ReactNativeComponent":72,"./ReactPerf":74,"./ReactRootIndex":81,"./ReactUpdates":85}],65:[function(require,module,exports){
"use strict";function isInDocument(e){return containsNode(document.documentElement,e)}var ReactDOMSelection=require("./ReactDOMSelection"),containsNode=require("./containsNode"),focusNode=require("./focusNode"),getActiveElement=require("./getActiveElement"),ReactInputSelection={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=getActiveElement();return{focusedElem:e,selectionRange:ReactInputSelection.hasSelectionCapabilities(e)?ReactInputSelection.getSelection(e):null}},restoreSelection:function(e){var t=getActiveElement(),n=e.focusedElem,c=e.selectionRange;t!==n&&isInDocument(n)&&(ReactInputSelection.hasSelectionCapabilities(n)&&ReactInputSelection.setSelection(n,c),focusNode(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=ReactDOMSelection.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,c=t.end;if("undefined"==typeof c&&(c=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(c,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",c-n),o.select()}else ReactDOMSelection.setOffsets(e,t)}};module.exports=ReactInputSelection;
},{"./ReactDOMSelection":54,"./containsNode":107,"./focusNode":117,"./getActiveElement":119}],66:[function(require,module,exports){
"use strict";function getReactRootIDString(t){return SEPARATOR+t.toString(36)}function isBoundary(t,e){return t.charAt(e)===SEPARATOR||e===t.length}function isValidID(t){return""===t||t.charAt(0)===SEPARATOR&&t.charAt(t.length-1)!==SEPARATOR}function isAncestorIDOf(t,e){return 0===e.indexOf(t)&&isBoundary(e,t.length)}function getParentID(t){return t?t.substr(0,t.lastIndexOf(SEPARATOR)):""}function getNextDescendantID(t,e){if(invariant(isValidID(t)&&isValidID(e)),invariant(isAncestorIDOf(t,e)),t===e)return t;for(var n=t.length+SEPARATOR_LENGTH,r=n;r<e.length&&!isBoundary(e,r);r++);return e.substr(0,r)}function getFirstCommonAncestorID(t,e){var n=Math.min(t.length,e.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(isBoundary(t,a)&&isBoundary(e,a))r=a;else if(t.charAt(a)!==e.charAt(a))break;var i=t.substr(0,r);return invariant(isValidID(i)),i}function traverseParentPath(t,e,n,r,a,i){t=t||"",e=e||"",invariant(t!==e);var o=isAncestorIDOf(e,t);invariant(o||isAncestorIDOf(t,e));for(var s=0,c=o?getParentID:getNextDescendantID,R=t;;R=c(R,e)){var A;if(a&&R===t||i&&R===e||(A=n(R,o,r)),A===!1||R===e)break;invariant(s++<MAX_TREE_DEPTH)}}var ReactRootIndex=require("./ReactRootIndex"),invariant=require("./invariant"),SEPARATOR=".",SEPARATOR_LENGTH=SEPARATOR.length,MAX_TREE_DEPTH=100,ReactInstanceHandles={createReactRootID:function(){return getReactRootIDString(ReactRootIndex.createReactRootIndex())},createReactID:function(t,e){return t+e},getReactRootIDFromNodeID:function(t){if(t&&t.charAt(0)===SEPARATOR&&t.length>1){var e=t.indexOf(SEPARATOR,1);return e>-1?t.substr(0,e):t}return null},traverseEnterLeave:function(t,e,n,r,a){var i=getFirstCommonAncestorID(t,e);i!==t&&traverseParentPath(t,i,n,r,!1,!0),i!==e&&traverseParentPath(i,e,n,a,!0,!1)},traverseTwoPhase:function(t,e,n){t&&(traverseParentPath("",t,e,n,!0,!1),traverseParentPath(t,"",e,n,!1,!0))},traverseAncestors:function(t,e,n){traverseParentPath("",t,e,n,!0,!1)},_getFirstCommonAncestorID:getFirstCommonAncestorID,_getNextDescendantID:getNextDescendantID,isAncestorIDOf:isAncestorIDOf,SEPARATOR:SEPARATOR};module.exports=ReactInstanceHandles;
},{"./ReactRootIndex":81,"./invariant":132}],67:[function(require,module,exports){
"use strict";function warnForLegacyFactoryCall(){if(ReactLegacyElementFactory._isLegacyCallWarningEnabled){var e=ReactCurrentOwner.current,t=e&&e.constructor?e.constructor.displayName:"";t||(t="Something"),legacyFactoryLogs.hasOwnProperty(t)||(legacyFactoryLogs[t]=!0,monitorCodeUse("react_legacy_factory_call",{version:3,name:t}))}}function warnForPlainFunctionType(e){var t=e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent;if(t);else if(!e._reactWarnedForThisType){try{e._reactWarnedForThisType=!0}catch(a){}monitorCodeUse("react_non_component_in_jsx",{version:3,name:e.name})}}function warnForNonLegacyFactory(e){}function proxyStaticMethods(e,t){if("function"==typeof t)for(var a in t)if(t.hasOwnProperty(a)){var r=t[a];if("function"==typeof r){var n=r.bind(t);for(var c in r)r.hasOwnProperty(c)&&(n[c]=r[c]);e[a]=n}else e[a]=r}}var ReactCurrentOwner=require("./ReactCurrentOwner"),invariant=require("./invariant"),monitorCodeUse=require("./monitorCodeUse"),warning=require("./warning"),legacyFactoryLogs={},LEGACY_MARKER={},NON_LEGACY_MARKER={},ReactLegacyElementFactory={};ReactLegacyElementFactory.wrapCreateFactory=function(e){var t=function(t){return"function"!=typeof t?e(t):t.isReactNonLegacyFactory?e(t.type):t.isReactLegacyFactory?e(t.type):t};return t},ReactLegacyElementFactory.wrapCreateElement=function(e){var t=function(t){if("function"!=typeof t)return e.apply(this,arguments);var a;return t.isReactNonLegacyFactory?(a=Array.prototype.slice.call(arguments,0),a[0]=t.type,e.apply(this,a)):t.isReactLegacyFactory?(t._isMockFunction&&(t.type._mockedReactClassConstructor=t),a=Array.prototype.slice.call(arguments,0),a[0]=t.type,e.apply(this,a)):t.apply(null,Array.prototype.slice.call(arguments,1))};return t},ReactLegacyElementFactory.wrapFactory=function(e){invariant("function"==typeof e);var t=function(){return e.apply(this,arguments)};return proxyStaticMethods(t,e.type),t.isReactLegacyFactory=LEGACY_MARKER,t.type=e.type,t},ReactLegacyElementFactory.markNonLegacyFactory=function(e){return e.isReactNonLegacyFactory=NON_LEGACY_MARKER,e},ReactLegacyElementFactory.isValidFactory=function(e){return"function"==typeof e&&e.isReactLegacyFactory===LEGACY_MARKER},ReactLegacyElementFactory.isValidClass=function(e){return ReactLegacyElementFactory.isValidFactory(e)},ReactLegacyElementFactory._isLegacyCallWarningEnabled=!0,module.exports=ReactLegacyElementFactory;
},{"./ReactCurrentOwner":44,"./invariant":132,"./monitorCodeUse":142,"./warning":149}],68:[function(require,module,exports){
"use strict";var adler32=require("./adler32"),ReactMarkupChecksum={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var r=adler32(e);return e.replace(">"," "+ReactMarkupChecksum.CHECKSUM_ATTR_NAME+'="'+r+'">')},canReuseMarkup:function(e,r){var a=r.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);a=a&&parseInt(a,10);var u=adler32(e);return u===a}};module.exports=ReactMarkupChecksum;
},{"./adler32":104}],69:[function(require,module,exports){
"use strict";function getReactRootID(e){var t=getReactRootElementInContainer(e);return t&&ReactMount.getID(t)}function getID(e){var t=internalGetID(e);if(t)if(nodeCache.hasOwnProperty(t)){var n=nodeCache[t];n!==e&&(invariant(!isValid(n,t)),nodeCache[t]=e)}else nodeCache[t]=e;return t}function internalGetID(e){return e&&e.getAttribute&&e.getAttribute(ATTR_NAME)||""}function setID(e,t){var n=internalGetID(e);n!==t&&delete nodeCache[n],e.setAttribute(ATTR_NAME,t),nodeCache[t]=e}function getNode(e){return nodeCache.hasOwnProperty(e)&&isValid(nodeCache[e],e)||(nodeCache[e]=ReactMount.findReactNodeByID(e)),nodeCache[e]}function isValid(e,t){if(e){invariant(internalGetID(e)===t);var n=ReactMount.findReactContainerForID(t);if(n&&containsNode(n,e))return!0}return!1}function purgeID(e){delete nodeCache[e]}function findDeepestCachedAncestorImpl(e){var t=nodeCache[e];return t&&isValid(t,e)?void(deepestNodeSoFar=t):!1}function findDeepestCachedAncestor(e){deepestNodeSoFar=null,ReactInstanceHandles.traverseAncestors(e,findDeepestCachedAncestorImpl);var t=deepestNodeSoFar;return deepestNodeSoFar=null,t}var DOMProperty=require("./DOMProperty"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactElement=require("./ReactElement"),ReactLegacyElement=require("./ReactLegacyElement"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactPerf=require("./ReactPerf"),containsNode=require("./containsNode"),deprecated=require("./deprecated"),getReactRootElementInContainer=require("./getReactRootElementInContainer"),instantiateReactComponent=require("./instantiateReactComponent"),invariant=require("./invariant"),shouldUpdateReactComponent=require("./shouldUpdateReactComponent"),warning=require("./warning"),createElement=ReactLegacyElement.wrapCreateElement(ReactElement.createElement),SEPARATOR=ReactInstanceHandles.SEPARATOR,ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME,nodeCache={},ELEMENT_NODE_TYPE=1,DOC_NODE_TYPE=9,instancesByReactRootID={},containersByReactRootID={},rootElementsByReactRootID,findComponentRootReusableArray=[],deepestNodeSoFar=null,ReactMount={_instancesByReactRootID:instancesByReactRootID,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,o){var r=t.props;return ReactMount.scrollMonitor(n,function(){e.replaceProps(r,o)}),e},_registerComponent:function(e,t){invariant(t&&(t.nodeType===ELEMENT_NODE_TYPE||t.nodeType===DOC_NODE_TYPE)),ReactBrowserEventEmitter.ensureScrollValueMonitoring();var n=ReactMount.registerContainer(t);return instancesByReactRootID[n]=e,n},_renderNewRootComponent:ReactPerf.measure("ReactMount","_renderNewRootComponent",function(e,t,n){var o=instantiateReactComponent(e,null),r=ReactMount._registerComponent(o,t);return o.mountComponentIntoNode(r,t,n),o}),render:function(e,t,n){invariant(ReactElement.isValidElement(e));var o=instancesByReactRootID[getReactRootID(t)];if(o){var r=o._currentElement;if(shouldUpdateReactComponent(r,e))return ReactMount._updateRootComponent(o,e,t,n);ReactMount.unmountComponentAtNode(t)}var a=getReactRootElementInContainer(t),c=a&&ReactMount.isRenderedByReact(a),i=c&&!o,R=ReactMount._renderNewRootComponent(e,t,i);return n&&n.call(R),R},constructAndRenderComponent:function(e,t,n){var o=createElement(e,t);return ReactMount.render(o,n)},constructAndRenderComponentByID:function(e,t,n){var o=document.getElementById(n);return invariant(o),ReactMount.constructAndRenderComponent(e,t,o)},registerContainer:function(e){var t=getReactRootID(e);return t&&(t=ReactInstanceHandles.getReactRootIDFromNodeID(t)),t||(t=ReactInstanceHandles.createReactRootID()),containersByReactRootID[t]=e,t},unmountComponentAtNode:function(e){var t=getReactRootID(e),n=instancesByReactRootID[t];return n?(ReactMount.unmountComponentFromNode(n,e),delete instancesByReactRootID[t],delete containersByReactRootID[t],!0):!1},unmountComponentFromNode:function(e,t){for(e.unmountComponent(),t.nodeType===DOC_NODE_TYPE&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=ReactInstanceHandles.getReactRootIDFromNodeID(e),n=containersByReactRootID[t];return n},findReactNodeByID:function(e){var t=ReactMount.findReactContainerForID(e);return ReactMount.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=ReactMount.getID(e);return t?t.charAt(0)===SEPARATOR:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(ReactMount.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=findComponentRootReusableArray,o=0,r=findDeepestCachedAncestor(t)||e;for(n[0]=r.firstChild,n.length=1;o<n.length;){for(var a,c=n[o++];c;){var i=ReactMount.getID(c);i?t===i?a=c:ReactInstanceHandles.isAncestorIDOf(i,t)&&(n.length=o=0,n.push(c.firstChild)):n.push(c.firstChild),c=c.nextSibling}if(a)return n.length=0,a}n.length=0,invariant(!1)},getReactRootID:getReactRootID,getID:getID,setID:setID,getNode:getNode,purgeID:purgeID};ReactMount.renderComponent=deprecated("ReactMount","renderComponent","render",this,ReactMount.render),module.exports=ReactMount;
},{"./DOMProperty":18,"./ReactBrowserEventEmitter":38,"./ReactCurrentOwner":44,"./ReactElement":58,"./ReactInstanceHandles":66,"./ReactLegacyElement":67,"./ReactPerf":74,"./containsNode":107,"./deprecated":112,"./getReactRootElementInContainer":126,"./instantiateReactComponent":131,"./invariant":132,"./shouldUpdateReactComponent":146,"./warning":149}],70:[function(require,module,exports){
"use strict";function enqueueMarkup(e,t,n){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.INSERT_MARKUP,markupIndex:markupQueue.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function enqueueMove(e,t,n){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function enqueueRemove(e,t){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function enqueueTextContent(e,t){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function processQueue(){updateQueue.length&&(ReactComponent.BackendIDOperations.dangerouslyProcessChildrenUpdates(updateQueue,markupQueue),clearQueue())}function clearQueue(){updateQueue.length=0,markupQueue.length=0}var ReactComponent=require("./ReactComponent"),ReactMultiChildUpdateTypes=require("./ReactMultiChildUpdateTypes"),flattenChildren=require("./flattenChildren"),instantiateReactComponent=require("./instantiateReactComponent"),shouldUpdateReactComponent=require("./shouldUpdateReactComponent"),updateDepth=0,updateQueue=[],markupQueue=[],ReactMultiChild={Mixin:{mountChildren:function(e,t){var n=flattenChildren(e),u=[],o=0;this._renderedChildren=n;for(var r in n){var d=n[r];if(n.hasOwnProperty(r)){var a=instantiateReactComponent(d,null);n[r]=a;var i=this._rootNodeID+r,l=a.mountComponent(i,t,this._mountDepth+1);a._mountIndex=o,u.push(l),o++}}return u},updateTextContent:function(e){updateDepth++;var t=!0;try{var n=this._renderedChildren;for(var u in n)n.hasOwnProperty(u)&&this._unmountChildByName(n[u],u);this.setTextContent(e),t=!1}finally{updateDepth--,updateDepth||(t?clearQueue():processQueue())}},updateChildren:function(e,t){updateDepth++;var n=!0;try{this._updateChildren(e,t),n=!1}finally{updateDepth--,updateDepth||(n?clearQueue():processQueue())}},_updateChildren:function(e,t){var n=flattenChildren(e),u=this._renderedChildren;if(n||u){var o,r=0,d=0;for(o in n)if(n.hasOwnProperty(o)){var a=u&&u[o],i=a&&a._currentElement,l=n[o];if(shouldUpdateReactComponent(i,l))this.moveChild(a,d,r),r=Math.max(a._mountIndex,r),a.receiveComponent(l,t),a._mountIndex=d;else{a&&(r=Math.max(a._mountIndex,r),this._unmountChildByName(a,o));var p=instantiateReactComponent(l,null);this._mountChildByNameAtIndex(p,o,d,t)}d++}for(o in u)!u.hasOwnProperty(o)||n&&n[o]||this._unmountChildByName(u[o],o)}},unmountChildren:function(){var e=this._renderedChildren;for(var t in e){var n=e[t];n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&enqueueMove(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){enqueueMarkup(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){enqueueRemove(this._rootNodeID,e._mountIndex)},setTextContent:function(e){enqueueTextContent(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,u){var o=this._rootNodeID+t,r=e.mountComponent(o,u,this._mountDepth+1);e._mountIndex=n,this.createChild(e,r),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[t]=e},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null,e.unmountComponent(),delete this._renderedChildren[t]}}};module.exports=ReactMultiChild;
},{"./ReactComponent":40,"./ReactMultiChildUpdateTypes":71,"./flattenChildren":116,"./instantiateReactComponent":131,"./shouldUpdateReactComponent":146}],71:[function(require,module,exports){
"use strict";var keyMirror=require("./keyMirror"),ReactMultiChildUpdateTypes=keyMirror({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});module.exports=ReactMultiChildUpdateTypes;
},{"./keyMirror":138}],72:[function(require,module,exports){
"use strict";function createInstanceForTag(n,e,t){var a=tagToComponentClass[n];return null==a?(invariant(genericComponentClass),new genericComponentClass(n,e)):t===n?(invariant(genericComponentClass),new genericComponentClass(n,e)):new a.type(e)}var assign=require("./Object.assign"),invariant=require("./invariant"),genericComponentClass=null,tagToComponentClass={},ReactNativeComponentInjection={injectGenericComponentClass:function(n){genericComponentClass=n},injectComponentClasses:function(n){assign(tagToComponentClass,n)}},ReactNativeComponent={createInstanceForTag:createInstanceForTag,injection:ReactNativeComponentInjection};module.exports=ReactNativeComponent;
},{"./Object.assign":34,"./invariant":132}],73:[function(require,module,exports){
"use strict";var emptyObject=require("./emptyObject"),invariant=require("./invariant"),ReactOwner={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){invariant(ReactOwner.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){invariant(ReactOwner.isValidOwner(n)),n.refs[t]===e&&n.detachRef(t)},Mixin:{construct:function(){this.refs=emptyObject},attachRef:function(e,t){invariant(t.isOwnedBy(this));var n=this.refs===emptyObject?this.refs={}:this.refs;n[e]=t},detachRef:function(e){delete this.refs[e]}}};module.exports=ReactOwner;
},{"./emptyObject":114,"./invariant":132}],74:[function(require,module,exports){
"use strict";function _noMeasure(e,r,t){return t}var ReactPerf={enableMeasure:!1,storedMeasure:_noMeasure,measure:function(e,r,t){return t},injection:{injectMeasure:function(e){ReactPerf.storedMeasure=e}}};module.exports=ReactPerf;
},{}],75:[function(require,module,exports){
"use strict";function createTransferStrategy(r){return function(e,n,t){e[n]=e.hasOwnProperty(n)?r(e[n],t):t}}function transferInto(r,e){for(var n in e)if(e.hasOwnProperty(n)){var t=TransferStrategies[n];t&&TransferStrategies.hasOwnProperty(n)?t(r,n,e[n]):r.hasOwnProperty(n)||(r[n]=e[n])}return r}var assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),invariant=require("./invariant"),joinClasses=require("./joinClasses"),warning=require("./warning"),didWarn=!1,transferStrategyMerge=createTransferStrategy(function(r,e){return assign({},e,r)}),TransferStrategies={children:emptyFunction,className:createTransferStrategy(joinClasses),style:transferStrategyMerge},ReactPropTransferer={TransferStrategies:TransferStrategies,mergeProps:function(r,e){return transferInto(assign({},r),e)},Mixin:{transferPropsTo:function(r){return invariant(r._owner===this),transferInto(r.props,this.props),r}}};module.exports=ReactPropTransferer;
},{"./Object.assign":34,"./emptyFunction":113,"./invariant":132,"./joinClasses":137,"./warning":149}],76:[function(require,module,exports){
"use strict";var ReactPropTypeLocationNames={};module.exports=ReactPropTypeLocationNames;
},{}],77:[function(require,module,exports){
"use strict";var keyMirror=require("./keyMirror"),ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports=ReactPropTypeLocations;
},{"./keyMirror":138}],78:[function(require,module,exports){
"use strict";function createChainableTypeChecker(e){function r(r,t,n,a,c){if(a=a||ANONYMOUS,null!=t[n])return e(t,n,a,c);var o=ReactPropTypeLocationNames[c];return r?new Error("Required "+o+" `"+n+"` was not specified in "+("`"+a+"`.")):void 0}var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function createPrimitiveTypeChecker(e){function r(r,t,n,a){var c=r[t],o=getPropType(c);if(o!==e){var i=ReactPropTypeLocationNames[a],p=getPreciseType(c);return new Error("Invalid "+i+" `"+t+"` of type `"+p+"` "+("supplied to `"+n+"`, expected `"+e+"`."))}}return createChainableTypeChecker(r)}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns())}function createArrayOfTypeChecker(e){function r(r,t,n,a){var c=r[t];if(!Array.isArray(c)){var o=ReactPropTypeLocationNames[a],i=getPropType(c);return new Error("Invalid "+o+" `"+t+"` of type "+("`"+i+"` supplied to `"+n+"`, expected an array."))}for(var p=0;p<c.length;p++){var u=e(c,p,n,a);if(u instanceof Error)return u}}return createChainableTypeChecker(r)}function createElementTypeChecker(){function e(e,r,t,n){if(!ReactElement.isValidElement(e[r])){var a=ReactPropTypeLocationNames[n];return new Error("Invalid "+a+" `"+r+"` supplied to "+("`"+t+"`, expected a ReactElement."))}}return createChainableTypeChecker(e)}function createInstanceTypeChecker(e){function r(r,t,n,a){if(!(r[t]instanceof e)){var c=ReactPropTypeLocationNames[a],o=e.name||ANONYMOUS;return new Error("Invalid "+c+" `"+t+"` supplied to "+("`"+n+"`, expected instance of `"+o+"`."))}}return createChainableTypeChecker(r)}function createEnumTypeChecker(e){function r(r,t,n,a){for(var c=r[t],o=0;o<e.length;o++)if(c===e[o])return;var i=ReactPropTypeLocationNames[a],p=JSON.stringify(e);return new Error("Invalid "+i+" `"+t+"` of value `"+c+"` "+("supplied to `"+n+"`, expected one of "+p+"."))}return createChainableTypeChecker(r)}function createObjectOfTypeChecker(e){function r(r,t,n,a){var c=r[t],o=getPropType(c);if("object"!==o){var i=ReactPropTypeLocationNames[a];return new Error("Invalid "+i+" `"+t+"` of type "+("`"+o+"` supplied to `"+n+"`, expected an object."))}for(var p in c)if(c.hasOwnProperty(p)){var u=e(c,p,n,a);if(u instanceof Error)return u}}return createChainableTypeChecker(r)}function createUnionTypeChecker(e){function r(r,t,n,a){for(var c=0;c<e.length;c++){var o=e[c];if(null==o(r,t,n,a))return}var i=ReactPropTypeLocationNames[a];return new Error("Invalid "+i+" `"+t+"` supplied to "+("`"+n+"`."))}return createChainableTypeChecker(r)}function createNodeChecker(){function e(e,r,t,n){if(!isNode(e[r])){var a=ReactPropTypeLocationNames[n];return new Error("Invalid "+a+" `"+r+"` supplied to "+("`"+t+"`, expected a ReactNode."))}}return createChainableTypeChecker(e)}function createShapeTypeChecker(e){function r(r,t,n,a){var c=r[t],o=getPropType(c);if("object"!==o){var i=ReactPropTypeLocationNames[a];return new Error("Invalid "+i+" `"+t+"` of type `"+o+"` "+("supplied to `"+n+"`, expected `object`."))}for(var p in e){var u=e[p];if(u){var y=u(c,p,n,a);if(y)return y}}}return createChainableTypeChecker(r,"expected `object`")}function isNode(e){switch(typeof e){case"number":case"string":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(isNode);if(ReactElement.isValidElement(e))return!0;for(var r in e)if(!isNode(e[r]))return!1;return!0;default:return!1}}function getPropType(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":r}function getPreciseType(e){var r=getPropType(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}var ReactElement=require("./ReactElement"),ReactPropTypeLocationNames=require("./ReactPropTypeLocationNames"),deprecated=require("./deprecated"),emptyFunction=require("./emptyFunction"),ANONYMOUS="<<anonymous>>",elementTypeChecker=createElementTypeChecker(),nodeTypeChecker=createNodeChecker(),ReactPropTypes={array:createPrimitiveTypeChecker("array"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:elementTypeChecker,instanceOf:createInstanceTypeChecker,node:nodeTypeChecker,objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,component:deprecated("React.PropTypes","component","element",this,elementTypeChecker),renderable:deprecated("React.PropTypes","renderable","node",this,nodeTypeChecker)};module.exports=ReactPropTypes;
},{"./ReactElement":58,"./ReactPropTypeLocationNames":76,"./deprecated":112,"./emptyFunction":113}],79:[function(require,module,exports){
"use strict";function ReactPutListenerQueue(){this.listenersToPut=[]}var PooledClass=require("./PooledClass"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),assign=require("./Object.assign");assign(ReactPutListenerQueue.prototype,{enqueuePutListener:function(e,t,s){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:s})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];ReactBrowserEventEmitter.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),PooledClass.addPoolingTo(ReactPutListenerQueue),module.exports=ReactPutListenerQueue;
},{"./Object.assign":34,"./PooledClass":35,"./ReactBrowserEventEmitter":38}],80:[function(require,module,exports){
"use strict";function ReactReconcileTransaction(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=CallbackQueue.getPooled(null),this.putListenerQueue=ReactPutListenerQueue.getPooled()}var CallbackQueue=require("./CallbackQueue"),PooledClass=require("./PooledClass"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactInputSelection=require("./ReactInputSelection"),ReactPutListenerQueue=require("./ReactPutListenerQueue"),Transaction=require("./Transaction"),assign=require("./Object.assign"),SELECTION_RESTORATION={initialize:ReactInputSelection.getSelectionInformation,close:ReactInputSelection.restoreSelection},EVENT_SUPPRESSION={initialize:function(){var e=ReactBrowserEventEmitter.isEnabled();return ReactBrowserEventEmitter.setEnabled(!1),e},close:function(e){ReactBrowserEventEmitter.setEnabled(e)}},ON_DOM_READY_QUEUEING={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},PUT_LISTENER_QUEUEING={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},TRANSACTION_WRAPPERS=[PUT_LISTENER_QUEUEING,SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING],Mixin={getTransactionWrappers:function(){return TRANSACTION_WRAPPERS},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){CallbackQueue.release(this.reactMountReady),this.reactMountReady=null,ReactPutListenerQueue.release(this.putListenerQueue),this.putListenerQueue=null}};assign(ReactReconcileTransaction.prototype,Transaction.Mixin,Mixin),PooledClass.addPoolingTo(ReactReconcileTransaction),module.exports=ReactReconcileTransaction;
},{"./CallbackQueue":13,"./Object.assign":34,"./PooledClass":35,"./ReactBrowserEventEmitter":38,"./ReactInputSelection":65,"./ReactPutListenerQueue":79,"./Transaction":101}],81:[function(require,module,exports){
"use strict";var ReactRootIndexInjection={injectCreateReactRootIndex:function(e){ReactRootIndex.createReactRootIndex=e}},ReactRootIndex={createReactRootIndex:null,injection:ReactRootIndexInjection};module.exports=ReactRootIndex;
},{}],82:[function(require,module,exports){
"use strict";function renderToString(e){invariant(ReactElement.isValidElement(e));var n;try{var t=ReactInstanceHandles.createReactRootID();return n=ReactServerRenderingTransaction.getPooled(!1),n.perform(function(){var r=instantiateReactComponent(e,null),a=r.mountComponent(t,n,0);return ReactMarkupChecksum.addChecksumToMarkup(a)},null)}finally{ReactServerRenderingTransaction.release(n)}}function renderToStaticMarkup(e){invariant(ReactElement.isValidElement(e));var n;try{var t=ReactInstanceHandles.createReactRootID();return n=ReactServerRenderingTransaction.getPooled(!0),n.perform(function(){var r=instantiateReactComponent(e,null);return r.mountComponent(t,n,0)},null)}finally{ReactServerRenderingTransaction.release(n)}}var ReactElement=require("./ReactElement"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactMarkupChecksum=require("./ReactMarkupChecksum"),ReactServerRenderingTransaction=require("./ReactServerRenderingTransaction"),instantiateReactComponent=require("./instantiateReactComponent"),invariant=require("./invariant");module.exports={renderToString:renderToString,renderToStaticMarkup:renderToStaticMarkup};
},{"./ReactElement":58,"./ReactInstanceHandles":66,"./ReactMarkupChecksum":68,"./ReactServerRenderingTransaction":83,"./instantiateReactComponent":131,"./invariant":132}],83:[function(require,module,exports){
"use strict";function ReactServerRenderingTransaction(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=CallbackQueue.getPooled(null),this.putListenerQueue=ReactPutListenerQueue.getPooled()}var PooledClass=require("./PooledClass"),CallbackQueue=require("./CallbackQueue"),ReactPutListenerQueue=require("./ReactPutListenerQueue"),Transaction=require("./Transaction"),assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),ON_DOM_READY_QUEUEING={initialize:function(){this.reactMountReady.reset()},close:emptyFunction},PUT_LISTENER_QUEUEING={initialize:function(){this.putListenerQueue.reset()},close:emptyFunction},TRANSACTION_WRAPPERS=[PUT_LISTENER_QUEUEING,ON_DOM_READY_QUEUEING],Mixin={getTransactionWrappers:function(){return TRANSACTION_WRAPPERS},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){CallbackQueue.release(this.reactMountReady),this.reactMountReady=null,ReactPutListenerQueue.release(this.putListenerQueue),this.putListenerQueue=null}};assign(ReactServerRenderingTransaction.prototype,Transaction.Mixin,Mixin),PooledClass.addPoolingTo(ReactServerRenderingTransaction),module.exports=ReactServerRenderingTransaction;
},{"./CallbackQueue":13,"./Object.assign":34,"./PooledClass":35,"./ReactPutListenerQueue":79,"./Transaction":101,"./emptyFunction":113}],84:[function(require,module,exports){
"use strict";var DOMPropertyOperations=require("./DOMPropertyOperations"),ReactComponent=require("./ReactComponent"),ReactElement=require("./ReactElement"),assign=require("./Object.assign"),escapeTextForBrowser=require("./escapeTextForBrowser"),ReactTextComponent=function(){};assign(ReactTextComponent.prototype,ReactComponent.Mixin,{mountComponent:function(e,t,o){ReactComponent.Mixin.mountComponent.call(this,e,t,o);var n=escapeTextForBrowser(this.props);return t.renderToStaticMarkup?n:"<span "+DOMPropertyOperations.createMarkupForID(e)+">"+n+"</span>"},receiveComponent:function(e){var t=e.props;t!==this.props&&(this.props=t,ReactComponent.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}});var ReactTextComponentFactory=function(e){return new ReactElement(ReactTextComponent,null,null,null,null,e)};ReactTextComponentFactory.type=ReactTextComponent,module.exports=ReactTextComponentFactory;
},{"./DOMPropertyOperations":19,"./Object.assign":34,"./ReactComponent":40,"./ReactElement":58,"./escapeTextForBrowser":115}],85:[function(require,module,exports){
"use strict";function ensureInjected(){invariant(ReactUpdates.ReactReconcileTransaction&&batchingStrategy)}function ReactUpdatesFlushTransaction(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=CallbackQueue.getPooled(),this.reconcileTransaction=ReactUpdates.ReactReconcileTransaction.getPooled()}function batchedUpdates(e,t,a){ensureInjected(),batchingStrategy.batchedUpdates(e,t,a)}function mountDepthComparator(e,t){return e._mountDepth-t._mountDepth}function runBatchedUpdates(e){var t=e.dirtyComponentsLength;invariant(t===dirtyComponents.length),dirtyComponents.sort(mountDepthComparator);for(var a=0;t>a;a++){var n=dirtyComponents[a];if(n.isMounted()){var i=n._pendingCallbacks;if(n._pendingCallbacks=null,n.performUpdateIfNecessary(e.reconcileTransaction),i)for(var c=0;c<i.length;c++)e.callbackQueue.enqueue(i[c],n)}}}function enqueueUpdate(e,t){return invariant(!t||"function"==typeof t),ensureInjected(),batchingStrategy.isBatchingUpdates?(dirtyComponents.push(e),void(t&&(e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t]))):void batchingStrategy.batchedUpdates(enqueueUpdate,e,t)}function asap(e,t){invariant(batchingStrategy.isBatchingUpdates),asapCallbackQueue.enqueue(e,t),asapEnqueued=!0}var CallbackQueue=require("./CallbackQueue"),PooledClass=require("./PooledClass"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactPerf=require("./ReactPerf"),Transaction=require("./Transaction"),assign=require("./Object.assign"),invariant=require("./invariant"),warning=require("./warning"),dirtyComponents=[],asapCallbackQueue=CallbackQueue.getPooled(),asapEnqueued=!1,batchingStrategy=null,NESTED_UPDATES={initialize:function(){this.dirtyComponentsLength=dirtyComponents.length},close:function(){this.dirtyComponentsLength!==dirtyComponents.length?(dirtyComponents.splice(0,this.dirtyComponentsLength),flushBatchedUpdates()):dirtyComponents.length=0}},UPDATE_QUEUEING={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},TRANSACTION_WRAPPERS=[NESTED_UPDATES,UPDATE_QUEUEING];assign(ReactUpdatesFlushTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function(){return TRANSACTION_WRAPPERS},destructor:function(){this.dirtyComponentsLength=null,CallbackQueue.release(this.callbackQueue),this.callbackQueue=null,ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,a){return Transaction.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,a)}}),PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);var flushBatchedUpdates=ReactPerf.measure("ReactUpdates","flushBatchedUpdates",function(){for(;dirtyComponents.length||asapEnqueued;){if(dirtyComponents.length){var e=ReactUpdatesFlushTransaction.getPooled();e.perform(runBatchedUpdates,null,e),ReactUpdatesFlushTransaction.release(e)}if(asapEnqueued){asapEnqueued=!1;var t=asapCallbackQueue;asapCallbackQueue=CallbackQueue.getPooled(),t.notifyAll(),CallbackQueue.release(t)}}}),ReactUpdatesInjection={injectReconcileTransaction:function(e){invariant(e),ReactUpdates.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){invariant(e),invariant("function"==typeof e.batchedUpdates),invariant("boolean"==typeof e.isBatchingUpdates),batchingStrategy=e}},ReactUpdates={ReactReconcileTransaction:null,batchedUpdates:batchedUpdates,enqueueUpdate:enqueueUpdate,flushBatchedUpdates:flushBatchedUpdates,injection:ReactUpdatesInjection,asap:asap};module.exports=ReactUpdates;
},{"./CallbackQueue":13,"./Object.assign":34,"./PooledClass":35,"./ReactCurrentOwner":44,"./ReactPerf":74,"./Transaction":101,"./invariant":132,"./warning":149}],86:[function(require,module,exports){
"use strict";var DOMProperty=require("./DOMProperty"),MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE,SVGDOMPropertyConfig={Properties:{cx:MUST_USE_ATTRIBUTE,cy:MUST_USE_ATTRIBUTE,d:MUST_USE_ATTRIBUTE,dx:MUST_USE_ATTRIBUTE,dy:MUST_USE_ATTRIBUTE,fill:MUST_USE_ATTRIBUTE,fillOpacity:MUST_USE_ATTRIBUTE,fontFamily:MUST_USE_ATTRIBUTE,fontSize:MUST_USE_ATTRIBUTE,fx:MUST_USE_ATTRIBUTE,fy:MUST_USE_ATTRIBUTE,gradientTransform:MUST_USE_ATTRIBUTE,gradientUnits:MUST_USE_ATTRIBUTE,markerEnd:MUST_USE_ATTRIBUTE,markerMid:MUST_USE_ATTRIBUTE,markerStart:MUST_USE_ATTRIBUTE,offset:MUST_USE_ATTRIBUTE,opacity:MUST_USE_ATTRIBUTE,patternContentUnits:MUST_USE_ATTRIBUTE,patternUnits:MUST_USE_ATTRIBUTE,points:MUST_USE_ATTRIBUTE,preserveAspectRatio:MUST_USE_ATTRIBUTE,r:MUST_USE_ATTRIBUTE,rx:MUST_USE_ATTRIBUTE,ry:MUST_USE_ATTRIBUTE,spreadMethod:MUST_USE_ATTRIBUTE,stopColor:MUST_USE_ATTRIBUTE,stopOpacity:MUST_USE_ATTRIBUTE,stroke:MUST_USE_ATTRIBUTE,strokeDasharray:MUST_USE_ATTRIBUTE,strokeLinecap:MUST_USE_ATTRIBUTE,strokeOpacity:MUST_USE_ATTRIBUTE,strokeWidth:MUST_USE_ATTRIBUTE,textAnchor:MUST_USE_ATTRIBUTE,transform:MUST_USE_ATTRIBUTE,version:MUST_USE_ATTRIBUTE,viewBox:MUST_USE_ATTRIBUTE,x1:MUST_USE_ATTRIBUTE,x2:MUST_USE_ATTRIBUTE,x:MUST_USE_ATTRIBUTE,y1:MUST_USE_ATTRIBUTE,y2:MUST_USE_ATTRIBUTE,y:MUST_USE_ATTRIBUTE},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};module.exports=SVGDOMPropertyConfig;
},{"./DOMProperty":18}],87:[function(require,module,exports){
"use strict";function getSelection(e){if("selectionStart"in e&&ReactInputSelection.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function constructSelectEvent(e){if(!mouseDown&&null!=activeElement&&activeElement==getActiveElement()){var t=getSelection(activeElement);if(!lastSelection||!shallowEqual(lastSelection,t)){lastSelection=t;var n=SyntheticEvent.getPooled(eventTypes.select,activeElementID,e);return n.type="select",n.target=activeElement,EventPropagators.accumulateTwoPhaseDispatches(n),n}}}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ReactInputSelection=require("./ReactInputSelection"),SyntheticEvent=require("./SyntheticEvent"),getActiveElement=require("./getActiveElement"),isTextInputElement=require("./isTextInputElement"),keyOf=require("./keyOf"),shallowEqual=require("./shallowEqual"),topLevelTypes=EventConstants.topLevelTypes,eventTypes={select:{phasedRegistrationNames:{bubbled:keyOf({onSelect:null}),captured:keyOf({onSelectCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topContextMenu,topLevelTypes.topFocus,topLevelTypes.topKeyDown,topLevelTypes.topMouseDown,topLevelTypes.topMouseUp,topLevelTypes.topSelectionChange]}},activeElement=null,activeElementID=null,lastSelection=null,mouseDown=!1,SelectEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,o){switch(e){case topLevelTypes.topFocus:(isTextInputElement(t)||"true"===t.contentEditable)&&(activeElement=t,activeElementID=n,lastSelection=null);break;case topLevelTypes.topBlur:activeElement=null,activeElementID=null,lastSelection=null;break;case topLevelTypes.topMouseDown:mouseDown=!0;break;case topLevelTypes.topContextMenu:case topLevelTypes.topMouseUp:return mouseDown=!1,constructSelectEvent(o);case topLevelTypes.topSelectionChange:case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:return constructSelectEvent(o)}}};module.exports=SelectEventPlugin;
},{"./EventConstants":23,"./EventPropagators":28,"./ReactInputSelection":65,"./SyntheticEvent":93,"./getActiveElement":119,"./isTextInputElement":135,"./keyOf":139,"./shallowEqual":145}],88:[function(require,module,exports){
"use strict";var GLOBAL_MOUNT_POINT_MAX=Math.pow(2,53),ServerReactRootIndex={createReactRootIndex:function(){return Math.ceil(Math.random()*GLOBAL_MOUNT_POINT_MAX)}};module.exports=ServerReactRootIndex;
},{}],89:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),EventPluginUtils=require("./EventPluginUtils"),EventPropagators=require("./EventPropagators"),SyntheticClipboardEvent=require("./SyntheticClipboardEvent"),SyntheticEvent=require("./SyntheticEvent"),SyntheticFocusEvent=require("./SyntheticFocusEvent"),SyntheticKeyboardEvent=require("./SyntheticKeyboardEvent"),SyntheticMouseEvent=require("./SyntheticMouseEvent"),SyntheticDragEvent=require("./SyntheticDragEvent"),SyntheticTouchEvent=require("./SyntheticTouchEvent"),SyntheticUIEvent=require("./SyntheticUIEvent"),SyntheticWheelEvent=require("./SyntheticWheelEvent"),getEventCharCode=require("./getEventCharCode"),invariant=require("./invariant"),keyOf=require("./keyOf"),warning=require("./warning"),topLevelTypes=EventConstants.topLevelTypes,eventTypes={blur:{phasedRegistrationNames:{bubbled:keyOf({onBlur:!0}),captured:keyOf({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:keyOf({onClick:!0}),captured:keyOf({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:keyOf({onContextMenu:!0}),captured:keyOf({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:keyOf({onCopy:!0}),captured:keyOf({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:keyOf({onCut:!0}),captured:keyOf({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:keyOf({onDoubleClick:!0}),captured:keyOf({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:keyOf({onDrag:!0}),captured:keyOf({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:keyOf({onDragEnd:!0}),captured:keyOf({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:keyOf({onDragEnter:!0}),captured:keyOf({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:keyOf({onDragExit:!0}),captured:keyOf({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:keyOf({onDragLeave:!0}),captured:keyOf({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:keyOf({onDragOver:!0}),captured:keyOf({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:keyOf({onDragStart:!0}),captured:keyOf({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:keyOf({onDrop:!0}),captured:keyOf({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:keyOf({onFocus:!0}),captured:keyOf({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:keyOf({onInput:!0}),captured:keyOf({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:keyOf({onKeyDown:!0}),captured:keyOf({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:keyOf({onKeyPress:!0}),captured:keyOf({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:keyOf({onKeyUp:!0}),captured:keyOf({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:keyOf({onLoad:!0}),captured:keyOf({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:keyOf({onError:!0}),captured:keyOf({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:keyOf({onMouseDown:!0}),captured:keyOf({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:keyOf({onMouseMove:!0}),captured:keyOf({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:keyOf({onMouseOut:!0}),captured:keyOf({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:keyOf({onMouseOver:!0}),captured:keyOf({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:keyOf({onMouseUp:!0}),captured:keyOf({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:keyOf({onPaste:!0}),captured:keyOf({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:keyOf({onReset:!0}),captured:keyOf({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:keyOf({onScroll:!0}),captured:keyOf({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:keyOf({onSubmit:!0}),captured:keyOf({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:keyOf({onTouchCancel:!0}),captured:keyOf({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:keyOf({onTouchEnd:!0}),captured:keyOf({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:keyOf({onTouchMove:!0}),captured:keyOf({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:keyOf({onTouchStart:!0}),captured:keyOf({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:keyOf({onWheel:!0}),captured:keyOf({onWheelCapture:!0})}}},topLevelEventsToDispatchConfig={topBlur:eventTypes.blur,topClick:eventTypes.click,topContextMenu:eventTypes.contextMenu,topCopy:eventTypes.copy,topCut:eventTypes.cut,topDoubleClick:eventTypes.doubleClick,topDrag:eventTypes.drag,topDragEnd:eventTypes.dragEnd,topDragEnter:eventTypes.dragEnter,topDragExit:eventTypes.dragExit,topDragLeave:eventTypes.dragLeave,topDragOver:eventTypes.dragOver,topDragStart:eventTypes.dragStart,topDrop:eventTypes.drop,topError:eventTypes.error,topFocus:eventTypes.focus,topInput:eventTypes.input,topKeyDown:eventTypes.keyDown,topKeyPress:eventTypes.keyPress,topKeyUp:eventTypes.keyUp,topLoad:eventTypes.load,topMouseDown:eventTypes.mouseDown,topMouseMove:eventTypes.mouseMove,topMouseOut:eventTypes.mouseOut,topMouseOver:eventTypes.mouseOver,topMouseUp:eventTypes.mouseUp,topPaste:eventTypes.paste,topReset:eventTypes.reset,topScroll:eventTypes.scroll,topSubmit:eventTypes.submit,topTouchCancel:eventTypes.touchCancel,topTouchEnd:eventTypes.touchEnd,topTouchMove:eventTypes.touchMove,topTouchStart:eventTypes.touchStart,topWheel:eventTypes.wheel};for(var topLevelType in topLevelEventsToDispatchConfig)topLevelEventsToDispatchConfig[topLevelType].dependencies=[topLevelType];var SimpleEventPlugin={eventTypes:eventTypes,executeDispatch:function(e,t,o){var p=EventPluginUtils.executeDispatch(e,t,o);p===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,o,p){var a=topLevelEventsToDispatchConfig[e];if(!a)return null;var s;switch(e){case topLevelTypes.topInput:case topLevelTypes.topLoad:case topLevelTypes.topError:case topLevelTypes.topReset:case topLevelTypes.topSubmit:s=SyntheticEvent;break;case topLevelTypes.topKeyPress:if(0===getEventCharCode(p))return null;case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:s=SyntheticKeyboardEvent;break;case topLevelTypes.topBlur:case topLevelTypes.topFocus:s=SyntheticFocusEvent;break;case topLevelTypes.topClick:if(2===p.button)return null;case topLevelTypes.topContextMenu:case topLevelTypes.topDoubleClick:case topLevelTypes.topMouseDown:case topLevelTypes.topMouseMove:case topLevelTypes.topMouseOut:case topLevelTypes.topMouseOver:case topLevelTypes.topMouseUp:s=SyntheticMouseEvent;break;case topLevelTypes.topDrag:case topLevelTypes.topDragEnd:case topLevelTypes.topDragEnter:case topLevelTypes.topDragExit:case topLevelTypes.topDragLeave:case topLevelTypes.topDragOver:case topLevelTypes.topDragStart:case topLevelTypes.topDrop:s=SyntheticDragEvent;break;case topLevelTypes.topTouchCancel:case topLevelTypes.topTouchEnd:case topLevelTypes.topTouchMove:case topLevelTypes.topTouchStart:s=SyntheticTouchEvent;break;case topLevelTypes.topScroll:s=SyntheticUIEvent;break;case topLevelTypes.topWheel:s=SyntheticWheelEvent;break;case topLevelTypes.topCopy:case topLevelTypes.topCut:case topLevelTypes.topPaste:s=SyntheticClipboardEvent}invariant(s);var n=s.getPooled(a,o,p);return EventPropagators.accumulateTwoPhaseDispatches(n),n}};module.exports=SimpleEventPlugin;
},{"./EventConstants":23,"./EventPluginUtils":27,"./EventPropagators":28,"./SyntheticClipboardEvent":90,"./SyntheticDragEvent":92,"./SyntheticEvent":93,"./SyntheticFocusEvent":94,"./SyntheticKeyboardEvent":96,"./SyntheticMouseEvent":97,"./SyntheticTouchEvent":98,"./SyntheticUIEvent":99,"./SyntheticWheelEvent":100,"./getEventCharCode":120,"./invariant":132,"./keyOf":139,"./warning":149}],90:[function(require,module,exports){
"use strict";function SyntheticClipboardEvent(t,e,n){SyntheticEvent.call(this,t,e,n)}var SyntheticEvent=require("./SyntheticEvent"),ClipboardEventInterface={clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}};SyntheticEvent.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface),module.exports=SyntheticClipboardEvent;
},{"./SyntheticEvent":93}],91:[function(require,module,exports){
"use strict";function SyntheticCompositionEvent(t,n,e){SyntheticEvent.call(this,t,n,e)}var SyntheticEvent=require("./SyntheticEvent"),CompositionEventInterface={data:null};SyntheticEvent.augmentClass(SyntheticCompositionEvent,CompositionEventInterface),module.exports=SyntheticCompositionEvent;
},{"./SyntheticEvent":93}],92:[function(require,module,exports){
"use strict";function SyntheticDragEvent(t,e,n){SyntheticMouseEvent.call(this,t,e,n)}var SyntheticMouseEvent=require("./SyntheticMouseEvent"),DragEventInterface={dataTransfer:null};SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface),module.exports=SyntheticDragEvent;
},{"./SyntheticMouseEvent":97}],93:[function(require,module,exports){
"use strict";function SyntheticEvent(t,e,n){this.dispatchConfig=t,this.dispatchMarker=e,this.nativeEvent=n;var r=this.constructor.Interface;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a];this[a]=s?s(n):n[a]}var i=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=i?emptyFunction.thatReturnsTrue:emptyFunction.thatReturnsFalse,this.isPropagationStopped=emptyFunction.thatReturnsFalse}var PooledClass=require("./PooledClass"),assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),getEventTarget=require("./getEventTarget"),EventInterface={type:null,target:getEventTarget,currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};assign(SyntheticEvent.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t.preventDefault?t.preventDefault():t.returnValue=!1,this.isDefaultPrevented=emptyFunction.thatReturnsTrue},stopPropagation:function(){var t=this.nativeEvent;t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,this.isPropagationStopped=emptyFunction.thatReturnsTrue},persist:function(){this.isPersistent=emptyFunction.thatReturnsTrue},isPersistent:emptyFunction.thatReturnsFalse,destructor:function(){var t=this.constructor.Interface;for(var e in t)this[e]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),SyntheticEvent.Interface=EventInterface,SyntheticEvent.augmentClass=function(t,e){var n=this,r=Object.create(n.prototype);assign(r,t.prototype),t.prototype=r,t.prototype.constructor=t,t.Interface=assign({},n.Interface,e),t.augmentClass=n.augmentClass,PooledClass.addPoolingTo(t,PooledClass.threeArgumentPooler)},PooledClass.addPoolingTo(SyntheticEvent,PooledClass.threeArgumentPooler),module.exports=SyntheticEvent;
},{"./Object.assign":34,"./PooledClass":35,"./emptyFunction":113,"./getEventTarget":123}],94:[function(require,module,exports){
"use strict";function SyntheticFocusEvent(t,e,n){SyntheticUIEvent.call(this,t,e,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),FocusEventInterface={relatedTarget:null};SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface),module.exports=SyntheticFocusEvent;
},{"./SyntheticUIEvent":99}],95:[function(require,module,exports){
"use strict";function SyntheticInputEvent(t,n,e){SyntheticEvent.call(this,t,n,e)}var SyntheticEvent=require("./SyntheticEvent"),InputEventInterface={data:null};SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface),module.exports=SyntheticInputEvent;
},{"./SyntheticEvent":93}],96:[function(require,module,exports){
"use strict";function SyntheticKeyboardEvent(e,t,n){SyntheticUIEvent.call(this,e,t,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),getEventCharCode=require("./getEventCharCode"),getEventKey=require("./getEventKey"),getEventModifierState=require("./getEventModifierState"),KeyboardEventInterface={key:getEventKey,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState,charCode:function(e){return"keypress"===e.type?getEventCharCode(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?getEventCharCode(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface),module.exports=SyntheticKeyboardEvent;
},{"./SyntheticUIEvent":99,"./getEventCharCode":120,"./getEventKey":121,"./getEventModifierState":122}],97:[function(require,module,exports){
"use strict";function SyntheticMouseEvent(e,t,n){SyntheticUIEvent.call(this,e,t,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),ViewportMetrics=require("./ViewportMetrics"),getEventModifierState=require("./getEventModifierState"),MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+ViewportMetrics.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+ViewportMetrics.currentScrollTop}};SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface),module.exports=SyntheticMouseEvent;
},{"./SyntheticUIEvent":99,"./ViewportMetrics":102,"./getEventModifierState":122}],98:[function(require,module,exports){
"use strict";function SyntheticTouchEvent(e,t,n){SyntheticUIEvent.call(this,e,t,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),getEventModifierState=require("./getEventModifierState"),TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState};SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface),module.exports=SyntheticTouchEvent;
},{"./SyntheticUIEvent":99,"./getEventModifierState":122}],99:[function(require,module,exports){
"use strict";function SyntheticUIEvent(e,t,n){SyntheticEvent.call(this,e,t,n)}var SyntheticEvent=require("./SyntheticEvent"),getEventTarget=require("./getEventTarget"),UIEventInterface={view:function(e){if(e.view)return e.view;var t=getEventTarget(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface),module.exports=SyntheticUIEvent;
},{"./SyntheticEvent":93,"./getEventTarget":123}],100:[function(require,module,exports){
"use strict";function SyntheticWheelEvent(e,t,n){SyntheticMouseEvent.call(this,e,t,n)}var SyntheticMouseEvent=require("./SyntheticMouseEvent"),WheelEventInterface={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface),module.exports=SyntheticWheelEvent;
},{"./SyntheticMouseEvent":97}],101:[function(require,module,exports){
"use strict";var invariant=require("./invariant"),Mixin={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(i,t,a,n,r,s,l,e){invariant(!this.isInTransaction());var c,o;try{this._isInTransaction=!0,c=!0,this.initializeAll(0),o=i.call(t,a,n,r,s,l,e),c=!1}finally{try{if(c)try{this.closeAll(0)}catch(h){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return o},initializeAll:function(i){for(var t=this.transactionWrappers,a=i;a<t.length;a++){var n=t[a];try{this.wrapperInitData[a]=Transaction.OBSERVED_ERROR,this.wrapperInitData[a]=n.initialize?n.initialize.call(this):null}finally{if(this.wrapperInitData[a]===Transaction.OBSERVED_ERROR)try{this.initializeAll(a+1)}catch(r){}}}},closeAll:function(i){invariant(this.isInTransaction());for(var t=this.transactionWrappers,a=i;a<t.length;a++){var n,r=t[a],s=this.wrapperInitData[a];try{n=!0,s!==Transaction.OBSERVED_ERROR&&r.close&&r.close.call(this,s),n=!1}finally{if(n)try{this.closeAll(a+1)}catch(l){}}}this.wrapperInitData.length=0}},Transaction={Mixin:Mixin,OBSERVED_ERROR:{}};module.exports=Transaction;
},{"./invariant":132}],102:[function(require,module,exports){
"use strict";var getUnboundedScrollPosition=require("./getUnboundedScrollPosition"),ViewportMetrics={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var r=getUnboundedScrollPosition(window);ViewportMetrics.currentScrollLeft=r.x,ViewportMetrics.currentScrollTop=r.y}};module.exports=ViewportMetrics;
},{"./getUnboundedScrollPosition":128}],103:[function(require,module,exports){
"use strict";function accumulateInto(r,a){if(invariant(null!=a),null==r)return a;var n=Array.isArray(r),t=Array.isArray(a);return n&&t?(r.push.apply(r,a),r):n?(r.push(a),r):t?[r].concat(a):[r,a]}var invariant=require("./invariant");module.exports=accumulateInto;
},{"./invariant":132}],104:[function(require,module,exports){
"use strict";function adler32(r){for(var e=1,t=0,a=0;a<r.length;a++)e=(e+r.charCodeAt(a))%MOD,t=(t+e)%MOD;return e|t<<16}var MOD=65521;module.exports=adler32;
},{}],105:[function(require,module,exports){
function camelize(e){return e.replace(_hyphenPattern,function(e,n){return n.toUpperCase()})}var _hyphenPattern=/-(.)/g;module.exports=camelize;
},{}],106:[function(require,module,exports){
"use strict";function camelizeStyleName(e){return camelize(e.replace(msPattern,"ms-"))}var camelize=require("./camelize"),msPattern=/^-ms-/;module.exports=camelizeStyleName;
},{"./camelize":105}],107:[function(require,module,exports){
function containsNode(o,e){return o&&e?o===e?!0:isTextNode(o)?!1:isTextNode(e)?containsNode(o,e.parentNode):o.contains?o.contains(e):o.compareDocumentPosition?!!(16&o.compareDocumentPosition(e)):!1:!1}var isTextNode=require("./isTextNode");module.exports=containsNode;
},{"./isTextNode":136}],108:[function(require,module,exports){
function hasArrayNature(r){return!!r&&("object"==typeof r||"function"==typeof r)&&"length"in r&&!("setInterval"in r)&&"number"!=typeof r.nodeType&&(Array.isArray(r)||"callee"in r||"item"in r)}function createArrayFrom(r){return hasArrayNature(r)?Array.isArray(r)?r.slice():toArray(r):[r]}var toArray=require("./toArray");module.exports=createArrayFrom;
},{"./toArray":147}],109:[function(require,module,exports){
"use strict";function createFullPageComponent(e){var t=ReactElement.createFactory(e),n=ReactCompositeComponent.createClass({displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){invariant(!1)},render:function(){return t(this.props)}});return n}var ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),invariant=require("./invariant");module.exports=createFullPageComponent;
},{"./ReactCompositeComponent":42,"./ReactElement":58,"./invariant":132}],110:[function(require,module,exports){
function getNodeName(e){var r=e.match(nodeNamePattern);return r&&r[1].toLowerCase()}function createNodesFromMarkup(e,r){var a=dummyNode;invariant(!!dummyNode);var t=getNodeName(e),n=t&&getMarkupWrap(t);if(n){a.innerHTML=n[1]+e+n[2];for(var o=n[0];o--;)a=a.lastChild}else a.innerHTML=e;var i=a.getElementsByTagName("script");i.length&&(invariant(r),createArrayFrom(i).forEach(r));for(var m=createArrayFrom(a.childNodes);a.lastChild;)a.removeChild(a.lastChild);return m}var ExecutionEnvironment=require("./ExecutionEnvironment"),createArrayFrom=require("./createArrayFrom"),getMarkupWrap=require("./getMarkupWrap"),invariant=require("./invariant"),dummyNode=ExecutionEnvironment.canUseDOM?document.createElement("div"):null,nodeNamePattern=/^\s*<(\w+)/;module.exports=createNodesFromMarkup;
},{"./ExecutionEnvironment":29,"./createArrayFrom":108,"./getMarkupWrap":124,"./invariant":132}],111:[function(require,module,exports){
"use strict";function dangerousStyleValue(e,r){var s=null==r||"boolean"==typeof r||""===r;if(s)return"";var t=isNaN(r);return t||0===r||isUnitlessNumber.hasOwnProperty(e)&&isUnitlessNumber[e]?""+r:("string"==typeof r&&(r=r.trim()),r+"px")}var CSSProperty=require("./CSSProperty"),isUnitlessNumber=CSSProperty.isUnitlessNumber;module.exports=dangerousStyleValue;
},{"./CSSProperty":11}],112:[function(require,module,exports){
function deprecated(e,r,n,a,i){return i}var assign=require("./Object.assign"),warning=require("./warning");module.exports=deprecated;
},{"./Object.assign":34,"./warning":149}],113:[function(require,module,exports){
function makeEmptyFunction(t){return function(){return t}}function emptyFunction(){}emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(t){return t},module.exports=emptyFunction;
},{}],114:[function(require,module,exports){
"use strict";var emptyObject={};module.exports=emptyObject;
},{}],115:[function(require,module,exports){
"use strict";function escaper(e){return ESCAPE_LOOKUP[e]}function escapeTextForBrowser(e){return(""+e).replace(ESCAPE_REGEX,escaper)}var ESCAPE_LOOKUP={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},ESCAPE_REGEX=/[&><"']/g;module.exports=escapeTextForBrowser;
},{}],116:[function(require,module,exports){
"use strict";function flattenSingleChildIntoContext(e,t,n){var r=e,l=!r.hasOwnProperty(n);if(l&&null!=t){var i,a=typeof t;i="string"===a?ReactTextComponent(t):"number"===a?ReactTextComponent(""+t):t,r[n]=i}}function flattenChildren(e){if(null==e)return e;var t={};return traverseAllChildren(e,flattenSingleChildIntoContext,t),t}var ReactTextComponent=require("./ReactTextComponent"),traverseAllChildren=require("./traverseAllChildren"),warning=require("./warning");module.exports=flattenChildren;
},{"./ReactTextComponent":84,"./traverseAllChildren":148,"./warning":149}],117:[function(require,module,exports){
"use strict";function focusNode(o){try{o.focus()}catch(c){}}module.exports=focusNode;
},{}],118:[function(require,module,exports){
"use strict";var forEachAccumulated=function(c,r,a){Array.isArray(c)?c.forEach(r,a):c&&r.call(a,c)};module.exports=forEachAccumulated;
},{}],119:[function(require,module,exports){
function getActiveElement(){try{return document.activeElement||document.body}catch(e){return document.body}}module.exports=getActiveElement;
},{}],120:[function(require,module,exports){
"use strict";function getEventCharCode(e){var r,t=e.keyCode;return"charCode"in e?(r=e.charCode,0===r&&13===t&&(r=13)):r=t,r>=32||13===r?r:0}module.exports=getEventCharCode;
},{}],121:[function(require,module,exports){
"use strict";function getEventKey(e){if(e.key){var r=normalizeKey[e.key]||e.key;if("Unidentified"!==r)return r}if("keypress"===e.type){var t=getEventCharCode(e);return 13===t?"Enter":String.fromCharCode(t)}return"keydown"===e.type||"keyup"===e.type?translateToKey[e.keyCode]||"Unidentified":""}var getEventCharCode=require("./getEventCharCode"),normalizeKey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},translateToKey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};module.exports=getEventKey;
},{"./getEventCharCode":120}],122:[function(require,module,exports){
"use strict";function modifierStateGetter(t){var e=this,r=e.nativeEvent;if(r.getModifierState)return r.getModifierState(t);var i=modifierKeyToProp[t];return i?!!r[i]:!1}function getEventModifierState(){return modifierStateGetter}var modifierKeyToProp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};module.exports=getEventModifierState;
},{}],123:[function(require,module,exports){
"use strict";function getEventTarget(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}module.exports=getEventTarget;
},{}],124:[function(require,module,exports){
function getMarkupWrap(e){return invariant(!!dummyNode),markupWrap.hasOwnProperty(e)||(e="*"),shouldWrap.hasOwnProperty(e)||(dummyNode.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",shouldWrap[e]=!dummyNode.firstChild),shouldWrap[e]?markupWrap[e]:null}var ExecutionEnvironment=require("./ExecutionEnvironment"),invariant=require("./invariant"),dummyNode=ExecutionEnvironment.canUseDOM?document.createElement("div"):null,shouldWrap={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},selectWrap=[1,'<select multiple="true">',"</select>"],tableWrap=[1,"<table>","</table>"],trWrap=[3,"<table><tbody><tr>","</tr></tbody></table>"],svgWrap=[1,"<svg>","</svg>"],markupWrap={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:selectWrap,option:selectWrap,caption:tableWrap,colgroup:tableWrap,tbody:tableWrap,tfoot:tableWrap,thead:tableWrap,td:trWrap,th:trWrap,circle:svgWrap,defs:svgWrap,ellipse:svgWrap,g:svgWrap,line:svgWrap,linearGradient:svgWrap,path:svgWrap,polygon:svgWrap,polyline:svgWrap,radialGradient:svgWrap,rect:svgWrap,stop:svgWrap,text:svgWrap};module.exports=getMarkupWrap;
},{"./ExecutionEnvironment":29,"./invariant":132}],125:[function(require,module,exports){
"use strict";function getLeafNode(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function getSiblingNode(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function getNodeForCharacterOffset(e,t){for(var o=getLeafNode(e),n=0,r=0;o;){if(3==o.nodeType){if(r=n+o.textContent.length,t>=n&&r>=t)return{node:o,offset:t-n};n=r}o=getLeafNode(getSiblingNode(o))}}module.exports=getNodeForCharacterOffset;
},{}],126:[function(require,module,exports){
"use strict";function getReactRootElementInContainer(e){return e?e.nodeType===DOC_NODE_TYPE?e.documentElement:e.firstChild:null}var DOC_NODE_TYPE=9;module.exports=getReactRootElementInContainer;
},{}],127:[function(require,module,exports){
"use strict";function getTextContentAccessor(){return!contentKey&&ExecutionEnvironment.canUseDOM&&(contentKey="textContent"in document.documentElement?"textContent":"innerText"),contentKey}var ExecutionEnvironment=require("./ExecutionEnvironment"),contentKey=null;module.exports=getTextContentAccessor;
},{"./ExecutionEnvironment":29}],128:[function(require,module,exports){
"use strict";function getUnboundedScrollPosition(o){return o===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:o.scrollLeft,y:o.scrollTop}}module.exports=getUnboundedScrollPosition;
},{}],129:[function(require,module,exports){
function hyphenate(e){return e.replace(_uppercasePattern,"-$1").toLowerCase()}var _uppercasePattern=/([A-Z])/g;module.exports=hyphenate;
},{}],130:[function(require,module,exports){
"use strict";function hyphenateStyleName(e){return hyphenate(e).replace(msPattern,"-ms-")}var hyphenate=require("./hyphenate"),msPattern=/^ms-/;module.exports=hyphenateStyleName;
},{"./hyphenate":129}],131:[function(require,module,exports){
"use strict";function instantiateReactComponent(e,t){var n;return n="string"==typeof e.type?ReactNativeComponent.createInstanceForTag(e.type,e.props,t):new e.type(e.props),n.construct(e),n}var warning=require("./warning"),ReactElement=require("./ReactElement"),ReactLegacyElement=require("./ReactLegacyElement"),ReactNativeComponent=require("./ReactNativeComponent"),ReactEmptyComponent=require("./ReactEmptyComponent");module.exports=instantiateReactComponent;
},{"./ReactElement":58,"./ReactEmptyComponent":60,"./ReactLegacyElement":67,"./ReactNativeComponent":72,"./warning":149}],132:[function(require,module,exports){
"use strict";var invariant=function(r,e,n,i,o,a,t,f){if(!r){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,i,o,a,t,f],l=0;s=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return d[l++]}))}throw s.framesToPop=1,s}};module.exports=invariant;
},{}],133:[function(require,module,exports){
"use strict";function isEventSupported(e,t){if(!ExecutionEnvironment.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,u=n in document;if(!u){var i=document.createElement("div");i.setAttribute(n,"return;"),u="function"==typeof i[n]}return!u&&useHasFeature&&"wheel"===e&&(u=document.implementation.hasFeature("Events.wheel","3.0")),u}var ExecutionEnvironment=require("./ExecutionEnvironment"),useHasFeature;ExecutionEnvironment.canUseDOM&&(useHasFeature=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),module.exports=isEventSupported;
},{"./ExecutionEnvironment":29}],134:[function(require,module,exports){
function isNode(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}module.exports=isNode;
},{}],135:[function(require,module,exports){
"use strict";function isTextInputElement(e){return e&&("INPUT"===e.nodeName&&supportedInputTypes[e.type]||"TEXTAREA"===e.nodeName)}var supportedInputTypes={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};module.exports=isTextInputElement;
},{}],136:[function(require,module,exports){
function isTextNode(e){return isNode(e)&&3==e.nodeType}var isNode=require("./isNode");module.exports=isTextNode;
},{"./isNode":134}],137:[function(require,module,exports){
"use strict";function joinClasses(s){s||(s="");var e,r=arguments.length;if(r>1)for(var n=1;r>n;n++)e=arguments[n],e&&(s=(s?s+" ":"")+e);return s}module.exports=joinClasses;
},{}],138:[function(require,module,exports){
"use strict";var invariant=require("./invariant"),keyMirror=function(r){var i,n={};invariant(r instanceof Object&&!Array.isArray(r));for(i in r)r.hasOwnProperty(i)&&(n[i]=i);return n};module.exports=keyMirror;
},{"./invariant":132}],139:[function(require,module,exports){
var keyOf=function(r){var e;for(e in r)if(r.hasOwnProperty(e))return e;return null};module.exports=keyOf;
},{}],140:[function(require,module,exports){
"use strict";function mapObject(r,t,e){if(!r)return null;var a={};for(var n in r)hasOwnProperty.call(r,n)&&(a[n]=t.call(e,r[n],n,r));return a}var hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=mapObject;
},{}],141:[function(require,module,exports){
"use strict";function memoizeStringOnly(n){var r={};return function(t){return r.hasOwnProperty(t)?r[t]:r[t]=n.call(this,t)}}module.exports=memoizeStringOnly;
},{}],142:[function(require,module,exports){
"use strict";function monitorCodeUse(i){invariant(i&&!/[^a-z0-9_]/.test(i))}var invariant=require("./invariant");module.exports=monitorCodeUse;
},{"./invariant":132}],143:[function(require,module,exports){
"use strict";function onlyChild(e){return invariant(ReactElement.isValidElement(e)),e}var ReactElement=require("./ReactElement"),invariant=require("./invariant");module.exports=onlyChild;
},{"./ReactElement":58,"./invariant":132}],144:[function(require,module,exports){
"use strict";var ExecutionEnvironment=require("./ExecutionEnvironment"),WHITESPACE_TEST=/^[ \r\n\t\f]/,NONVISIBLE_TEST=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,setInnerHTML=function(e,n){e.innerHTML=n};if(ExecutionEnvironment.canUseDOM){var testElement=document.createElement("div");testElement.innerHTML=" ",""===testElement.innerHTML&&(setInnerHTML=function(e,n){if(e.parentNode&&e.parentNode.replaceChild(e,e),WHITESPACE_TEST.test(n)||"<"===n[0]&&NONVISIBLE_TEST.test(n)){e.innerHTML="﻿"+n;var t=e.firstChild;1===t.data.length?e.removeChild(t):t.deleteData(0,1)}else e.innerHTML=n})}module.exports=setInnerHTML;
},{"./ExecutionEnvironment":29}],145:[function(require,module,exports){
"use strict";function shallowEqual(r,n){if(r===n)return!0;var t;for(t in r)if(r.hasOwnProperty(t)&&(!n.hasOwnProperty(t)||r[t]!==n[t]))return!1;for(t in n)if(n.hasOwnProperty(t)&&!r.hasOwnProperty(t))return!1;return!0}module.exports=shallowEqual;
},{}],146:[function(require,module,exports){
"use strict";function shouldUpdateReactComponent(e,t){return e&&t&&e.type===t.type&&e.key===t.key&&e._owner===t._owner?!0:!1}module.exports=shouldUpdateReactComponent;
},{}],147:[function(require,module,exports){
function toArray(r){var a=r.length;if(invariant(!Array.isArray(r)&&("object"==typeof r||"function"==typeof r)),invariant("number"==typeof a),invariant(0===a||a-1 in r),r.hasOwnProperty)try{return Array.prototype.slice.call(r)}catch(t){}for(var n=Array(a),i=0;a>i;i++)n[i]=r[i];return n}var invariant=require("./invariant");module.exports=toArray;
},{"./invariant":132}],148:[function(require,module,exports){
"use strict";function userProvidedKeyEscaper(e){return userProvidedKeyEscaperLookup[e]}function getComponentKey(e,r){return e&&null!=e.key?wrapUserProvidedKey(e.key):r.toString(36)}function escapeUserProvidedKey(e){return(""+e).replace(userProvidedKeyEscapeRegex,userProvidedKeyEscaper)}function wrapUserProvidedKey(e){return"$"+escapeUserProvidedKey(e)}function traverseAllChildren(e,r,n){return null==e?0:traverseAllChildrenImpl(e,"",0,r,n)}var ReactElement=require("./ReactElement"),ReactInstanceHandles=require("./ReactInstanceHandles"),invariant=require("./invariant"),SEPARATOR=ReactInstanceHandles.SEPARATOR,SUBSEPARATOR=":",userProvidedKeyEscaperLookup={"=":"=0",".":"=1",":":"=2"},userProvidedKeyEscapeRegex=/[=.:]/g,traverseAllChildrenImpl=function(e,r,n,t,a){var l,i,s=0;if(Array.isArray(e))for(var o=0;o<e.length;o++){var d=e[o];l=r+(r?SUBSEPARATOR:SEPARATOR)+getComponentKey(d,o),i=n+s,s+=traverseAllChildrenImpl(d,l,i,t,a)}else{var u=typeof e,c=""===r,p=c?SEPARATOR+getComponentKey(e,0):r;if(null==e||"boolean"===u)t(a,null,p,n),s=1;else if("string"===u||"number"===u||ReactElement.isValidElement(e))t(a,e,p,n),s=1;else if("object"===u){invariant(!e||1!==e.nodeType);for(var v in e)e.hasOwnProperty(v)&&(l=r+(r?SUBSEPARATOR:SEPARATOR)+wrapUserProvidedKey(v)+SUBSEPARATOR+getComponentKey(e[v],0),i=n+s,s+=traverseAllChildrenImpl(e[v],l,i,t,a))}}return s};module.exports=traverseAllChildren;
},{"./ReactElement":58,"./ReactInstanceHandles":66,"./invariant":132}],149:[function(require,module,exports){
"use strict";var emptyFunction=require("./emptyFunction"),warning=emptyFunction;module.exports=warning;
},{"./emptyFunction":113}],150:[function(require,module,exports){
module.exports=require("./lib/React");
},{"./lib/React":36}]},{},[1]);
