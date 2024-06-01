let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)

console.log(getallUserDetails);
console.log(getCurrentUserDetails);

localStorage.setItem("isAirtimeNumberCorrect",false)
localStorage.setItem("isAirtimeAmtCorrect",false)
localStorage.setItem("isPinNumCorrect",false)

const airtimePage=()=>{
    getValidNum=getCurrentUserDetails.userNumber
    let getCurrentUserNumber=getValidNum.slice(1)
    airtimeNumber.value=getCurrentUserNumber
    localStorage.setItem("isAirtimeNumberCorrect", true);
    document.querySelector(".AirtimeNum").classList.remove("is-invalid");
    document.querySelector(".airtimeNum").classList.add("is-valid");
    mtn()   
}

const backBtn=()=>{
    window.history.back()
}

 
const mtn=()=>{
    // switching to mtn
        let mtn=document.querySelector(".mtn")
        let mtnText=document.getElementById("mtn")
        mtn.style.backgroundColor="yellow"
        mtnText.style.color="white"
        localStorage.setItem("airtimeName", 'MTN');

     //switching back to the defult value of glo
     let glo=document.querySelector(".glo")
     let gloText=document.getElementById("glo")
     glo.style.backgroundColor="pink"
     gloText.style.color="green"
     //switching back to the defult value of airtel
     let airtel=document.querySelector(".airtel")
     let airtelText=document.getElementById("airtel")
     airtel.style.backgroundColor="pink"
     airtelText.style.color="red"
            //switching back to the defult value of etisalat
    let etisalat=document.querySelector(".etisalat")
    let etisalatText=document.getElementById("etisalat")
    etisalat.style.backgroundColor="pink"
    etisalatText.style.color="green"
        
}

const glo=()=>{
    // switching to glo
    let glo=document.querySelector(".glo")
    let gloText=document.getElementById("glo")
    glo.style.backgroundColor="green"
    gloText.style.color="white"
    localStorage.setItem("airtimeName", 'GLO');

    //switching back to the defult value of mtn 
    let mtn=document.querySelector(".mtn")
    let mtnText=document.getElementById("mtn")
    mtn.style.backgroundColor="pink"
    mtnText.style.color="yellow"
    //switching back to the defult value of airtel
    let airtel=document.querySelector(".airtel")
    let airtelText=document.getElementById("airtel")
    airtel.style.backgroundColor="pink"
    airtelText.style.color="red"
    //switching back to the defult value of etisalat
    let etisalat=document.querySelector(".etisalat")
    let etisalatText=document.getElementById("etisalat")
    etisalat.style.backgroundColor="pink"
    etisalatText.style.color="green"
}

const airtel=()=>{
    // switching to airtel
    let airtel=document.querySelector(".airtel")
    let airtelText=document.getElementById("airtel")
    airtel.style.backgroundColor="red"
    airtelText.style.color="white"
    localStorage.setItem("airtimeName", 'AIRTEL');

    //switching back to the defult value of glo
    let glo=document.querySelector(".glo")
    let gloText=document.getElementById("glo")
    glo.style.backgroundColor="pink"
    gloText.style.color="green"

    //switching back to the defult value of mtn 
    let mtn=document.querySelector(".mtn")
    let mtnText=document.getElementById("mtn")
    mtn.style.backgroundColor="pink"
    mtnText.style.color="yellow"
    //switching back to the defult value of etisalat
    let etisalat=document.querySelector(".etisalat")
    let etisalatText=document.getElementById("etisalat")
    etisalat.style.backgroundColor="pink"
    etisalatText.style.color="green"
   
}

const etisalat=()=>{
    // switching to etisalat
    let etisalat=document.querySelector(".etisalat")
    let etisalatText=document.getElementById("etisalat")
    etisalat.style.backgroundColor="lightgreen"
    etisalatText.style.color="white"
    localStorage.setItem("airtimeName", 'ETISALAT');

    //switching back to the defult value of mtn 
    let mtn=document.querySelector(".mtn")
    let mtnText=document.getElementById("mtn")
    mtn.style.backgroundColor="pink"
    mtnText.style.color="yellow"
     //switching back to the defult value of glo
     let glo=document.querySelector(".glo")
     let gloText=document.getElementById("glo")
     glo.style.backgroundColor="pink"
     gloText.style.color="green"
     //switching back to the defult value of airtel
     let airtel=document.querySelector(".airtel")
     let airtelText=document.getElementById("airtel")
     airtel.style.backgroundColor="pink"
     airtelText.style.color="red"

}

