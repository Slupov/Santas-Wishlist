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

export {getCurrentDate,getCurrentUsername,getCurrentLetterId,getCurrentEmail}
