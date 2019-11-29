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
const jsBtnNext = document.getElementById('jsBtnNext');

let current = 0;

// Display image and multiple choice on the screen
dinoApp.setGame = dino => {
    // Clear content
    dinoApp.clearContent();
    jsBtnNext.classList.remove('show');

    const img = document.createElement('img');
    img.src = dino.image;
    img.alt = dino.alt;
    jsDinoImage.append(img);

    dinoApp.createTiles();
    dinoApp.displayMultipleChoice(dino.choices)
}

// Function to clear dynamic content
dinoApp.clearContent = () => {
    jsDinoImage.innerHTML = '';
    jsMultipleChoice.innerHTML = '';
    jsTiles.innerHTML = '';
}

// Display multiple choice on the screen
dinoApp.displayMultipleChoice = choices => {
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
dinoApp.createTiles = () => {
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

    // disable options 
    if (target.classList.contains('disabled')) {
        return
    }

    // find element with flipped class
    const el = document.querySelectorAll('.flipped');

    if (target.classList.contains('btnChoice') && el.length) {

        if (dinoApp.dinos[current].type === target.textContent) {
            Swal.fire({
                title: 'Congrats!',
                text: 'You got it!',
                icon: 'success'
            })
            dinoApp.revealImage();
            dinoApp.showNextBtn();
            dinoApp.disableOptions();

        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Not this one. Try again!',
                icon: 'error'
            })
        }
    // if no tile is flipped, ask user to flip 
    } else {
        Swal.fire({
            title: 'Hmm...',
            text: 'You haven\'t flipped any tile yet',
            icon: 'warning'
        })
    }
})

// reveal full image when user gets the right answer
dinoApp.revealImage = () => {
    jsTiles.classList.add('remove');
}

// disable options once user gets the correct answer
dinoApp.disableOptions = () => {
    const options = document.querySelectorAll('.btnChoice');
    options.forEach(function(option) {
        option.classList.add('disabled');
    })
}

// Create a button to play next game when user gets the right answer
dinoApp.showNextBtn = () => {   
    if (current < dinoApp.dinos.length - 1) {
        jsBtnNext.classList.add('show');
    }
}

// Show next dinosaur when user clicks on 'next' button
jsBtnNext.addEventListener('click', function() {
    current = current + 1;
    dinoApp.setGame(dinoApp.dinos[current]);
    jsTiles.classList.remove('remove');
})