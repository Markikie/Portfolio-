import Card from '@/components/shared/Card';
import { Experience } from '@/types';

type ExperienceCardProps = Experience;

const ExperienceCard = ({
  startYear,
  endYear,
  titles,
  company,
  link,
  descriptions,
  technologies,
}: ExperienceCardProps) => {
  const sortedTitles = titles
    .map((t) => t)
    .sort(({ endYear: aEndYear }, { endYear: bEndYear }) => {
      if (!aEndYear) {
        return -1;
      } else if (!bEndYear) {
        return 1;
      }
      return new Date(bEndYear).getTime() - new Date(aEndYear).getTime();
    });

  return (
    <Card
      leftPart={
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 sm:col-span-2"
          aria-label="employment period"
        >
          {`${startYear} — ${endYear ? endYear : 'Present'}`}
        </header>
      }
      header={`${sortedTitles[0].title} — ${company}`}
      subHeaders={sortedTitles.slice(1).map((e) => e.title)}
      content={descriptions}
      technologies={technologies}
      link={link}
    />
  );
};

export default ExperienceCard;
