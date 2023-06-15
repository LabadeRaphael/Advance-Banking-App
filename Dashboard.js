let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)
let getCurrentUserHistory=getCurrentUserDetails.history
let currentUserImage=getCurrentUserDetails.userImage
console.log(getallUserDetails);
console.log(getCurrentUserDetails);

document.getElementById('displayImage').addEventListener('click', function () {
    // Trigger the file input click event
    document.getElementById('fileInput').click();
});
  
  // Add event listener to the file input
document.getElementById('fileInput').addEventListener('change', (event)=> {
    var file = event.target.files[0];
    
    // Create a FileReader object
    var reader = new FileReader();
  
    // Define the onload event handler
    reader.onload = function() {
        var imageData = reader.result;
        if (!file.type.startsWith('image/')) {
            alert('The selected file is not an image.');
            displayImage.src = "account.png"
        }else{
            localStorage.setItem("userAccountImage",imageData);
            localStorage.setItem('allUser', JSON.stringify(getallUserDetails))
            let getCurrentUserImage=localStorage.getItem("userAccountImage");
            console.log(imageData);
            console.log(getCurrentUserDetails.userImage)
            console.log(currentUserImage);
            currentUserImage.push(getCurrentUserImage)
            displayImage.src= getCurrentUserImage
        }
    };
    // Read the file as Data URL (base64 format)
    reader.readAsDataURL(file);
});















// let getallUserDetails=JSON.parse(localStorage.getItem("currentUserEmail")
const dashboard=()=>{
    document.getElementById("currentUserName").innerText =`${getCurrentUserDetails.userName}`
    document.getElementById("balanceNum").innerText =`${getCurrentUserDetails.userBalance.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`
    document.getElementById("accountNum").innerText =`${getCurrentUserDetails.accountNumber}`
    document.getElementById("bvnNum").innerText =`${getCurrentUserDetails.bvn}`
    document.getElementById("cardCurrentUserName").innerText =`${getCurrentUserDetails.userName}`
    getCurrentUserHistory.map((item,index)=>{
        if (item.transactionType == "deposit") {
            document.getElementById("transactionTable").innerHTML+=`
            <td class="text-light">${index+1}</td>
            <td class="text-light">${item.date}</td>
            <td class="text-light">${item.time}</td>
            <td class="text-light">${item.transactionType}</td>
            `
        }
        if (item.transactionType == "money transfer") {
            document.getElementById("transactionTable").innerHTML+=`
            <td class="text-light">${index}</td>
            <td class="text-light">${item.date}</td>
            <td class="text-light">${item.time}</td>
            <td class="text-light">${item.transactionType}</td>
            `
        }
    })
    let getCurrentUserImage=localStorage.getItem("userAccountImage");

    if (currentUserImage.length==0) {
        displayImage.src="account.png"
    }else{
        displayImage.src= getCurrentUserImage

    }
}

