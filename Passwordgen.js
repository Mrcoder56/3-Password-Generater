const password = document.getElementById("password");

const length = document.getElementById("length");

const lengthValue = document.getElementById("length-value");

const uppercase = document.getElementById("uppercase");

const lowercase = document.getElementById("lowercase");

const numbers = document.getElementById("numbers");

const symbols = document.getElementById("symbols");

const generate = document.getElementById("generate");

const copy = document.getElementById("copy");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerChars = "abcdefghijklmnopqrstuvwxyz";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+?><:{}[]";

length.addEventListener("input", () => {
    lengthValue.textContent = length.value;
});

generate.addEventListener("click", () => {

    let allChars = "";

    if (uppercase.checked)
        allChars += upperChars;

    if (lowercase.checked)
        allChars += lowerChars;

    if (numbers.checked)
        allChars += numberChars;

    if (symbols.checked)
        allChars += symbolChars;

    if (allChars === "") {
        alert("Please select at least one option.");
        return;
    }

    let generatedPassword = "";

    for (let i = 0; i < length.value; i++) {

        let randomIndex = Math.floor(Math.random() * allChars.length);

        generatedPassword += allChars[randomIndex];

    }

    password.value = generatedPassword;

});

copy.addEventListener("click", () => {

    if (password.value === "") {
        alert("Generate a password first.");
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");

});