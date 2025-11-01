

// sign up


let signUp = document.getElementById("registration");
let registrationDiv = document.getElementById('sign_up_div')
let doneButton = document.querySelector('.Done');
let successDiv = document.querySelector('.successDiv');
let closeButton = document.querySelector('.close');


signUp.addEventListener("click", function() {
    registrationDiv.classList.remove('hidden');
});

doneButton.addEventListener("click", function() {
    successDiv.classList.remove('hidden2');
    registrationDiv.classList.add('hidden');
});


closeButton.addEventListener("click", function() {
    successDiv.classList.add('hidden2');
});



// accordioish


let icon1 = document.getElementById("s2_miniDiv1")
let icon2 = document.getElementById("s2_miniDiv2")
let icon3 = document.getElementById("s2_miniDiv3")
let icon4 = document.getElementById("s2_miniDiv4")

let descr1 = document.getElementById("s2_1")
let descr2 = document.getElementById("s2_2")
let descr3 = document.getElementById("s2_3")
let descr4 = document.getElementById("s2_4")

icon1.addEventListener("click", function() {
    descr1.classList.remove('hide')
    descr2.classList.add('hide')
    descr3.classList.add('hide')
    descr4.classList.add('hide')

    icon1.classList.add('active')
    icon2.classList.remove('active')
    icon3.classList.remove('active')
    icon4.classList.remove('active')
});

icon2.addEventListener("click", function() {
    descr2.classList.remove('hide')
    descr1.classList.add('hide')
    descr3.classList.add('hide')
    descr4.classList.add('hide')

    icon2.classList.add('active')
    icon1.classList.remove('active')
    icon3.classList.remove('active')
    icon4.classList.remove('active')
});

icon3.addEventListener("click", function() {
    descr3.classList.remove('hide')
    descr1.classList.add('hide')
    descr2.classList.add('hide')
    descr4.classList.add('hide')

    icon3.classList.add('active')
    icon1.classList.remove('active')
    icon2.classList.remove('active')
    icon4.classList.remove('active')
});

icon4.addEventListener("click", function() {
    descr4.classList.remove('hide')
    descr1.classList.add('hide')
    descr2.classList.add('hide')
    descr3.classList.add('hide')

    icon4.classList.add('active')
    icon1.classList.remove('active')
    icon2.classList.remove('active')
    icon3.classList.remove('active')
});



// accordion (fixed)
