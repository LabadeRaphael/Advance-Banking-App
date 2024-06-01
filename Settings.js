const backBtn = () => {
  window.history.back();
};
let getallUserDetails = JSON.parse(localStorage.getItem("allUser"));
let currentUserEmail = JSON.parse(localStorage.getItem("currentUserEmail"));
let getCurrentUserDetails = getallUserDetails.find(
  (item) => item.userEmail == currentUserEmail
);
getCurrentUserIndex = getallUserDetails.findIndex(
  (item) => item.userEmail == currentUserEmail
);
console.log(getCurrentUserIndex);
let currentUserImage = getCurrentUserDetails.userImage;

console.log(getCurrentUserDetails);
console.log(getallUserDetails);

const loadDetails = () => {
  if (currentUserImage.length==null) {
    displayImage.src="account.png"
  } else {
    currentUserImage.filter((item)=>{
      let getLastIndex =  currentUserImage.lastIndexOf(item)
      displayImage.src= currentUserImage[getLastIndex]
    })
  }

  Name.value = getCurrentUserDetails.userName;
  PhoneNum.value = getCurrentUserDetails.userNumber;
  Email.value = getCurrentUserDetails.userEmail;
  Password.value = getCurrentUserDetails.userPassword;
  ConfirmPassword.value = getCurrentUserDetails.userConfirmPassword;
  pinNumber.value = getCurrentUserDetails.pinNum;
  document.querySelector(".Name").classList.add("is-valid");
  document.querySelector(".Phone").classList.add("is-valid");
  document.querySelector(".email").classList.add("is-valid");
  document.querySelector(".Password").classList.add("is-valid");
  document.querySelector(".ConfirmPassword").classList.add("is-valid");
  document.querySelector(".pin").classList.add("is-valid");
};

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
          currentUserImage.filter((item)=>{
              let getLastIndex = currentUserImage.lastIndexOf(item)
              displayImage.src=currentUserImage[getLastIndex]
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
              currentUserImage.filter((item)=>{
                  let getLastIndex = currentUserImage.lastIndexOf(item)
                  displayImage.src=currentUserImage[getLastIndex]
              })
          }
      }
  };
  // Read the file as Data URL (base64 format)
  reader.readAsDataURL(file);
});




const initReset = () => {
  let checkName = localStorage.getItem("isSettingNameCorrect");
  let checkNum = localStorage.getItem("isSettingPhoneCorrect");
  let checkEmail = localStorage.getItem("isSettingEmailCorrect");
  let checkPassword = localStorage.getItem("isSettingPasswordCorrect");
  let checkConfirmPassword = localStorage.getItem("isSettingConfirmPasswordCorrect");
  let checkPinNum = localStorage.getItem("isSettinPinNumCorrect");
  let getCurrentUserBalance = localStorage.getItem("currentUserBalance");
  let getCurrentUserAccount = localStorage.getItem("currentUserAccount");
  let getCurrentUserBvn = localStorage.getItem("currentUserBvn");
  let getCurrentUserHistory = getCurrentUserDetails.history;
  let getCurrentUserImage = getCurrentUserDetails.userImage;
  let resetCurrentUserDetails = {
    userName: Name.value,
    userNumber: PhoneNum.value,
    userEmail: Email.value,
    userPassword: Password.value,
    userConfirmPassword: ConfirmPassword.value,
    pinNum: pinNumber.value,
    userBalance: parseInt(getCurrentUserBalance),
    accountNumber: getCurrentUserAccount,
    bvn: getCurrentUserBvn,
    history: getCurrentUserHistory,
    userImage: getCurrentUserImage,
  };
  if (
    checkName == "true" &&
    checkNum == "true" &&
    checkEmail == "true" &&
    checkPassword == "true" &&
    checkConfirmPassword == "true" &&
    checkPinNum == "true"
  ) {
    localStorage.setItem(
      "currentUserEmail",
      JSON.stringify(resetCurrentUserDetails.userEmail)
    );
   
    getallUserDetails[getCurrentUserIndex]=resetCurrentUserDetails
    

    localStorage.setItem("allUser", JSON.stringify(getallUserDetails));
    window.location="Dashboard.html"
    document.getElementById(
      "resetSuccessful"
    ).innerHTML = `<div class='alert alert-info col-lg-6 mx-auto d-block text-center fw-bold'>Reset Successful</div>`;
  }
  if (
    Name.value == "" &&
    PhoneNum.value == "" &&
    Email.value == "" &&
    Password.value == "" &&
    ConfirmPassword.value == "" &&
    pinNumber.value == ""
  ) {
    document.getElementById("nameMsg").innerText = "The field is require";
    document.getElementById("phoneMsg").innerText = "The field is require";
    document.getElementById("emailMsg").innerText = "The field is require";
    document.getElementById("passwordMsg").innerText = "The field is require";
    document.getElementById("confirmPasswordMsg").innerText =
      "The field is require";
    document.getElementById("pinMsg").innerText = "The field is require";
  }
  if (Name.value == "") {
    document.getElementById("nameMsg").innerText = "Fill the blank space";
  }
  if (PhoneNum.value == "") {
    document.getElementById("phoneMsg").innerText = "Fill the blank space";
  }
  if (Email.value == "") {
    document.getElementById("emailMsg").innerText = "Fill the blank space";
  }
  if (Password.value == "") {
    document.getElementById("passwordMsg").innerText = "Fill the blank space";
  }
  if (ConfirmPassword.value == "") {
    document.getElementById("confirmPasswordMsg").innerText =
      "Fill the blank space";
  }
  if (pinNumber.value == "") {
    document.getElementById("pinMsg").innerText = "Fill the blank space";
  }
};
const validateName = () => {
  let currentUserName = Name.value;
  var hasNumber = /\d/;
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (hasNumber.test(currentUserName)) {
    document.querySelector(".Name").classList.add("is-invalid");
    document.getElementById("nameMsg").innerText = "Remove the number";
    localStorage.setItem("isSettingNameCorrect", false);
  } else if (currentUserName == "") {
    document.querySelector(".Name").classList.add("is-invalid");
    localStorage.setItem("isSettingNameCorrect", false);
  } else if (!regName.test(currentUserName)) {
    document.querySelector(".Name").classList.add("is-invalid");
    document.getElementById("nameMsg").innerText = "Enter your second name.";
    localStorage.setItem("isSettingNameCorrect", false);
  } else {
    document.querySelector(".Name").classList.remove("is-invalid");
    document.querySelector(".Name").classList.add("is-valid");
    document.getElementById("nameMsg").innerText = " ";
    localStorage.setItem("isSettingNameCorrect", true);
  }
};

