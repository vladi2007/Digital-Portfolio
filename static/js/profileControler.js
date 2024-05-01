
checkOwnerProfile()

function checkOwnerProfile(){
    const fullUrl = window.location.href;
    const match = fullUrl.match(/\/(\d+)$/); 
    if (match) {
        number = parseInt(match[1]);
    }

    fetch("/is_my_profile/" + number)
    .then(response => {
        if (response.status == 200){
            return response.json();
        }
        else {
            let link2 = document.getElementById("link-2");
            let link3 = document.getElementById("link-3")
            let link4 = document.getElementById("link-4")
            link2.style.display = 'none';
            link3.innerText = "Вход"
            link3.href = "/login"
            link3.style.marginLeft = "calc(50% - 130px)";
            link4.innerText = "Регистрация"
            link4.href = "/register"
            // changeStyle()
        }
    })
    .then(data => {
        if (!data) {
            changeStyle();
        }})
    }

function changeStyle(){
    
    document.getElementById("feedback").remove();
    document.getElementById("feedback-2").remove();
    let fileItems = document.querySelectorAll('.file-item');
    fileItems.forEach(fileItem => {
        fileItem.querySelector('.delete-file').remove();
    })
}
