let getAirtimeAmount=JSON.parse(localStorage.getItem('airtimeAmount'));
let getAirtimeName=localStorage.getItem('airtimeName')
document.getElementById("airtimeAmount").innerText =`${getAirtimeAmount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`
document.getElementById("airtimeName").innerText =`${getAirtimeName}`