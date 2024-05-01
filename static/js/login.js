// send data to /auth/login
const form = document.getElementById('entrance-form');

//send data after click on button
form.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData (form);
    const data = Object.fromEntries(formData);
    const response = await sendData(data);
    if (response.status == 200 || response.status == 204)
      window.location.replace("/");
    else if (response.status == 400)
      alert("Вы не зарегистрированы"); 
      // (response.json().then(data => {
      //   if (data.detail == )
      //   alert(data.detail); 
      // })
  }
)

// function to sendData,  encode the request body into type application/x-www-form-urlencoded
async function sendData(data) {
  const formData = new URLSearchParams();
  for (const key in data)
      formData.append(key, data[key]);

  return fetch('/auth/login', {
    method: 'POST',
    headers:
    { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: formData.toString()})
}

