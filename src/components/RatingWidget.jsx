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
    var rating = 4.5;

    var roundRating = Math.round(rating);
    var ceilRating = Math.ceil(rating);

    for (var i = 1; i <= this.props.size; ++i) {
      type = 'empty';
      if (i <= rating) {
        type = 'whole';
      } else if(
        roundRating == i &&
        roundRating == ceilRating
      ) {
        type = 'half';
      }

      RatingSteps.push(
        <RatingStep type={type} />
      );
    }

    return RatingSteps;
  }
});

module.exports = RatingWidget;
