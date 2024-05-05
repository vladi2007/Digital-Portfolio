let formDataAddFile = document.getElementById("form-3")

formDataAddFile.addEventListener('submit', async event =>{
  event.preventDefault(); 
  const formData = new FormData(formDataAddFile); 
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