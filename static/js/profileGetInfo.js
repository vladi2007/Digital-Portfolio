

// const fullUrl = window.location.href;

// const match = fullUrl.match(/\/(\d+)$/); 

if (match) 
    number = parseInt(match[1]); 

fetch("/get_additional_information/"+number)
    .then(response => response.json())
    .then(data => {
        var birth_date =  data.birth_date.substring(0,  data.birth_date.indexOf("T"));
        var elementIds = ["city", "first_name", "last_name", "technology", "sex", "education", "work", "vk", "email", "tg"];

        elementIds.forEach(function(id) {
            var element = document.getElementById(id);
            if (element) {
                element.textContent =  data[id];
            }
        });
        
        document.getElementById("birth_date").textContent = birth_date;
    })