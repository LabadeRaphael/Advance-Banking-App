const backBtn=()=>{
    window.history.back()
}

let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)
let currentUserImage=getCurrentUserDetails.userImage
let getCurrentUserImage=localStorage.getItem("userAccountImage");
console.log(getCurrentUserDetails);
const loadDetails=()=>{
    if (currentUserImage.length==0) {
        displayImage.src="account.png"
    }else{
        displayImage.src= getCurrentUserImage
    
    }
    Name.value=getCurrentUserDetails.userName
    PhoneNum.value=getCurrentUserDetails.userNumber
    Email.value=getCurrentUserDetails.userEmail
    Password.value=getCurrentUserDetails.userPassword
    ConfirmPassword.value=getCurrentUserDetails.ConfirmPassword
    pinNumber.value=getCurrentUserDetails.pinNum
}
const initReset = ()=>{
    if (Name.value == "" && PhoneNum.value == "" && Email.value == "" && Password.value =="" && ConfirmPassword.value == "" && pinNumber.value == "") {
        document.getElementById("nameMsg").innerText="The field is require"
        document.getElementById("phoneMsg").innerText="The field is require"
        document.getElementById("emailMsg").innerText="The field is require"
        document.getElementById("passwordMsg").innerText="The field is require"
        document.getElementById("confirmPasswordMsg").innerText="The field is require"
        document.getElementById("pinMsg").innerText="The field is require"
    }
    if(Name.value == ""){
        document.getElementById("nameMsg").innerText="Fill the blank space"
    }
    if(PhoneNum.value == ""){
        document.getElementById("phoneMsg").innerText="Fill the blank space"
    }
    if(Email.value == ""){
        document.getElementById("emailMsg").innerText="Fill the blank space"
    }
    if(Password.value  == ""){
        document.getElementById("passwordMsg").innerText="Fill the blank space"
    }
    if(ConfirmPassword.value  == ""){
        document.getElementById("confirmPasswordMsg").innerText="Fill the blank space"
    }
    if(pinNumber.value  == ""){
            document.getElementById("pinMsg").innerText="Fill the blank space"
    }
    else{
        alert("kn'ienini")
        localStorage.setItem('allUser', JSON.stringify(getallUserDetails))
    }
}