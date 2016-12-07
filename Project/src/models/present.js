import {get, post, update, _delete} from './requester';

function sendPresent(letter_id, name, username, senderEmail, parentEmail, callback) {
    let presentData = {
        letter_id,
        name,
        username,
        senderEmail,
        parentEmail,
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

function getPresent(presentID) {
    return get('appdata', 'presents/' + presentID, 'kinvey');
}

function deletePresent(presentID) {
    return _delete('appdata', 'presents/' + presentID, 'kinvey');
}

function updatePresentStatus(id, status) {
    getPresent(id)
        .then(function (response) {
            let presentData = {
                letter_id: response.letter_id,
                name: response.name,
                username: response.username,
                senderEmail: response.senderEmail,
                parentEmail: response.parentEmail,
                status: status
            };

            update('appdata', 'presents/' + id, presentData, 'kinvey');
        });
}

function checkStatus(props) {

    if (sessionStorage.getItem('userType') === 'parent') {
        {
            if (props.status === 'pending') {
                return true;
            }
        }
    }
    return false;
}

export {sendPresent, getPresents, updatePresentStatus, checkStatus, deletePresent}