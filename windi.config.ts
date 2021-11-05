import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: {
    prefix: 'w-',
  },
  plugins: [typography()],
  theme: {
    extend: {},
  },
  alias: {
    'stack-h': 'flex items-center',
    'stack-v': 'flex flex-col',
    'flex-center': 'flex items-center justify-center',
  },
});
