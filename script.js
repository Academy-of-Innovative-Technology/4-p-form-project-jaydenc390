let form = document.querySelector("form");
let button = document.querySelector(".apple");
const inputElements = form.querySelectorAll('input, textarea');

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

button.addEventListener("click", function () {
    alert("Form Submission Successful!");
    document.querySelector("form").reset();
});