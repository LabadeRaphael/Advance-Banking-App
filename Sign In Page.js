const backBtn=()=>{
    window.history.back()
}

localStorage.setItem("isEmailCorrect",false)
localStorage.setItem("isPasswordCorrect",false)

const signIn=()=>{
    let checkEmail=localStorage.getItem("isEmailCorrect")
    let checkPassword=localStorage.getItem("isPasswordCorrect")
    if (checkEmail == "true" && checkPassword == "true") {
        document.getElementById("signInSuccessful").innerHTML=`<div class='alert alert-info col-lg-6 mx-auto d-block text-center fw-bold'> Sign In Successful</div>`
        window.location="Dashboard.html"
    }
    if (email.value == "") {
        document.querySelector(".email").classList.add("is-invalid")   
        document.getElementById("emailMsg").innerText="Field is require"
    }
    if (password.value == "") {
        document.querySelector(".password").classList.add("is-invalid")  
        document.getElementById("passwordMsg").innerText="Field is require"
    }
}

let currentUser=JSON.parse(localStorage.getItem("allUser"))

const validateEmail=()=>{
    console.log(currentUser);
    let currentUserEmail = currentUser.find((item)=>item.userEmail == email.value)
    if (currentUserEmail) {
        document.querySelector(".email").classList.remove("is-invalid")   
        document.getElementById("emailMsg").innerText=""
        document.querySelector(".email").classList.add("is-valid") 
        localStorage.setItem("currentUserEmail",JSON.stringify(currentUserEmail.userEmail))
        localStorage.setItem("isEmailCorrect",true)
    } else {
        document.querySelector(".email").classList.add("is-invalid")   
        document.getElementById("emailMsg").innerText="Email not found"
        localStorage.setItem("isEmailCorrect",false)
    }
}

const validatePassword=()=>{
    let currentUserPassword = currentUser.find((item)=>item.userPassword == password.value)
    if (currentUserPassword) {
        document.querySelector(".password").classList.remove("is-invalid")   
        document.getElementById("passwordMsg").innerText=""
        document.querySelector(".password").classList.add("is-valid") 
        localStorage.setItem("isPasswordCorrect",true)
    } else {
        document.querySelector(".password").classList.add("is-invalid")   
        document.getElementById("passwordMsg").innerText="Incorrect password"
        localStorage.setItem("isPasswordCorrect",false)
    } 
}