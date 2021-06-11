

let checkEmpty = () => { 
   let fullName = document.getElementById('fullname')
   let nationality = document.getElementById('nationality')
   let residence = document.getElementById('residence')
   let gender = document.getElementById('gender')
   let Age = document.getElementById('age')
   let Height = document.getElementById('height')
   let Weight = document.getElementById('weight')
   let fightSkill = document.getElementById('fightskill')
   let level = document.getElementById('levels')
   let passWord = document.getElementById('password1')
   let passWord1 = document.getElementById('password2')
    let errorEmpty = document.getElementById('error')
    let error1 = document.getElementById('error1')
    let error2 = document.getElementById('error2')
    let error3 = document.getElementById('error3')
    let error4 = document.getElementById('error4')
    let error5 = document.getElementById('error5')
    let error6 = document.getElementById('error6')
    let error7 = document.getElementById('error7')
    let error8 = document.getElementById('error8')
    let error9 = document.getElementById('error9')
    let error10 = document.getElementById('error10')



    //Condition to check if 
    if(fullName.value=='') {

        // //Define action for if Username Or Password field is empty
        errorEmpty.style = "color:red; font-size: 10px;"
        errorEmpty.innerHTML = "please fill in a name"
    }
    if(residence.value=='') {

        // //Define action for if Username Or Password field is empty
        error1.style = "color:red; font-size: 10px;"
        error1.innerHTML = "please fill in a residence"
    }
    if(nationality.value=='') {

        // //Define action for if Username Or Password field is empty
        error2.style = "color:red; font-size: 10px;"
        error2.innerHTML = "please fill in a nationality"
    }
    if(gender.value=='none') {

        // //Define action for if Username Or Password field is empty
        error3.style = "color:red; font-size: 10px;"
        error3.innerHTML = "please select gender"
    }
    if(Age.value=='') {

        // //Define action for if Username Or Password field is empty
        error4.style = "color:red; font-size: 10px;"
        error4.innerHTML = "please fill in a date of birth"
    }
    if(Height.value=='') {

        // //Define action for if Username Or Password field is empty
        error5.style = "color:red; font-size: 10px;"
        error5.innerHTML = "please fill in the height"
    }
    if(Weight.value=='') {

        // //Define action for if Username Or Password field is empty
        error6.style = "color:red; font-size: 10px;"
        error6.innerHTML = "please fill in the weight"
    }
    if(fightSkill.value=='none') {

        // //Define action for if Username Or Password field is empty
        error7.style = "color:red; font-size: 10px;"
        error7.innerHTML = "please select your skill"
    }
    if(level.value=='none') {

        // //Define action for if Username Or Password field is empty
        error8.style = "color:red; font-size: 10px;"
        error8.innerHTML = "please select your level "
    }
    if(passWord.value=='') {

        // //Define action for if Username Or Password field is empty
        error9.style = "color:red; font-size: 10px;"
        error9.innerHTML = "please enter a password"
    }
    if(passWord1.value=='') {

        // //Define action for if Username Or Password field is empty
        error10.style = "color:red; font-size: 10px;"
        error10.innerHTML = "please confirm your password"
    }











}