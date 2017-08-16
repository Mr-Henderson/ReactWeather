var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>This weather application was created with the React Library.</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - this was the
          Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open
          Weather Map to search for data by city name.
        </li>
      </ul>
    </div>

  )
};

module.exports = About;
