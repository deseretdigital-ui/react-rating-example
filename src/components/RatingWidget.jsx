var React = require('react/addons');
var RatingStep = require('./RatingStep');

var RatingWidget = React.createClass({
  render: function() {
    return (
      <div className="rating-widget">
        <RatingStep type="whole" />
        <RatingStep type="whole" />
        <RatingStep type="whole" />
        <RatingStep type="half" />
        <RatingStep type="empty" />
      </div>
    );
  }
});

module.exports = RatingWidget;
