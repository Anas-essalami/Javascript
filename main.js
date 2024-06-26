
let btn = document.getElementById("submit")
let erreur = document.getElementById("Failed")
let verified = document.getElementById("Verified")
btn.addEventListener("click", function(e){
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email == 'anas@gmail.com' && password == 'Anas@2005'){
        verified.innerHTML="<p>Welcome Back!!</p>"
        verified.style.color = "green";
        window.location.assign("./index2.html")
    }
    else{
        erreur.innerHTML="<p>User not found</p>"
        erreur.style.color = "Red";
    }
})
