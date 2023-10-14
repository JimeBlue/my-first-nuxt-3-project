import { DefaultConfigOptions, createInput } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';

const config: DefaultConfigOptions = {
  config: {
    classes: generateClasses({
      text: { label: 'bg-blue-500', inner: 'border border-blue-500' },
    }),
  },
};

export default config;
