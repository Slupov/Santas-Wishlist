import {post,get} from './requester';

import observer from './observer';

function sendLetter(author, title, text, date, callback) {
    let letterData = {
        author,
        title,
        text,
        date
    };

    return post('appdata', 'letters', letterData, 'kinvey')
        .then(sendSuccess);

    function sendSuccess(response) {
        //get letter-id , save it in session
        //will use when send another request for the presents
        alert("STANA");
        sessionStorage.setItem('letter_id',response._id);

        observer.showSuccess('Successfully sent email.');
        callback(true);
    }
}

// function getLetters(){
//     return get('appdata','letters','kinvey')
// }
function loadLetterDetails(letterId, onSuccess) {
    get('appdata', 'letters/' + letterId, 'kinvey')
        .then(onSuccess);
}

export {sendLetter,loadLetterDetails}