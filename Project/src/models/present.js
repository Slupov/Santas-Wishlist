import {get, post,update} from './requester';

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
function getPresent(presentID) {
    return get('appdata', 'presents/' + presentID, 'kinvey');

}

function updatePresentStatus(id,status) {
 getPresent(id)
     .then(function (response) {
         let presentData = {
             letter_id:response.letter_id,
             name:response.name,
             username:response.username,
             senderEmail:response.senderEmail,
             status:status
         };

         update('appdata', 'presents/' + id, presentData, 'kinvey');
         // after this we send email from santa with the status update
         //hide the buttons

     });



}
function checkStatus(props) {
    let showActions=(props.status=='pending')&&(sessionStorage.getItem('userType')=='parent')&&(sessionStorage.getItem('email')==props.senderEmail);
return showActions;
}
export {sendPresent, getPresents,updatePresentStatus,checkStatus}