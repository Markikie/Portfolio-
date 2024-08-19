import About from '@/components/About';
import ExperienceList from '@/components/ExperienceList';
import Header from '@/components/Header';

const mockedExperiences = [
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
    descriptions: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham..`,
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
    descriptions: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham..`,
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
    id: '3',
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
    descriptions: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham..`,
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
];

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:pt-0 lg:w-1/2">
          <section id="about" className="mb-24 lg:py-24">
            <About />
          </section>
          <section id="experiences" className="mb-24">
            <ExperienceList experienceList={mockedExperiences} />
          </section>
        </main>
      </div>
    </div>
  );
}
