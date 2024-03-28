// checks the validity of the form and sends (POST) the form data to /check

//TODO
// handle more errors from the server and display it to the user


//function for check validity all fields
function checkValidity(event) {
  const formNode = event.target.form
  const isValid = formNode.checkValidity()
  formNode.querySelector('button').disabled = (!isValid || password.value.length < 8);
}

//generate post-request
async function sendData(data) {
  return fetch('/check', {
    method: 'POST',
    headers:
    { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
  }


const formEl = document.getElementById('registration-form');
const password = document.getElementById('password-field');
const checkPassword = document.querySelector('.show-password');
const passwordMessage = document.querySelector('.passwordMessage');

//check validity form
formEl.addEventListener('input', checkValidity)

//send data after click on button
formEl.addEventListener('submit', async event => {
  event.preventDefault();
  const formData = new FormData (formEl);
  const data = Object.fromEntries(formData);
  const response = await sendData(data);
  if (response.status == 200)
    alert("ура")
  else
    alert("не вышло")
})

//check length password
password.oninput = function (){
  if (password.value.length < 8)
    passwordMessage.textContent = 'Пароль должен содержать не менее 8 символов.';
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


