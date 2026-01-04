import project1 from '../images/fresh cart.png';
import project2 from '../images/dashboard.PNG';
import project3 from '../images/Foodie.PNG';
import project4 from '../images/Yummy.PNG';
import project5 from '../images/weather.PNG';
import project6 from '../images/Rayel park.PNG';
import project7 from '../images/smartSystem.PNG';
import project8 from '../images/BookMark.PNG';
import project9 from '../images/crud.PNG';
import project10 from '../images/dailyRemender.PNG';
import project11 from '../images/danils.PNG';
import project12 from '../images/DevFolio.PNG';
import project13 from '../images/Tic Tac.PNG';
import project14 from '../images/stopWatch.PNG';
import project15 from '../images/Meallify.PNG';
import project16 from '../images/Fokir.PNG';
import project17 from '../images/ExamMentor.PNG';
import project18 from '../images/DataList.PNG';
import EcommerceAngular from '../images/Ecommerce-Angular.PNG';
import alamen from '../images/al-amen.png';
import kamma from '../images/kamma.png';

export const MENULINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

export const PROJECTS = [

  // React

  {
    name: "Kamma",
    description: "A freelance project for a pharmacy, developed as a modern Angular web application styled with Tailwind CSS and built using PrimeNG components, featuring responsive UI elements and a smooth user experience.",
    tech: ["Angular", "Tailwind CSS", "PrimeNG", "TypeScript", "ngx-translate"],
    filterId: ['Angular', 'Tailwind'],
    image: kamma,
    gitHubLink: "",
    liveDemoLink: "https://kamma-zeta.vercel.app/landingpage/home"
  },
  {
    name: 'Fresh_Cart',
    description: 'A full-featured e-commerce web application built with React and Context API, allowing users to browse products, manage a shopping cart, and complete orders through a responsive and user-friendly interface.',
    image: project1,
    gitHubLink: 'https://github.com/HusseinAshraf/freshCart-ecommerce.git',
    liveDemoLink: 'https://husseinashraf.github.io/freshCart-ecommerce/#/login',
    tech: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'Context API'],
    filterId: ['React', 'Bootstrap'],
  },
  {
    name: 'Al-Amen',
    description: 'A corporate website developed with React to showcase Al-Amen Landscape Company services, including agriculture, landscaping, and hardscaping, with a clean design and responsive layout.',
    image: alamen,
    gitHubLink: '',
    liveDemoLink: 'https://al-amen.vercel.app/',
    tech: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'Context API'],
    filterId: ['React', 'Bootstrap'],
  },
  {
    name: 'Admin_Dashboard',
    description: 'A data management dashboard built using React and Material UI, providing administrators with tools to visualize, manage, and organize data efficiently through a modern UI.',
    image: project2,
    gitHubLink: 'https://github.com/HusseinAshraf/Statck-Dashboard.git',
    liveDemoLink: 'https://husseinashraf.github.io/Statck-Dashboard/',
    tech: ['React.js', 'JavaScript (ES6+)', 'Material UI', 'Context API'],
    filterId: ['React', 'Material UI'],
  },
  {
    name: 'ECommerceAngular',
    description: 'An Angular-based e-commerce website using TypeScript and Tailwind CSS, featuring product listings, authentication, and multilingual support via ngx-translate.',
    image: EcommerceAngular,
    gitHubLink: 'https://github.com/HusseinAshraf/ECommerce_Angular.git',
    liveDemoLink: 'https://e-commerce-angular-iota.vercel.app/login',
    tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'ngx-translate'],
    filterId: ['Angular', 'Tailwind'],
  },
  {
    name: 'Foodie',
    description: 'A React web application that enables users to explore food categories and recipes, built with Tailwind CSS and Context API for efficient state management.',
    image: project3,
    gitHubLink: 'https://github.com/HusseinAshraf/Foodie.git',
    liveDemoLink: 'https://husseinashraf.github.io/Foodie/',
    tech: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Context API'],
    filterId: ['React', 'Tailwind'],
  },
  {
    name: 'Data_List',
    description: 'A React application for fetching and displaying data using Axios, featuring internationalization with i18next and a clean UI built with Tailwind CSS.',
    image: project18,
    gitHubLink: 'https://github.com/HusseinAshraf/DataList.git',
    liveDemoLink: 'https://data-list-jade.vercel.app/',
    tech: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Axios', 'i18next'],
    filterId: ['React', 'Tailwind'],
  },

  // JS / API
  {
    name: 'Yummy_(API-based project)',
    description: 'An API-driven JavaScript application that allows users to discover food categories and recipes easily.',
    image: project4,
    gitHubLink: 'https://github.com/HusseinAshraf/yummy.git',
    liveDemoLink: 'https://husseinashraf.github.io/yummy/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Weather_API',
    description: 'A JavaScript-based weather application that fetches real-time weather data for any city using API integration.',
    image: project5,
    gitHubLink: 'https://github.com/HusseinAshraf/weather.git',
    liveDemoLink: 'https://husseinashraf.github.io/weather/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Rayal_Park',
    description: 'A hotel booking web application built with JavaScript and Bootstrap, enabling users to view rooms and simulate the booking process.',
    image: project6,
    gitHubLink: 'https://github.com/HusseinAshraf/Rayal-Park.git',
    liveDemoLink: 'https://husseinashraf.github.io/Rayal-Park/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Smart_Login',
    description: 'A secure and responsive web application providing user authentication and login functionality.',
    image: project7,
    gitHubLink: 'https://github.com/HusseinAshraf/Smart-login.git',
    liveDemoLink: 'https://husseinashraf.github.io/Smart-login/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Bookmark_CRUD',
    description: 'A CRUD-based web app for managing bookmarks, allowing users to create, read, update, and delete entries.',
    image: project8,
    gitHubLink: 'https://github.com/HusseinAshraf/Bookmark-crud.git',
    liveDemoLink: 'https://husseinashraf.github.io/Bookmark-crud/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'CRUD',
    description: 'A simple web application demonstrating Create, Read, Update, and Delete operations on data.',
    image: project9,
    gitHubLink: 'https://github.com/HusseinAshraf/Crud.git',
    liveDemoLink: 'https://husseinashraf.github.io/Crud/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Exam_Mentor',
    description: 'An educational web application that helps students prepare for exams by providing interactive quizzes and learning materials via APIs.',
    image: project17,
    gitHubLink: 'https://github.com/HusseinAshraf/quiz-app-SNS.git',
    liveDemoLink: 'https://husseinashraf.github.io/quiz-app-SNS/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap'],
    filterId: ['JS / API'],
  },
  {
    name: 'Daily_Reminders',
    description: 'A productivity web app that helps users set and manage daily reminders effectively.',
    image: project10,
    gitHubLink: 'https://github.com/HusseinAshraf/Quotes-Quiz.git',
    liveDemoLink: 'https://husseinashraf.github.io/Quotes-Quiz/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'TICTAC_TOE',
    description: 'A classic tic-tac-toe game implemented as a simple and interactive web application.',
    image: project13,
    gitHubLink: 'https://github.com/HusseinAshraf/TIC-TAC-TOE.git',
    liveDemoLink: 'https://husseinashraf.github.io/TIC-TAC-TOE/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API'],
  },
  {
    name: 'Stop_Watch',
    description: 'A lightweight web app that functions as a stopwatch for tracking time intervals.',
    image: project14,
    gitHubLink: 'https://github.com/HusseinAshraf/stop-Watch.git',
    liveDemoLink: 'https://husseinashraf.github.io/stop-Watch/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API'],
  },

  // Bootstrap
  {
    name: 'Daniels',
    description: 'A modern and responsive website template designed for a fictional restaurant.',
    image: project11,
    gitHubLink: 'https://github.com/HusseinAshraf/Daniels.git',
    liveDemoLink: 'https://husseinashraf.github.io/Daniels/',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    filterId: ['Bootstrap'],
  },
  {
    name: 'DevFolio',
    description: 'A clean and professional portfolio website template for showcasing developer projects and skills.',
    image: project12,
    gitHubLink: 'https://github.com/HusseinAshraf/DevFolio.git',
    liveDemoLink: 'https://husseinashraf.github.io/DevFolio/',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    filterId: ['Bootstrap'],
  },

  // HTML / CSS
  {
    name: 'Meallify',
    description: 'A responsive and visually appealing website template focused on food-related content.',
    image: project15,
    gitHubLink: 'https://github.com/HusseinAshraf/Mealify.git',
    liveDemoLink: 'https://husseinashraf.github.io/Mealify/',
    tech: ['HTML5', 'CSS3'],
    filterId: ['Html / Css'],
  },
  {
    name: 'Fokir',
    description: 'A simple and elegant responsive portfolio template for personal or professional use.',
    image: project16,
    gitHubLink: 'https://github.com/HusseinAshraf/Fokir.git',
    liveDemoLink: 'https://husseinashraf.github.io/Fokir/',
    tech: ['HTML5', 'CSS3'],
    filterId: ['Html / Css'],
  },
];

