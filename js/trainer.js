fill();

function fill() {
    document.getElementById("cardcode1").value = "";
    document.getElementById("cardcode2").value = "";
    document.getElementById("cardcode3").value = "";

    var ele = document.getElementsByName("rating");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;

    const randomPokerHand = generatePokerHand();
    document.getElementById("cardcode1").value = randomPokerHand[0];
    document.getElementById("cardcode2").value = randomPokerHand[1];
    if (randomPokerHand.length > 2) {
        document.getElementById("cardcode3").value = randomPokerHand[2];
    }
}

function generatePokerHand() {
    const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
    const suits = ['s', 'o'];

    const randomRank1 = ranks[Math.floor(Math.random() * ranks.length)];
    const randomRank2 = ranks[Math.floor(Math.random() * ranks.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    let pokerHand = '';

    if (Math.random() < 0.3 || (randomRank1 == randomRank2)) {
        // Pairs
        pokerHand = randomRank1 + randomRank1;
    } else {
        // Non-pair
        pokerHand = randomRank1 + randomRank2;
        // Sort the hand in descending order for the first rank
        pokerHand = pokerHand
            .split('')
            .sort((a, b) => ranks.indexOf(a) - ranks.indexOf(b))
            .join('');
        // Add suit
        pokerHand += randomSuit;
    }
    return pokerHand;
}

function submitRating(button) {
    let rating = null;
    if (document.querySelector('input.set[name="rating"]:checked')) {
        rating = document.querySelector('input[name="rating"]:checked').value;
    }

    let combinaison = document.getElementById("cardcode1").value + document.getElementById("cardcode2").value;
    if (combinaison[0] != combinaison[1]) {
        combinaison += document.getElementById("cardcode3").value;
    }

    var pourcentage = null

    for (var i = 0; i < combinaisons.length; i++) {
        if (combinaisons[i].combinaison.toUpperCase() === combinaison.toUpperCase()) {
            pourcentage = combinaisons[i].pourcentage;
            break;
        }
    }

    if (rating == pourcentage) {
        button.style.backgroundColor = 'green'
        startAnimation(['👏', '👍', '🎉', '🤩', '👌']);
    }
    else {
        button.style.backgroundColor = 'red';
        startAnimation(['😒', '👎', '😣', '😤', '😡']);
    }

    if(pourcentage == null) {
        pourcentage = "> 30";
    }
    document.getElementById("top").textContent = pourcentage + " %";

    fill();
}

function startAnimation(emojis) {
    const container = document.body;

    emojis.forEach((emoji) => {
        const element = document.createElement('div');
        element.textContent = emoji;
        element.className = 'emoji';

        const positionLeft = Math.random() * (container.offsetWidth - 100);
        const positionTop = Math.random() * (container.offsetHeight - 100);
        element.style.left = positionLeft + 'px';
        element.style.top = positionTop + 'px';

        container.appendChild(element);

        setTimeout(() => {
            element.style.animation = 'pop 2s';
            setTimeout(() => {
                element.remove();
            }, 2000);
        }, 200);
    });
}