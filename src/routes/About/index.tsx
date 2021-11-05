import { Icon } from '@iconify/react';

import './About.css';

export const About = (): JSX.Element => (
  <div className="*flex-center" w-flex="col" w-w="full" w-h="full" w-p="x-8">
    <div className="text-center mb-4">
      <Icon icon="carbon:dicom-overlay" w-w="11" w-h="11" w-m="b-1" />
      <h1 w-text="lg" w-font="semibold" w-select="none">
        About
      </h1>
    </div>
    <span w-prose="sm" w-text="center sm md:left" className="prose">
      <b>Vitact</b> is an opinionated{' '}
      <a href="https://github.com/vitejs/vite">Vite</a> starter template made by{' '}
      <a href="https://github.com/10c8">@10c8</a> for mocking apps swiftly. It
      uses <b>React</b> as the main library, along with React Router; has full{' '}
      <b
        title="Progressive Web Application"
        w-border="b-1 dotted"
        w-cursor="help"
      >
        PWA
      </b>{' '}
      support, and uses <b>WindiCSS</b> for quick UI development.
      <br />
      <br />
      It takes heavy inspiration from{' '}
      <a href="https://github.com/antfu/vitesse">Vitesse</a>, a starter template
      made by <a href="https://github.com/antfu">@antfu</a> for Vite that uses{' '}
      <b>Vue</b> instead.
    </span>
  </div>
);
