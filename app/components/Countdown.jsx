var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {count: 0, countdownStatus: 'stopped'};
    },

    /* lifecycle */
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    /* cancel the Interval */
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                /* replace count with newCount as long as newCount is bigger than 0 or else set it to zero */
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            }
        }, 1000);
    },
    handleSetCountdown: function(seconds) {
        this.setState({count: seconds, countdownStatus: 'started'});
    },
    /* when new status got passed in from controller */
    handleStatusChange: function(newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    render: function() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            /* pause or .. */
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                /* started */
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };

        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}/> {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;
