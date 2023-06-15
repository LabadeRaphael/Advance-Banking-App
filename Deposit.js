const backBtn=()=>{
    window.history.back()
}

localStorage.setItem("isDepositAmtCorrect",false)

const validateAmt=()=>{
    let depositAmt=depositAmount.value
    console.log(depositAmt);
    if (depositAmt<100) {
        document.querySelector(".deposit").classList.add("is-invalid") 
        document.getElementById("depositAmtMsg").innerHTML="Amount must be &#8358 100 and above"
        localStorage.setItem("isDepositAmtCorrect",false)

    }else{
        document.querySelector(".deposit").classList.remove("is-invalid") 
        document.querySelector(".deposit").classList.add("is-valid") 
        document.getElementById("depositAmtMsg").innerText=""
        localStorage.setItem("isDepositAmtCorrect",true)
    }
}

const initDeposit=()=>{
    let checkDepositAmount= localStorage.getItem("isDepositAmtCorrect")    
    console.log(checkDepositAmount);
    let depositAmt=depositAmount.value
    if (checkDepositAmount == "true") {
        localStorage.setItem("depositAmt",depositAmt)

        window.location="Payment option.html"
    }
    if (depositAmt == "") {
        document.querySelector(".deposit").classList.add("is-invalid") 
        document.getElementById("depositAmtMsg").innerText="Field is require"
    }
}