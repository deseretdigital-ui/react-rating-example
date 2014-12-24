var React = require('react/addons');
var RatingStep = require('./RatingStep');

var emptyFunction = function() {};

var RatingWidget = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    onRate: React.PropTypes.func,
    halfRatings: React.PropTypes.bool,
    hover: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      size: 5,
      onRate: emptyFunction,
      halfRatings: false,
      hover: true
    }
  },

  getInitialState: function() {
    return {
      rating: 0,
      tempRating: null
    }
  },

  handleClick: function(newRating, e) {
    newRating = this.calcHalfRating(newRating, e);
    if (newRating === this.state.rating) {
      newRating = 0;
    }

    this.setState({rating: newRating, tempRating: null});
    this.props.onRate(newRating);
  },

  handleOnMouseMove: function(newTempRating, e) {
    if (!this.props.hover) {
      return;
    }

    newTempRating = this.calcHalfRating(newTempRating, e);
    this.setState({tempRating: newTempRating})
  },

  handleOnMouseLeave: function() {
    this.setState({tempRating: null});
  },

  calcHalfRating: function(newRating, e) {
    if (!this.props.halfRatings) {
      return newRating;
    }

    var stepClicked = e.target;
    var stepWidth = stepClicked.offsetWidth;
    var halfWidth = stepWidth / 2;

    var stepClickedRect = stepClicked.getBoundingClientRect()
    var clickPos = e.pageX - (stepClickedRect.left + document.body.scrollLeft);

    if (clickPos <= halfWidth) {
      newRating -= .5;
    }

    return newRating;
  },

  render: function() {
    var RatingSteps = this.renderRatingSteps();

    return (
      <div className="rating-widget" onMouseLeave={this.handleOnMouseLeave}>
        {RatingSteps}
      </div>
    );
  },

  renderRatingSteps: function() {
    var type, RatingSteps = [];
    var rating = this.state.tempRating || this.state.rating;

    var roundRating = Math.round(rating);
    var ceilRating = Math.ceil(rating);

    for (var i = 1; i <= this.props.size; ++i) {
      type = 'empty';
      if (i <= rating) {
        type = 'whole';
      } else if(
        roundRating == i &&
        roundRating == ceilRating &&
        this.props.halfRatings
      ) {
        type = 'half';
      }

      RatingSteps.push(
        <RatingStep
          step={i}
          type={type}
          temporaryRating={this.state.tempRating !== null}
          onClick={this.handleClick}
          onMouseMove={this.handleOnMouseMove}
          key={"rating-step-" + i}
        />
      );
    }

    return RatingSteps;
  }
});

module.exports = RatingWidget;
