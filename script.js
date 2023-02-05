var main = document.getElementById("main1")
var firstInput = document.getElementById("input1");
var secondInput = document.getElementById("input2");
var wrongFormatElement = document.getElementById("format");
var wrongFormatElement2 = document.getElementById("format2");
var threeInputs = document.getElementById("bestDiv");
var label2 = document.getElementById("label-1");
var cvc = document.getElementById("cvc")

const birthdayText = document.getElementById("b-text");
const note = document.getElementById("b-text1");
const birthdate1 = document.getElementById("birthdate1");
const birthdate2 = document.getElementById("birthdate2");

// the cards values
const cardname = document.getElementById("name");
const cardnumber = document.getElementById("numbers");
const monthexp = document.getElementById("double-numbers");
const yearexp = document.getElementById("double-numbers2");
const threedigits = document.getElementById("zeros");

// ending
const ending = document.getElementById("ending");
const lastButton = document.getElementById("last-button");


const form = document.getElementById("form");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (isNaN(secondInput.value)) {
        wrongFormatElement.style.display = "inline";
        wrongFormatElement.style.color = "red";
        threeInputs.style.marginTop = "10px";
        label2.style.marginTop = "10px";
        birthdate1.style.marginTop = "10px";
        birthdate2.style.marginTop = "10px";
        cvc.style.marginTop = "10px";
        button.style.marginTop = "20px";
        secondInput.style.borderColor = "red";
        secondInput.style.borderWidth = "1.5px";
        wrongFormatElement2.style.top = "100%";
        birthdayText.style.top = "100%";
        // alert("your value is a not a number")
    }
    else if (secondInput.value.length > 16) {
        secondInput.value = secondInput.value.slice(0, 16);
    }
    else if (!birthdate1.value || !birthdate2.value) {
        wrongFormatElement2.style.display = "none";
        birthdayText.style.top = "100%";
        birthdayText.style.display = "block";
        birthdayText.style.color = "red";
        button.style.marginTop = "20px";
        birthdate1.style.borderColor = "red";
        birthdate1.style.borderWidth = "1.5px";
        birthdate2.style.borderColor = "red";
        birthdate2.style.borderWidth = "1.5px";
    }
    else if (isNaN(birthdate1.value) || isNaN(birthdate2.value)) {
        wrongFormatElement2.style.position = "absolute";
        wrongFormatElement2.style.top = "100%";
        birthdayText.style = "100%";
        wrongFormatElement2.style.display = "inline";
        wrongFormatElement2.style.color = "red";
        button.style.marginTop = "20px";
        birthdate1.style.borderColor = "red";
        birthdate1.style.borderWidth = "1.5px";
        birthdate2.style.borderColor = "red";
        birthdate2.style.borderWidth = "1.5px";
        birthdayText.style.display = "none";
    }
    else if (!cvc.value) {
        note.style.top = "100%";
        note.style.display = "block";
        note.style.color = "red";
        button.style.marginTop = "20px";
        cvc.style.borderColor = "red";
        cvc.style.borderWidth = "1.5px";
    }
    else {
        main.style.display = "none";
        ending.style.display = "flex";
        cvc.style.borderColor = "inherit";
        birthdate1.style.borderColor = "inherit";
        birthdate1.style.borderWidth = "2px";
        birthdate2.style.borderColor = "inherit";
        birthdate2.style.borderWidth = "2px";
        threeInputs.style.marginTop = "inherit";
        label2.style.marginTop = "inherit";
        birthdate1.style.marginTop = "inherit";
        birthdate2.style.marginTop = "inherit";
        cvc.style.marginTop = "inherit";
        button.style.marginTop = "inherit";
        wrongFormatElement.style.display = "none";
        secondInput.style.borderColor = "inherit";
        secondInput.style.borderWidth = "2px";
        wrongFormatElement2.style.removeProperty('display');
        birthdayText.style.removeProperty('display');
        note.style.removeProperty('display');

        // making a space between the card numbers
        const trimmed = secondInput.value.replace(/(\d{4})/g, "$1 ").trim();

        // adding the card number values to the card text contents
        cardnumber.textContent = trimmed;
        cardname.textContent = firstInput.value;
        monthexp.textContent = birthdate1.value;
        yearexp.textContent = birthdate2.value;
        threedigits.textContent = cvc.value

        lastButton.addEventListener("click", () => {
            main.style.removeProperty("display");
            ending.style.display = "none";
            form.reset();
        })




    }

})
