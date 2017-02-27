var React = require('react');

var About = (props) => {
    return (
        <div>
			<h1 className="text-center page-title">About</h1>
			<p>
				This is a weather application build on React.
				I have built this for The Complete React Web App Developer Course.
			</p>
			<p>
				Here are somne of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> JavaScript Lib used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Wheater Map</a> Open Wheater Map API to search for weather data
				</li>
			</ul>

        </div>
    )
};

module.exports = About;
