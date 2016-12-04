import {get,post} from './requester';

//gets all mails for the current user
function getMailboxes(callback){
    get('appdata','mailboxes','kinvey')
        .then(callback);
}

function sendMailbox(data,callback) {
    post('appdata','mailboxes',data,'kinvey')
        .then(callback);
}



export {getMailboxes,sendMailbox}