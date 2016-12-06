function emailValidation(email) {
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return regex.test(email);

}

function passwordValidation(pass) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(pass);
}

function usernameValidation(username) {
    let regex=/^([a-zA-Z0-9]{6,})$/;

       return  regex.test(username);

}
export {emailValidation, passwordValidation, usernameValidation}