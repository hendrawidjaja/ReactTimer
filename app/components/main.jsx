var React = require('react');

var Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    {/* main jsx rendered*/}
                    {props.children}
                </div>
            </div>
        </div>
    )
}

module.exports = Main;
