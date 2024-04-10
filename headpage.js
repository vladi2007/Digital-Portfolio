fetch("/auth/is_authenticated")
    .then(response => {
        if (response != 200)
            changeStyle()
        else{
            alert(alert("Ваши куки скомуниздины" + document.cookie))
        }
    });


function changeStyle(){
    let link2 = document.getElementById("link-2")
    let link3 = document.getElementById("link-3")
    let link4 = document.getElementById("link-4")
    link2.style.display = 'none';
    link3.innerText = "Вход"
    link3.href = "/login"
    link3.style.marginLeft = "calc(50% - 130px)";
    link4.innerText = "Регистрация"
    link4.href = "/register"
}

