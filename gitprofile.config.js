// gitprofile.config.js

const config = {
  github: {
    username: 'Moneemsaadaoui', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'abdel-moneem-saadaoui',
    twitter: '@Moneemsaadaoui',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '@contact.moneem',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'contact.moneem@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Javascript',
    'TypeScript',
    'JavaScript',
    'React.js',
    'Node.js',
    'Angular 2+',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Android',
    'CSS',
    'Bootstrap',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Pembeia',
      position: 'Fullstack developer',
      from: '2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'IdealPart/Santander',
      position: 'Senior Front End Developer',
      from: '2021',
      to: '2023',
      companyLink: 'x',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'ESSTHS',
      degree: 'Bsc Degree in Computer Science',
      from: '2014',
      to: '2018',
    }

  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Skinify',
      description:
        'Skin Care and Beauty App Powered by the latest AI technology 🤖',
      imageUrl: 'https://skinify.ai/img/skinifyfull.png',
      link: 'https://Skinify.ai',
    },
    {
      title: 'S3 Caceis Investor service',
      description:
        'Banking Webportal for investor clients of Santander Caceis 💹',
      imageUrl: 'https://www.s3caceis.com.br/images/logo.png',
      link: 'https://www.s3caceis.com.br/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@contact.moneem', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  /*googleAnalytics: {
   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
 },
 // Track visitor interaction and behavior. https://www.hotjar.com
 hotjar: {
   id: '',
   snippetVersion: 6,
 },
 */
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,
};

export default config;
