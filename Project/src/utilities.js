function getCurrentDate() {
    let current = new Date();
    return current.toUTCString();
}

function getCurrentUsername() {
    return sessionStorage.getItem('username');
}

function getCurrentLetterId(){
    return sessionStorage.getItem('letter_id');
}

function getCurrentEmail(){
    return sessionStorage.getItem('email');
}
function getCurrentParentEmail(){
    return sessionStorage.getItem('parentEmail');
}

export {getCurrentDate,getCurrentParentEmail,getCurrentUsername,getCurrentLetterId,getCurrentEmail}
