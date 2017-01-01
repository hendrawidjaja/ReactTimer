var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                {/* Left section */}
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link">Timer</Link>
                        </li>
                    </ul>
                </div>

                {/* Right section */}
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="" target="_blank">Hendra Widjaja</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
