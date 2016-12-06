import * as requester from './requester';
import observer from './observer';

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON &&
        response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    observer.showError(errorMsg);
}

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
    let userType = userInfo.type;
    sessionStorage.setItem('userType',userType);
    let userEmail = userInfo.email;
    sessionStorage.setItem('email',userEmail);
    let parentEmail = userInfo.parentEmail;
    sessionStorage.setItem('email',parentEmail);

    observer.onSessionUpdate();
}

// user/login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then(loginSuccess)
        .catch(handleAjaxError);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

// user/register
function register(username, password, email,parentEmail,type,address,gender,callback) {
    let userData = {
        username,
        password,
        email,
        parentEmail,
        type,
        address,
        gender
    };

    requester.post('user', '', userData, 'basic')
        .then(registerSuccess)
        .catch(handleAjaxError);

    function registerSuccess(userInfo) {
        observer.showSuccess('Successful registration.');
        saveSession(userInfo);
        callback(true);
    }
}

// user/logout
function logout(callback) {
    if(confirm("Are you sure you want to logout? Santaw ill miss you!")){
        requester.post('user', '_logout', null, 'kinvey')
            .then(logoutSuccess)
            .catch(handleAjaxError);
    }


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}

export {login, register, logout};