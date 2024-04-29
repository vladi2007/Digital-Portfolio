
infoUser = {}
// let aboutUser = document.querySelector(".about-me");
// let contactsUser = document.querySelector(".contacts");
// let nameUser = document.getElementById("user-name");
const fullUrl = window.location.href;
const match = fullUrl.match(/\/(\d+)$/); 

if (match) 
    number = parseInt(match[1]); 

fetch("/get_additional_information/"+number)
    .then(response => response.json())
    .then(data => {
        infoUser = data;
        var birth_date = infoUser.birth_date.substring(0, infoUser.birth_date.indexOf("T"));
        var elementIds = ["city", "first_name", "last_name", "technology", "sex", "education", "work", "vk", "email", "tg"];

        elementIds.forEach(function(id) {
            var element = document.getElementById(id);
            if (element) {
                element.textContent = infoUser[id];
            }
        });
        
        document.getElementById("birth_date").textContent = birth_date;
    })

    //     document.getElementById("city").textContent = infoUser.city;
    //     document.getElementById("first_name").textContent = infoUser.first_name;
    //     document.getElementById("last_name").textContent = infoUser.last_name;
    //     document.getElementById("technology").textContent = infoUser.technology;
    //     document.getElementById("birth_date").textContent = infoUser.birth_date;
    //     document.getElementById("sex").textContent = infoUser.sex;
    //     document.getElementById("education").textContent = infoUser.education;
    //     document.getElementById("work").textContent = infoUser.work;
    //     document.getElementById("vk").textContent = infoUser.vk;
    //     document.getElementById("email").textContent = infoUser.email;
    //     document.getElementById("tg").textContent = infoUser.tg;



    //     const nameUserHTML = `
    //     <span  id = "first_name">${infoUser.first_name}</span>
    //     <span  id = "last_name">${infoUser.last_name}</span>
    //     `;
    //     nameUser.innerHTML = nameUserHTML;
    //     const aboutUserHTML = `<ul class ="about-me-list"><span class ="header">Обо мне:</span>
    //     <li class = "about-me-list-item" id ="education">Город:${infoUser.city}</li>
    //     <li class = "about-me-list-item" id ="technology">Род деятельности:${infoUser.technology}</li>
    //     <li class = "about-me-list-item" id ="birth">Дата рождения:${infoUser.birth_date}</li>
    //     <li class = "about-me-list-item" id ="sex">Пол:${infoUser.sex}</li>
    //     <li class = "about-me-list-item" id ="education">Образование:${infoUser.education}</li>
    //     <li class = "about-me-list-item" id ="work">Работа:${infoUser.work}</li>
    // </ul>`;
    //     aboutUser.innerHTML = aboutUserHTML;
    //     const contactsHTML = `<ul class ="contacts-list"><span class ="header">Контакты:</span>
    //     <li class = "contacts-list-item" id ="vk">Вконтакте:${infoUser.vk}</li>
    //     <li class = "contacts-list-item" id ="email">Почта:${infoUser.email}</li>
    //     <li class = "contacts-list-item" id ="tg">Telegram:${infoUser.tg}</li>
    // </ul>`;
    //     contactsUser.innerHTML = contactsHTML;
    //     })
