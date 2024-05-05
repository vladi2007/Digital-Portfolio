let formDataAddFile = document.getElementById("add-file-form")

formDataAddFile.addEventListener('submit', async event =>{
  event.preventDefault(); 
  const formData = new FormData(formDataAddFile); 
  const response = await sendAvatar(formData, `/file/upload_file${current_tag}`);
  if (response.ok)
  {
    alert("Файл добавлен")
    DoOneFile(response.json())
  }
  else 
    alert("Не получилось добавить файл")
})


async function sendAvatar(data, ull) {
    return fetch(url, {
      method: 'POST',
      body: data})
}


function DoOneFile(data){
    const fileItem = document.createElement('p');
    fileItem.classList.add('file-item');
    fileItem.setAttribute('id', data["id"]); 

    const fileName = document.createElement('span');
    fileName.classList.add('file-name');
    fileName.textContent = element["filename"];
    // fileName.setAttribute('id', element["id"]); 

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', data["id"]); 
    deleteButton.classList.add('delete-file');
    deleteButton.textContent = 'Удалить файл';
    deleteButton.onclick = function() {
        onDelete(this);
    };

    const downloadButton = document.createElement('button');
    downloadButton.setAttribute('id', data["id"]); 
    downloadButton.classList.add('download-file');
    downloadButton.textContent = 'Загрузить файл файл';
    downloadButton.onclick = function() {
        onDownLoad(this);
    };

    fileItem.appendChild(fileName);
    fileItem.appendChild(deleteButton);

    const parentElement = document.querySelector('.files-list-item');
    parentElement.appendChild(fileItem);
}