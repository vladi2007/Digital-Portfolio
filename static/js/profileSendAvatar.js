let formDataProfile3 = document.getElementById("form-3")

formDataProfile3.addEventListener('submit', async event =>{
  event.preventDefault(); 
  const formData = new FormData(formDataProfile3); 
  const response = await sendAvatar(formData, '/avatar/upload');
  if (response.ok)
  {
    alert("Данные изменены")
    location.reload();
  }
  else 
    alert("Не получилось")
})


async function sendAvatar(data, url) {
    return fetch(url, {
      method: 'PUT',
      body: data})
}