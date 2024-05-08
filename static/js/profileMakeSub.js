document.getElementById("form-sub").addEventListener('submit', async event =>{
    event.preventDefault();
    fetch(`/sub/subscribe_unsubscribe/${number}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => 
    {
        if (response.status == 200){
            document.getElementById("make-sub").classList.toggle("hidden-button")
            document.getElementById("refuse-sub").classList.toggle("hidden-button")
        }
    })
})




