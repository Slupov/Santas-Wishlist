import React, {Component} from 'react';

let Countdown = require('react-cntdwn');

let handleFinish = function () {
    console.log('Merry X-mas!');
};

function getNextChristmasDate(){
    let currentDate = new Date();

    // if Christmas just passed but its still this year
    if (currentDate.getDate() > 25 && currentDate.getMonth() === 11){

        // show next years Christmas date
        return new Date(currentDate.getFullYear() + 1, 11, 25);
    }

    // show this year's Christmas date
    return new Date(currentDate.getFullYear(), 11, 25);
}

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Countdown targetDate={getNextChristmasDate()}

                           interval={1000}
                           timeSeparator={':'}
                           leadingZero
                           onFinished={handleFinish}
                format={
                    {day: 'DD',
                    hour: 'HH',
                    minute: 'MM',
                    second: 'SS'}
                }
                />
<div className="hoho">left until Christmas!</div>
                {this.props.children}
            </div>
        );
    }
}