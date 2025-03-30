// Riddles data organized by categories
const riddles = [
    // Space Riddles
    {
        question: "I'm your home and the third from the Sun. I've got water and life—aren't I the fun one? What am I?",
        options: ["Mars", "Venus", "Jupiter", "Earth"],
        correct: 3
    },
    {
        question: "I'm the planet with the most bling, I've got rings you can't help noticing! What am I?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1
    },
    {
        question: "I'm red all over, with dust in the air. Some people think I might have had water to share. What am I?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correct: 0
    },
    {
        question: "I'm closest to the Sun, but I don't get much attention. I'm small and speedy—just thought I'd mention! What am I?",
        options: ["Venus", "Mars", "Earth", "Mercury"],
        correct: 3
    },
    // Science Riddles
    {
        question: "I'm not alive, but I can grow. I don't have lungs, but I need air. I'm not a plant, but I need water. What am I?",
        options: ["Ice", "Cloud", "Wind", "Fire"],
        correct: 1
    },
    {
        question: "I change shape but never disappear. I can be solid, liquid, or gas, and I'm found everywhere. What am I?",
        options: ["Water", "Air", "Earth", "Fire"],
        correct: 0
    },
    {
        question: "I live in the sky but fall to the ground. I'm cold and white and make no sound. What am I?",
        options: ["Cloud", "Snow", "Rain", "Hail"],
        correct: 1
    },
    {
        question: "I'm hot and bright, but don't touch! I shoot up from the Earth in a big rush. What am I?",
        options: ["The sun", "Lightning", "Fire", "A volcano"],
        correct: 3
    },
    // Easy Riddles
    {
        question: "How many months of the year have 28 days?",
        options: ["None of them", "Only February", "Just January", "All of them"],
        correct: 3
    },
    {
        question: "What has hands and a face, but can't hold anything or smile?",
        options: ["A person", "A robot", "A statue", "A clock"],
        correct: 3
    },
    {
        question: "It belongs to you, but your friends use it more. What is it?",
        options: ["Your phone", "Your house", "Your car", "Your name"],
        correct: 3
    },
    // Math Riddles
    {
        question: "When Grant was 8, his brother was half his age. Now, Grant is 14. How old is his brother?",
        options: ["7", "12", "16", "10"],
        correct: 3
    },
    {
        question: "Two fathers and 2 sons spent the day fishing, but only caught 3 fish. This was enough for each of them to have one fish. How is this possible?",
        options: ["They shared the fish", "They caught more fish", "They didn't eat all the fish", "There were 3 people"],
        correct: 3
    },
    // Animal Riddles
    {
        question: "What jumps when it walks and sits when it stands?",
        options: ["A rabbit", "A frog", "A cat", "A kangaroo"],
        correct: 3
    },
    {
        question: "I sleep during the day and fly at night, but I have no feathers to aid my flight. What am I?",
        options: ["An owl", "A moth", "A butterfly", "A bat"],
        correct: 3
    },
    {
        question: "I can honk without using a horn. What am I?",
        options: ["A duck", "A swan", "A penguin", "A goose"],
        correct: 3
    },
    // Letter Riddles
    {
        question: "I am the beginning of everything, the end of everywhere. I'm the beginning of eternity, the end of time & space. What am I?",
        options: ["The letter A", "The letter I", "The letter O", "The letter E"],
        correct: 3
    },
    {
        question: "What is in seasons, seconds, centuries and minutes but not in decades, years or days?",
        options: ["The letter S", "The letter C", "The letter M", "The letter N"],
        correct: 3
    },
    // Holiday Riddles
    {
        question: "I come in many colors, so beautiful and bright, I turn homes into a beautiful sight. What am I?",
        options: ["Rainbow", "Flowers", "Paintings", "Christmas lights"],
        correct: 3
    },
    {
        question: "Which one of Santa's reindeer can be seen on Valentine's day?",
        options: ["Rudolph", "Dasher", "Prancer", "Cupid"],
        correct: 3
    },
    {
        question: "What kind of ball doesn't bounce?",
        options: ["A tennis ball", "A basketball", "A golf ball", "A snowball"],
        correct: 3
    },
    // New Unique Riddles
    {
        question: "What has thirteen hearts, but no other organs?",
        options: ["A deck of cards", "A clock", "A calendar", "A book"],
        correct: 0
    },
    {
        question: "What can run but cannot walk?",
        options: ["A river", "A car", "A train", "A bike"],
        correct: 0
    },
    {
        question: "What has a mouth but can't speak?",
        options: ["A river", "A cave", "A bottle", "A door"],
        correct: 0
    },
    {
        question: "What has one eye but can't see?",
        options: ["A needle", "A button", "A coin", "A ring"],
        correct: 0
    },
    {
        question: "Everyone has me but no one can lose me. What am I?",
        options: ["A shadow", "A name", "A voice", "A reflection"],
        correct: 0
    }
];

let currentRiddleIndex = 0;
let score = 0;
let canAnswer = true;

// DOM elements
const riddleText = document.getElementById('riddle-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-riddle');
const scoreElement = document.getElementById('score');

// Function to display current riddle
function displayRiddle() {
    const riddle = riddles[currentRiddleIndex];
    riddleText.textContent = riddle.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create new options
    riddle.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    // Reset state
    canAnswer = true;
    nextButton.style.display = 'none';
}

// Function to check answer
function checkAnswer(selectedIndex) {
    if (!canAnswer) return;
    
    const riddle = riddles[currentRiddleIndex];
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    canAnswer = false;
    
    // Show correct/incorrect states
    options.forEach((option, index) => {
        if (index === riddle.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score
    if (selectedIndex === riddle.correct) {
        score++;
        scoreElement.textContent = score;
    }
    
    // Show next button
    nextButton.style.display = 'block';
}

// Function to move to next riddle
function nextRiddle() {
    currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
    displayRiddle();
}

// Event listeners
nextButton.addEventListener('click', nextRiddle);

// Start the game
displayRiddle(); 
