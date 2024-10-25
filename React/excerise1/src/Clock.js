import React, { Component } from 'react'
import './index.css';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date()
        }
    }
    componentDidMount() {
        setInterval(() =>
            this.setState({
                currentDate: new Date()
            }),
            1000
        );
}
render() {
    const { currentDate } = this.state;
    const weekday = currentDate.toLocaleString("en-US", { weekday: 'long' });
    let hours = currentDate.getHours();
    hours = hours % 12;
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = currentDate.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = currentDate.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    const amPm = currentDate.getHours() <= 12 ? "AM" : "PM";
    const months = currentDate.toLocaleString("en-Us", { month: "long" });
    const date = currentDate.getDate()
    const year = currentDate.getFullYear()

    return (
        <div id="clock">
            <h2 id="weekday">Weekday:-{weekday}</h2>
            <p id="time">Time:- {hours} {minutes} {seconds} {amPm}</p>
            <p id="date">Date:- {months} {date} {year}</p>

        </div>
    )
}
}

export default Clock
