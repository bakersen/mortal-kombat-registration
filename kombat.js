

// let checkEmpty = () => {
//     let fullName = document.getElementById('fullname')
//     let nationality = document.getElementById('nationality')
//     let residence = document.getElementById('residence')
//     let gender = document.getElementById('gender')
//     let Age = document.getElementById('age')
//     let Height = document.getElementById('height')
//     let Weight = document.getElementById('weight')
//     let fightSkill = document.getElementById('fightskill')
//     let level = document.getElementById('levels')
//     let passWord = document.getElementById('password1')
//     let passWord1 = document.getElementById('password2')
//     let errorEmpty = document.getElementById('error')
//     let error1 = document.getElementById('error1')
//     let error2 = document.getElementById('error2')
//     let error3 = document.getElementById('error3')
//     let error4 = document.getElementById('error4')
//     let error5 = document.getElementById('error5')
//     let error6 = document.getElementById('error6')
//     let error7 = document.getElementById('error7')
//     let error8 = document.getElementById('error8')
//     let error9 = document.getElementById('error9')
//     let error10 = document.getElementById('error10')
   
    



//         //Condition to check if 
//         if (fullName.value == '') {

//             // //Define action for if Username Or Password field is empty
//             errorEmpty.style = "color:red; font-size: 10px;"
//             errorEmpty.innerHTML = "please fill in a name"
//         }
//         if (residence.value == '') {

//             // //Define action for if Username Or Password field is empty
//             error1.style = "color:red; font-size: 10px;"
//             error1.innerHTML = "please fill in a residence"
//         }
//         if (nationality.value == '') {

//             // //Define action for if Username Or Password field is empty
//             error2.style = "color:red; font-size: 10px;"
//             error2.innerHTML = "please fill in a nationality"
//         }
//         if (gender.value == 'none') {

//             // //Define action for if Username Or Password field is empty
//             error3.style = "color:red; font-size: 10px;"
//             error3.innerHTML = "please select gender"
//         }
//         if (Age.value == '') {

//             // //Define action for if Username Or Password field is empty
//             error4.style = "color:red; font-size: 10px;"
//             error4.innerHTML = "please fill in a date of birth"
//         }
//         if (Height.value == '') {

//             // //Define action for if Username Or Password field is empty
//             error5.style = "color:red; font-size: 10px;"
//             error5.innerHTML = "please fill in the height"
//         }
//         if (Weight.value == '') {

//             // //Define action for if Username Or Password field is empty
//             error6.style = "color:red; font-size: 10px;"
//             error6.innerHTML = "please fill in the weight"
//         }
//         if (fightSkill.value == 'none') {

//             // //Define action for if Username Or Password field is empty
//             error7.style = "color:red; font-size: 10px;"
//             error7.innerHTML = "please select your skill"
//         }
//         if (level.value == 'none') {

//             // //Define action for if Username Or Password field is empty
//             error8.style = "color:red; font-size: 10px;"
//             error8.innerHTML = "please select your level "
//         }
//         if (passWord.value = '') {

//             // //Define action for if Username Or Password field is empty
//             error9.style = "color:red; font-size: 10px;"
//             error9.innerHTML = "please enter a password"
//         }
//         if (passWord1.value == '') {

//             // //Define action for if Username Or Password field is empty
//             error10.style = "color:red; font-size: 10px;"
//             error10.innerHTML = "please confirm your password"
//         }

//         // if (passWord.value != passWord1.value) {
//         //     alert('passwords dont match')
//         // }
//     }
//In the kombat.js file, you’ll first use the document.querySelector() method to select the input fields and the form:

var usernameEl = document.querySelector('#username');
// var emailEl = document.querySelector('#email');
var passwordEl = document.querySelector('#password');
var confirmPasswordEl = document.querySelector('#confirm-password');
// var genderEl = document.querySelector('#gender');

var ageEl = document.querySelector('#age');
var residenceEl = document.querySelector('#residence')
var nationalityEl = document.querySelector('#nationality')
var weightEl = document.querySelector('#weight')
var heightEl = document.querySelector('#height')
// var levelEl = document.querySelector('#levels');
// var fightskillEl = document.querySelector('#fightskill');

var form = document.querySelector('#registration')

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

});

//The following isRequired() function returns true if the input argument is empty:
var isRequired = value => value === '' ? false : true;
//The following isBetween() function returns false if the length argumet is not between the min and max argument:
var isBetween = (length, min, max) => length < min || length > max ? false : true;

// //To check the email is valid, you’ll use a regular expression:
// var isEmailValid = (email) => {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// };

