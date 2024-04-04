// send data to /auth/jwt/login

//send data after click on button
form.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData (form);
    const data = Object.fromEntries(formData);
    const response = await sendData(data);
    if (response.status == 200)
      window.location.replace("/url на профиль");
    else{
      const responseObject = JSON.parse(response);
      const detail = responseObject.detail;
      if (detail == "LOGIN_BAD_CREDENTIALS")
          alert("Неверные введенные значения")
      else 
          alert("Вы не зрегистрированы")
    }
})

// function to sendData,  encode the request body into type application/x-www-form-urlencoded
async function sendData(data) {
  const formData = new URLSearchParams();
  for (const key in data)
      formData.append(key, data[key]);

  return fetch('/auth/jwt/login', {
    method: 'POST',
    headers:
    { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: formData.toString()})
}


