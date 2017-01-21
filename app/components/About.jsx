var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div className="row">
      <h1 className="text-center page-title">About</h1>
      <p>This is the React Weather App project as part of the Complete React Developer Course.</p>
      <p>
        <ul>
          <li>
            <a href="http://facebook.github.io/react">React</a> - This is the javascript framework used for this course.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - This is the free public API used to retrieve the weather
          </li>
        </ul>
      </p>
    </div>
  );
}

module.exports = About;
