// check validity of form

// const form = document.getElementById('entrance-form');
const checkPassword = document.querySelector('.show-password');
const password = document.getElementById('password-field');

//show password
checkPassword.onchange = function(){
    if (checkPassword.checked)
        password.type = "text";
    else
        password.type = "password";
}
//function of check validity
function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
    formNode.querySelector('button').disabled = !isValid;
  }