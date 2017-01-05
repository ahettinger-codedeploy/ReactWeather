var React = require('react');
//
// var WeatherMsg = React.createClass ({
//     render: function() {
//       var {temp, location} = this.props;
//         return (
//             <p>This weather is {temp} in {location}</p>
//         );
//     }
// });

var WeatherMsg = ({temp,location}) => {
  return (
    <p>This weather is {temp} in {location}</p>
  );
};

module.exports = WeatherMsg;
