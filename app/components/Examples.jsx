var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <link to='/?Clarksville='>Clarksville, TN</link>
        </li>
        <li>
          <link to='/?Rio='>Rio, Brazil</link>
        </li>
      </ol>
    </div>
  )
};



module.exports = Examples;
