var React = require('react/addons');
var RatingStep = require('./RatingStep');

var RatingWidget = React.createClass({
  propTypes: {
    size: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      size: 5
    }
  },

  render: function() {
    var RatingSteps = this.renderRatingSteps();

    return (
      <div className="rating-widget">
        {RatingSteps}
      </div>
    );
  },

  renderRatingSteps: function() {
    var type, RatingSteps = [];
    var rating = 6;

    for (var i = 1; i <= this.props.size; ++i) {
      type = 'empty';
      if (i <= rating) {
        type = 'whole';
      }

      RatingSteps.push(
        <RatingStep type={type} />
      );
    }

    return RatingSteps;
  }
});

module.exports = RatingWidget;
