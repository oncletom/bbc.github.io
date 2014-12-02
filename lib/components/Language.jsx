/** @jsx React.DOM */

var React = require('react');
var languageMap = require('language-map');

module.exports = React.createClass({
  propTypes: {
    id: React.PropTypes.string
  },
  render: function(){
    if (this.props.id === null){
      return null;
    }

    var style = {
      backgroundColor: languageMap[this.props.id].color
    };

    return (<span className="software-language" style={style}>
      {this.props.id}
    </span>);
  }
});

