import { Experience } from '@/types';
import ExperienceCard from './ExperienceCard';
import List from '../shared/List';

type ExperienceListProp = {
  experienceList: Experience[];
};

const ExperienceList = ({ experienceList }: ExperienceListProp) => {
  return (
    <List<Experience>
      items={experienceList}
      keyExtractor={(experience) => experience.id}
      renderItem={(experience) => <ExperienceCard {...experience} />}
      ariaLabel="working experiences"
    />
  );
};

export default ExperienceList;
