const backBtn=()=>{
    window.history.back()
}

localStorage.setItem("isCardNumberCorrect",false)
localStorage.setItem("isExpiryDateCorrect",false)
localStorage.setItem("isExpiryYearCorrect",false)
localStorage.setItem("isCvvNumCorrect",false)
localStorage.setItem("isPinCorrect",false)


let getDepositAmt=JSON.parse(localStorage.getItem("depositAmt"))
const paymentOptionPage=()=>{
    document.getElementById("depositAmt").innerText=`${getDepositAmt.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`
    debitCard()
}

const debitCard=()=>{
    document.querySelector(".debitCardDetails").classList.remove("d-none")   
    document.querySelector(".bankAccountDetails").classList.add("d-none")   
    document.getElementById("debitCard").focus()
    document.getElementById("debitCard").style.backgroundColor="red"
    document.getElementById("bankAccount").style.backgroundColor="transparent"
}

const bankAccount=()=>{
    document.querySelector(".debitCardDetails").classList.add("d-none")   
    document.querySelector(".bankAccountDetails").classList.remove("d-none")   
    document.getElementById("bankAccount").focus()
    document.getElementById("debitCard").style.backgroundColor="transparent"
    document.getElementById("bankAccount").style.backgroundColor="red"

}

const validateCardNumber=()=>{
    let cardNum=cardNumber.value
    if (cardNum.length < 19 || cardNum.length > 19) {
        document.querySelector(".cardNumber").classList.add("is-invalid")   
        document.getElementById("cardNumMsg").innerText="Enter correct 19 digits of your card number"
        localStorage.setItem("isCardNumberCorrect",false)
    }else{
        document.querySelector(".cardNumber").classList.remove("is-invalid")   
        document.querySelector(".cardNumber").classList.add("is-valid")   
        document.getElementById("cardNumMsg").innerText="" 
        localStorage.setItem("isCardNumberCorrect",true)
    }
}

const validateExpiryDate=()=>{
    let expDate=expiryDate.value
    if (expDate.length<2) {
        document.querySelector(".expiryDate").classList.add("is-invalid")   
        document.getElementById("expiryDateMsg").innerText="Enter two digits number"
        localStorage.setItem("isExpiryDateCorrect",false)
    }
    else if (expDate>31 || expDate==0) {
        document.querySelector(".expiryDate").classList.add("is-invalid")   
        document.getElementById("expiryDateMsg").innerText="Enter valid date"
        localStorage.setItem("isExpiryDateCorrect",false)
    }
    else{
        document.querySelector(".expiryDate").classList.remove("is-invalid")   
        document.querySelector(".expiryDate").classList.add("is-valid")   
        document.getElementById("expiryDateMsg").innerText=""
        localStorage.setItem("isExpiryDateCorrect",true)
    }
}

const validateExpiryYear=()=>{
    let expYear=expiryYear.value
    if (expYear.length<2 || expYear.length>2) {
        document.querySelector(".expiryYear").classList.add("is-invalid")   
        document.getElementById("expiryYearMsg").innerText="Enter two digits number"
        localStorage.setItem("isExpiryYearCorrect",false)
    }
    else if (expYear<23 || expYear==0) {
        document.querySelector(".expiryYear").classList.add("is-invalid")   
        document.getElementById("expiryYearMsg").innerText="Enter valid Year"
        localStorage.setItem("isExpiryYearCorrect",false)
    }
    else{
        document.querySelector(".expiryYear").classList.remove("is-invalid")   
        document.querySelector(".expiryYear").classList.add("is-valid")   
        document.getElementById("expiryYearMsg").innerText=""
        localStorage.setItem("isExpiryYearCorrect",true)
    }
}

const validateCvv=()=>{
    let cardNum =  cvvNum.value
    if (cardNum.length<3 || cardNum.length>3) {
        document.querySelector(".cvv").classList.add("is-invalid")   
        document.getElementById("cvvMsg").innerText="Enter three digits number"
        localStorage.setItem("isCvvNumCorrect",false)
    }else{
        document.querySelector(".cvv").classList.remove("is-invalid")   
        document.querySelector(".cvv").classList.add("is-valid")   
        document.getElementById("cvvMsg").innerText=""
        localStorage.setItem("isCvvNumCorrect",true)
    }
}

const validatePin=()=>{
    let pinNum=pin.value
    if (pinNum.length<4 || pinNum.length>4) {
        document.querySelector(".pin").classList.add("is-invalid")   
        document.getElementById("pinMsg").innerText="Enter four digit number"
        localStorage.setItem("isPinCorrect",false)
    }else{
        document.querySelector(".pin").classList.remove("is-invalid")   
        document.querySelector(".pin").classList.add("is-valid")   
        document.getElementById("pinMsg").innerText=""
        localStorage.setItem("isPinCorrect",true)
    }
}

let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)
console.log(getallUserDetails);
console.log(getCurrentUserDetails);

const debitCardConfirmBtn=()=>{
    let checkCardNum = localStorage.getItem("isCardNumberCorrect")
    let checkExpDate = localStorage.getItem("isExpiryYearCorrect")
    let checkExpYear = localStorage.getItem("isExpiryDateCorrect")
    let checkCvvNum = localStorage.getItem("isCvvNumCorrect")
    let checkPinNum = localStorage.getItem("isPinCorrect")
    if (checkCardNum == "true" && checkExpDate == "true" && checkExpYear == "true" && checkCvvNum == "true" && checkPinNum == "true") {
        getCurrentUserDetails.userBalance = parseInt(getCurrentUserDetails.userBalance) + parseInt(getDepositAmt)
        let d=new Date()
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let amPm=d.getHours()>=12?"pm":"am"
        let currentUserHistory={
          transactionType:"deposit",
          amount:getDepositAmt,
          date:`${months[d.getMonth()]} / ${d.getDate()} / ${d.getFullYear()}`,
          time:`${d.getHours()>12 ? d.getHours()-12:d.getHours()}:${d.getMinutes()}${amPm}`
        }
        getCurrentUserDetails.history.push(currentUserHistory)
        console.log( getCurrentUserDetails.userBalance);
        localStorage.setItem("cardNumber",cardNumber.value)
        localStorage.setItem('paymentOption', "DebitCard")
        localStorage.setItem('allUser', JSON.stringify(getallUserDetails))
        window.location = "Deposit Successful.html"
    }else if (cardNumber.value == "" && expiryDate.value == "" && expiryYear.value == "" && cvvNum.value == "" &&  pin.value == "") {
        document.getElementById("cardNumMsg").innerText="The field is require"
        document.getElementById("expiryDateMsg").innerText="The field is require"
        document.getElementById("expiryYearMsg").innerText="The field is require"
        document.getElementById("cvvMsg").innerText="The field is require"
        document.getElementById("pinMsg").innerText="The field is require"
    }else{
        if(cardNumber.value == ""){
            document.getElementById("cardNumMsg").innerText="Fill this field  correctly"
        }
        if(expiryDate.value== ""){
            document.getElementById("expiryDateMsg").innerText="Fill this field correctly"
        }
        if(expiryYear.value == ""){
            document.getElementById("expiryYearMsg").innerText="Fill this field correctly"
        }
        if(cvvNum.value == ""){
            document.getElementById("cvvMsg").innerText="Fill this field correctly"
        }
        if(pin.value == ""){
            document.getElementById("pinMsg").innerText="Fill this field correctly"
        }
    }
}
const bankAccountConfirmBtn=()=>{ 
    localStorage.setItem('paymentOption', "BankAccount")

}