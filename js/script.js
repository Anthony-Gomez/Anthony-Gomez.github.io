var combinaisons = [
    { "combinaison": "AA", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "AKs", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "AQs", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "AKo", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "KK", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "QQ", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "JJ", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "TT", "pourcentage": 4, "rate": "★★★★★" },
    { "combinaison": "99", "pourcentage": 4, "rate": "★★★★★" },

    { "combinaison": "AJs", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "ATs", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "KQs", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "KJs", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "KTs", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "AQo", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "QJs", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "AJo", "pourcentage": 8, "rate": "★★★★☆" },
    { "combinaison": "88", "pourcentage": 8, "rate": "★★★★☆" },

    { "combinaison": "A9s", "pourcentage": 12, "rate": "★★★☆☆" },
    { "combinaison": "KQo", "pourcentage": 12, "rate": "★★★☆☆" },
    { "combinaison": "QTs", "pourcentage": 12, "rate": "★★★☆☆" },
    { "combinaison": "KJo", "pourcentage": 12, "rate": "★★★☆☆" },
    { "combinaison": "JTs", "pourcentage": 12, "rate": "★★★☆☆" },
    { "combinaison": "ATo", "pourcentage": 12, "rate": "★★★☆☆" },
    { "combinaison": "77", "pourcentage": 12, "rate": "★★★☆☆" },

    { "combinaison": "A8s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "A7s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "A6s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "A5s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "A4s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "K9s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "K8s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "Q9s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "QJo", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "J9s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "KTo", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "QTo", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "JTo", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "T9s", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "A9o", "pourcentage": 20, "rate": "★★☆☆☆" },
    { "combinaison": "66", "pourcentage": 20, "rate": "★★☆☆☆" },

    { "combinaison": "A3s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "A2s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "K7s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "K6s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "K5s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "Q8s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "Q7s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "J8s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "T8s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "K9o", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "Q9o", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "J9o", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "98s", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "A8o", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "A7o", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "A5o", "pourcentage": 30, "rate": "★☆☆☆☆" },
    { "combinaison": "55", "pourcentage": 30, "rate": "★☆☆☆☆" },
];

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
        var cases = document.getElementsByClassName("handcode-input");
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