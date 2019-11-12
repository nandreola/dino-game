const dinoApp = {};

// Array of dinosaur images and multiple choices
dinoApp.dino = [
    {
        type: 'Triceratops',
        image: 'assets/triceratops.jpg',
        alt: 'Triceratops',
        choices: [
            {
                opt1: 'T-Rex',
                opt2: 'Stegosaurus',
                opt3: 'Velociraptor',
                opt4: 'Triceratops'
            }
        ]
    },
    {
        type: 'Stegosaurus',
        image: 'assets/stegosaurus.jpg',
        alt: 'Stegosaurus',
        choices: [
            {
                opt1: 'Stegosaurus',
                opt2: 'T-Rex',
                opt3: 'Pterodactyl',
                opt4: 'Ankylosaurus'
            }
        ]
    },
    {
        type: 'Ankylosaurus',
        image: 'assets/ankylosaurus.jpg',
        alt: 'Ankylosaurus',
        choices: [
            {
                opt1: 'Stegosaurus',
                opt2: 'Ankylosaurus',
                opt3: 'Pterodactyl',
                opt4: 'Allosaurus'
            }
        ]
    }
]