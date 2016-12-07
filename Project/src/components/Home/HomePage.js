import React, {Component} from 'react';
let Countdown = require('react-cntdwn');
let handleFinish = function () {
    console.log('Merry X-mas!');
};


export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Countdown targetDate={new Date('December 25, 2016')}

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