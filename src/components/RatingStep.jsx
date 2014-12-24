var React = require('react/addons');

var RatingStep = React.createClass({
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
