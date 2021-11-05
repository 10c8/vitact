import { Routes, Route } from 'react-router-dom';

import { PWAReloadPrompt } from './components/PWAReloadPrompt';
import { Home } from './routes';
import { About } from './routes/About';
import { Navbar } from './components/Navbar';

export function App(): JSX.Element {
  return (
    <main
      w-p="y-10"
      w-display="flex"
      w-flex="col"
      w-align="items-center"
      w-w="screen"
      w-h="screen"
      w-text="gray-700 dark:gray-200"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <div w-m="t-5 x-auto" w-text="center sm" w-opacity="25" w-select="none">
        [Root Layout]
      </div>

      <PWAReloadPrompt />
    </main>
  );
}
