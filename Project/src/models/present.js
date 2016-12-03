import {get, post} from './requester';
import observer from './observer';

function sendPresent(letter_id, name, username, callback) {
    let presentData = {
        letter_id,
        name,
        username,
        status: "pending"
    };

    post('appdata', 'presents', presentData, 'kinvey')
        .then(sendSuccess);

    function sendSuccess(response) {
        observer.showSuccess('Successfully sent present.');
        callback(true);
    }
}


function getPresents(callback) {
    get('appdata', 'presents', 'kinvey').then(callback);
}

export {sendPresent,getPresents}