const backBtn=()=>{
    window.history.back()
}
let getAmount=JSON.parse(localStorage.getItem('depositAmt'));
let getPaymentOption = localStorage.getItem("paymentOption")
let getCardNumber = localStorage.getItem("cardNumber")
let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)

let getCurrentUserHistory = getCurrentUserDetails.history

getCurrentUserHistory.filter((item,index)=>{
    console.log(item.time);
    console.log(index);
    let getLastIndex = getCurrentUserHistory.lastIndexOf(item)
    document.getElementById("depositDate").innerText=getCurrentUserHistory[getLastIndex].date
    document.getElementById("depositTime").innerText=getCurrentUserHistory[getLastIndex].time

})

document.getElementById("depositAmount").innerText =`${getAmount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`
document.getElementById("currentUserNumber").innerText=getCurrentUserDetails.userNumber
document.getElementById("currentUserCardNumber").innerText= getCardNumber
document.getElementById("currentUserPayChannel").innerText=getPaymentOption
document.getElementById("currentUserTransactionNumber").innerText=`${Math.floor(Math.random()*1111111111111111111)}`

if (getPaymentOption == "DebitCard") {
    document.querySelector(".bankName").classList.add("d-none")

} else {
    document.querySelector(".bankName").classList.remove("d-none")
    let getBankName = localStorage.getItem("bankName")
    document.getElementById("currentUserBankName").innerText=getBankName
}
const prints=()=>{
    document.querySelector(".hr").classList.add("d-none")
    document.querySelector(".printBtn").classList.add("d-none")
  
}
