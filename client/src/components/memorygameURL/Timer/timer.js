import React from "react";
import prettyMilliseconds from "pretty-ms";
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

    //     msToTime => (duration) {
    //     var milliseconds = parseInt((duration % 1000) / 100)
    //         , seconds = parseInt((duration / 1000) % 60)
    //         , minutes = parseInt((duration / (1000 * 60)) % 60)
    //         , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    //     hours = (hours < 10) ? "0" + hours : hours;
    //     minutes = (minutes < 10) ? "0" + minutes : minutes;
    //     seconds = (seconds < 10) ? "0" + seconds : seconds;

    //     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    // }

    render() {
        let start = (this.state.time == 0) ?
            <button onClick={this.startTimer}>start</button> :
            null
        let stop = (this.state.isOn) ?
            <button onClick={this.stopTimer}>stop</button> :
            null
        let reset = (this.state.time != 0 && !this.state.isOn) ?
            <button onClick={this.resetTimer}>reset</button> :
            null
        let resume = (this.state.time != 0 && !this.state.isOn) ?
            <button onClick={this.startTimer}>resume</button> :
            null
        return (
            <div>
                <h3>timer: {this.state.time}</h3>
                {start}
                {resume}
                {stop}
                {reset}
            </div>
        )
    }
}

export default Timer;