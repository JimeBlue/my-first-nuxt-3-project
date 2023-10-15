// tailwind.config.js
const formKitTailwind = require('@formkit/themes/tailwindcss');

export default {
  content: [
    './src/**/*.{html, vue, js}',
    './formkit.config.ts',
    './formkit-components/PricingPlan.vue',
  ],
  plugins: [formKitTailwind],
};