const validateAirtimeNum=()=>{
    let airtimeNum=airtimeNumber.value
    let validRegexNum =/^([7-9]{1,1})([0-1]{1,1})([\d]{8,8})$/ 
    if (airtimeNum.match(validRegexNum )) {

        document.querySelector(".AirtimeNum").classList.remove("is-invalid");
        document.querySelector(".AirtimeNum").classList.add("is-valid");
        document.getElementById("airtimeNumMsg").innerText = "";
        localStorage.setItem("isAirtimeNumberCorrect", true);
    }
    else{
        document.querySelector(".airtimeNum").classList.add("is-invalid");
        document.getElementById("airtimeNumMsg").innerText = "Enter valid Number";
        localStorage.setItem("isAirtimeNumberCorrect", false);
    }

}

const validateAirtime=()=>{
    let airtimeAmt=airtimeAmount.value
    let getCurrentUserBalance=getCurrentUserDetails.userBalance
    console.log(airtimeAmt);
    console.log(getCurrentUserBalance);
    if (airtimeAmt<50) {
        document.querySelector(".airtime").classList.add("is-invalid") 
        document.getElementById("airtimeAmtMsg").innerHTML="Amount must be &#8358 50 and above"
        localStorage.setItem("isAirtimeAmtCorrect",false)

    }else if(getCurrentUserBalance < airtimeAmt){
        document.querySelector(".airtime").classList.add("is-invalid")
        document.getElementById("airtimeAmtMsg").innerText="Insufficient Balance"
        localStorage.setItem("isAirtimeAmtCorrect",false)

    }
    else{
        document.querySelector(".airtime").classList.remove("is-invalid") 
        document.querySelector(".airtime").classList.add("is-valid") 
        document.getElementById("airtimeAmtMsg").innerText=""
        localStorage.setItem("isAirtimeAmtCorrect",true)
    }
    
}

const initConfirm=()=>{
    let checkAirtimeNum=JSON.parse(localStorage.getItem("isAirtimeNumberCorrect"))
    let checkAirtimeAmt=JSON.parse(localStorage.getItem("isAirtimeAmtCorrect"))
    let getAirtimeAmount=JSON.parse(localStorage.getItem("airtimeAmount"))
    if (checkAirtimeNum==true && checkAirtimeAmt==true) {
        const OpenBootstrapPopup=()=> {
            $("#simpleModal").modal('show');
        }
        OpenBootstrapPopup()
    }
    else if (airtimeNumber.value == "" && airtimeAmount.value == "") {
        document.getElementById("airtimeNumMsg").innerText = "The field is require";
        document.getElementById("airtimeAmtMsg").innerText="The field is require"
    }
    else{
        if (airtimeNumber.value == "") {
            document.getElementById("airtimeNumMsg").innerText = "Fill this field correctly";
        }
        if (airtimeAmount.value == "") {
            document.getElementById("airtimeAmtMsg").innerText="Fill this field correctly";
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
        localStorage.setItem("isPinAirtimeNumCorrect",false)
    }if(pinNum.length<4 || pinNum.length>4){
        document.querySelector(".pin").classList.add("is-invalid")
        document.getElementById("pinMsg").innerText="Enter valid pin."
        localStorage.setItem("isPinAirtimeNumCorrect",false)
    }
    if (pinNum == getCurrentUserPin) {
        document.querySelector(".pin").classList.remove("is-invalid")
        document.querySelector(".pin").classList.add("is-valid")
        document.getElementById("pinMsg").innerText=""
        localStorage.setItem("isPinAirtimeNumCorrect",true)
    }
}

const proceed=()=>{
    localStorage.setItem("airtimeAmount",airtimeAmount.value)
    let getAirtimeAmount=JSON.parse(localStorage.getItem("airtimeAmount"))
    let checkPinNum=JSON.parse(localStorage.getItem("isPinAirtimeNumCorrect"))
    if (checkPinNum == true) {
        getCurrentUserDetails.userBalance = parseInt(getCurrentUserDetails.userBalance) - parseInt(getAirtimeAmount)
        let d=new Date()
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let amPm=d.getHours()>=12?"pm":"am"
        let currentUserHistory={
          transactionType:"airtime",
          amount:getAirtimeAmount,
          date:`${months[d.getMonth()]} / ${d.getDate()} / ${d.getFullYear()}`,
          time:`${d.getHours()>12 ? d.getHours()-12:d.getHours()}:${d.getMinutes()}${amPm}`
        }
        getCurrentUserDetails.history.push(currentUserHistory)
        console.log( getCurrentUserDetails.userBalance);
        localStorage.setItem('allUser', JSON.stringify(getallUserDetails))
       window.location="Airtime Successful.html"
    }else if (pinNumber.value == "") {
        document.getElementById("pinMsg").innerText="The field is require"
    }
}