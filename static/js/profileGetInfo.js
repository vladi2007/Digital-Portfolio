
infoUser = {}
let aboutUser = document.querySelector(".about-me");
let contactsUser = document.querySelector(".contacts");
let nameUser = document.getElementById("user-name");

const fullUrl = window.location.href;
const match = fullUrl.match(/\/(\d+)$/); 

if (match) {
    number = parseInt(match[1]); 
    console.log(number);
}


fetch("/get_additional_information/"+number)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        infoUser = data;
       
        const nameUserHTML = `
        <span  id = "first_name">${infoUser.first_name}</span>
        <span  id = "last_name">${infoUser.last_name}</span>
        `;
        nameUser.innerHTML = nameUserHTML;
        const aboutUserHTML = `<ul class ="about-me-list"><span class ="header">Обо мне:</span>
        <li class = "about-me-list-item" id ="education">Город:${infoUser.city}</li>
        <li class = "about-me-list-item" id ="technology">Род деятельности:${infoUser.technology}</li>
        <li class = "about-me-list-item" id ="birth">Дата рождения:${infoUser.birth_date}</li>
        <li class = "about-me-list-item" id ="sex">Пол:${infoUser.sex}</li>
        <li class = "about-me-list-item" id ="education">Образование:${infoUser.education}</li>
        <li class = "about-me-list-item" id ="work">Работа:${infoUser.work}</li>
    </ul>`;
        aboutUser.innerHTML = aboutUserHTML;
        const contactsHTML = `<ul class ="contacts-list"><span class ="header">Контакты:</span>
        <li class = "contacts-list-item" id ="vk">Вконтакте:${infoUser.vk}</li>
        <li class = "contacts-list-item" id ="email">Почта:${infoUser.email}</li>
        <li class = "contacts-list-item" id ="tg">Telegram:${infoUser.tg}</li>
    </ul>`;
        contactsUser.innerHTML = contactsHTML;
        })
