var wins = 0;
var losses = 0;

$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 100) + 19;
    var userScore = 0;


    var crystalArray = ["https://5.imimg.com/data5/BG/WD/MY-20189312/topaz-stone-500x500.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61eWEVw1ztL._SY395._SX._UX._SY._UY_.jpg",
        "https://dygtyjqp7pi0m.cloudfront.net/i/11831/11999541_1.jpg?v=8CEB959C63E05C0",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJJC09bc_yuaA5pT3Uz3RMh0XjPmsspebst9zK8BjunLN3PoN&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtLOfznz2dKmTJIHGcRsupVhKM0F__wh7Cme7S1YwfIwyFAE2&s",
        "https://assets.catawiki.nl/assets/2016/3/8/6/d/3/6d35a9c6-e570-11e5-8e63-1f8b53cbf0da.jpg",
    ];

    for (var i = 0; i < crystalArray.length; i++) {

        // For each iteration, create an imageCrystal
        var imageStone = $("<img>");

        // each crystal will be given the class .crystal-image.
        
        imageStone.addClass("gem-stone");

        // Each image will be given a src link to the crystal image
        imageStone.attr("src", crystalArray[i]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
       
        imageStone.attr("data-stoneValue", Math.floor(Math.random() * 12) + 1);
        imageStone.attr("height", "200px");
        imageStone.attr("width", "200px");


        // each crystal image  will get added to the page.
        $("#gem-stones").append(imageStone);
    }

    updateStats();

    $(".gem-stone").on("click", function () {



        var stoneValue = ($(this).attr("data-stoneValue"));
        stoneValue = parseInt(stoneValue);

        userScore += stoneValue;


        alert("New score: " + userScore);

        if (userScore === targetNumber) {
            alert("You win!");
            wins++;
            displayWin();
            newGame();
        } else if (userScore >= targetNumber) {
            alert("You lose!!");
            losses++;
            displayLoss();
            newGame();
        }
        updateStats();
    });

    function newGame() {
        userScore = 0;
        targetNumber = Math.floor(Math.random() * 100) + 19;
        updateStats();
    }

    function updateStats() {
        $("#number-to-guess").text(targetNumber);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }



    function displayLoss() {
        $('#result').text("You Lose!!");
    }

    function displayWin() {

        $('#result').text("You Win!!");
    }
});