$(document).ready(function(){

    var questionSpace=$('<div class="container"></div>');
    var questionText=$('<p></p>');
    var question=questionSpace.add(questionText);
    var question1="loreum"
    questionText.text(question1);

    var group = $('<div class="list-group"></div>');
    var option1=$('<button class="list-group-item list-group-item-action col-6"></button>');
    var option2=$('<button class="list-group-item list-group-item-action col-6"></button>');
    var option3=$('<button class="list-group-item list-group-item-action col-6"></button>');
    var option4=$('<button class="list-group-item list-group-item-action col-6"></button>');
    var allElements=group.add(option1).add(option2).add(option3).add(option3).add(option4);

    question.appendTo('#container_1');
    allElements.appendTo('#container_1');
    

   
});