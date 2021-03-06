var React = require('react');
var {Link, IndexLink} = require('react-router');
//
// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = React.createClass({

  onSearch: function(e) {
    e.preventDefault();

    var searchString = this.refs.searchBox.value;
    var encodedLocation = encodeURIComponent(searchString);
    if (encodedLocation.length > 0) {
      this.refs.searchBox.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }

  },

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="searchBox" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});


module.exports = Nav;


/*var old = (
  <div>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
    <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
    <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
  </div>
); */
