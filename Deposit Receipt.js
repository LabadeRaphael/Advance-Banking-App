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
let me=getCardNumber.slice(0,6,"ijeieieejiji")


document.getElementById("currentUserNumber").innerText=getCurrentUserDetails.userNumber
document.getElementById("currentUserCardNumber").innerText= getCardNumber
document.getElementById("currentUserPayChannel").innerText=getPaymentOption
document.getElementById("currentUserTransactionNumber").innerText=`${Math.floor(Math.random()*1111111111111111111)}`










if (getPaymentOption == "DebitCard") {
    document.querySelector(".bankName").classList.add("d-none")

} else {
    document.querySelector(".bankName").classList.remove("d-none")
}
const prints=()=>{
    document.querySelector(".hr").classList.add("d-none")
    document.querySelector(".printBtn").classList.add("d-none")
  
}
let d=new Date()
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day=[1,2,3,4,5,6,7]
console.log(`${months[d.getMonth()]} / ${day[d.getDay()]} / ${d.getFullYear()}`);
// console.log(new Date().,);
// const loadTransactionDetails=()=>{
//     document.querySelector(".hr").classList.remove("d-none")
//     document.querySelector(".printBtn").classList.remove("d-none")
//  }
