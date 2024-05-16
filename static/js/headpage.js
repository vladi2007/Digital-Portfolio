fetch("/auth/is_authenticated")
    .then(response => {
        if (response.status != 200)
            changeStyle()
    });


function changeStyle(){
    let link2 = document.getElementById("link-2")
    let link3 = document.getElementById("link-3")
    let link4 = document.getElementById("link-4")
    let link5 = document.getElementById("link-5")
    let link6 = document.getElementById("link-6")
    link2.style.display = 'none';
    // link3.innerText = "Вход"
    // link3.href = "/login"
    // link3.style.marginLeft = "calc(50% - 130px)";
    link4.classList.toggle("hidden-button")
    link5.classList.toggle("hidden-button")
    link6.classList.toggle('hidden-button')
}
