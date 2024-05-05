// проверка что пользователь авторизован

// не авторизован
// меняем шапку и загружаем контент по id и убираем возможность редактирования

// авторизирован 
// проверяем на чьей он странице

// загрузка информации
// если на своей странице, то разрешаем редактирование
// если не на своей странице, то скрываем кнопки

let formDataProfile1 = document.getElementById("form-1")
let formDataProfile2 = document.getElementById("form-2")

formDataProfile1.addEventListener('submit', async event =>{
  event.preventDefault(); 
  const formData = new FormData(formDataProfile1); 
  const formDataObject = {
    first_name: formData.get('name'), 
    birth_date: formData.get('date'),
    last_name: formData.get('surname'),
    sex: formData.get('sex'),
    city: formData.get('city')
  }
  const response = await sendData(formDataObject, '/change_basic_information');
  if (response.status == 200)
  {
    alert("Данные изменены")
    location.reload();
  }
  else 
    alert("Не получилось")
})

// send data after click on button
formDataProfile2.addEventListener('submit', async event => {
  event.preventDefault(); 
  const formData = new FormData(formDataProfile2); 
  const formDataObject = {
    technology: formData.getAll('technology'), 
    tg: formData.get('tg'),
    vk: formData.get('vk'),
    education: formData.get('education'),
    work: formData.get('work'),
    email: formData.get('email')
  };
  const response = await sendData(formDataObject, '/send_additional_information');
  if (response.status == 200)
  {
    alert("Данные изменены")
    location.reload();
  }
  else 
    alert("Не получилось")
});

//generate post-request
async function sendData(data, ull) {
  return fetch(ull, {
    method: 'PUT',
    headers:
    { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
  }