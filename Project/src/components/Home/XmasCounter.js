import React, {Component} from 'react';

export default class XmasCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            before: "Christmas!",
            current: "Today is Christmas. Merry Christmas!",
            montharray: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    countdown(yr, m, d) {
        console.log("test");
        // let theyear = yr;
        // let themonth = m;
        // let theday = d;

        let today = new Date();
        let todayy = today.getYear();

        if (todayy < 1000) {
            todayy += 1900
        }

        let todaym = today.getMonth();
        let todayd = today.getDate();
        let todayh = today.getHours();
        let todaymin = today.getMinutes();
        let todaysec = today.getSeconds();

        let todaystring = this.state.montharray[todaym] + " " + todayd + ", " + todayy + " " + todayh + ":" + todaymin + ":" + todaysec;

        let futurestring = this.state.montharray[m - 1] + " " + d + ", " + yr;

        //difference between today and future date
        let dd = Date.parse(futurestring) - Date.parse(todaystring);

        let dday = Math.floor(dd / (60 * 60 * 1000 * 24) * 1);
        let dhour = Math.floor((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
        let dmin = Math.floor(((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
        let dsec = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

        this.setState({
            days: dday,
            hours: dhour,
            minutes: dmin,
            seconds: dsec
        });

    }
    componentDidMount() {
        setTimeout(this.countdown(2016,12,25), 1000)
    }

    render() {
        return (
            <div className="HomePage">
                <h1>{this.state.days} days,{this.state.hours} hours,{this.state.minutes} minutes,{this.state.seconds}
                    seconds
                </h1>
                <h2>Until Christmas!</h2>
                {this.props.children}
            </div>
        )
    }

}

