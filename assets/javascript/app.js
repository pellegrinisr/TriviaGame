$(document).ready(function() {
    var triviaGame = {
        //properties
        questionArray: [],
        questionsAsked: [],
        timeRemaining: 15,
        isFirstGame: true,
        myTimer: null,
        currentQuestion: null,
        myScore: 0,
        questionsTimedOut: 0,
        questionsIncorrect: 0,
        hasAnswered: false,
        correctAnswersound: null,
        incorrectAnswerSound: null,

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
                $('.card').hide();
                $('.container').height(287);
                triviaGame.questionsTimedOut++;
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
            var question11 = new Question('What is the name for the Greek goddess of victory?');
            question11.answerArray[0] = 'Nike';
            question11.answerArray[1] = 'Athena';
            question11.answerArray[2] = 'Aphrodite';
            question11.answerArray[3] = 'Hera';
            this.questionArray.push(question11);
            var question12 = new Question('Which one of the seven ancient wonders of the world is still standing today?');
            question12.answerArray[0] = 'Great Pyramid of Giza';
            question12.answerArray[1] = 'Statue of Zeus at Olympia';
            question12.answerArray[2] = 'Lighthouse of Alexandria';
            question12.answerArray[3] = 'Colossus of Rhodes';
            this.questionArray.push(question12);
            var question13 = new Question("Who wrote the novel 'To Kill A Mockingbird', published in 1960?");
            question13.answerArray[0] = 'Harper Lee';
            question13.answerArray[1] = 'Truman Capote';
            question13.answerArray[2] = 'J.D. Salinger';
            question13.answerArray[3] = 'John Steinbeck';
            this.questionArray.push(question13);
            var question14 = new Question('What city is traditionally said to be built on seven hills?');
            question14.answerArray[0] = 'Rome';
            question14.answerArray[1] = 'Paris';
            question14.answerArray[2] = 'Philadelphia';
            question14.answerArray[3] = 'Mexico City';
            this.questionArray.push(question14);
            var question15 = new Question('In 1893, which country was the first to give women the right to vote?');
            question15.answerArray[0] = 'New Zealand';
            question15.answerArray[1] = 'Great Britain';
            question15.answerArray[2] = 'The United States';
            question15.answerArray[3] = 'Belgium';
            this.questionArray.push(question15);
        },

        //method to display each question in a random order
        //will keep track of questions already asked
        //calls the fillAnswerSpaces method
        displayQuestion: function() {
            var randomNum;
            $('.message').text('');
            console.log('triviaGame.questionsAsked.length: ' + triviaGame.questionsAsked.length);
            if (triviaGame.questionsAsked.length < triviaGame.questionArray.length) {
                do { 
                    var alreadyAsked = false; 
                    randomNum = Math.floor(Math.random() * this.questionArray.length);
                    console.log(randomNum);
                    for (var j = 0; j < this.questionsAsked.length; j++) {
                        if (randomNum === this.questionsAsked[j]) {
                            alreadyAsked = true;
                        }
                    }
                    console.log('already asked? ' + alreadyAsked);
                } while (alreadyAsked);
                this.currentQuestion = randomNum;
                this.questionsAsked.push(this.currentQuestion);
                console.log(this.questionsAsked);
                $('.question').text(this.questionArray[this.currentQuestion].questionText);
                this.fillAnswerSpaces(this.questionArray[this.currentQuestion]);
                //problem getting the 15th question to display                              
            } 
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
            $('.container').height('auto');
            $('.card').show();   
        },

        resetVariables: function() {
            console.log('resetVariables function called');
            this.myScore = 0;
            console.log('resetVariables myScore: ' + this.myScore);
            this.questionsIncorrect = 0;
            console.log('resetVariables questionsIncorrect: ' + this.questionsIncorrect);
            this.questionsTimedOut = 0;
            console.log('resetVariables questionsTimedOut: ' + this.questionsTimedOut);
            this.timeRemaining = 15;
            console.log('resetVariables timeRemaining: ' + this.timeRemaining);
            var length = triviaGame.questionsAsked.length;
            for (var i = 0; i < length; i++) {
                triviaGame.questionArray.pop();
                triviaGame.questionsAsked.pop();
            }
            console.log('resetVariables questionsAsked: ' + this.questionsAsked + ' resetVariables questionArray: ' + this.questionArray);
        }, 

        checkIfGameOver: function() {
            if (this.questionsAsked.length === this.questionArray.length) {
                console.log('myScore: ' + this.myScore);
                $('.message').text('Game over!');
                $('.enter').show();
                $('.card').show();
                $('.question').text('Score Summary');
                $('.answer1').text('Number Correct: ' + this.myScore);
                $('.answer2').text('Number Incorrect: ' + this.questionsIncorrect);
                $('.answer3').text('Number Timed Out: ' + this.questionsTimedOut);
                $('.answer4').text('Percentage Correct: ' + this.myScore / this.questionsAsked.length);
                this.isFirstGame = true;
                clearInterval(triviaGame.myTimer);
                this.resetVariables();
                
            } else {
                triviaGame.timeRemaining = 15;               
                $('.question').text('');
                $('.answer').text('');
                $('.card').hide();
                $('.container').height(287);
                setTimeout(triviaGame.start, 2000);
            }
            $('.time-remaining').text(this.timeRemaining);
        }
    };

    //set click event handler on answer divs
    $('.answer').on('click', function(ev) {
        if (triviaGame.questionsAsked.length <= triviaGame.questionArray.length && !triviaGame.isFirstGame) {
            clearInterval(triviaGame.myTimer);
            if(ev.target.innerHTML === triviaGame.questionArray[triviaGame.currentQuestion].answerArray[0]) {
                console.log('correct!');
                triviaGame.correctAnswersound.play();
                triviaGame.myScore++;
                console.log('myScore (just after increment): ' + triviaGame.myScore); 
                $('.message').text('Correct!');
                
            }else {
                console.log('incorrect');
                triviaGame.incorrectAnswerSound.play();
                $('.message').text('Incorrect!');
                triviaGame.questionsIncorrect++;
            }
            $('.score').text('Score: ' + triviaGame.myScore);
            triviaGame.checkIfGameOver();
        } 
    });

    $('.answer').hover(function() {
        $('.answer').css('cursor', 'pointer');
    })

    //trigger the start of the game with the enter key
    document.onkeyup = function(ev) {
        if (triviaGame.isFirstGame) {
            if (ev.keyCode === 13) {
                triviaGame.isFirstGame = false;
                triviaGame.buildQuestionArray();
                $('.enter').hide();
                triviaGame.start();
                
            }
        }
    }

    //create the audio elements and store them in the global variables
    //set the attribute of each element to the appropriate audio clip
    triviaGame.correctAnswersound = document.createElement('audio');
    triviaGame.correctAnswersound.setAttribute('src', 'assets/sounds/Correct-Answer-Soundeffect.mp3');
    triviaGame.incorrectAnswerSound = document.createElement('audio');
    triviaGame.incorrectAnswerSound.setAttribute('src', 'assets/sounds/Wrong-answer-sound-effect.mp3');
});
