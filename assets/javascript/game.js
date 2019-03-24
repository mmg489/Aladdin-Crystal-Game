$(document).ready(function () {

    // variables**
    
    var gems = {
        redGem:
        {
          
            value: 0
        },
        blueGem:
        {
            
            value: 0
        },
        greenGem:
        {
            
            value: 0
        },
        diamondGem:
        {
            
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
    //Function for adding values
    function adding(gems) {
        counter = counter + gems.value;
        $("#yournum").html(counter);
        check();
        console.log("Your Score is  " + counter);
    }
    //-----------------------------------
    // function 2 for alerts
    function check() {
        if (counter > targetNum) {
            alert("Abu says Thanks a lot! He's still broke!");

            console.log("you lost!");
            losses++;
            $("#loss").html(losses);
            start();

        }
        else if (counter == targetNum) {
            alert("Abu says thank you! He's Rich!");
            console.log("you won!");
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
    $("#green").on("click", function () {
        adding(gems.greenGem);
    });
    $("#diamond").on("click", function () {
        adding(gems.diamondGem);
    });


});
