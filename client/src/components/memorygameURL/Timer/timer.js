import React from "react";
import ms from "pretty-ms";
class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: 0,
            isOn: false
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
    }
    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }
    resetTimer() {
        this.setState({ time: 0 })
    }

    render() {
        let start = (this.state.time === 0) ?
            <button type="button" className="btn btn-primary" onClick={this.startTimer}>Start</button> :
            null
        let stop = (this.state.isOn) ?
            <button type="button" className="btn btn-primary" onClick={this.stopTimer}>Stop</button> :
            null
        let reset = (this.state.time !== 0 && !this.state.isOn) ?
            <button type="button" className="btn btn-primary" onClick={this.resetTimer}>Reset</button> :
            null
        let resume = (this.state.time !== 0 && !this.state.isOn) ?
            <button type="button" className="btn btn-primary" onClick={this.startTimer}>Resume</button> :
            null
        return (
            <div>
                <h4>Timer: {ms(this.state.time)} &nbsp;

                {start}&nbsp;
                {resume}&nbsp;
                {stop}&nbsp;
                {reset}&nbsp;</h4> 
            </div>
        )
    }
}

export default Timer;