const validatePhoneNumber = () => {
  let phone = PhoneNum.value;

  let validRegexNum =/^([0]{1,1})([7-9]{1,1})([0-1]{1,1})([\d]{8,8})$/ 
  if (phone.match(validRegexNum)) {
    document.querySelector(".Phone").classList.remove("is-invalid");
    document.querySelector(".Phone").classList.add("is-valid");
    document.getElementById("phoneMsg").innerText = "";
    localStorage.setItem("isSettingPhoneCorrect", true);
  } else {
    document.querySelector(".Phone").classList.add("is-invalid");
    document.getElementById("phoneMsg").innerText = "Enter valid Number";
    localStorage.setItem("isSettingPhoneCorrect", false);
  }

};

const validateEmail = () => {
  let email = Email.value;
  let validRegexEmail=/^([\w]+)([@])([\w]+)([\.])([\w]+)([\.][\w]+)?$/
  if (email.match(validRegexEmail)) {
    document.querySelector(".email").classList.remove("is-invalid");
    document.getElementById("emailMsg").innerText = "";
    document.querySelector(".email").classList.add("is-valid");
    localStorage.setItem("isSettingEmailCorrect", true);
  } else {
    document.querySelector(".email").classList.add("is-invalid");
    document.getElementById("emailMsg").innerText = "Enter valid email";
    localStorage.setItem("isSettingEmailCorrect", false);
  }
};

const validatePasword = () => {
  document.querySelector(".Password").classList.add("is-invalid");
  let password = Password.value;
  if (password != "") {
    document.getElementById("confirmPasswordMsg").innerText = "Must tally with password.";
  }
  if (password.length < 8) {
    document.getElementById("passwordMsg").innerText =
      "Password must be at least 8 characters";
    localStorage.setItem("isSettingPasswordCorrect", false);
  } else if (password.search(/[a-z]/) < 0) {
    document.getElementById("passwordMsg").innerText =
      "Password must contain at least one lowercase letter";
    localStorage.setItem("isSettingPasswordCorrect", false);
  } else if (password.search(/[A-Z]/) < 0) {
    document.getElementById("passwordMsg").innerText =
      "Password must contain at least one uppercase letter";
    localStorage.setItem("isSettingPasswordCorrect", false);
  } else if (password.search(/[0-9]/) < 0) {
    document.getElementById("passwordMsg").innerText =
      "Password must contain at least one number";
    localStorage.setItem("isSettingPasswordCorrect", false);
  } else {
    document.querySelector(".Password").classList.remove("is-invalid");
    document.querySelector(".Password").classList.add("is-valid");
    document.getElementById("passwordMsg").innerText = "";
    localStorage.setItem("isSettingPasswordCorrect", true);
  }
};

const validateConfirmPassword = () => {
if (Password.value == "") {
    document.getElementById("confirmPasswordMsg").innerText =
      "Firstly enter your password.";
  } else {
    if (Password.value != ConfirmPassword.value && Password.value != "") {
      document.querySelector(".ConfirmPassword").classList.add("is-invalid");
      document.getElementById("confirmPasswordMsg").innerText =
        "Must tally with password.";
      localStorage.setItem("isSettingConfirmPasswordCorrect", false);
    } else {
      document.querySelector(".ConfirmPassword").classList.remove("is-invalid");
      document.querySelector(".ConfirmPassword").classList.add("is-valid");
      document.getElementById("confirmPasswordMsg").innerText = "";
      localStorage.setItem("isSettingConfirmPasswordCorrect", true);
    }
  }
};

const validatePinNum = () => {
  let pinNum = pinNumber.value;
  if (pinNum.length > 4 || pinNum.length < 4) {
    document.querySelector(".pin").classList.add("is-invalid");
    document.getElementById("pinMsg").innerText = "Enter 4 digits number.";
    localStorage.setItem("isSettinPinNumCorrect", false);
  } else {
    document.querySelector(".pin").classList.remove("is-invalid");
    document.querySelector(".pin").classList.add("is-valid");
    document.getElementById("pinMsg").innerText = "";
    localStorage.setItem("isSettinPinNumCorrect", true);
  }
};

