fetch("/search/users", {
    method: 'POST',
})
.then(response => response.json())
.then(data => {
    if (data.status != 404)
        ViewProFiles(data)
    else{
        DeleteProfiles();
        DoNotFound();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
        const form = document.getElementById("form-2");
        const formData = new FormData(form);
        let ull = '/search/users'
        const data_search = {};
        for (const pair of formData.entries()) {
            if (pair[1] !== "" && pair[0] !== "technology") {
                data_search[pair[0]] = pair[1];
        }}
        
        if (Object.keys(data_search).length !== 0) {
            ull += "?";
            for (const key in data_search) {
                ull += key + "=" + data_search[key] + "&";
            }
            ull = ull.slice(0, -1);
        }

        const formDataObject = {
            technology: formData.getAll('technology')
        };

        console.log(ull)
        console.log(formDataObject)

        fetch(ull, {
            method: 'POST',
            headers:
            { 'Content-Type': 'application/json'},
            body: JSON.stringify(formDataObject)})
        .then(response => response.json())
        .then(data => {
            if (data.status != 404)
                ViewProFiles(data)
            else{
                DeleteProfiles();
                DoNotFound();
            }
        });
    }
});

function ViewProFiles(data){
    DeleteProfiles();
    for (let i = 0; i < data.length; i++) {
        DoProfiles(data[i])
}  
}

function DeleteProfiles(){
    var items = document.querySelectorAll('.el');
    items.forEach(function(item) {
    item.remove()});
}

function DoProfiles(data){
    const newListElement = document.createElement('li');
    newListElement.className = 'el';

    const newLink = document.createElement('a');
    newLink.className = 'user-link';
    newLink.href = `/profile/${data.id}`;

    const newImage = document.createElement('img');
    newImage.className = 'avatar-search';
    newImage.id = 'ava-new';
    newImage.src = `/avatar/${data.id}`;

    const newSection = document.createElement('div');
    newSection.className = 'section';

    const newParagraph = document.createElement('p');
    newParagraph.className = 'big-info';

    const newSpans = [
        document.createElement('span'),
        document.createElement('span'),
        document.createElement('span'),
        // document.createElement('span')
    ];

    newSpans[0].textContent = data.first_name;
    newSpans[1].textContent = data.last_name;
    newSpans[2].textContent = data.city;
    
    newParagraph.append(...newSpans);
    newSection.appendChild(newParagraph);
    newLink.appendChild(newImage);
    newLink.appendChild(newSection);
    newListElement.appendChild(newLink);
    const list = document.querySelector('.list');
    list.appendChild(newListElement);
}

function DoNotFound(){
    const newListElement = document.createElement('li');
    newListElement.className = 'el';
    const newParagraph = document.createElement('p');
    newParagraph.className = 'big-info';
    newParagraph.textContent = "По вашему запросу никто не найден"
}