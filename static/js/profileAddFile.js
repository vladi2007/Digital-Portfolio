let formDataAddFile = document.getElementById("add-file-form")

formDataAddFile.addEventListener('submit', async event =>{
  event.preventDefault(); 
  const fileInput = document.getElementById('file');
  console.log(fileInput)
  console.log(fileInput.files.length)
  if (!fileInput.files || fileInput.files.length === 0) {
    alert('Выберите файл перед отправкой');
    return;
  }
  const formData = new FormData(formDataAddFile); 
  const response = await sendFile(formData);
  fileInput.value = '';
  if (response.ok) {
    alert("Файл добавлен");
    const responseData = await response.json();
    DeleteEmpty(); 
    DoOneFile(responseData);
} else 
    alert("Не получилось добавить файл");
}
)


async function sendFile(data) {
    return fetch(`/file/upload_file?tag=${current_tag}`, {
      method: 'POST',
      body: data})
}


function DoOneFile(data){
    const fileItem = document.createElement('p');
    fileItem.classList.add('file-item');
    fileItem.setAttribute('id', data.id); 

    const fileName = document.createElement('span');
    fileName.classList.add('file-name');
    fileName.textContent = data.filename;

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', data.id); 
    deleteButton.classList.add('delete-file');
    deleteButton.textContent = 'Удалить файл';
    deleteButton.onclick = function() {
        onDelete(this);
    };

    const downloadButton = document.createElement('button');
    downloadButton.setAttribute('id', data.id); 
    downloadButton.classList.add('download-file');
    downloadButton.textContent = 'Загрузить файл файл';
    downloadButton.onclick = function() {
        onDownLoad(this);
    };

    fileItem.appendChild(fileName);
    fileItem.appendChild(deleteButton);
    fileItem.appendChild(downloadButton);

    const parentElement = document.querySelector('.files-list-item');
    parentElement.appendChild(fileItem);
}

function DeleteEmpty(){
  empty =  document.querySelector(`.file-item[id="empty"]`);
  if (empty)
    empty.remove();
}