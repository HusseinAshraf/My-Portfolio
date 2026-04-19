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
  { href: '#about',      label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills',     label: 'skills' },
  { href: '#projects',   label: 'projects' },
  { href: '#contact',    label: 'contact' },
];

export const PROJECTS = [
  // ── Featured (shown by default) ──
  {
    key: 'Kamma',
    featured: true,
    tech: ['Angular', 'Tailwind CSS', 'PrimeNG', 'TypeScript', 'ngx-translate'],
    filterId: ['Angular', 'Tailwind'],
    image: kamma,
    gitHubLink: '',
    liveDemoLink: 'https://kamma-zeta.vercel.app/landingpage/home',
  },
  {
    key: 'ECommerceAngular',
    featured: true,
    image: EcommerceAngular,
    gitHubLink: 'https://github.com/HusseinAshraf/ECommerce_Angular.git',
    liveDemoLink: 'https://e-commerce-angular-iota.vercel.app/login',
    tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'ngx-translate'],
    filterId: ['Angular', 'Tailwind'],
  },
  {
    key: 'Fresh_Cart',
    featured: true,
    image: project1,
    gitHubLink: 'https://github.com/HusseinAshraf/freshCart-ecommerce.git',
    liveDemoLink: 'https://husseinashraf.github.io/freshCart-ecommerce/#/login',
    tech: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'Context API'],
    filterId: ['React', 'Bootstrap'],
  },
  {
    key: 'Al-Amen',
    featured: true,
    image: alamen,
    gitHubLink: '',
    liveDemoLink: 'https://al-amen.vercel.app/',
    tech: ['React.js', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['React', 'Bootstrap'],
  },
  {
    key: 'Admin_Dashboard',
    featured: true,
    image: project2,
    gitHubLink: 'https://github.com/HusseinAshraf/Statck-Dashboard.git',
    liveDemoLink: 'https://husseinashraf.github.io/Statck-Dashboard/',
    tech: ['React.js', 'JavaScript (ES6+)', 'Material UI', 'Context API'],
    filterId: ['React', 'Material UI'],
  },
  {
    key: 'Foodie',
    featured: true,
    image: project3,
    gitHubLink: 'https://github.com/HusseinAshraf/Foodie.git',
    liveDemoLink: 'https://husseinashraf.github.io/Foodie/',
    tech: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Context API'],
    filterId: ['React', 'Tailwind'],
  },
  // ── Other projects ──
  {
    key: 'Data_List',
    featured: false,
    image: project18,
    gitHubLink: 'https://github.com/HusseinAshraf/DataList.git',
    liveDemoLink: 'https://data-list-jade.vercel.app/',
    tech: ['React.js', 'Tailwind CSS', 'Axios', 'i18next'],
    filterId: ['React', 'Tailwind'],
  },
  {
    key: 'Yummy_(API-based project)',
    featured: false,
    image: project4,
    gitHubLink: 'https://github.com/HusseinAshraf/yummy.git',
    liveDemoLink: 'https://husseinashraf.github.io/yummy/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    key: 'Weather_API',
    featured: false,
    image: project5,
    gitHubLink: 'https://github.com/HusseinAshraf/weather.git',
    liveDemoLink: 'https://husseinashraf.github.io/weather/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs'],
    filterId: ['JS / API'],
  },
  {
    key: 'Rayal_Park',
    featured: false,
    image: project6,
    gitHubLink: 'https://github.com/HusseinAshraf/Rayal-Park.git',
    liveDemoLink: 'https://husseinashraf.github.io/Rayal-Park/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    key: 'Smart_Login',
    featured: false,
    image: project7,
    gitHubLink: 'https://github.com/HusseinAshraf/Smart-login.git',
    liveDemoLink: 'https://husseinashraf.github.io/Smart-login/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    key: 'Bookmark_CRUD',
    featured: false,
    image: project8,
    gitHubLink: 'https://github.com/HusseinAshraf/Bookmark-crud.git',
    liveDemoLink: 'https://husseinashraf.github.io/Bookmark-crud/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    key: 'CRUD',
    featured: false,
    image: project9,
    gitHubLink: 'https://github.com/HusseinAshraf/Crud.git',
    liveDemoLink: 'https://husseinashraf.github.io/Crud/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    key: 'Exam_Mentor',
    featured: false,
    image: project17,
    gitHubLink: 'https://github.com/HusseinAshraf/quiz-app-SNS.git',
    liveDemoLink: 'https://husseinashraf.github.io/quiz-app-SNS/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs'],
    filterId: ['JS / API'],
  },
  {
    key: 'Daily_Reminders',
    featured: false,
    image: project10,
    gitHubLink: 'https://github.com/HusseinAshraf/Quotes-Quiz.git',
    liveDemoLink: 'https://husseinashraf.github.io/Quotes-Quiz/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    filterId: ['JS / API', 'Bootstrap'],
  },
  {
    key: 'TICTAC_TOE',
    featured: false,
    image: project13,
    gitHubLink: 'https://github.com/HusseinAshraf/TIC-TAC-TOE.git',
    liveDemoLink: 'https://husseinashraf.github.io/TIC-TAC-TOE/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    filterId: ['JS / API'],
  },
  {
    key: 'Stop_Watch',
    featured: false,
    image: project14,
    gitHubLink: 'https://github.com/HusseinAshraf/stop-Watch.git',
    liveDemoLink: 'https://husseinashraf.github.io/stop-Watch/',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    filterId: ['JS / API'],
  },
  {
    key: 'Daniels',
    featured: false,
    image: project11,
    gitHubLink: 'https://github.com/HusseinAshraf/Daniels.git',
    liveDemoLink: 'https://husseinashraf.github.io/Daniels/',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    filterId: ['Bootstrap'],
  },
  {
    key: 'DevFolio',
    featured: false,
    image: project12,
    gitHubLink: 'https://github.com/HusseinAshraf/DevFolio.git',
    liveDemoLink: 'https://husseinashraf.github.io/DevFolio/',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    filterId: ['Bootstrap'],
  },
  {
    key: 'Meallify',
    featured: false,
    image: project15,
    gitHubLink: 'https://github.com/HusseinAshraf/Mealify.git',
    liveDemoLink: 'https://husseinashraf.github.io/Mealify/',
    tech: ['HTML5', 'CSS3'],
    filterId: ['Html / Css'],
  },
  {
    key: 'Fokir',
    featured: false,
    image: project16,
    gitHubLink: 'https://github.com/HusseinAshraf/Fokir.git',
    liveDemoLink: 'https://husseinashraf.github.io/Fokir/',
    tech: ['HTML5', 'CSS3'],
    filterId: ['Html / Css'],
  },
];
