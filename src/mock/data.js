import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kartik.',
  subtitle: `I'm a Backend Engineer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I graduated from Delhi Technological University with a Bachelors in Technology majoring in Software Engineering in the year 2020.',
  paragraphTwo: `Since then I've been working as a Software Engineer and have been lucky enough to work on high impact projects with very high ownership. I prefer working in fast paced companies where I can see the impact of my work and learn at a quick rate.`,
  paragraphThree: `As a hobby I like to write instrumental music & like to contribute to OSS projects while listening to LoFi music`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'confn-logo.jpg',
    title: 'Confn',
    info: 'Config management',
    info2: 'Confn is a Node JS library which provides an easily integratable solution to setup config management for Node JS applications.',
    url: 'https://www.npmjs.com/package/confn',
    repo: 'https://github.com/kartik1998/confn', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'omnia-logger.jpg',
    title: 'omnia-logger',
    info: 'App, Request Logging',
    info2: 'Omnia logger is an easily integratable logging library for nodejs for verbose request and app logging.',
    url: 'https://www.npmjs.com/package/omnia-logger',
    repo: 'https://github.com/kartik1998/omnia-logger', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'deepscan.jpg',
    title: 'Deep Scan',
    info: `Scan credentials in git repos`,
    info2: 'Deep Scan provides API’s which enable a user, organization to catch any sort of git-secrets such as AWS Keys or GCP keys in their public repositories.',
    url: 'https://gitlab.com/kartikkhk/deep_scan',
    repo: 'https://gitlab.com/kartikkhk/deep_scan', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'phonetics.png',
    title: 'Phonetics',
    info: 'Phonetic string matching',
    info2: 'Phonetics is a nodejs library for phonetic string matching which exposes phonetics algorithms: soundex, metaphone & double-metaphone algorithms.',
    url: 'https://www.npmjs.com/package/phonetics',
    repo: 'https://github.com/kartik1998/phonetics', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pdfimages.png',
    title: 'pdf-images',
    info: 'Pdf to images conversion',
    info2: 'The pdf-images library aims to simplify pdf-conversion by providing wrappers over poppler / pdfImages & imageMagick to convert pdfs to images.',
    url: 'https://www.npmjs.com/package/pdf-images',
    repo: 'https://github.com/kartik1998/pdf-images', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kartik1998',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://kartikkhk.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kartik-rawat-459648158/',
    },
    {
      id: nanoid(),
      name: 'code',
      url: 'https://auth.geeksforgeeks.org/user/kartik%20rawat/practice/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
