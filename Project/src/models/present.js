import {get, post} from './requester';
import observer from './observer';

function sendPresent(letter_id, name, username, senderEmail, callback) {
    let presentData = {
        letter_id,
        name,
        username,
        senderEmail,
        status: "pending"
    };

    post('appdata', 'presents', presentData, 'kinvey')
        .then(sendSuccess);

    function sendSuccess(response) {
        //alert("pdaryk pusnat!")
        callback(true);
    }
}


function getPresents(callback) {
    get('appdata', 'presents', 'kinvey').then(callback);
}

export {sendPresent, getPresents}