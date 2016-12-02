import * as requester from './requester';
import observer from './observer';

function send(author, title, text, date, callback) {
    let letterData = {
        author,
        title,
        text,
        date
    };

    requester.post('appdata', 'letters', letterData, 'kinvey')
        .then(sendSuccess);

    function sendSuccess(response) {
        observer.showSuccess('Successfully sent email.');
        callback(true);
    }
}

export {send}