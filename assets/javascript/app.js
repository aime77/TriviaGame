$(document).ready(function () {
    //global var to start app
    var startButton = $('<button type="button" class="btn btn-primary btn-lg">Large button</button>');
    startButton.appendTo('#container_1')
    var active = false;

    //global vars for questions
    var questionSpace = $('<div class="container"></div>');
    var questionText = $('<p></p>');
    var question = questionSpace.add(questionText);
    var questionAsked;

    //global variables for options
    var group = $('<div class="list-group"></div>');
    var option1 = $('<button class="list-group-item list-group-item-action col-6"></button>');
    var option2 = $('<button class="list-group-item list-group-item-action col-6"></button>');
    var option3 = $('<button class="list-group-item list-group-item-action col-6"></button>');
    var option4 = $('<button class="list-group-item list-group-item-action col-6"></button>');
    var allElements = group.add(option1).add(option2).add(option3).add(option3).add(option4);
    var option1Text;
    var option2Text;
    var option3Text;
    var option4Text;

    //On click start button
    startButton.on("click", function () {
        //question function
        active = true;
        questionAnswer();
        //game active

    });

    function clear() {
        questionText.hide();
        option1.hide();
        option2.hide();
        option3.hide();
        option4.hide();
    }

    function questionAnswer() {

        if (active === true) {

            $(".btn-primary").hide();
            question.appendTo('#container_1');
            allElements.appendTo('#container_1');
            counter();

            switch (questionCounter) {
                case 1:
                    questionAsked = "What is the fastest animal on the earth?";
                    questionText.text(questionAsked);
                    option1Text = "Cheetah";
                    option2Text = "Eagle";
                    option3Text = "Tiger";
                    option4Text = "Puma";
                    option1.text(option1Text);
                    option2.text(option2Text);
                    option3.text(option3Text);
                    option4.text(option4Text);

                    break;

                case 2:
                    questionAsked = "Which is the most intelligent animal?";
                    questionText.text(questionAsked);
                    option1Text = "Eagle";
                    option2Text = "Elefant";
                    option3Text = "Pigs";
                    option4Text = "Dolphins";
                    option1.text(option1Text);
                    option2.text(option2Text);
                    option3.text(option3Text);
                    option4.text(option4Text);
                    break;

                case 3:
                    questionAsked = "";
                    questionText.text(questionAsked);
                    option1Text = "";
                    option2Text = "";
                    option3Text = "";
                    option4Text = "";
                    option1.text(option1Text);
                    option2.text(option2Text);
                    option3.text(option3Text);
                    option4.text(option4Text);
                    break;

                case 4:
                    questionAsked = "";
                    questionText.text(questionAsked);
                    option1Text = "";
                    option2Text = "";
                    option3Text = "";
                    option4Text = "";
                    option1.text(option1Text);
                    option2.text(option2Text);
                    option3.text(option3Text);
                    option4.text(option4Text);
                    break;

                case 5:
                    questionAsked = "";
                    questionText.text(questionAsked);
                    option1Text = "";
                    option2Text = "";
                    option3Text = "";
                    option4Text = "";
                    option1.text(option1Text);
                    option2.text(option2Text);
                    option3.text(option3Text);
                    option4.text(option4Text);
                    break;

                case 6:
                    questionAsked = "";
                    questionText.text(questionAsked);
                    option1Text = "";
                    option2Text = "";
                    option3Text = "";
                    option4Text = "";
                    option1.text(option1Text);
                    option2.text(option2Text);
                    option3.text(option3Text);
                    option4.text(option4Text);
                    break;

                case 7:
                    questionAsked = "";
                    questionText.text(questionAsked);
                    option1Text = "";
                    option2Text = "";
                    option3Text = "";
                    option4Text = "";
                    option1.text(option1Text);
                    option2.text(option2Text);
                    option3.text(option3Text);
                    option4.text(option4Text);
                    break;

                default:




            }

        }
        //switch case to change question and options according to counter argument passed

        //set each answer with an attribute for wrong or right choices

    }

    var gifSpace = $('<img>');

    //on click answerButton
    $(".list-group-item-action").on("click", function () {
        console.log(questionCounter);

        switch (questionCounter) {
            case 1:
                gifSpace.attr("src", "assets/images/giphy.gif");
                gifSpace.appendTo('container_1');

                break;

            case 2:
                break;

            case 3:
                break;

            case 4:
                break;

            case 5:
                break;

            case 6:
                break;

            case 7:
                break;

            case 8:
                break;

            default:
                gifSpace.attr("src", "https://gph.is/N5NkWF");
                gifSpace.appendTo("#container_1");
                questionAnswer();

            //if click on button with right attribute

            //takes to rightAnswerGif

            //if click on button with wrong attribute

            //takes to wrongAnswerGif

        }
    });

    var intervalGifID;

    //gif function(passes Gifcounter argument, answerButton)          
    function gif() {
        clear();
        console.log(questionCounter);
        switch (questionCounter) {
            case 1:
                gifSpace.attr("src", "assets/images/giphy.gif");
                gifSpace.appendTo('#container_1');
                intervalGifID = setTimeout(questionAnswer, 3000);
                break;
            default:
                gifSpace.attr("src", "https://gph.is/N5NkWF");
                gifSpace.appendTo("#container_1");
        }

        //layout for gif: msgText,correctionText, gifContainer

        //switch case for wrong or right answers

        //if right attribute

        //else wrong attribute

        //case:10

        //function end
    }




    //gifs setInterval function
    
    //set timer to every 3 seconds

    //counter for every interval
    var timeSpace = $('<div class="container"></div>');
    var time = 5;
    var intervalID = setInterval(counter, 1000);
    var questionCounter = 1;

    function counter() {
        if (time === -1) {
            gif();
            questionCounter++;
            
            clearTimeout(intervalID);

        }
        else if (active === true) {

            timeSpace.text("00:" + time);
            timeSpace.appendTo("#container_1");
            time--;
        }
    }


    //question setInterval function

    //set timer to every 30 seconds

    //counter for every interval



    //function end

    //layout: correctAnswers,incorrectAnswers,unansweredAnswers;

    //question functions
});