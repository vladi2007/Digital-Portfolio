//check validity of form and send data to /enter

//TODO 
// handle more errors from the server and display it to the user

const form = document.getElementById('entrance-form');
const checkPassword = document.querySelector('.show-password');
const password = document.getElementById('password-field');

form.addEventListener('input', checkValidity)

//send data after click on button
form.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData (form);
    const data = Object.fromEntries(formData);
    const response = await sendData(data);
    if (response.status == 200)
      alert("ура")
    else
      alert("не вышло")
})

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

// function to sendData
async function sendData(data) {
return fetch('/enter', {
    method: 'POST',
    headers:
    { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
}


