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

  getInitialState: function() {
    return {
      rating: 0
    }
  },

  handleClick: function(newRating) {
    this.setState({rating: newRating});
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
    var rating = this.state.rating;

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
        <RatingStep
          step={i}
          type={type}
          onClick={this.handleClick}
          key={"rating-step-" + i}
        />
      );
    }

    return RatingSteps;
  }
});

module.exports = RatingWidget;
