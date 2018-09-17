$(document).ready(function () {
    var game = {
        n1: {
            q: "Do human use only 10% of their brain?",
            a: ["No, we use 100% but not all at once", "Sometimes", "Yes", "No, we use 50% of our brain"],
            ca: "No, we use 100% but not all at once",
            gifq: "assets/images/gifq.jpg",
            gifC: "assets/images/gifC1.gif",
            gifI: "assets/images/gifI1.gif",
        },
        n2: {
            q: "What happens when we go to sleep?",
            a: ["The brain goes to sleep", "The brain is more active", "The brain is less active", "The brain is active but in a different way"],
            ca: "The brain is active but in a different way",
            gifq: "assets/images/gifq2.jpg",
            gifC: "assets/images/gifC2.gif",
            gifI: "assets/images/gifI1.jpg",
        },
        n3: {
            q: "What is a neuron?",
            a: ["Nerve cell in the brain", "Nerve cell in the body", "Nerve cell in any part of the body", "A chemical in the brain"],
            ca: "Nerve cell in the brain",
            gifq: "assets/images/gifq3.jpeg",
            gifC: "assets/images/gifC3.gif",
            gifI: "assets/images/gifI3.gif",
        },
        n4: {
            q: "How much of our energy does the brain consume?",
            a: ["About 10%", "About 5%", "About 20%", "About 35%"],
            ca: "About 20%",
            gifq: "assets/images/gifq4.jpeg",
            gifC: "assets/images/chimpanzee_correct.gif",
            gifI: "assets/images/gifC4.gif",
        },
        n5: {
            q: "Will damage to one side of the brain affect the opposite side?",
            a: ["Yes, it's all connected", "No, the brain is divided down the middle and has 2 sides", "Depending on the injury", "Only if the injury is severe"],
            ca: "No, the brain is divided down the middle and has 2 sides",
            gifq: "assets/images/gifq5.jpg",
            gifC: "assets/images/gifC5.gif",
            gifI: "assets/images/gifI5.jpeg",
        },
        n6: {
            q: "According to recent studies: do men have a larger brain than women?",
            a: ["Yes, ~ 10% larger", "No, women brains are larger by  10%", "Gender doesn't affect brain size", "Yes, ~ 15% larger"],
            ca: "Yes, ~ 10% larger",
            gifq: "assets/images/gifq6.png",
            gifC: "assets/images/gifC6.gif",
            gifI: "assets/images/gifI6.jpg",
        },
        n7: {
            q: "Does the brain has higuer processing capacity than the fastest computer?",
            a: ["Yes, the brain's processing capacity is 0.1 quadrillions/sec", "No, a compuer's 1.026 processing capacity is greater", "This comparison cannot be made", "All of the above"],
            ca: "This comparison cannot be made",
            gifq: "assets/images/gifq7.jpeg",
            gifC: "assets/images/gifC7.gif",
            gifI: "assets/images/gifI7.gif",
        },
        n8: {
            q: "About how much does an adult human brain weight?",
            a: ["12 pounds", "5 pounds", "3 pounds", "15 pounds"],
            ca: "3 pounds",
            gifq: "assets/images/gifq8.jpg",
            gifC: "assets/images/gifC8",
            gifI: "assets/images/gifI8.gif",
        },
        n9: {
            q: "On average, at what age does the brain stop developing?",
            a: ["21", "25", "15", "30"],
            ca: "25",
            gifq: "assets/images/gifq9.jpg",
            gifC: "assets/images/gifC9.gif",
            gifI: "assets/images/gifI9.jpg",
        },
        n10: {
            q: "Does the brain work at the Speed of Light?",
            a: ["Yes", "No, the fastest neuronal transmissions are of ~100 m/s", "It can in extreme instances", "No,the fastest neuronal transmissions are of ~10 m/s"],
            ca: "No, the fastest neuronal transmissions are of ~100 m/s",
            gifq: "assets/images/gifq10.jpg",
            gifC: "assets/images/gifC10.gif",
            gifI: "assets/images/gifIG.gif",
        },
        n11: {
            q: "Which neurotransmitter is associated with pleasure?",
            a: ["GABA (gamma-aminobutyric aid)", "Serotonin", "Dopamine", "Oxytocin"],
            ca: "Dopamine",
            gifq: "assets/images/gifq11.jpg",
            gifC: "assets/images/gifC11.gif",
            gifI: "assets/images/gifI11.jpeg",
        },
        n12: {
            q: "What is the largest part of the brain?",
            a: ["Cerebrum", "Cerebellum", "Brain Stem", "Medulla"],
            ca: "Cerebellum",
            gifq: "assets/images/gifq12.jpeg",
            gifC: "assets/images/gifC12.gif",
            gifI: "assets/images/gifC12.jpeg",
        },
        n13: {
            q: "What happens as the brain ages?",
            a: ["The brain shrinks in volume and blood flow", "It’s ability to learn decreases", "Neuronal connections weaken", "All of the above"],
            ca: "The brain shrinks in volume and blood flow",
            gifq: "assets/images/gifq13.jpeg",
            gifC: "assets/images/gifC13.gif",
            gifI: "assets/images/gifI13.jpeg",
        }
    }

    //

    var titleSpace = $('<h2>How much do you know about YOUR BRAIN?</h2>');
    titleSpace.appendTo("#container_1");

    var gifSpace = $('<img class="rounded mx-auto d-block mb-1">');
    gifSpace.attr("src", "assets/images/think2.gif");
    gifSpace.appendTo('#container_1');

    var startButton = $('<button type="button" id="startB" class="btn btn-primary btn-lg mx-auto d-block">START</button>');
    startButton.appendTo('#container_1');

    var group = $('<div class="list-group mx-auto center ml-70></div>');
    var scoreSpace = $('<span class="list-group-item list-group-item-action col-5 mx-auto d-flex justify-content-center display-5 align-self-center opt"></span>');
    var timerSpace = $('<span class="list-group-item list-group-item-action col-5 mx-auto d-flex justify-content-center display-5 align-self-center opt"></span>');
    var missedASpace = $('<span class="list-group-item list-group-item-action col-5 mx-auto d-flex justify-content-center display-5 opt"></span>');
    var incorrectASpace = $('<span class="list-group-item list-group-item-action col-5 mx-auto d-flex justify-content-center display-5 opt"></span>');
    var allElements2 = group.add(timerSpace).add(scoreSpace);

    var score = 0;
    scoreSpace.text("Score: " + score);

    var questionSpace = $('<div class="display-4" id="questionSpace"><p></p></div>');
    var msgSpace = $('<div id="msgSpaceID"><p></p></div>');

    var group2 = $('<div class="list-group"></div>');
    var option1 = $('<button class="list-group-item list-group-item-action col-6 mx-auto d-inline display-4 opts"></button>');
    var option2 = $('<button class="list-group-item list-group-item-action col-6 mx-auto d-inline display-4 opts"></button>');
    var option3 = $('<button class="list-group-item list-group-item-action col-6 mx-auto d-inline display-4 opts"></button>');
    var option4 = $('<button class="list-group-item list-group-item-action col-6 mx-auto d-inline display-4 opts"></button>');
    var allElements = group2.add(option1).add(option2).add(option3).add(option3).add(option4);

    function clear() {
        questionSpace.detach();
        option1.detach();
        option2.detach();
        option3.detach();
        option4.detach();
    }

    function   reseter(){
        questionCounter=0;
        score=0;
        missedCounter=0;
        scoreIncorrect=0;
        timerSpace.detach();
        scoreSpace.detach();
        titleSpace.detach();
        incorrectASpace.detach();
        missedASpace.detach();
        startOverB.detach();
        gifSpace.attr("src");
        gifSpace.appendTo('#container_1');
        questionAnswer();
    }

    var time;
    var questionCounter = 0;
    var intervalID;

    function counter() {
        $('#container_1').append(timerSpace);
        time = 30;
        intervalID = setInterval(timer, 1000);
        questionCounter++;
        timerSpace.text("Time Remaining: " +time + " seconds");
    }

    function timer() {
        if (time === 0) {
            runOutOfT();
            clearInterval(intervalID);
        }
        else {
            time--;
            if(time===1)
            timerSpace.text("Time Remaining: " +time+ " second");
            else{
            timerSpace.text("Time Remaining: " +time+ " seconds");
            }
        }
    }

    startButton.on("click", function () {
        titleSpace.detach();
        questionAnswer();

    });

    function questionAnswer() {
        startButton.detach();
        msgSpace.detach();
        clearInterval(intervalGifID);
        $('#container_1').append(allElements2);
        $('#container_2').append(questionSpace, allElements);
        counter();
        if (questionCounter >= 14) {
            reset();
        }
        else {
            for (var i = 1; i < 14; i++) {
                if (questionCounter === i) {
                    gifSpace.attr("src", game["n" + i].gifq);
                    questionSpace.text(game["n" + i].q);
                    option1.text(game["n" + i].a[0]);
                    option2.text(game["n" + i].a[1]);
                    option3.text(game["n" + i].a[2]);
                    option4.text(game["n" + i].a[3]);
                }
            }
        }
    }
   var that;
    var scoreIncorrect=0;
    var msgAText;
    var intervalGifID;
    allElements.on("click", function () {
        clearInterval(intervalID);
        clear();
        chosenVar = $(this);
        if (questionCounter >= 14) {
            reset();
        }
        else {
            for (var i = 1; i < 14; i++) {
                if (questionCounter === i) {
                    if ((game["n" + i].ca) === chosenVar.text()) {
                        score++;
                        msgAText = "PERFECT!! " + chosenVar.text() + " is the correct answer!!";
                        msgSpace.text(msgAText).appendTo("#container_1");
                        scoreSpace.text("Score: " + score);
                        gifSpace.attr("src", game["n" + i].gifC).appendTo('#container_1');
                        gifIntervalID = setTimeout(questionAnswer, 3000);

                    }
                    else {
                        scoreIncorrect++;
                        msgAText = "Hmm not quite, you chose: " + chosenVar.text() + ". <br> The correct answer is: " + game["n" + i].ca +".";
                        msgSpace.html(msgAText).appendTo("#container_1");
                        gifSpace.attr("src", game["n" + i].gifI).appendTo('#container_1');
                        gifIntervalID = setTimeout(questionAnswer, 3000);

                    }
                }
                
            }
            
        }
    });
    var missedCounter = 0;
    function runOutOfT() {
        for (var i = 1; i < 14; i++) {
            if (questionCounter === i) {
                that=game["n" + i].ca}}
        clear();
        missedCounter++;
        msgSpace.text("Try faster next time!! The correct answer is "+ that+".").appendTo('#container_1');
        gifSpace.attr("src", "assets/images/timeout.gif").appendTo('#container_1');
        intervalGifID = setTimeout(questionAnswer, 3000);
    }

    var startOverB = $('<button type="button" id="startOverB" class="btn btn-primary btn-lg mx-auto d-block">START OVER?</button>');
    startOverB.on("click", function () {
          reseter();
    });
  

    function reset() {
        clear();
        clearInterval(intervalID);
        gifSpace.removeAttr("src").detach();
        titleSpace.text("This is how you did:");
        scoreSpace.text("Correct Answers: " + score);
        incorrectASpace.text("Incorrect Answers: " + scoreIncorrect);
        missedASpace.text("Unanswered: " + missedCounter);
        $('#container_1').append(titleSpace, timerSpace, scoreSpace, incorrectASpace, missedASpace, startOverB);
    }
});
