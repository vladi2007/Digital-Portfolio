let current_tag = "study";
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
    current_tag = form.getAttribute("data-tag")
    console.log(current_tag)
    return async (event) => {
        event.preventDefault();
        fetch(`/file/search/${number}?tag=${form.getAttribute("data-tag")}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            DoFiles(data)
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
    DoFiles(data)
})


function DoFiles(data){
    DeleteFiles()
    for (const element of data) {
    const fileItem = document.createElement('p');
    fileItem.classList.add('file-item');

    const fileName = document.createElement('span');
    fileName.classList.add('file-name');
    fileName.textContent = element["filename"];
    fileItem.setAttribute('id', element["id"]); 

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-file');
    deleteButton.textContent = 'Удалить файл';

    fileItem.appendChild(fileName);
    fileItem.appendChild(deleteButton);

    const parentElement = document.querySelector('.files-list-item');
    parentElement.appendChild(fileItem);
}
}

function DeleteFiles(){
    var items = document.querySelectorAll('.file-item');
    items.forEach(function(item) {
    item.remove();
});
}

