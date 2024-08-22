import { Project } from '@/types';
import List from '../shared/List';
import ProjectCard from './ProjectCard';

type ProjectListProps = {
  projectList: Project[];
};

const ProjectList = ({ projectList }: ProjectListProps) => {
  return (
    <List<Project>
      items={projectList}
      renderItem={(project: Project) => <ProjectCard {...project} />}
      keyExtractor={(project: Project) => project.id}
      ariaLabel="list of projects"
    />
  );
};

export default ProjectList;
