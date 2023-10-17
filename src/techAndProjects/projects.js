import {bookStore,weatherAppProject,weatherDetailMobile,weatherDetailPc,weatherMainMobile,weatherMainPc,foodGallery, leaderBoard, mathMagicians, pokemon, spaceTraveler, mathMagiciansHome, mathMagiciansQuote, mathMagicians_calculator, bookStoreDark, bookStoreLight, foodGalleryDetails, foodGalleryHome, mealGalleryComments, mealGalleryHome, pokemonComments, pokemonHome, pokemonReservations
    ,spaceMission, spaceTravelerAbout,showCaseMealGallery, spaceTravelerHome,leaderBoardMain, budgetApp, budgetMobileCategory, budgetMobileHome, budgetMobileNavbar, budgetMobilePurchase, budgetMobileSplash} from '../assets/index.js';

const projects = [
    {   
        id: 1,
        name: 'Budget App',
        description: 'Budget app is a web application that allows users to perform CRUD (Create, Read, Update, Delete) operations. Users can add categories to keep track of their financial expenses. In each category, users can add purchases. On the category page, users can view the total amount of purchase items. When looking at the purchase page, users can see detailed data for each purchase.',
        image: budgetApp,
        sourceLink: 'https://github.com/HtetWaiYan7191/budget-app/',
        liveLink:'https://budget-app-ugv5.onrender.com/',
        techStack:['FullStack', 'Rails', 'PostgreSQL'],
        cardOpen: false,
        carouselImage:[budgetMobileSplash, budgetMobileHome, budgetMobileNavbar, budgetMobileCategory, budgetMobilePurchase]
    },

    {   
        id: 2,
        name: 'Space Travel Hub',
        description: 'The Space Traveler Hub is an app built with React and Redux. On the main page, it displays rockets along with their detailed explanations. The mission page allows users to view available missions. Users are also allowed to reserve missions or join meetings. In the "My Profile" page, users can see the missions they have joined and the rockets they have reserved.',
        image: spaceTraveler,
        sourceLink: 'https://github.com/Zohra-Neda/Space-Travelers-Hub',
        liveLink:'https://space-travelers-hub-h0bs.onrender.com',
        techStack:['Frontend', 'React', 'Redux', 'JavaScript'],
        cardOpen: false,
        carouselImage:[spaceTravelerHome, spaceMission, spaceTravelerAbout]
    },

    {   
        id: 3,
        name: 'Pokemon Universe',
        description: 'Pokemon Universe is a dynamic website that showcases various Pokemon and provides information about their abilities and base power. Users can actively engage with the content by expressing their reactions through likes, comments.',
        image: pokemon,
        sourceLink: 'https://github.com/HtetWaiYan7191/pokemon-universe',
        liveLink:'https://htetwaiyan7191.github.io/pokemon-universe/dist',
        techStack: ['Frontend', 'JavaScript'],
        cardOpen: false,
        carouselImage:[pokemonHome, pokemonComments, pokemonReservations]
    },

    {   
        id: 4,
        name: 'Weather App',
        description: 'The weather app is a user-friendly application that provides real-time weather information for specific locations. Users can search for different cities and view the corresponding weather information. It is a mobile-responsive website primarily built using React and Redux.',
        image: weatherAppProject,
        sourceLink: 'https://github.com/HtetWaiYan7191/weather-app',
        liveLink:'https://weather-app-8t4o.onrender.com',
        techStack:['Frontend', 'React', 'Redux', 'JavaScript'],
        cardOpen: false,
        carouselImage:[weatherMainPc, weatherDetailPc, weatherMainMobile, weatherDetailMobile]

    },

    {   
        id: 5,
        name: 'Meal Gallery',
        description: 'A meal gallery website is an online platform dedicated to showcasing a vast collection of food-related images, recipes, culinary creations, and gastronomic experiences. It serves as a visual feast for food enthusiasts, offering a visually appealing and inspiring journey through the world of food.',
        image: showCaseMealGallery,
        sourceLink: 'https://github.com/HtetWaiYan7191/meal-gallery',
        liveLink:'https://htetwaiyan7191.github.io/meal-gallery/dist',
        techStack:['Frontend','React','JavaScript'],
        cardOpen: false,
        carouselImage:[mealGalleryHome, mealGalleryComments]
    },

    {   
        id: 6,
        name: 'Book Store',
        description: 'The Bookstore Webpage is a platform that allows users to personalize their book preferences by adding their favorite books, authors, and categories.',
        image: bookStore,
        sourceLink: 'https://github.com/HtetWaiYan7191/book-store',
        liveLink:'https://book-store-1weo.onrender.com',
        techStack:['Frontend','React','JavaScript'],
        cardOpen: false,
        carouselImage:[bookStoreDark, bookStoreLight]
    },

    {   
        id: 7,
        name: 'Math Magicians',
        description: "This is a math magician's app built with HTML, CSS, and REACT in this app you can make some calculations math like addition and division..etc, also I used the external API to fetch some quotes for the app using the use effect hook.",
        image: mathMagicians,
        sourceLink: 'https://github.com/HtetWaiYan7191/math-magicians',
        liveLink:'https://math-magicians-mpwb.onrender.com',
        techStack:['Frontend','React','JavaScript'],
        cardOpen: false,
        carouselImage:[mathMagiciansHome, mathMagicians_calculator, mathMagiciansQuote]
    },

    {   
        id: 8,
        name: 'Food Gallery',
        description: 'Meal Gallery is a captivating website that beautifully displays a list of delicious meals sourced from the mealdb API. Users can easily search for their favorite meals and explore detailed information about each dish. This project serves as a showcase of my exceptional React skills, as I bring to life an interactive platform that allows users to indulge in a visual feast of mouthwatering recipes.',
        image: foodGallery,
        sourceLink: 'https://github.com/HtetWaiYan7191/react-meal-gallery',
        liveLink:'https://meal-gallery.onrender.com',
        techStack: ['Frontend', 'JavaScript'],
        cardOpen: false,
        carouselImage:[foodGalleryHome, foodGalleryDetails]
    },

    {   
        id: 9,
        name: 'Leader Board',
        description: 'Leaderboard is a website that displays users based on their scores, with the highest-scoring user placed at the top. You have the option to input your score and view the current top-ranked user.',
        image: leaderBoard,
        sourceLink: 'https://github.com/HtetWaiYan7191/leaderboard',
        liveLink:'https://htetwaiyan7191.github.io/leaderboard/dist',
        techStack: ['Frontend', 'JavaScript'],
        cardOpen: false,
        carouselImage:[leaderBoardMain]

    },
]

export default projects