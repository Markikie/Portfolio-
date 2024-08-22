import { Experience, Project } from '@/types';

export const mockedExperiences: Experience[] = [
  {
    id: '1',
    startYear: '2021',
    titles: [
      {
        title: 'Software Engineer I',
        endYear: '2023',
      },
      {
        title: 'Software Engineer II',
      },
    ],
    company: 'Mediafly, Inc',
    link: 'https://www.mediafly.com',
    descriptions: `
Collaborated with cross-functional teams to identify and resolve platform issues while developing, testing, and deploying new features using React.js, Node.js, and Python (Flask) in a microservices environment. Owned multiple platform components, leading major refactoring efforts to optimize workflows, enhance system performance, and ensure scalability. Delivered key features like the Forecasting drawer, integrated seamlessly via a serverless architecture using AWS Lambda and EventBridge. Pioneered web accessibility initiatives, working closely with the UX team to achieve WCAG compliance. Additionally, revolutionized state management by implementing the Redux paradigm and developed an internal platform style guide with Storybook to ensure consistent UI/UX across the application.`,
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'Python',
      'Flask',
      'Postgres',
      'AWS',
    ],
  },
  {
    id: '2',
    startYear: '2019',
    titles: [
      {
        title: 'Full Stack Developer',
        endYear: '2021',
      },
    ],
    company: 'DESSS, Inc.',
    link: 'https://www.desss.com',
    descriptions: `Developed Client and Admin sites using a mobile-first approach with React, creating a lightweight single-page application (SPA) with reusable components, and managed state with Redux to address prop drilling and maintain a single source of truth. Implemented Test-Driven Development (TDD) with Jest and Supertest to ensure clean code and monitor functional side effects. Architected a Node.js server with Express, designed REST APIs for CRUD operations, and implemented reusable middleware for JWT authorization. Designed relational database schemas using PostgreSQL and Sequelize, ensuring data consistency through complex relationships. Set up CI/CD pipelines using GitHub Actions for deployment to AWS Elastic Beanstalk, and documented API routes and structures with Swagger for clear communication and consistency.`,
    technologies: ['JavaScript', 'TypeScript', 'React', 'Node', 'Express', 'Postgres', 'AWS'],
  },
  {
    id: '3',
    startYear: '2018',
    titles: [
      {
        title: 'Full Stack Developer',
        endYear: '2019',
      },
    ],
    company: 'Nemaco Technology',
    link: 'https://www.nemaco.com/',
    descriptions: `Designed the main website and admin site using Figma, collaborating closely with engineering, product teams, and the CEO to refine and implement designs. Developed Single Page Applications (SPA) using React, JavaScript, HTML5, and CSS3 (Bootstrap), leveraging React's component-based architecture for efficient and maintainable code. Created RESTful services with Node.js and Express, and connected to MongoDB (Atlas) for data storage, defining models. Deployed applications to Heroku for scalable and reliable hosting, and utilized AWS S3 for high-availability file storage.`,
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'MongoDB',
      'AWS',
      'Figma',
      'Blender',
    ],
  },
];

export const mockedProjects: Project[] = [
  {
    id: '1',
    titles: [
      {
        title: 'Restaurant POS',
      },
    ],
    link: 'https://github.com/cheer-cho/food-pos-application',
    descriptions:
      'I developed a responsive one-page POS system tailored for food ordering, enabling users to view items with prices, add or remove items from the order, and adjust quantities with ease. The system includes features for filtering items by category, allowing users to quickly find what they need, as well as options to input customer names and table numbers. Once the order is complete, users can finalize it with a simple click, or cancel if needed, all within an intuitive interface that adapts seamlessly across devices.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vitest', 'Vite'],
    image: 'pos_application.png',
  },
  {
    id: '2',
    titles: [
      {
        title: 'Recursive React Component',
      },
    ],
    link: 'https://github.com/cheer-cho/recursive-react-component',
    descriptions:
      'I developed a React application using TypeScript that leverages a Recursive React Component to elegantly render complex, nested folder and file structures. This component dynamically navigates and displays hierarchical data, allowing users to explore and manage directories with ease. The design not only showcases the power of recursion in handling deep nesting but also provides an interactive and visually intuitive interface for users to seamlessly interact with their file system.',
    technologies: ['React', 'TypeScript', 'CSS', 'Vitest', 'Vite'],
    image: 'file_explorer_application.png',
  },
  {
    id: '3',
    titles: [
      {
        title: 'Cloning Airbnb',
      },
    ],
    link: 'https://github.com/cheer-cho/clone-airbnb',
    descriptions:
      'I developed a Next.js application that faithfully clones the Airbnb website, utilizing Next.js for powerful server-side rendering, Tailwind CSS for crafting a responsive and visually appealing design, and TypeScript for maintaining a robust and scalable codebase. The project meticulously replicates core Airbnb features, including property listings, search filters, and booking functionalities, offering users a seamless experience that mirrors the original platform. By combining these modern technologies, the application not only delivers high performance and adaptability across devices but also provides a solid foundation for future enhancements and scalability.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    image: 'clone_airbnb.png',
  },
];
