import { DefaultConfigOptions, createInput } from '@formkit/vue';
// import '@formkit/themes/genesis';
import { generateClasses } from '@formkit/themes';

const config: DefaultConfigOptions = {
  config: {
    classes: generateClasses({}),
  },
};

export default config;
