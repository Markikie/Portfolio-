import { Experience } from '@/types';
import ExperienceCard from './ExperienceCard';

type ExperienceListProp = {
  experienceList: Experience[];
};

const ExperienceList = ({ experienceList }: ExperienceListProp) => {
  return (
    <ul aria-label="working experiences">
      {experienceList.map((experience) => (
        <li key={experience.id} className="mb-12">
          <ExperienceCard {...experience} />
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
