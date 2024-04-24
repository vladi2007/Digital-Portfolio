// // send data to /auth/jwt/login
// const form = document.getElementById('entrance-form');
// //send data after click on button
// form.addEventListener('submit', async event => {
//     event.preventDefault();
//     const formData = new FormData (form);
//     const data = Object.fromEntries(formData);
//     const response = await sendData(data);
//     if (response.status == 200)
//       window.location.replace("/url fdsfds");
//     else{
//       const responseObject = JSON.parse(response);
//       const detail = responseObject.detail;
//       if (detail == "LOGIN_BAD_CREDENTIALS")
//           alert("Неверные введенные значения")
//       else 
//           alert("Вы не зрегистрированы")
//     }
// })

// // function to sendData,  encode the request body into type application/x-www-form-urlencoded
// async function sendData(data) {
//   const formData = new URLSearchParams();
//   for (const key in data)
//       formData.append(key, data[key]);

//   return fetch('/auth/login', {
//     method: 'POST',
//     headers:
//     { 'Content-Type': 'application/x-www-form-urlencoded'},
//     body: formData.toString()})
// }

// const form = document.getElementById('entrance-form');
// //send data after click on button
// form.addEventListener('submit', async event => {
//     event.preventDefault();
//     const formData = new FormData (form);
//     const data = Object.fromEntries(formData);
//     const response = await sendData(data);
//     if (response.status == 200 || response.status == 204)
//       window.location.replace("/");
//     else{
//       (response.json().then(data => {
//         alert(data.detail);
//       })
//       )
//     }
//   }
// )

// // function to sendData,  encode the request body into type application/x-www-form-urlencoded
// async function sendData(data) {
//   const formData = new URLSearchParams();
//   for (const key in data)
//       formData.append(key, data[key]);

//   return fetch('/auth/login', {
//     method: 'POST',
//     headers:
//     { 'Content-Type': 'application/x-www-form-urlencoded'},
//     body: formData.toString()})
// }

// send data to /auth/jwt/login
const form = document.getElementById('entrance-form');
//send data after click on button
form.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData (form);
    const data = Object.fromEntries(formData);
    const response = await sendData(data);
    if (response.status == 200 || response.status == 204)
      window.location.replace("/");
    else{
      //   const responseObject = await response.json();
      //   responseObject.then(result => {
      //     alert(result.detail)
      //   }
      // );
      //   // if (result.detail == "LOGINBADCREDENTIALS")
      //   //     alert("Неверные введенные значения")
      //   // else
      //   //     alert("Вы не зарегистрированы")
      (response.json().then(data => {
        // Обработка данных
        alert(data.detail); // Вывод значения ключа "detail"
        // Здесь можно выполнить другие операции с данными
      })
      )
    }
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

