let getTransferAmount=JSON.parse(localStorage.getItem('transferAmount'));
document.getElementById("transferAmount").innerText =`${getTransferAmount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`
