// проверка что пользователь авторизован

// не авторизован
// меняем шапку и загружаем контент по id и убираем возможность редактирования

// авторизирован 
// проверяем на чьей он странице

// загрузка информации
// если на своей странице, то разрешаем редактирование
// если не на своей странице, то скрываем кнопки

let formDataProfile2 = document.getElementById("form-2")
let btnSend = document.getElementById("send-other-data-profile")



// send data after click on button
formDataProfile2.addEventListener('submit', async event => {
  event.preventDefault(); 
  const formData = new FormData(formDataProfile2); 
  const formDataObject = {
    technology: formData.getAll('technology'), 
    tg: formData.get('tg'),
    vk: formData.get('vk'),
    education: formData.get('education'),
    work: formData.get('work')
  };
  const response = await sendData(formDataObject);
  if (response.status == 200)
    alert("Данные изменены")
  else 
    alert("Не получилось")
  

});
//generate post-request
async function sendData(data) {
  return fetch('/send_additional_information', {
    method: 'PUT',
    headers:
    { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
  }