const form = document.getElementById('registration');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log(this);

    let errors = {};

    let username = document.getElementById('username').value;

    if (username === '') {
        errors.username = 'Username is required';
    }

    let password = document.getElementById('password').value;
    let passwordRepeat = document.getElementById('password2').value;

    if (password === '') {
        errors.password = 'Password is required';
    }

    if (passwordRepeat !== password) {
        errors.password2 = 'Passwords do not match';
    }

    let gender = false;

    
    this.querySelectorAll('.radioclass').forEach(function(radio) {
        if (radio.checked) {
            gender = true;
        }
    });

    if (!gender) {
        errors.gender = 'Gender must be selected';
    }
    let checkagree = document.getElementById('terms').checked;
    if (!checkagree) {
        errors.terms = "You must agree to the terms";
    }

    // console.log(errors);

    this.querySelectorAll('.errortext').forEach(function(el) {
        el.textContent = '';
    });

    for (let key in errors) {
        let errorspan = document.getElementById('error' + key);
        console.log(errorspan);

        if (errorspan) {
            errorspan.textContent = errors[key];
        }

    }

    if (Object.keys(errors).length === 0) {
        window.location.href = 'index.html';
    }

});

let passwordInput = document.getElementById('password');
let showpassword = document.getElementById('showpassword');



showpassword.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});



let email = document.getElementById('email');
let erroremail = document.getElementById('erroremail');

email.addEventListener('keyup', function() {
    let emailvalue = email.value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailvalue.match(emailRegex)) {
        erroremail.textContent = 'email is valid';
    } else {
        erroremail.textContent = 'email is not valid';
    }

    if (emailvalue === '') {
        erroremail.textContent = '';
    }

});
