const dinoApp = {};

// Array of dinosaur images and multiple choices
dinoApp.dinos = [
    {
        type: 'Triceratops',
        image: 'assets/triceratops.jpg',
        alt: 'Triceratops',
        choices: [
            'T-Rex',
            'Stegosaurus',
            'Velociraptor',
            'Triceratops'  
        ]
    },
    {
        type: 'Stegosaurus',
        image: 'assets/stegosaurus.jpg',
        alt: 'Stegosaurus',
        choices: [
            'Stegosaurus',
            'T-Rex',
            'Pterodactyl',
            'Ankylosaurus'
        ]
    },
    {
        type: 'Ankylosaurus',
        image: 'assets/ankylosaurus.jpg',
        alt: 'Ankylosaurus',
        choices: [
            'Stegosaurus',
            'Ankylosaurus',
            'Pterodactyl',
            'Allosaurus'
        ]
    }
]

const jsDinoImage = document.getElementById('jsDinoImage');
const jsMultipleChoice = document.getElementById('jsMultipleChoice');
const jsTiles = document.getElementById('jsTiles');

let current = 0;

// Display image on the screen
dinoApp.setGame = function (dino) {
    // Clear content
    dinoApp.clearContent();

    const img = document.createElement('img');
    img.src = dino.image;
    img.alt = dino.alt;
    jsDinoImage.append(img);

    dinoApp.createTiles();
    dinoApp.displayMultipleChoice(dino.choices)
}

// Function to clear dynamic content
dinoApp.clearContent = function () {
    jsDinoImage.innerHTML = '';
    jsMultipleChoice.innerHTML = '';
    jsTiles.innerHTML = '';
}

// Display multiple choice on the screen
dinoApp.displayMultipleChoice = function (choices) {
    choices.forEach(function(choice) {
        const eachChoice = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('btnChoice');

        // Append button inside li
        eachChoice.append(button);

        jsMultipleChoice.append(eachChoice);
    })
}

// Display tiles over the image
dinoApp.createTiles = function () {
    const numOfTiles = 48;
    for (let i = 0; i < numOfTiles; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        jsTiles.append(tile);
    }
}

dinoApp.setGame(dinoApp.dinos[current]);

// Flip tile when clicked
jsTiles.addEventListener('click', function(e) {
    const target = e.target;

    if(target.classList.contains('tile')) {
        target.classList.add('flipped');
    }
})

// Find out whether the answer is correct or not
jsMultipleChoice.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('btnChoice')) {

        if (dinoApp.dinos[current].type === target.textContent) {
            alert('Yay! You got it!');
            dinoApp.revealImage();

        } else {
            alert('Not this one! Try again');
        }
    }
})

// reveal full image when user gets the right answer
dinoApp.revealImage = function() {
    jsTiles.classList.add('remove');
}

// Create a button to play next game
dinoApp.next = function() {
    current = current + 1
    dinoApp.setGame(dinoApp.dinos[current]);
    // hide
}

