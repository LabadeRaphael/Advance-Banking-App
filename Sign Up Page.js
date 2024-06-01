const backBtn = () => {
  window.history.back();
};
let allUserArray = [];
if (localStorage.allUser) {
  allUserArray = JSON.parse(localStorage.getItem("allUser"));
} else {
  allUserArray = [];
}
localStorage.setItem("isNameCorrect", false);
localStorage.setItem("isPhoneNumCorrect", false);
localStorage.setItem("isEmailCorrect", false);
localStorage.setItem("isPasswordCorrect", false);
localStorage.setItem("isConfirmPasswordCorrect", false);
localStorage.setItem("isPinNumCorrect", false);

const signUp = () => {
  let checkName = localStorage.getItem("isNameCorrect");
  let checkNum = localStorage.getItem("isPhoneNumCorrect");
  let checkEmail = localStorage.getItem("isEmailCorrect");
  let checkPassword = localStorage.getItem("isPasswordCorrect");
  let checkConfirmPassword = localStorage.getItem("isConfirmPasswordCorrect");
  let checkPinNum = localStorage.getItem("isPinNumCorrect");
  let eachUserDetails = {
    userName: Name.value,
    userNumber: PhoneNum.value,
    userEmail: Email.value,
    userPassword: Password.value,
    userConfirmPassword: ConfirmPassword.value,
    userBalance: 0,
    accountNumber: Math.floor(Math.random() * 11111111111),
    bvn: Math.floor(Math.random() * 111111111111),
    history: [],
    pinNum: pinNumber.value,
    userImage: [],
  };
  if (
    checkName == "true" &&
    checkNum == "true" &&
    checkEmail == "true" &&
    checkPassword == "true" &&
    checkConfirmPassword == "true" &&
    checkPinNum == "true"
  ) {
    allUserArray.push(eachUserDetails);
    console.log(allUserArray);
    document.getElementById(
      "signUpSuccessful"
    ).innerHTML = `<div class='alert alert-info col-lg-6 mx-auto d-block text-center fw-bold'> Sign Up Successful</div>`;
    localStorage.setItem("allUser", JSON.stringify(allUserArray));
    window.location = "Sign In Page.html";
    Name.value = "";
    PhoneNum.value = "";
    Email.value = "";
  } else if (
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
  } else {
    if (Name.value == "") {
      document.getElementById("nameMsg").innerText =
        "Fill this field  correctly";
    }
    if (PhoneNum.value == "") {
      document.getElementById("phoneMsg").innerText =
        "Fill this field correctly";
    }
    if (Email.value == "") {
      document.getElementById("emailMsg").innerText =
        "Fill this field correctly";
    }
    if (Password.value == "") {
      document.getElementById("passwordMsg").innerText =
        "Fill this field correctly";
    }
    if (ConfirmPassword.value == "") {
      document.getElementById("confirmPasswordMsg").innerText =
        "Fill this field correctly";
    }
    if (pinNumber.value == "") {
      document.getElementById("pinMsg").innerText = "Fill this field correctly";
    }
  }
};
const validateName = () => {
  let currentUserName = Name.value;
  var hasNumber = /\d/;
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (hasNumber.test(currentUserName)) {
    document.querySelector(".Name").classList.add("is-invalid");
    document.getElementById("nameMsg").innerText = "Remove the number";
    localStorage.setItem("isNameCorrect", false);
  } else if (currentUserName == "") {
    document.querySelector(".Name").classList.add("is-invalid");
    localStorage.setItem("isNameCorrect", false);
  } else if (!regName.test(currentUserName)) {
    document.querySelector(".Name").classList.add("is-invalid");
    document.getElementById("nameMsg").innerText = "Enter your second name.";
    localStorage.setItem("isNameCorrect", false);
  } else {
    document.querySelector(".Name").classList.remove("is-invalid");
    document.querySelector(".Name").classList.add("is-valid");
    document.getElementById("nameMsg").innerText = " ";
    localStorage.setItem("isNameCorrect", true);
  }
};

