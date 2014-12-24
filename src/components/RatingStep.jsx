var React = require('react/addons');

var RatingStep = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['whole', 'half', 'empty'])
  },

  getDefaultProps: function() {
    return {
      type: 'empty'
    };
  },

  render: function() {
    var classes = {
      'rating-widget__step': true
    }
    classes['rating-widget__step--' + this.props.type] = true;

    return (
      <span className={React.addons.classSet(classes)}></span>
    );
  }
});

module.exports = RatingStep;
