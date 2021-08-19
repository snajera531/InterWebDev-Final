const username = document.getElementById('username');
const password = document.getElementById('password');
const pwverify = document.getElementById('pwverify');

const errors = document.getElementById('errors');
let error_msg = '';
let no_errors = true;

const username_pattern = /.*[a-z].*[a-z].*/i;
const password_pattern = /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\[\]{};:'"<>,\.\/?]).{8,}/;

const validate = () => {
    error_msg = '';
    no_errors = true;

    if(password.value != pwverify.value){
        error_msg = 'Passwords must match.';
        no_errors = false;
        errors.innerHTML = error_msg;
    }

    if(!password_pattern.test(password.value)){
        error_msg = 'Must be at least 8 characters and include one capitalized letter, one digit, and one special character. <br/>';
        no_errors = false;
        errors.innerHTML = error_msg;
    }

    if(!username_pattern.test(username.value)){
        error_msg = 'Username must be at least 2 characters.'
        no_errors = false;
        errors.innerHTML = error_msg;
    }

    const submitForm = () => {
        validate();
        if(error_msg != ''){
            errors.innerHTML = error_msg;
        }
        
        console.error(error_msg);
        return no_errors;
    }

    username.addEventListener('input', validate);
    password.addEventListener('input', validate);
    pwverify.addEventListener('input', validate);
}