//To check if a password is strong, which match specified pattern, you’ll also use a regular expression:
var isPasswordSecure = (password) => {
    var re = new RegExp("(?=.*[!@#\$%\^&\*])(?=.{8,})"); // this regex wil require the password to have atleast 8 characters and one special character
    return re.test(password);
};
//Develop functions that show the error / success
var showError = (input, message) => {
    // get the form-field element
    var formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    var error = formField.querySelector('small');
    error.textContent = message;
};
var showSuccess = (input) => {
    // get the form-field element
    var formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    var error = formField.querySelector('small');
    error.textContent = '';
}
//Validate the username field
var checkUsername = () => {

    let valid = false;
    var min = 3,
        max = 25;
    var username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, '*Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `*Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}
//Validate the email field
// var checkEmail = () => {
//     let valid = false;
//     var email = emailEl.value.trim();
//     if (!isRequired(email)) {
//         showError(emailEl, 'Email cannot be blank.');
//     } else if (!isEmailValid(email)) {
//         showError(emailEl, 'Email is not valid.')
//     } else {
//         showSuccess(emailEl);
//         valid = true;
//     }
//     return valid;
// }

//Validate the password field
var checkPassword = () => {
    let valid = false;
    var password = passwordEl.value.trim();
    if (!isRequired(password)) {
        showError(passwordEl, '*Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, '*Password must has at least 8 characters that include at least 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};
//Validate the confirm password field
var checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    var confirmPassword = confirmPasswordEl.value.trim();
    var password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, '*Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, '*Confirm password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};
//Validate the residence field
var checkResidence = () => {
    let valid = false;
    var residence = residenceEl.value.trim();
    if (!isRequired(residence)) {
        showError(residenceEl, '*Residence cannot be blank.');
    } else {
        showSuccess(residenceEl);
        valid = true;
    }
    return valid;
};
// // //Validate the nationality field
var checkNationality = () => {
    let valid = false;
    var nationality = nationalityEl.value.trim();
    if (!isRequired(nationality)) {
        showError(nationalityEl, '*Nationality cannot be blank.');
    } else {
        showSuccess(nationalityEl);
        valid = true;
    }

    return valid;
};
//Validate the date of birth field
var checkAge = () => {
    let valid = false;
    var age = ageEl.value.trim();
    if (!isRequired(age)) {
        showError(ageEl, '*Date model cannot be blank.');
    } else {
        showSuccess(ageEl);
        valid = true;
    }

    return valid;
};

var checkHeight = () => {
    let valid = false;
    var height = heightEl.value.trim();
    if (!isRequired(height)) {
        showError(heightEl, '*Height cannot be blank.');
    } else {
        showSuccess(heightEl);
        valid = true;
    }

    return valid;
};
var checkWeight = () => {
    let valid = false;
    var weight = weightEl.value.trim();
    if (!isRequired(weight)) {
        showError(weightEl, '*Weight cannot be blank.');
    } else {
        showSuccess(weightEl);
        valid = true;
    }

    return valid;
};

// var checkFightSkill = () => {
//     let valid = false;
//     var fightSkill = fightskillEl.value.trim();
//     if (!isRequired(fightSkill)) {
//         showError(fightskillEl, '*Fight skill cannot be unselected.');
//     } else {
//         showSuccess(fightskillEl);
//         valid = true;
//     }

//     return valid;
// };
// var checkGender = () => {
//     let valid = false;
//     var gender = genderEl.value.trim();
//     if (!isRequired(gender)) {
//         showError(genderEl, '*Gender skill cannot be unselected.');
//     } else {
//         showSuccess(genderEl);
//         valid = true;
//     }

//     return valid;
// };
// var checkLevel = () => {
//     let valid = false;
//     var levels = levelEl.value.trim();
//     if (!isRequired(levels)) {
//         showError(levelEl, '*Level cannot be unselected.');
//     } else {
//         showSuccess(levelEl);
//         valid = true;
//     }

//     return valid;
// };


//modify button event handler
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkUsername(),
        isPasswordValid = checkPassword(),
        isResidenceValid = checkResidence(),
        isNationalityValid = checkNationality(),
        isAgeValid = checkAge(),
        isHeightValid = checkHeight(),
        isWeightValid = checkWeight(),
        // isGenderValid = checkGender(),
        // isFightSkillValid = checkFightSkill(),
        // isLevelValid = checkLevel(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isPasswordValid &&
        isResidenceValid &&
        isHeightValid &&
        isWeightValid &&
        // isGenderValid &&
        isAgeValid &&
        // isFightSkillValid &&
        isNationalityValid &&
        // isLevelValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});





