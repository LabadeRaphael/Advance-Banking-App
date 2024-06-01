let getallUserDetails=JSON.parse(localStorage.getItem("allUser"))
let currentUserEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let getCurrentUserDetails=getallUserDetails.find(item=>item.userEmail == currentUserEmail)
let getCurrentUserHistory=getCurrentUserDetails.history
let currentUserImage=getCurrentUserDetails.userImage
console.log(getallUserDetails);
console.log(getCurrentUserDetails);

const dashboard=()=>{
    document.getElementById("currentUserName").innerText =`${getCurrentUserDetails.userName}`
    document.getElementById("balanceNum").innerText =`${getCurrentUserDetails.userBalance.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}`
    document.getElementById("accountNum").innerText =`${getCurrentUserDetails.accountNumber}`
    document.getElementById("bvnNum").innerText =`${getCurrentUserDetails.bvn}`
    document.getElementById("cardCurrentUserName").innerText =`${getCurrentUserDetails.userName}`
    localStorage.setItem("currentUserBalance", getCurrentUserDetails.userBalance)
    localStorage.setItem("currentUserAccount", getCurrentUserDetails.accountNumber)
    localStorage.setItem("currentUserBvn", getCurrentUserDetails.bvn)

    getCurrentUserHistory.map((item,index)=>{
        if (item.transactionType == "deposit with card") {
            document.getElementById("transactionTable").innerHTML+=`
            <td class="text-light">${index+1}</td>
            <td class="text-light">${item.date}</td>
            <td class="text-light">${item.time}</td>
            <td class="text-light">&#8358 ${item.amount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}</td>
            <td class="text-light">${item.transactionType}</td>
            `
        }
        if (item.transactionType == "deposit with bank") {
            document.getElementById("transactionTable").innerHTML+=`
            <td class="text-light">${index+1}</td>
            <td class="text-light">${item.date}</td>
            <td class="text-light">${item.time}</td>
            <td class="text-light">&#8358 ${item.amount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}</td>
            <td class="text-light">${item.transactionType}</td>
            `
        }
        if (item.transactionType == "money transfer") {
            document.getElementById("transactionTable").innerHTML+=`
            <td class="text-light">${index+1}</td>
            <td class="text-light">${item.date}</td>
            <td class="text-light">${item.time}</td>
            <td class="text-light">&#8358 ${item.amount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}</td>
            <td class="text-light">${item.transactionType}</td>
            `
        }
        if (item.transactionType == "airtime") {
            document.getElementById("transactionTable").innerHTML+=`
            <td class="text-light">${index+1}</td>
            <td class="text-light">${item.date}</td>
            <td class="text-light">${item.time}</td>
            <td class="text-light">&#8358 ${item.amount.toLocaleString("en-US", {style:"currency",currency:"USD"}).slice(1)}</td>
            <td class="text-light">${item.transactionType}</td>
            `
        }
    })
    let getCurrentUserImage = getCurrentUserDetails.userImage
    let getImageType = localStorage.getItem('isImageCorrect')
    if (getImageType == "false") {
        displayImage.src="account.png"
        localStorage.setItem("userAccountImage", "account.png");

    }else{
        getCurrentUserImage.filter((item)=>{
            let getLastIndex = getCurrentUserImage.lastIndexOf(item)
            displayImage.src=getCurrentUserImage[getLastIndex]
        })
    }
}
let getCurrentUserImage = getCurrentUserDetails.userImage

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
            getCurrentUserImage.filter((item)=>{
                let getLastIndex = getCurrentUserImage.lastIndexOf(item)
                displayImage.src=getCurrentUserImage[getLastIndex]
            })
            // displayImage.src = "account.png"
            localStorage.setItem("isImageCorrect",false);
        }else{
            // let getCurrentUserImage=localStorage.getItem("userAccountImage");
            if (currentUserImage.length==null) {
                displayImage.src="acccount.png"
            }
            else{
                localStorage.setItem("isImageCorrect",true);
                localStorage.setItem("userAccountImage",imageData);
                let getcurrentUserImage=localStorage.getItem("userAccountImage");
                currentUserImage.push(getcurrentUserImage)
                localStorage.setItem('allUser', JSON.stringify(getallUserDetails))
                getCurrentUserImage.filter((item)=>{
                    let getLastIndex = getCurrentUserImage.lastIndexOf(item)
                    displayImage.src=getCurrentUserImage[getLastIndex]
                })
            }
        }
    };
    // Read the file as Data URL (base64 format)
    reader.readAsDataURL(file);
});

