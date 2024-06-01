const backBtn=()=>{
    window.history.back()
}

localStorage.setItem("isAccountNumberCorrect",false)
localStorage.setItem("isTransferAmtCorrect",false)
localStorage.setItem("isPinNumCorrect",false)
let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)
console.log(getallUserDetails);
console.log(getCurrentUserDetails);


validateAccount=()=>{
    let accountNum = accountNumber.value
    if (accountNum.length>10 || accountNum.length<10) {
        document.querySelector(".account").classList.add("is-invalid")
        document.getElementById("accountMsg").innerText="Enter 10 digits number"
        localStorage.setItem("isAccountNumberCorrect",false)
    }else{
        document.querySelector(".account").classList.remove("is-invalid")
        document.querySelector(".account").classList.add("is-valid")
        document.getElementById("accountMsg").innerText=""
        localStorage.setItem("isAccountNumberCorrect",true)
    }
}

const validateTransferAmt=()=>{
    let transferAmt=transferAmount.value
    let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
    let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
    let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)
    let getCurrentUserBalance=getCurrentUserDetails.userBalance
    console.log(getallUserDetails);
    console.log(getCurrentUserDetails);
    console.log(getCurrentUserBalance);
    
    if (getCurrentUserBalance < transferAmt) {
        document.querySelector(".transfer").classList.add("is-invalid")
        document.getElementById("transferAmtMsg").innerText="Insufficient Balance"
        localStorage.setItem("isTransferAmtCorrect",false)
    }else   if (transferAmt < 100) {
        document.querySelector(".transfer").classList.add("is-invalid")
        document.getElementById("transferAmtMsg").innerHTML="Amount must be &#8358 100 and above"
        localStorage.setItem("isTransferAmtCorrect",false)
    }else{
        document.querySelector(".transfer").classList.remove("is-invalid")
        document.querySelector(".transfer").classList.add("is-valid")
        document.getElementById("transferAmtMsg").innerText=""
        localStorage.setItem("isTransferAmtCorrect",true)
    }
}

const transfer=()=>{
    let checkAccount=JSON.parse(localStorage.getItem("isAccountNumberCorrect"))
    let checkTransfer=JSON.parse(localStorage.getItem("isTransferAmtCorrect"))
    if (checkAccount == true && checkTransfer == true) {
        const OpenBootstrapPopup=()=> {
            $("#simpleModal").modal('show');
        }
        OpenBootstrapPopup()
    }else if (accountNumber.value == "" && transferAmount.value == "") {
        document.getElementById("accountMsg").innerText="The field is require"
        document.getElementById("transferAmtMsg").innerText="The field is require"
    }else{
        if(accountNumber.value == ""){
            document.getElementById("accountMsg").innerText="Fill this field correctly"
        }
        if(transferAmount.value == ""){
            document.getElementById("transferAmtMsg").innerText="Fill this field correctly"
        }
        
    }
}

const validatePinNum=()=>{
    let pinNum=pinNumber.value
    let getCurrentUserPin=getCurrentUserDetails.pinNum
    console.log(getCurrentUserPin);
    if (pinNum !== getCurrentUserPin) {
        document.querySelector(".pin").classList.add("is-invalid")
        document.getElementById("pinMsg").innerText="Pin not correct."
        localStorage.setItem("isPinNumCorrect",false)
    }if(pinNum.length<4 || pinNum.length>4){
        document.querySelector(".pin").classList.add("is-invalid")
        document.getElementById("pinMsg").innerText="Enter valid pin."
        localStorage.setItem("isPinNumCorrect",false)
    }
    if (pinNum == getCurrentUserPin) {
        document.querySelector(".pin").classList.remove("is-invalid")
        document.querySelector(".pin").classList.add("is-valid")
        document.getElementById("pinMsg").innerText=""
        localStorage.setItem("isPinNumCorrect",true)
    }
}
const proceed=()=>{
    localStorage.setItem("transferAmount",transferAmount.value)
    localStorage.setItem("recipientAccount",accountNumber.value)
    let getTransferAmount=JSON.parse(localStorage.getItem("transferAmount"))
    let checkPinNum=JSON.parse(localStorage.getItem("isPinNumCorrect"))
    if (checkPinNum == true) {
        getCurrentUserDetails.userBalance = parseInt(getCurrentUserDetails.userBalance) - parseInt(getTransferAmount)
        let d=new Date()
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let amPm=d.getHours()>=12?"pm":"am"
        let currentUserHistory={
          transactionType:"money transfer",
          amount:getTransferAmount,
          date:`${months[d.getMonth()]} / ${d.getDate()} / ${d.getFullYear()}`,
          time:`${d.getHours()>12 ? d.getHours()-12:d.getHours()}:${d.getMinutes()}${amPm}`
        }
        getCurrentUserDetails.history.push(currentUserHistory)
        console.log( getCurrentUserDetails.userBalance);
        localStorage.setItem('allUser', JSON.stringify(getallUserDetails))
       window.location="Transfer Successful.html"
    }else if (pinNumber.value == "") {
        document.getElementById("pinMsg").innerText="The field is require"
    }
}