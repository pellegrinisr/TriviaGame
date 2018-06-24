$(document).ready(function() {
    var triviaGame = {
        //properties
        questionArray: [],
        questionsAsked: [],
        timeRemaining: 15,
        isFirstGame: true,
        myTimer: null,
        currentQuestion: null,
        answerCorrect: null,
        myScore: 0,
        hasAnswered: false,

        //methods
        
        //method will be called when user presses enter
        start: function() {
            triviaGame.displayQuestion();
            triviaGame.myTimer = setInterval(triviaGame.count, 1000);
        },

        //method for the timer
        //will iterate once per second
        //will display current time remaining to the page
        count: function() {
            triviaGame.timeRemaining--;
            $('.time-remaining').text(triviaGame.timeRemaining);
            if (triviaGame.timeRemaining === 0) {
                $('.message').text("You're out of time!");
                clearInterval(triviaGame.myTimer);
                triviaGame.timeRemaining = 15;
                $('.time-remaining').text(triviaGame.timeRemaining);
                $('.question').text('');
                $('.answer').text('');
                setTimeout(triviaGame.start, 2000);
            }
        },

        //method to build 10 question objects and 
        //store them in an array
        buildQuestionArray: function() {
            var question1 = new Question('Ulysses S. Grant appears on the front of which denomination of US currencey?');
            question1.answerArray[0] = '$50 dollar bill';
            question1.answerArray[1] = '$20 dollar bill';
            question1.answerArray[2] = '$10 dollar bill';
            question1.answerArray[3] =  '$5 dollar bill';
            this.questionArray.push(question1);
            var question2 = new Question('In wich ancient South Asian language is the text of The Vedas written?');
            question2.answerArray[0] = 'Sanskrit';
            question2.answerArray[1] = 'Hindi';
            question2.answerArray[2] = 'Nepali';
            question2.answerArray[3] = 'Bengali';
            this.questionArray.push(question2);
            var question3 = new Question('Which fledgling network aired its first music video, titled "Video Killed the Radio Star," in 1981?');
            question3.answerArray[0] = 'MTV';
            question3.answerArray[1] = 'VH1';
            question3.answerArray[2] = 'CNN';
            question3.answerArray[3] = 'HBO';
            this.questionArray.push(question3);
            var question4 = new Question('Who was the first African American woman to be crowned Miss America?');
            question4.answerArray[0] = 'Vanessa Williams';
            question4.answerArray[1] = 'Mia Walker';
            question4.answerArray[2] = 'Jessica Brown';
            question4.answerArray[3] = 'Michelle Johnson';
            this.questionArray.push(question4);
            var question5 = new Question('Who remaned the presidential yacht "Honey Fritz," in honor of his grandfather, a former Boston mayor?');
            question5.answerArray[0] = 'John F. Kennedy';
            question5.answerArray[1] = 'Richard Nixon';
            question5.answerArray[2] = 'Gerald Ford';
            question5.answerArray[3] = 'John Quincy Adams';
            this.questionArray.push(question5);
            var question6 = new Question("Which woman was second on Forbes magazine's list of the World's Most Powerful People in 2015?");
            question6.answerArray[0] = 'Angela Merkel';
            question6.answerArray[1] = 'Michelle Obama';
            question6.answerArray[2] = 'Diane Feinstein';
            question6.answerArray[3] = 'Park Geun-hye';
            this.questionArray.push(question6);
            var question7 = new Question('Which Kentucky-born US president is honored in the Wrestling Hall of Fame?');
            question7.answerArray[0] = 'Abraham Lincoln';
            question7.answerArray[1] = 'Andrew Jackson';
            question7.answerArray[2] = 'Ronald Reagan';
            question7.answerArray[3] = 'Lyndon B. Johnson';
            this.questionArray.push(question7);
            var question8 = new Question('On what day of the week did the Normandy Invasion of June 6, 1944 take place?');
            question8.answerArray[0] = 'Tuesday';
            question8.answerArray[1] = 'Friday';
            question8.answerArray[2] = 'Monday';
            question8.answerArray[3] = 'Wednesday';
            this.questionArray.push(question8);
            var question9 = new Question('What is the term used for the delay of a Senate matter by debate or procedural motions?');
            question9.answerArray[0] = 'Fillibuster';
            question9.answerArray[1] = 'Suspend';
            question9.answerArray[2] = 'Shelve';
            question9.answerArray[3] = 'Procrastination';
            this.questionArray.push(question9);
            var question10 = new Question('Who is the pre-Civil War author of a short story about a beating heart beneath the floorboards?');
            question10.answerArray[0] = 'Edgar Allen Poe';
            question10.answerArray[1] = 'Ralph Waldo Emerson';
            question10.answerArray[2] = 'Herman Melville';
            question10.answerArray[3] = 'Henry David Thoreau';
            this.questionArray.push(question10);
        },

        //method to display each question in a random order
        //will keep track of questions already asked
        //calls the fillAnswerSpaces method
        displayQuestion: function() {
            var randomNum;
            $('.message').text('');
            do {
                var alreadyAsked = false; 
                randomNum = Math.floor(Math.random() * 10);
                console.log(randomNum);
                for (var j = 0; j < this.questionsAsked.length; j++) {
                    if (randomNum === this.questionsAsked[j]) {
                        alreadyAsked = true;
                    }
                }
            } while (alreadyAsked && triviaGame.questionsAsked.length < 10);
            
            this.currentQuestion = randomNum
            this.questionsAsked.push(this.currentQuestion);
            console.log(this.questionsAsked);
                $('.question').text(this.questionArray[this.currentQuestion].questionText);
            this.fillAnswerSpaces(this.questionArray[this.currentQuestion]);
        },

        //method to randomly assign one of four answer choices to each
        //of the four answer divs
        fillAnswerSpaces: function(myQuestion) {
            var random;
            var indexUsed = [];
            for (var i = 1; i <= 4; i++) {
                random = Math.floor(Math.random() * 4);
                while (indexUsed.indexOf(random) !== -1) {
                    random = Math.floor(Math.random() * 4);
                }  
               indexUsed.push(random);
               var myClassName = '.answer' + i;
               $(myClassName).text(myQuestion.answerArray[random]);
            }   
        }
    };

    //set click event handler on answer divs
    $('.answer').on('click', function(ev) {
        if (triviaGame.questionsAsked.length <= 10) {
            clearInterval(triviaGame.myTimer);
            if(ev.target.innerHTML === triviaGame.questionArray[triviaGame.currentQuestion].answerArray[0]) {
                console.log('correct!');
                triviaGame.myScore++;
                $('.message').text('Correct!');
                $('.score').text('Score: ' + triviaGame.myScore);
            }else {
                console.log('incorrect');
                $('.message').text('Incorrect!');
            }
            triviaGame.timeRemaining = 15;
            $('.time-remaining').text(triviaGame.timeRemaining);
            $('.question').text('');
            $('.answer').text('');
            setTimeout(triviaGame.start, 2000);
        } else {
            alert('game over');
        }
       
    });

    //trigger the start of the game with the enter key
    document.onkeyup = function(ev) {
        if (triviaGame.isFirstGame) {
            if (ev.keyCode === 13) {
                triviaGame.isFirstGame = false;
                triviaGame.buildQuestionArray();
                $('.enter').text('')
                triviaGame.start();
                ;
            }
        }
    }

});



