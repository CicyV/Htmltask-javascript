function Checkname() {
    var IsName = /^[a-zA-Z\s]+$/;
    let nameinput = document.getElementById("full-name");
    if (nameinput.value.trim() === "") {
        setError(nameinput, "Enter full Name");
    } else if (!IsName.test(nameinput.value.trim())) {
        setError(nameinput, "Name cannot contain numbers or special characters");
    } else {
        setSuccess(nameinput);
    }
}

function CheckAddress() {
    let addressInput = document.getElementById("address");
    if (addressInput.value.trim() === "") {
        setError(addressInput, "Enter your address");
    } else {
        setSuccess(addressInput);
    }
}
function validateDOB() {
    var todayDate = new Date();
    var selectedDate = new Date(document.getElementById("date").value);
    var year = todayDate.getFullYear();
    var month = todayDate.getMonth() + 1;
    var tdate = todayDate.getDate();

    // Format month and date to have leading zeros if necessary
    if (month < 10) {
        month = "0" + month;
    }
    if (tdate < 10) {
        tdate = "0" + tdate;
    }

    var maxDate = year + "-" + month + "-" + tdate;

    // Set max attribute to today's date
    document.getElementById("date").setAttribute("max", maxDate);

    // Calculate the minimum valid date (18 years ago)
    var minDate = new Date();
    minDate.setFullYear(todayDate.getFullYear() - 18);
    minDate.setMonth(todayDate.getMonth());
    minDate.setDate(todayDate.getDate());
    minDate.setHours(0, 0, 0, 0); // Ensure time is set to start of the day

    // Display an error if the selected date is less than 18 years ago or in the future
    if (selectedDate > todayDate) {
        document.getElementById("message").textContent = "Date of Birth cannot be in the future.";
        document.getElementById("date").value = ""; // Clear the input
    } else if (selectedDate > minDate) {
        document.getElementById("message").textContent = "You must be at least 18 years old.";
        document.getElementById("date").value = ""; // Clear the input
    } else {
        document.getElementById("message").textContent = ""; // Clear any error message
    }
}


function CheckGender() {
    const genderError = document.getElementById("gender-error");
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");

    if (!maleRadio.checked && !femaleRadio.checked) {
        genderError.innerText = "Please select a gender.";
        genderError.style.display = "block";
    } else {
        genderError.style.display = "none";
    }
}

function CheckPhoneNumber() {
    var IsPhoneNumber = /^[6789][0-9]{9}$/;
    let phoneInput = document.getElementById("phone-number");

    if (phoneInput.value.trim() === "") {
        setError(phoneInput, "Enter your phone number");
    } else if (!IsPhoneNumber.test(phoneInput.value.trim())) {
        setError(phoneInput, "Phone number must be 10 digits and start with 6, 7, 8, or 9");
    } else {
        setSuccess(phoneInput);
    }
}

function CheckEmail() {
    var IsEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailInput = document.getElementById("email");
    if (emailInput.value.trim() === "") {
        setError(emailInput, "Enter your email");
    } else if (!IsEmail.test(emailInput.value.trim())) {
        setError(emailInput, "Enter a valid email address");
    } else {
        setSuccess(emailInput);
    }
}

function CheckMembershipValidation() {
    const checkboxes = document.querySelectorAll('input[name="membership"]');
    let isChecked = false;
    let errorMessage = document.getElementById("error-message");

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        errorMessage.innerText = "Please select at least one membership option.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
}

function ChecknameE() {
    const nameInput = document.getElementById("full-nameE");
    const nameError = document.getElementById("name-error");
    const namePattern = /^[a-zA-Z\s]+$/;

    if (nameInput.value.trim() === "") {
        nameError.innerText = "Full Name is required.";
        nameError.style.display = "block";
    } else if (!namePattern.test(nameInput.value.trim())) {
        nameError.innerText = "Full Name can only contain letters and spaces.";
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }
}

function CheckPhoneNumberE() {
    var IsPhoneNumber = /^[6789][0-9]{9}$/;
    let phoneInput = document.getElementById("phone-numberE");

    if (phoneInput.value.trim() === "") {
        setError(phoneInput, "Enter your phone number");
    } else if (!IsPhoneNumber.test(phoneInput.value.trim())) {
        setError(phoneInput, "Phone number must be 10 digits and start with 6, 7, 8, or 9");
    } else {
        setSuccess(phoneInput);
    }
}

function CheckEmailE() {
    const emailInput = document.getElementById("emailE");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.innerText = "E-mail is required.";
        emailError.style.display = "block";
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.innerText = "Enter a valid e-mail address.";
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
}

function setError(input, message) {
    let submitbutton = document.getElementById("submit");
    const formControl = input.parentElement;
    let small = formControl.querySelector("small");

    if (!small) {
        small = document.createElement("small");
        formControl.appendChild(small);
    }

    small.className = "smallshown";
    small.innerText = message;
    submitbutton.disabled = true;
}

function setSuccess(input) {
    let submitbutton = document.getElementById("submit");
    const formControl = input.parentElement;
    let small = formControl.querySelector("small");

    if (!small) {
        small = document.createElement("small");
        formControl.appendChild(small);
    }

    small.className = "smallhidden";
    small.innerText = "";
    submitbutton.disabled = false;
}

function validateForm() {
    Checkname();
    CheckAddress();
    CheckPhoneNumber();
    CheckEmail();
    CheckMembershipValidation();
}

function validateFormE() {
    ChecknameE();
    CheckPhoneNumberE();
    CheckEmailE();
}

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    validateForm();
});

//document.getElementById("submitE").addEventListener("click", function(event) {
//    event.preventDefault(); // Prevent the form from submitting
//    validateFormE();
//});
