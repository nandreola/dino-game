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

const jsDinoImage = document.getElementById('jsDinoImage')
const jsMultipleChoice = document.getElementById('jsMultipleChoice')
const current = dinoApp.dinos[0];

// Display image on the screen
dinoApp.setGame = function (dino) {

    // Clear content
    dinoApp.clearContent();

    const img = document.createElement('img');
    img.src = dino.image;
    img.alt = dino.alt;
    jsDinoImage.append(img);

    dinoApp.displayMultipleChoice(dino.choices)
}

// Function to clear dynamic content
dinoApp.clearContent = function () {
    jsDinoImage.innerHTML = '';
    jsMultipleChoice.innerHTML = '';

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

dinoApp.setGame(current);

// Find out whether the answer is correct or not
document.getElementById('jsMultipleChoice').addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('btnChoice')) {

        if (current.type === target.textContent) {
            alert('Yay! You got it! Click "next" to move to the next one');
        } else {
            alert('Not this one! Try again');
        }
    }
})