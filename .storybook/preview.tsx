import type { Preview } from '@storybook/react-vite'
import "../src/app/styles/index.scss";

import {
    LanguageDecorator,
    RouterDecorator,
  
    ThemeDecorator,
} from "../src/shared/config/storybook";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
    decorators: [ThemeDecorator, RouterDecorator, LanguageDecorator, ],
};

export default preview;