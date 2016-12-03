import * as requester from './requester';
import observer from './observer';

function sendPresent(letter_id, name, username, callback) {
    let presentData = {
        letter_id,
        name,
        username,
        status: "pending"
    };

    requester.post('appdata', 'presents', presentData, 'kinvey')
        .then(sendSuccess);

    function sendSuccess(response) {
        observer.showSuccess('Successfully sent present.');
        callback(true);
    }
}

function getPresents(){
    requester.get('appdata','presents','kinvey');
}

export {sendPresent,getPresents}