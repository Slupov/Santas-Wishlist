import {post,get} from './requester';
import observer from '../models/observer';


function sendLetter(author, title, text, date, callback) {
    let letterData = {
        author,
        title,
        text,
        date
    };

    post('appdata', 'letters', letterData, 'kinvey')
        .then(sendSuccess).then(callback);

    function sendSuccess(response) {
        observer.showError("Letter successfully sent!");
        sessionStorage.setItem('letter_id',response._id);
    }
}


function loadLetterDetails(letterId, onSuccess) {
    get('appdata', 'letters/' + letterId, 'kinvey')
        .then(onSuccess);
}

export {sendLetter,loadLetterDetails}