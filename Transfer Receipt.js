const backBtn=()=>{
    window.history.back()
}
let getTransferAmount=JSON.parse(localStorage.getItem('transferAmount'));
let getCardNumber = localStorage.getItem("cardNumber")
let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let getRecipientAccount=JSON.parse(localStorage.getItem("recipientAccount"))
let getSenderAccount=JSON.parse(localStorage.getItem("senderAccount"))  
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)

let getCurrentUserHistory = getCurrentUserDetails.history
console.log(getCurrentUserDetails);
getCurrentUserHistory.filter((item,index)=>{
    console.log(item.transactionType);
    console.log(index);
    let getLastIndex = getCurrentUserHistory.lastIndexOf(item)
    document.getElementById("currentUserName").innerText=getCurrentUserDetails.userName
    document.getElementById("currentUserAccount").innerText=getCurrentUserDetails.accountNumber
    document.getElementById("currentUserRecipientAccount").innerText=getRecipientAccount
    document.getElementById("transferAmount").innerText=`${getTransferAmount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`
    document.getElementById("currentUserTransactionReference").innerText=`${Math.floor(Math.random()*1111111111111111111)}`
    if (item.transactionType == "money transfer") {
        // alert("lloooo")
        document.getElementById("depositDate").innerText=getCurrentUserHistory[getLastIndex].date
        document.getElementById("depositTime").innerText=getCurrentUserHistory[getLastIndex].time
    }
})

const prints=()=>{
    document.querySelector(".hr").classList.add("d-none")
    document.querySelector(".printBtn").classList.add("d-none")
  
    onafterprint = function () {
        document.querySelector(".hr").classList.remove("d-none")
        document.querySelector(".printBtn").classList.remove("d-none")
        
       
    }
}