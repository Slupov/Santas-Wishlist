import * as requester from './requester';
import observer from './observer';

function sendLetter(author, title, text, date, callback,callback2) {
    let letterData = {
        author,
        title,
        text,
        date
    };

    return requester.post('appdata', 'letters', letterData, 'kinvey')
        .then(sendSuccess);

    function sendSuccess(response) {
        //get letter-id , save it in session
        //will use when send another request for the presents
        alert("STANA");
        sessionStorage.setItem('letter_id',response._id);
        callback2();

        observer.showSuccess('Successfully sent email.');
        callback(true);
    }
}

function getLetters(){
    return requester.get('appdata','letters','kinvey')
}

export {sendLetter}