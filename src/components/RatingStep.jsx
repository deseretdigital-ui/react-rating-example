var React = require('react/addons');

var emptyFunction = function() {};

var RatingStep = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['whole', 'half', 'empty']),
    step: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      type: 'empty',
      onClick: emptyFunction
    };
  },

  handleClick: function() {
    this.props.onClick(this.props.step);
  },

  render: function() {
    var classes = {
      'rating-widget__step': true
    }
    classes['rating-widget__step--' + this.props.type] = true;

    return (
      <span
        className={React.addons.classSet(classes)}
        onClick={this.handleClick}
      ></span>
    );
  }
});

module.exports = RatingStep;
