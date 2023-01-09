"use strict";
(function(){
    const defaultResponses = [
        "Come again?",
        "Sorry, what was that?",
        "I don't understand",
        "Que?",
        "Quelle?"
    ];

    //stackoverflow
    function getRandomArbitrary(min,max){
        return Math.trunc(Math.random()*(max-min)+min);
    }

    function processUserInput(userInput){
        //add a rule to respond to hello
        if(userInput === "hello"){
            console.log("Hi there");
        } else if(userInput === "how is the weather?"){
            console.log("It might rain today");
        } else if (userInput === "i'm hungry"){
            console.log("Go eat something");
        }else{
            let index = getRandomArbitrary(0,defaultResponses.length);
            console.log(defaultResponses[0]);
        }
    }

    let userInput = "";
    let userStats = {
        numInputs: 0,
        maxInputLength:0
    }
    //loop until user says quit
    while(userInput !== "quit"){

        //prompt user for input
        userInput= window.prompt("Enter something");
        //if user presses cancel then tell user to try again
        if(!userInput){
            // console.log("Try again");
            // continue;
            break;
        }

        //convert input to lowercase
        userInput = userInput.toLowerCase();
        console.log("user input: " + userInput);

        userStats.numInputs++;
        if(userInput.length > userStats.maxInputLength){
            userStats.maxInputLength = userInput.length;
        }

        processUserInput(userInput);

    }

    console.log("User quit");
    console.log(`
    You input ${userStats.numInputs} queries
    Your longest query was ${userStats.maxInputLength} characters`)
})();