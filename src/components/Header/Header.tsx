import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket, faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar';

type SocialMedia = {
  label: string;
  url: string;
  icon: IconDefinition;
};

const Header = () => {
  const socialMediaList: SocialMedia[] = [
    { label: 'GitHub', url: 'https://github.com/cheer-cho', icon: faGithub },
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
    { label: 'GitHub', url: 'https://github.com/CHNUTT', icon: faGithub },
  ];
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl max-w-sm font-bold tracking-tight text-slate-200 sm:text-5xl">
          Cheer Chokwittaya
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Engineer
        </h2>
        <p className="mt-3 max-w-xs leading-normal">
          {`I'm a versatile full-stack engineer skilled in building and optimizing scalable web applications
          using modern front-end and back-end technologies.`}
        </p>
        <Navbar />
      </div>
      <ul className="mt-8 flex items-center" aria-label="Social Media">
        {socialMediaList.map((socialMedia) => (
          <li key={socialMedia.label} className="mr-5 text-xs shrink-0">
            <a className="block hover:text-slate-200" target="_blank" href={socialMedia.url}>
              <span className="sr-only">{socialMedia.label}</span>
              <FontAwesomeIcon className="h-6 w-6" icon={socialMedia.icon} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
