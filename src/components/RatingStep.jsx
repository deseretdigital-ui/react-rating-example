var React = require('react/addons');

var emptyFunction = function() {};

var RatingStep = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['whole', 'half', 'empty']),
    step: React.PropTypes.number.isRequired,
    temporaryRating: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onMouseMove: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      type: 'empty',
      onClick: emptyFunction,
      onMouseMove: emptyFunction
    };
  },

  handleClick: function(e) {
    this.props.onClick(this.props.step, e);
  },

  handleMouseMove: function(e) {
    this.props.onMouseMove(this.props.step, e);
  },

  render: function() {
    // ie6-8
    if (document.all && !document.addEventListener) {
      return this.renderAsImg();
    } else {
      return this.renderAsCss();
    }
  },

  renderAsCss: function() {
    var classes = {
      'rating-widget__step': true,
      'rating-widget__step--css': true,
      'rating-widget__step--hover': this.props.temporaryRating
    }
    classes['rating-widget__step--' + this.props.type] = true;

    return (
      <span
        className={React.addons.classSet(classes)}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
      ></span>
    );
  },

  renderAsImg: function() {
    var hover = this.props.type !== 'empty' && this.props.temporaryRating ? '-hover': '';
    var imgSrc = require('../images/star-' + this.props.type + hover + '.png');


    var classes = {
      'rating-widget__step': true,
      'rating-widget__step--image': true,
    }

    return (
      <img
        src={imgSrc}
        className={React.addons.classSet(classes)}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
      />
    );
  }
});

module.exports = RatingStep;
