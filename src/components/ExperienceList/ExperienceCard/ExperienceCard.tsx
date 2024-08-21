import Pill from '@/components/shared/Pill';
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
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 sm:col-span-2"
        aria-label="employment period"
      >
        {`${startYear} — ${endYear ? endYear : 'Present'}`}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${sortedTitles[0].title} — ${company} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{`${sortedTitles[0].title} — ${company}`}</span>
            </a>
          </div>
        </h3>
        {sortedTitles.length > 1 &&
          sortedTitles.map((sortedTitle, index) =>
            index === 0 ? null : <h4 key={sortedTitle.endYear}>{sortedTitle.title}</h4>
          )}
        <p className="mt-2 text-sm leading-normal" aria-label="summary">
          {descriptions}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies stack used">
          {technologies.map((technology) => (
            <li key={technology} className="mr-2 mt-2 last-of-type:mr-0">
              <Pill title={technology} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
