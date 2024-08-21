import React, { ReactNode } from 'react';
import Pill from '../Pill';

interface CardProps {
  leftPart?: ReactNode;
  header: string;
  subHeaders?: string[];
  content: string;
  footer?: ReactNode;
  technologies?: string[];
  link?: string;
}

const Card: React.FC<CardProps> = ({
  leftPart,
  header,
  subHeaders = [],
  content,
  footer,
  technologies = [],
  link,
}) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      {leftPart ? leftPart : null}

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-bold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${header} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{header}</span>
            </a>
          </div>
        </h3>

        {subHeaders.length > 0 &&
          subHeaders.map((subHeader, index) => (
            <h4 key={index} className="text-sm text-slate-500">
              {subHeader}
            </h4>
          ))}

        <p className="mt-2 text-sm leading-normal" aria-label="summary">
          {content}
        </p>

        {technologies.length > 0 && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies stack used">
            {technologies.map((technology) => (
              <li key={technology} className="mr-2 mt-2 last-of-type:mr-0">
                <Pill title={technology} />
              </li>
            ))}
          </ul>
        )}

        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
