Is_my_profile = true;

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
            let link2 = document.getElementById("link-2")
            let link3 = document.getElementById("link-3")
            let link4 = document.getElementById("link-4")
            let link5 = document.getElementById("link-5")
            link2.style.display = 'none';
            link3.innerText = "Вход"
            link3.href = "/login"
            link3.style.marginLeft = "calc(50% - 130px)";
            link4.classList.toggle("hidden-button")
            link5.classList.toggle("hidden-button")
            document.getElementById("form-sub").remove();
        }
    })
    .then(data => {
        if (!data) {
            Is_my_profile = false;
            deleteOppotunEditStyle();
            isSub();
        }
        else
            document.getElementById("form-sub").remove();
    })
}

function deleteOppotunEditStyle(){
    document.getElementById("feedback").remove();
    document.getElementById("feedback-2").remove();
}

function isSub()
{
    fetch(`/sub/i_follow/${number}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data){
            document.getElementById("make-sub").classList.toggle("hidden-button")
            document.getElementById("refuse-sub").classList.toggle("hidden-button")
        }
    })
}


