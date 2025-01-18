const battleBackgroundImage = new Image();
battleBackgroundImage.src = './img/battleBackground.png';
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
});

let winCounter = 1;

const Microwave = new Chara(chara.Microwave);
const you = new Chara(chara.you);

const renderedSprites = [Microwave, you];

let battleAnimationId;

function animateBattle() {
    battleAnimationId = window.requestAnimationFrame(animateBattle);
    battleBackground.draw();

    renderedSprites.forEach((sprite) => {
        sprite.draw();
    });
}

animate();



function generateAnswerButtons(questionNo) {
    const answersBox = document.querySelector('#answersBox');
    // Clear the previous answers first
    answersBox.innerHTML = '';
    
    // Loop over the `answers` object and create a button for each entry
    const answerCategory = answers[questionNo]; // Access the nested object for category "1"
    
    // Loop over the answer objects inside the category
    Object.keys(answerCategory).forEach((answerKey) => {
        const answer = answerCategory[answerKey]; // Get the answer object
        
        // Create a new button for this answer
        const button = document.createElement('button');
        button.innerHTML = answer.name; // Set the button text to the answer's name
        answersBox.append(button);
        
        // Add event listener to handle button clicks
        button.addEventListener('click', () => {
            const selectedAnswer = answer; // Get the selected answer
            
            // Check if the selected answer is correct
            if (selectedAnswer.outcome === 'correct') {
                // Only deal damage if the answer is correct
                you.answer({
                    answer: selectedAnswer,  
                    recipient: Microwave,
                    renderedSprites
                });
            } else {
                // If the selected answer is incorrect, let Microwave take damage
                Microwave.answer({
                    answer: selectedAnswer,
                    recipient: you,
                    renderedSprites
                });
            }
            console.log(you.health, "you");
            console.log(Microwave.health, "microwave");
            
            // Check if Microwave's health is 0 or less and trigger fainting
            if (Microwave.health <= 0) {
                Microwave.faint();
            
                // Append the current enemy to defeatedEnemies in local storage
                const currentEnemy = localStorage.getItem('currentEnemy'); // Get the current enemy
                let defeatedEnemies = JSON.parse(localStorage.getItem('defeatedEnemies')) || []; // Retrieve or initialize defeatedEnemies array
            
                if (currentEnemy && !defeatedEnemies.includes(currentEnemy)) {
                    defeatedEnemies.push(currentEnemy); // Add current enemy to defeatedEnemies
                    localStorage.setItem('defeatedEnemies', JSON.stringify(defeatedEnemies)); // Update local storage
                }
            
                winCounter++;
                gsap.to('#overlappingDiv', {
                    display: 'block',
                    opacity: 1,
                    onComplete: () => {
                        cancelAnimationFrame(battleAnimationId);
                        animate();
                        document.querySelector('#userInterface').style.display = 'none';
            
                        gsap.to('#overlappingDiv', {
                            opacity: 0
                        });
                        checkWinCondition();
                    }
                });
            }                
            
            if (you.health <= 0) {
                you.faint();
                gsap.to('#overlappingDiv', {
                    display: 'block',
                    opacity: 1,
                    onComplete: () => {
                        cancelAnimationFrame(battleAnimationId);
                        animate();
                        document.querySelector('#userInterface').style.display = 'none';

                        gsap.to('#overlappingDiv', {
                            opacity: 0
                        });
                    }
                });
            }
        });
    });
}

function generateQuestion(questionNo) {
    const questionBox = document.querySelector('#questionBox'); // Target the div for the question

    // Clear the previous question first
    questionBox.innerHTML = '';

    // Retrieve the answer category for the given question number
    const answerCategory = answers[questionNo];

    if (!answerCategory) {
        console.error(`No question found for question number: ${questionNo}`);
        return;
    }

    // Extract the question text from the first answer object
    const questionText = Object.values(answerCategory)[0].question;

    // Create a div to display the question
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-text'); // Optional: Add a class for styling
    questionDiv.innerText = questionText; // Set the question text

    // Append the question to the questionBox
    questionBox.appendChild(questionDiv);
}

// Handle dialogue box click to hide it
document.querySelector('#dialogueBox').addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
    console.log('clicked dialogue');
});



function resetBattle() {
    document.querySelector('#dialogueBox').style.display = 'none';
    document.querySelector('#userInterface').style.display = 'block';
    document.querySelector('#enemyHealthBar').style.width = '100%';
    document.querySelector('#playerHealthBar').style.width = '100%';
    you.health = 100;
    Microwave.health = 100;
    gsap.to(you, {
        opacity: 1
    });
    gsap.to(Microwave, {
        opacity: 1
    });
    you.position.x = 280;
    you.position.y = 325;
    Microwave.position.x = 650;
    Microwave.position.y = -50;
    you.draw();
    Microwave.draw();
    console.log(winCounter)
    generateQuestion(winCounter)
    generateAnswerButtons(winCounter);
    battle.initiated = false;
}

function checkWinCondition() {
    if (winCounter >= 7) {
        // Create the victory screen element
        const victoryScreen = document.createElement('div');
        victoryScreen.classList.add('victory-screen');
        victoryScreen.innerHTML = `
            <h1>Congratulations!</h1>
            <p>You have defeated all six bosses and won the game!</p>
        `;

        // Append the victory screen to the body
        document.body.appendChild(victoryScreen);

        // Style the victory screen
        victoryScreen.style.position = 'absolute'; // Align it within the game area
        victoryScreen.style.top = '0'; // Align with the top of the game area
        victoryScreen.style.width = '960px'; // Fixed width for the game display
        victoryScreen.style.height = '600px'; // Fixed height for the game display
        victoryScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Background with transparency
        victoryScreen.style.color = '#fff'; // White text color
        victoryScreen.style.textAlign = 'center'; // Center-align the text
        victoryScreen.style.borderRadius = '0'; // No border rounding
        victoryScreen.style.boxSizing = 'border-box'; // Include padding in dimensions
        victoryScreen.style.margin = '0'; // Remove any margin
        victoryScreen.style.padding = '0'; // Remove any padding
        victoryScreen.style.display = 'flex'; // Flexbox for content alignment
        victoryScreen.style.flexDirection = 'column'; // Stack items vertically
        victoryScreen.style.alignItems = 'center'; // Center items horizontally
        victoryScreen.style.justifyContent = 'center'; // Center items vertically
        victoryScreen.style.zIndex = '9999'; // Ensure it's on top of everything
        

        // Style the heading and text
        const heading = victoryScreen.querySelector('h1');
        heading.style.margin = '0';
        heading.style.fontSize = '2.5rem';

        const paragraph = victoryScreen.querySelector('p');
        paragraph.style.margin = '10px 0 65px';
        paragraph.style.fontSize = '1.2rem';

        cancelAnimationFrame(battleAnimationId); // Stop the game loop
    }
}




