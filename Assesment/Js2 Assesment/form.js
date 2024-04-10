function validateForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var adress = document.getElementById('adress').value;
    var password = document.getElementById('password').value;

    var namecheck = /^[A-Za-z. ]{3,15}$/;
    var emailcheck = /^[a-z@.]{3,15}$/;
    var mobilecheck = /^[0-9]{10}$/;
    var adresscheck = /^[A-Za-z. ]{15,30}$/;
    var passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 

    // name validation
    if(namecheck.test(name)){
        document.getElementById('nameerror').innerHTML = " ";
    }
    else{
        document.getElementById('nameerror').innerHTML = "** Name must have 3 to 6 alphabets";
        return false;
    }

    // email validation
    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }
    else{
        document.getElementById('emailerror').innerHTML = "** enter correct email";
        return false;
    }

    // mobile validation
    if(mobilecheck.test(mobile)){
        document.getElementById('mobileerror').innerHTML = " ";
    }
    else{
        document.getElementById('mobileerror').innerHTML = "** Mobile must have 10 digits";
        return false;
    }

    // adress validation
    if(adresscheck.test(adress)){
        document.getElementById('adresserror').innerHTML = " ";
    }
    else{
        document.getElementById('adresserror').innerHTML = "** adress must have 15 to 30 alphabets";
        return false;
    }

    // pssword validation
    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML = " ";
    }
    else{
        document.getElementById('passworderror').innerHTML = "** enter correct password";
        return false;
    }
}