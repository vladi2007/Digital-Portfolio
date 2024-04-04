// sends (POST) the form data to /auth/register

//send data after click on button
form.addEventListener('submit', async event => {
  event.preventDefault();
  const formData = new FormData (form);
  formData.append('is_active', true);
  formData.append('is_superuser', false);
  formData.append('is_verified', false);
  const data = Object.fromEntries(formData);
  const response = await sendData(data);
  if (response.status == 201){
    alert("Вы зарегистрировались")
    window.location.replace("/куда-то где страничку входа");
  }
  if (response.status == 400)
    alert("Такой пользователь уже существует")
})

//generate post-request
async function sendData(data) {
  return fetch('/auth/register', {
    method: 'POST',
    headers:
    { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
  }



