// checks the validity of the form

const password = document.getElementById('password-field');
const checkPassword = document.querySelector('.show-password');
const passwordMessage = document.querySelector('.passwordMessage');
form = document.getElementById('registration-form');

//check validity form
form.addEventListener('input', checkValidity)

//function for check validity all fields
function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
    formNode.querySelector('button').disabled = (!isValid || password.value.length < 8 || password.value.length > 20);
  }


//check length password
password.oninput = function (){
    if (password.value.length < 8)
      passwordMessage.textContent = 'Пароль должен содержать не менее 8 символов.';
    else if (password.value.length > 20)
      passwordMessage.textContent = 'Пароль должен содержать не более 20 символов.';
    else
      passwordMessage.textContent = '';
  }
  
//show password
checkPassword.onchange = function(){
if (checkPassword.checked)
    password.type = "text";
else
    password.type = "password";
}
  