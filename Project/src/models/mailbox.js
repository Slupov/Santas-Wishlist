import {get} from './requester';

//gets all mails for the current user
function getMailboxes(callback){
    get('appdata','mailboxes','kinvey')
        .then(callback);
}

export {getMailboxes}