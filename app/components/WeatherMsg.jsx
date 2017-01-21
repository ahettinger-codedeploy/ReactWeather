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
    <h3 className="text-center">This weather is {temp} in {location}</h3>
  );
};

module.exports = WeatherMsg;
