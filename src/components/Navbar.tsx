import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { useDarkMode } from '../hooks/Dark';
import './Navbar.css';

export const Navbar = (): JSX.Element => {
  const { isDark, setIsDark } = useDarkMode();
  const location = useLocation();

  return (
    <nav
      w-display="flex"
      w-justify="between"
      w-flex="shrink-0"
      w-gap="3"
      w-p="x-10"
      w-w="full"
      w-text="xl"
    >
      <Link
        to="/vitact/"
        className={`${
          location.pathname === '/vitact/'
            ? 'icon-btn icon-btn--active'
            : 'icon-btn'
        }`}
        title="Home"
      >
        <Icon icon="carbon:home" />
      </Link>
      <Link
        to="/vitact/about"
        className={`${
          location.pathname === '/vitact/about'
            ? 'icon-btn icon-btn--active'
            : 'icon-btn'
        }`}
        title="About"
      >
        <Icon icon="carbon:dicom-overlay" />
      </Link>
      <a
        href="https://github.com/10c8/vitact"
        className="icon-btn"
        title="GitHub"
      >
        <Icon icon="carbon:logo-github" />
      </a>

      <button
        className="icon-btn"
        w-m="l-auto"
        w-outline="!none"
        title="Toggle dark mode"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <Icon icon="carbon:sun" /> : <Icon icon="carbon:moon" />}
      </button>
    </nav>
  );
};
