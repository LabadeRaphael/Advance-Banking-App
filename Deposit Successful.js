let getAmount=JSON.parse(localStorage.getItem('depositAmt'));
document.getElementById("depositAmount").innerText =`${getAmount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`