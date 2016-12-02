import * as requester from './requester';
import observer from './observer';



function sendLetter(author, title, text, date, callback) {
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
        sessionStorage.setItem('letter_id',response._id);

        observer.showSuccess('Successfully sent email.');
        callback(true);
    }
}

export {sendLetter}