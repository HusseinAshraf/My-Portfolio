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

export const MENULINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const PROJECTS = [
  //React
  {
    name: 'Fresh Cart',
    description: 'An e-commerce website for selling groceries',
    image: project1,
    gitHubLink: 'https://github.com/HusseinAshraf/freshCart-ecommerce.git',
    liveDemoLink: 'https://husseinashraf.github.io/freshCart-ecommerce/#/login',
    tech: ['React', 'JavaScript', 'Bootstrap', 'Context'],
    filterId: ['React', 'Bootstrap'],
  },
  {
    name: 'Admin Dashboard',
    description: 'A dashboard for managing data',
    image: project2,
    gitHubLink: 'https://github.com/HusseinAshraf/Statck-Dashboard.git',
    liveDemoLink: 'https://husseinashraf.github.io/Statck-Dashboard/',
    tech: ['React', 'Material UI', 'JavaScript', 'Context'],
    filterId: ['React', 'Material UI'],
  },
  {
    name: 'Foodie',
    description:
      'A web application for discovering food categories and recipes',
    image: project3,
    gitHubLink: 'https://github.com/HusseinAshraf/Foodie.git',
    liveDemoLink: 'https://husseinashraf.github.io/Foodie/',
    tech: ['React', 'Tailwind', 'JavaScript', 'Context'],
    filterId: ['React', 'Tailwind'],
  },
  {
    name: 'Data List',
    description: 'A web application for displaying data in a list format',
    image: project18,
    gitHubLink: 'https://github.com/HusseinAshraf/DataList.git',
    liveDemoLink: 'https://data-list-jade.vercel.app/',
    tech: ['React', 'Tailwind', 'JavaScript', 'Axios', 'i18next'],
    filterId: ['React', 'Tailwind'],
  },

  // Js/Api

  {
    name: 'Yummy (API-based project)',
    description:
      'A web application for discovering food categories and recipes',
    image: project4,
    gitHubLink: 'https://github.com/HusseinAshraf/yummy.git',
    liveDemoLink: 'https://husseinashraf.github.io/yummy/',
    tech: ['Html', 'Css', 'JavaScript', 'Api', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Weather API',
    description: 'A web application to get the weather of any city',
    image: project5,
    gitHubLink: 'https://github.com/HusseinAshraf/weather.git',
    liveDemoLink: 'https://husseinashraf.github.io/weather/',
    tech: ['Html', 'Css', 'JavaScript', 'Api', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Rayal Park',
    description: 'A web application for booking a hotel room',
    image: project6,
    gitHubLink: 'https://github.com/HusseinAshraf/Rayal-Park.git',
    liveDemoLink: 'https://husseinashraf.github.io/Rayal-Park/',
    tech: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Smart Login',
    description: 'A web application that provides login functionality',
    image: project7,
    gitHubLink: 'https://github.com/HusseinAshraf/Smart-login.git',
    liveDemoLink: 'https://husseinashraf.github.io/Smart-login/',
    tech: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'Bookmark CRUD',
    description:
      ' A web application for creating, reading, updating, and deleting bookmarks',
    image: project8,
    gitHubLink: 'https://github.com/HusseinAshraf/Bookmark-crud.git',
    liveDemoLink: 'https://husseinashraf.github.io/Bookmark-crud/',
    tech: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: 'CRUD',
    description:
      'A web application for creating, reading, updating, and deleting data',
    image: project9,
    gitHubLink: 'https://github.com/HusseinAshraf/Crud.git',
    liveDemoLink: 'https://husseinashraf.github.io/Crud/',
    tech: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: `Exam Mentor`,
    description:
      'Exam Mentor is a web application that helps students prepare for exams by providing quizzes and study materials',
    image: project17,
    gitHubLink: 'https://github.com/HusseinAshraf/quiz-app-SNS.git',
    liveDemoLink: 'https://husseinashraf.github.io/quiz-app-SNS/',
    tech: ['Html', 'Css', 'JavaScript', 'Api', 'Bootstrap'],
    filterId: ['JS / API'],
  },
  {
    name: `Daily Reminders"الاذكار اليومية"`,
    description: 'A web application that provides daily reminders',
    image: project10,
    gitHubLink: 'https://github.com/HusseinAshraf/Quotes-Quiz.git',
    liveDemoLink: 'https://husseinashraf.github.io/Quotes-Quiz/',
    tech: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    name: `TIC-TAC-TOE`,
    description: 'A simple tic-tac-toe game',
    image: project13,
    gitHubLink: 'https://github.com/HusseinAshraf/TIC-TAC-TOE.git',
    liveDemoLink: 'https://husseinashraf.github.io/TIC-TAC-TOE/',
    tech: ['Html', 'Css', 'Bootstrap', 'JavaScript '],
    filterId: ['JS / API'],
  },
  {
    name: `Stop-Watch`,
    description: ' A simple stopwatch web application',
    image: project14,
    gitHubLink: 'https://github.com/HusseinAshraf/stop-Watch.git',
    liveDemoLink: 'https://husseinashraf.github.io/stop-Watch/',
    tech: ['Html', 'Css', 'Bootstrap', 'JavaScript '],
    filterId: ['JS / API'],
  },
  //Bootstrap
  {
    name: `Daniels`,
    description: 'A website template for a fictional restaurant',
    image: project11,
    gitHubLink: 'https://github.com/HusseinAshraf/Daniels.git',
    liveDemoLink: 'https://husseinashraf.github.io/Daniels/',
    tech: ['Html', 'Css', 'Bootstrap'],
    filterId: ['Bootstrap'],
  },
  {
    name: `DevFolio`,
    description: 'A portfolio website template',
    image: project12,
    gitHubLink: 'https://github.com/HusseinAshraf/DevFolio.git',
    liveDemoLink: 'https://husseinashraf.github.io/DevFolio/',
    tech: ['Html', 'Css', 'Bootstrap'],
    filterId: ['Bootstrap'],
  },
  //Html-Css
  {
    name: `Meallify`,
    description: 'Meallify is a simple and responsive website template',
    image: project15,
    gitHubLink: 'https://github.com/HusseinAshraf/Mealify.git',
    liveDemoLink: 'https://husseinashraf.github.io/Mealify/',
    tech: ['Html', 'Css'],
    filterId: ['Html / Css'],
  },
  {
    name: `Fokir`,
    description: 'Fokir is a simple and responsive website template',
    image: project16,
    gitHubLink: 'https://github.com/HusseinAshraf/Fokir.git',
    liveDemoLink: 'https://husseinashraf.github.io/Fokir/',
    tech: ['Html', 'Css'],
    filterId: ['Html / Css'],
  },
];
