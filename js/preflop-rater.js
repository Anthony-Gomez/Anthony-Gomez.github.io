document.querySelector(".handcode-form").addEventListener("submit", function (event) {
    event.preventDefault();
    calculerPourcentage();
});

function focusNextInput(input) {
    colorCases("white");
    var value = input.value.toUpperCase();
    var regex = /[AKQJT98765432]+/;
    if (!regex.test(value)) {
        colorCases("red");
        return;
    }
    var maxLength = parseInt(input.getAttribute("maxlength"));
    var currentLength = value.length;

    if (currentLength >= maxLength) {
        var nextInput = input.nextElementSibling;
        if (nextInput !== null) {
            nextInput.focus();
        }
    }
}

function handleBackspace(event) {
    var previousInput = event.target.previousElementSibling;
    if (event.key === "Backspace" && event.target.value === "" && previousInput !== null) {
        previousInput.focus();
    }
}

function checkEquality(input) {
    var inputC = document.getElementById("cardcode3");
    inputC.removeAttribute("disabled");

    var inputA = document.getElementById("cardcode1").value;
    var inputB = document.getElementById("cardcode2").value;

    if (inputA === inputB) {
        inputC.setAttribute("disabled", true);
        calculerPourcentage();
    } else {
        focusNextInput(input);
    }
}

function calculerPourcentage() {
    var combinaison = document.getElementById("cardcode1").value.toUpperCase() + document.getElementById("cardcode2").value.toUpperCase();
    if (document.getElementById("cardcode3").value != null && document.getElementById("cardcode3").value != "") {
        var value = document.getElementById("cardcode3").value.toUpperCase();
        var regex = /[SO]+/;
        if (!regex.test(value)) {
            colorCases("red")
            return;
        }
        combinaison = combinaison + document.getElementById("cardcode3").value.toLowerCase();
    }

    // Recherche du pourcentage de victoire dans le tableau "combinaisons"
    var pourcentage = null;
    var rate = null
    for (var i = 0; i < combinaisons.length; i++) {
        if (combinaisons[i].combinaison.toUpperCase() === combinaison.toUpperCase()) {
            pourcentage = combinaisons[i].pourcentage;
            rate = combinaisons[i].rate;
            break;
        }
    }

    // Affichage du résultat
    var score = document.getElementById("score");
    var rating = document.getElementById("rate");
    if (pourcentage !== null && rate !== null) {
        colorCases("palegreen");
        score.style.color = "palegreen";
        score.innerText = pourcentage + "%";
        var rating = document.getElementById("rate");
        rating.style.color = "yellow";
        rating.innerText = rate;
    } else {
        colorCases("red");
        score.innerText = null;
        rating.innerText = null;
    }
}

function colorCases(color) {
    var cases = document.getElementsByClassName("handcode-input");
    for (var casee of cases) {
        casee.style.color = color;
    }
}

function reset() {
    document.getElementById('handcode-form').reset();
    document.getElementById('score').innerText = null;
    document.getElementById('rate').innerText = null;
    document.getElementById("cardcode1").focus();
}