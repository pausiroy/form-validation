// Select the form elements

const form = document.getElementById("form");
const username = document.getElementById("username"); 
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Add submit eventlistener

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
})

// function to check if inputs are valid 

function checkInput() {
 

}