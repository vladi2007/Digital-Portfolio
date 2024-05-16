var current_tag = "study";

let userFiles = {}
const studyForm = document.getElementById('study-form');
const scienceForm = document.getElementById('science-form');
const notEducationForm = document.getElementById('not-education-form');
const creativeForm = document.getElementById('creative-form');
const sportForm = document.getElementById('sport-form');
const otherForm = document.getElementById('other-form');

if (match) 
    number = parseInt(match[1]); 

studyForm.addEventListener('submit', handleSubmit(studyForm));
scienceForm.addEventListener('submit', handleSubmit(scienceForm));
notEducationForm.addEventListener('submit', handleSubmit(notEducationForm));
creativeForm.addEventListener('submit', handleSubmit(creativeForm));
otherForm.addEventListener('submit', handleSubmit(otherForm));
sportForm.addEventListener('submit', handleSubmit(sportForm));


function handleSubmit(form) {
    return async (event) => {
        current_tag = form.getAttribute("data-tag")
        event.preventDefault();
        fetch(`/file/search/${number}?tag=${current_tag}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.detail != "Not found")
                ViewFiles(data)
            else{
                DeleteFiles();
                DoNotFile();
            }
        })
    };
}

fetch(`/file/search/${number}?tag=${"study"}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    if (data.detail != "Not found")
        ViewFiles(data)
    else{
        DeleteFiles();
        DoNotFile();
    }
})

function ViewFiles(data){
    DeleteFiles()
    DoFiles(data)
    if (!Is_my_profile){
        let fileItems = document.querySelectorAll('.file-item');
        fileItems.forEach(fileItem => {
            fileItem.querySelector('.delete-file').remove();
        })
    }
}

function DeleteFiles(){
    var items = document.querySelectorAll('.file-item');
    items.forEach(function(item) {
    item.remove();
});
}

function DoFiles(data)
{
    for (const element of data)
    {
        const fileItem = document.createElement('p');
        fileItem.classList.add('file-item');
        fileItem.setAttribute('id', element["id"]); 

        const fileName = document.createElement('span');
        fileName.classList.add('file-name');
        fileName.textContent = element["filename"];
        fileName.setAttribute('id', element["id"]); 
        fileName.onclick = function(){
            onDownLoad(this)
        }

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', element["id"]); 
        deleteButton.classList.add('delete-file');
        deleteButton.textContent = 'Удалить файл';
        deleteButton.onclick = function() {
            onDelete(this)
        };

        fileItem.appendChild(fileName);
        fileItem.appendChild(deleteButton);

        const parentElement = document.querySelector('.files-list-item');
        parentElement.appendChild(fileItem);
    }
}

function DoNotFile()
{
    const fileItem = document.createElement('p');
    fileItem.classList.add('file-item');
    fileItem.setAttribute('id', "empty"); 
    const fileName = document.createElement('span');
    fileName.classList.add('file-name');
    fileName.textContent = "Нет файлов";
    fileItem.appendChild(fileName);
    const parentElement = document.querySelector('.files-list-item');
    parentElement.appendChild(fileItem);
}

