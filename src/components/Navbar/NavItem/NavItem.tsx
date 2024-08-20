export type NavObj = {
  href: string;
  label: string;
};

type NavItemProps = {
  activeSection?: string | null;
} & NavObj;

const NavItem = ({ href, activeSection, label }: NavItemProps) => {
  return (
    <a className="group flex items-center py-3" href={`#${href}`}>
      <span
        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
          activeSection?.toLowerCase() === href ? 'bg-slate-200 w-16' : ''
        }`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
          activeSection?.toLowerCase() === href ? 'text-slate-200' : 'text-slate-500'
        }`}
      >
        {label[0].toUpperCase() + label.substring(1)}
      </span>
    </a>
  );
};

export default NavItem;
