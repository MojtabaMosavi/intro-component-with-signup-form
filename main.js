function formValidation(){
    let form = document.getElementById('form');
    let firstname = document.getElementById('firstname').value;
    let firstnameText = document.getElementById('firstname-text');
    let lastname = document.getElementById('lastname').value;
    let lastnameText = document.getElementById('lastname-text');
    let email = document.getElementById('email').value;
    let emailText = document.getElementById('email-text');
    let password = document.getElementById('password').value;
    let passwordText = document.getElementById('password-text');
    // validating the first name input box 
    if(firstname.length > 0){
        form.classList.add('Valid');
        form.classList.remove('invalid');
        firstnameText.innerHTML = ""
        document.getElementById("firstname").style.background = "none";
        document.getElementById("firstname").style.border = "1px solid hsl(246, 25%, 77%)"


    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid")
        document.getElementById("firstname").style.background = "url('images/icon-error.svg') no-repeat 95%";
        document.getElementById('firstname').style.margin = "1.5em auto 0 auto";
        document.getElementById("firstname").style.border = "1px solid hsl(0, 100%, 74%)"
        firstnameText.innerHTML = "First Name cannot be empty."
    }

    // validating the last name input box 
    if(lastname.length > 0){
        form.classList.add('Valid');
        form.classList.remove('invalid');
        lastnameText.innerHTML = ""
        document.getElementById("lastname").style.background = "none";
        document.getElementById("lastname").style.border = "1px solid hsl(246, 25%, 77%)"


    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid")
        document.getElementById("lastname").style.background = "url('images/icon-error.svg') no-repeat 95%";
        document.getElementById('lastname').style.margin = "1.5em auto 0 auto";
        document.getElementById("lastname").style.border = "1px solid hsl(0, 100%, 74%)"
        lastnameText.innerHTML = "Last Name cannot be empty."
    }

    // validating the email input box  
    if(email.length > 0){
    form.classList.add('Valid');
    form.classList.remove('invalid');
    emailText.innerHTML = ""
    document.getElementById("email").style.background = "none";
    document.getElementById("email").style.border = "1px solid hsl(246, 25%, 77%)"


    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid")
        document.getElementById("email").style.background = "url('images/icon-error.svg') no-repeat 95%";
        document.getElementById('email').style.margin = "1.5em auto 0 auto";
        document.getElementById("email").style.border = "1px solid hsl(0, 100%, 74%)"
        emailText.innerHTML = "Last Name cannot be empty."
    }
    if(password.length > 0){
        form.classList.add('Valid');
        form.classList.remove('invalid');
        passwordText.innerHTML = ""
        document.getElementById("password").style.background = "none";
        document.getElementById("password").style.border = "1px solid hsl(246, 25%, 77%)"
    
    
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid")
        document.getElementById("password").style.background = "url('images/icon-error.svg') no-repeat 95%";
        document.getElementById('password').style.margin = "1.5em auto 0 auto";
        document.getElementById("password").style.border = "1px solid hsl(0, 100%, 74%)"
        passwordText.innerHTML = "Last Name cannot be empty."
    }

}