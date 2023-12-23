// Function to validate
function validateForm() {
    resetStyles();
    const nameInput = document.getElementById("name");
    const lastInput = document.getElementById("last");
    const mobileInput = document.getElementById("mobile");
    const passwordInput = document.getElementById("password");

    // First Name Validate
    if (!validateName(nameInput.value)) {
        alertAndFocus(nameInput, "Name must have 3 to 6 alphabets");
        return;
    }

    // Last Name Validate
    if (!validateName(lastInput.value)) {
        alertAndFocus(lastInput, "Name must have 3 to 6 alphabets");
        return;
    }

    // Mobile Validate
    if (!validateMobile(mobileInput.value)) {
        alertAndFocus(mobileInput, "Mobile must have 10 digits");
        return;
    }

    // Password Validate
    if (!validateName(passwordInput.value)) {
        alertAndFocus(passwordInput, "password");
        return;
    }

    // If all validations true, submit the form
    alert("Form submitted successfully!");
}

// Function to validate Name
function validateName(name) {
    const nameRegex = /^[a-zA-Z]{3,6}$/;
    return nameRegex.test(name);
}

// Function to validate Mobile
function validateMobile(mobile) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}

// Function to show alert
function alertAndFocus(inputField, message) {
    alert(message);
    inputField.focus();
    inputField.style.border = "2px solid red";
}

// Function to reset style
function resetStyles() {
    const inputFields = document.getElementsByClassName("inputField");
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].style.border = "";
    }
}
