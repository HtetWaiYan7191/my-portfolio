import {bookStore, foodGallery, leaderBoard, mathMagicians, todolist, pokemon, spaceTraveler, mathMagiciansHome, mathMagiciansQuote, mathMagicians_calculator, bookStoreDark, bookStoreLight, foodGalleryDetails, foodGalleryHome, mealGalleryComments, mealGalleryHome, pokemonComments, pokemonHome, pokemonReservations
    ,spaceMission, spaceTravelerAbout, spaceTravelerHome,leaderBoardMain, todolistHome} from '../assets/index.js';

const projects = [
    {   
        id: 1,
        name: 'Space Travel Hub',
        description: '',
        image: spaceTraveler,
        sourceLink: '',
        liveLink:'',
        techStack:['Frontend', 'React', 'Redux', 'JavaScript'],
        cardOpen: false,
        carouselImage:[spaceTravelerHome, spaceMission, spaceTravelerAbout]
    },

    {   
        id: 2,
        name: 'Pokemon Universe',
        description: 'Pokemon Universe is a dynamic website that showcases various Pokemon and provides information about their abilities and base power. Users can actively engage with the content by expressing their reactions through likes, comments.',
        image: pokemon,
        sourceLink: '',
        liveLink:'',
        techStack: ['Frontend', 'JavaScript'],
        cardOpen: false,
        carouselImage:[pokemonHome, pokemonComments, pokemonReservations]
    },

    {   
        id: 3,
        name: 'Weather App',
        description: 'lorem',
        image: spaceTraveler,
        sourceLink: '',
        liveLink:'',
        techStack:['Frontend', 'React', 'Redux', 'JavaScript'],
        cardOpen: false,
        carouselImage:[spaceTravelerHome, spaceMission, spaceTravelerAbout]

    },

    {   
        id: 4,
        name: 'Meal Gallery',
        description: 'Meal Gallery is a captivating website that beautifully displays a list of delicious meals sourced from the mealdb API. Users can easily search for their favorite meals and explore detailed information about each dish. This project serves as a showcase of my exceptional React skills, as I bring to life an interactive platform that allows users to indulge in a visual feast of mouthwatering recipes.',
        image: foodGallery,
        sourceLink: '',
        liveLink:'',
        techStack:['Frontend','React','JavaScript'],
        cardOpen: false,
        carouselImage:[mealGalleryHome, mealGalleryComments]
    },

    {   
        id: 5,
        name: 'Book Store',
        description: 'The Bookstore Webpage is a platform that allows users to personalize their book preferences by adding their favorite books, authors, and categories.',
        image: bookStore,
        sourceLink: '',
        liveLink:'',
        techStack:['Frontend','React','JavaScript'],
        cardOpen: false,
        carouselImage:[bookStoreDark, bookStoreLight]
    },

    {   
        id: 6,
        name: 'Math Magicians',
        description: "This is a math magician's app built with HTML, CSS, and REACT in this app you can make some calculations math like addition and division..etc, also I used the external API to fetch some quotes for the app using the use effect hook.",
        image: mathMagicians,
        sourceLink: '',
        liveLink:'',
        techStack:['Frontend','React','JavaScript'],
        cardOpen: false,
        carouselImage:[mathMagiciansHome, mathMagicians_calculator, mathMagiciansQuote]
    },

    {   
        id: 7,
        name: 'Food Gallery',
        description: 'A meal gallery website is an online platform dedicated to showcasing a vast collection of food-related images, recipes, culinary creations, and gastronomic experiences. It serves as a visual feast for food enthusiasts, offering a visually appealing and inspiring journey through the world of food.',
        image: foodGallery,
        sourceLink: '',
        liveLink:'',
        techStack: ['Frontend', 'JavaScript'],
        cardOpen: false,
        carouselImage:[foodGalleryHome, foodGalleryDetails]
    },

    {   
        id: 8,
        name: 'Leader Board',
        description: 'Leaderboard is a website that displays users based on their scores, with the highest-scoring user placed at the top. You have the option to input your score and view the current top-ranked user.',
        image: leaderBoard,
        sourceLink: '',
        liveLink:'',
        techStack: ['Frontend', 'JavaScript'],
        cardOpen: false,
        carouselImage:[leaderBoardMain]

    },

    {   
        id: 9,
        name: 'To Do List',
        description: 'Efficient task management app for organizing and prioritizing your to-do list. Stay on top of your tasks, set deadlines, and boost productivity.',
        image: todolist,
        sourceLink: '',
        liveLink:'',
        techStack: ['Frontend', 'JavaScript'],
        cardOpen: false,
        carouselImage:[todolistHome]
    },
]

export default projects