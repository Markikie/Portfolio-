'use client';

import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import { NavObj } from './NavItem/NavItem';

const navItems: NavObj[] = [
  { href: 'about', label: 'About' },
  { href: 'experience', label: 'Experience' },
  { href: 'projects', label: 'Projects' },
  { href: 'educations', label: 'Educations' },
];

const Navbar = () => {
  return (
    <nav className="nav hidden lg:block" aria-label="Navigate to each section">
      <ul className="mt-16 w-max">
        {navItems.map((nav) => (
          <li key={nav.href}>
            <NavItem label={nav.label} href={nav.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