const validatePhoneNumber = () => {
  let phone = PhoneNum.value;
  let validRegexNum =/^([0]{1,1})([7-9]{1,1})([0-1]{1,1})([\d]{8,8})$/ 
  if (phone.match(validRegexNum)) {
    document.querySelector(".Phone").classList.remove("is-invalid");
    document.querySelector(".Phone").classList.add("is-valid");
    document.getElementById("phoneMsg").innerText = "";
    localStorage.setItem("isPhoneNumCorrect", true);
  } else {
    document.querySelector(".Phone").classList.add("is-invalid");
    document.getElementById("phoneMsg").innerText = "Enter valid Number";
    localStorage.setItem("isPhoneNumCorrect", false);
  }

  // if (phone.length > 11 || phone.length < 11) {
  //   document.querySelector(".Phone").classList.add("is-invalid");
  //   document.getElementById("phoneMsg").innerText = "Enter valid Number";
  //   localStorage.setItem("isPhoneNumCorrect", false);
  // } else {
  //   document.querySelector(".Phone").classList.remove("is-invalid");
  //   document.querySelector(".Phone").classList.add("is-valid");
  //   document.getElementById("phoneMsg").innerText = "";
  //   localStorage.setItem("isPhoneNumCorrect", true);
  // }
};

const validateEmail = () => {
  let email = Email.value;
  let validRegexEmail=/^([\w]+)([@])([\w]+)([\.])([\w]+)([\.][\w]+)?$/
  if (email.match(validRegexEmail)) {
    document.querySelector(".email").classList.remove("is-invalid");
    document.getElementById("emailMsg").innerText = "";
    document.querySelector(".email").classList.add("is-valid");
    localStorage.setItem("isEmailCorrect", true);
  } else {
    document.querySelector(".email").classList.add("is-invalid");
    document.getElementById("emailMsg").innerText = "Enter valid email";
    localStorage.setItem("isEmailCorrect", false);
  }
};

const validatePasword = () => {
  document.querySelector(".Password").classList.add("is-invalid");
  let password = Password.value;
  if (password != "") {
    document.getElementById("confirmPasswordMsg").innerText =
      "Must tally with password.";
  }
  if (password.length < 8) {
    document.getElementById("passwordMsg").innerText =
      "Password must be at least 8 characters";
    localStorage.setItem("isPasswordCorrect", false);
  } else if (password.search(/[a-z]/) < 0) {
    document.getElementById("passwordMsg").innerText =
      "Password must contain at least one lowercase letter";
    localStorage.setItem("isPasswordCorrect", false);
  } else if (password.search(/[A-Z]/) < 0) {
    document.getElementById("passwordMsg").innerText =
      "Password must contain at least one uppercase letter";
    localStorage.setItem("isPasswordCorrect", false);
  } else if (password.search(/[0-9]/) < 0) {
    document.getElementById("passwordMsg").innerText =
      "Password must contain at least one number";
    localStorage.setItem("isPasswordCorrect", false);
  } else {
    document.querySelector(".Password").classList.remove("is-invalid");
    document.querySelector(".Password").classList.add("is-valid");
    document.getElementById("passwordMsg").innerText = "";
    localStorage.setItem("isPasswordCorrect", true);
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
      localStorage.setItem("isConfirmPasswordCorrect", false);
    } else {
      document.querySelector(".ConfirmPassword").classList.remove("is-invalid");
      document.querySelector(".ConfirmPassword").classList.add("is-valid");
      document.getElementById("confirmPasswordMsg").innerText = "";
      localStorage.setItem("isConfirmPasswordCorrect", true);
    }
  }
};

const validatePinNum = () => {
  let pinNum = pinNumber.value;
let validRegexNum=/^([0-9]{4,4})$/ 
  if (pinNum.match(validRegexNum)) {
    document.querySelector(".pin").classList.remove("is-invalid");
    document.querySelector(".pin").classList.add("is-valid");
    document.getElementById("pinMsg").innerText = "";
    localStorage.setItem("isPinNumCorrect", true);
  }
  else{
    document.querySelector(".pin").classList.add("is-invalid");
    document.getElementById("pinMsg").innerText = "Enter 4 digits number.";
    localStorage.setItem("isPinNumCorrect", false);
  }
};
