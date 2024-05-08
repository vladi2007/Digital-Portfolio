if (match) 
    number = parseInt(match[1]); 

fetch(`/sub/subscriptions_count/${number}`)
.then(response => response.json())
.then(data => {
    if (data.status != 404)
        document.getElementById("subscriptions-count").textContent = data;
    });

fetch(`/sub/subscribers_count/${number}`)
.then(response => response.json())
.then(data => {
    if (data.status != 404)
        document.getElementById("subscribers-count").textContent = data;
    });


fetch(`/sub/subscribers/${number}`)
.then(response => response.json())
.then(data => {
        if (data.status != 404)
            ViewProFiles(data,'Subscribers-list')
    });

fetch(`/sub/subscriptions/${number}`)
.then(response => response.json())
.then(data => {
        if (data.status != 404)
            ViewProFiles(data, "subscriptions-list")
    });
    


function ViewProFiles(data, href){
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        if (i < 6)
            DoProfiles(data[i], href)
        else
            break;
    }  
}


function DoProfiles(data, href){

    var listItem = document.createElement('li');
    listItem.classList.add('Subscribers-list-item');

    // Создаем ссылку
    var link = document.createElement('a');
    link.href = `/profile/${data.id}`;
    link.classList.add('profiles-href');

   
    var image = document.createElement('img');
    image.classList.add('Subscribers-avatar');
    image.src = `/avatar/${data.id}`;
    image.id = 'avatar-7';
    image.style.height = '80px';
    image.style.width = '80px';

    // Создаем абзац для имени
    var firstName = document.createElement('p');
    firstName.classList.add('Subscribers-name');
    firstName.id = 'first_name_sub';
    firstName.innerHTML = data.first_name;

    // Создаем абзац для фамилии
    var lastName = document.createElement('p');
    lastName.classList.add('Subscribers-name');
    lastName.id = 'last_name_sub';
    lastName.innerHTML = data.last_name;

    // Добавляем изображение, абзак для имени и абзак для фамилии в ссылку
    link.appendChild(image);
    link.appendChild(firstName);
    link.appendChild(lastName);

    // Добавляем ссылку в элемент списка
    listItem.appendChild(link);

    // Находим родительский элемент, куда добавить созданный элемент списка
    var parentElement = document.querySelector(`.${href}`); // Замените '.parent-element-class' на селектор вашего родительского элемента

    // Добавляем элемент списка в родительский элемент
    parentElement.appendChild(listItem);
}