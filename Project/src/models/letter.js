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
        //get letter-id , save it in session
        //will use when send another request for the presents
        // alert("Pratih pismoto");
        observer.showError("Letter successfully sent!");
        sessionStorage.setItem('letter_id',response._id);
        // alert("setnah Id-to na pismoto");
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