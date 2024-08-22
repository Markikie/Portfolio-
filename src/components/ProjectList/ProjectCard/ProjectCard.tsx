import Card from '@/components/shared/Card';
import dynamic from 'next/dynamic';
import { Project } from '@/types';
import Image from 'next/image';

type ProjectCardProps = Project;

const ProjectCard = ({ descriptions, link, technologies, image, titles }: Project) => {
  return (
    <Card
      leftPart={
        <div
          className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 sm:col-span-2"
          aria-label="employment period"
        >
          <Image
            alt={titles[0].title}
            sizes="(max-width: 768) 50vw, (max-width: 1200px) 30vw, 20vw"
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            style={{ color: 'transparent' }}
            src={`/images/${image}`}
          />
        </div>
      }
      header={titles[0].title}
      link={link}
      content={descriptions}
      technologies={technologies}
    />
  );
};

export default ProjectCard;
