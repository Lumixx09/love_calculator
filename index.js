function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        const result = document.getElementById("result");
        result.innerHTML = "Oops! You'll have to give us both names to work with";
    } else {
        const lovePercentage = calculatePercentage(name1, name2);

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s Love Percentage : ${lovePercentage}%`;

        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a Great Match, Keep Looking!";
        } else if (lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br> There is a potential. Give it a try!";
        } else {
            result.innerHTML += "<br> Awwwwwww! Great Match.";
        }
    }
}

function calculatePercentage(name1, name2) {
    // Example deterministic calculation
    var hash = 0;
    for (var i = 0; i < name1.length; i++) {
        hash += name1.charCodeAt(i);
    }
    for (var j = 0; j < name2.length; j++) {
        hash += name2.charCodeAt(j);
    }
    return hash % 101; // Ensure the result is between 0 and 100
}