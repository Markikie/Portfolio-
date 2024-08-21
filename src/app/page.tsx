import About from '@/components/About';
import ExperienceList from '@/components/ExperienceList';
import Header from '@/components/Header';
// import ProjectList from '@/components/ProjectList';
import { mockedExperiences } from '@/data';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:pt-0 lg:w-1/2">
          <section id="about" className="mb-32 lg:pt-24">
            <About />
          </section>
          <section id="experience" className="mb-24">
            <ExperienceList experienceList={mockedExperiences} />
          </section>
          {/* <section id="projects">
            <ProjectList projectList={mockedProjects} />
          </section> */}
          {/* <section id="educations">Educations</section> */}
        </main>
      </div>
    </div>
  );
}
