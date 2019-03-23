$(document).ready(function () {

    //VARIABLES 
    //-------------------------------------------
    var gems = {
        redGem:
        {
            color: "red",
            value: 0
        },
        blueGem:
        {
            color: "blue",
            value: 0
        },
        greenGem:
        {
            color: "green",
            value: 0
        },
        diamondGem:
        {
            color: "diamond",
            value: 0
        },
    };

    var targetNum = 0;
    var counter = 0;

    var wins = 0;
    var losses = 0;

    //FUNCTIONS/CONDITIONS/LOOPS
    //--------------------------------------------
    function start() {
        counter = 0;
        //Generate random # for target 
        targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("This is " + targetNum);
        //random number to html id 
        $("#targetnum").html(targetNum);

        gems.redGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.blueGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.greenGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.diamondGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


        $("#yournum").html(counter);

    };

    //-------------------------------------
    //NEW FUNCTION (ADD VALUES)
    function adding(gems) {
        counter = counter + gems.value;
        $("#yournum").html(counter);
        check();
        console.log("Your Score is  " + counter);
    }
    //-----------------------------------
    //another function
    function check() {
        if (counter > targetNum) {
            alert("Abu says Thanks a lot! He's still broke!");

            console.log("LOSE!");
            losses++;
            $("#loss").html(losses);
            start();

        }
        else if (counter == targetNum) {
            alert("Abu says thank you! He's Rich!");
            console.log("WIN!");
            wins++;
            $("#wins").html(wins);
            start();
        }
    }

    //------------------------------------\
    start()

    $("#red").on("click", function () {
        adding(gems.redGem);
    });

    $("#blue").on("click", function () {
        adding(gems.blueGem);
    });
    $("#diamond").on("click", function () {
        adding(gems.greenGem);
    });
    $("#green").on("click", function () {
        adding(gems.diamondGem);
    });


});
