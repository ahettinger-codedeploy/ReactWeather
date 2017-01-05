var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Loading...</h3>;
      } else if (location && temp) {
        return <WeatherMsg location={location} temp={temp}/>;
      }
    };

    return (
      <div>
      <h3>Weather</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
