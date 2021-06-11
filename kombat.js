




var checkEmpty = () => { 

    let errorEmpty = document.querySelector('.error-empty')

    //Condition to check if 
    if((inputUsername.value && inputPassword.value) =='') {

        //Define action for if Username Or Password field is empty
        inputUsername.style.border = "1px solid red";
        inputPassword.style.border = "1px solid red";
        // errorEmpty.textContent = "Cannot stay empty"
        // errorEmpty.style = "font-size:16px; color:red"
    }
    
}