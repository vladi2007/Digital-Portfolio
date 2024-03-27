// checks the validity of the form and sends (POST) the form data to /check

// can do more validity to form. Example: length, etc.

// handle more errors from the server and display it to the user

function checkValidity(event) {
  const formNode = event.target.form
  const isValid = formNode.checkValidity()

  formNode.querySelector('button').disabled = !isValid
}


async function sendData(data) {
  return fetch('/check', {
    method: 'POST',
    headers:
    { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
  }

  
const formEl = document.getElementById('registration-form');

formEl.addEventListener('input', checkValidity)
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


