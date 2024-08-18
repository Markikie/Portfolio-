import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket, faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';

type SocialMedia = {
  label: string;
  url: string;
  icon: IconDefinition;
};

const Header = () => {
  const socialMedias: SocialMedia[] = [
    { label: 'Github', url: 'https://github.com/CHNUTT', icon: faGithub },
    {
      label: 'BitBucket',
      url: 'https://bitbucket.org/cheer-projects/workspace/projects/PROJ',
      icon: faBitbucket,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cheer-chokwittaya/',
      icon: faLinkedin,
    },
  ];
  return (
    <header className="">
      <>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Cheer Chokwittaya</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Engineer
        </h2>
        <p className="mt-3 ">
          {`I'm a versatile full-stack engineer skilled in building and optimizing scalable web applications
          using modern front-end and back-end technologies`}
        </p>
        <ul className="mt-8 flex items-center">
          {socialMedias.map((socialMedia) => (
            <li key={socialMedia.label} className="mr-5 text-xs shrink-0">
              <a className="block hover:text-slate-200" target="_blank" href={socialMedia.url}>
                <span className="sr-only">{socialMedia.label}</span>
                <FontAwesomeIcon className="h-6 w-6" icon={socialMedia.icon} />
              </a>
            </li>
          ))}
        </ul>
      </>
    </header>
  );
};

export default Header;
