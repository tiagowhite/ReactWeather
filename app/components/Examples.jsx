var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
	<div>
		<h1 className="text-center page-title">Examples</h1>
		<p>Here are a few examples locations to try out:</p>
		<ol>
			<li>
				<Link to='/?location=Grajau, Rio de Janeiro'>Grajau, Rio de Janeiro</Link>
			</li>
			<li>
				<Link to='/?location=Grajau, Rio de Janeiro'>Dublin, Ireland</Link>
			</li>
		</ol>
	</div>
  )
};

module.exports = Examples;
