import type { Config } from 'tailwindcss';
/**
 * Color	Hex
    Navy	#0a192f
    Light Navy	#112240
    Lightest Navy	#233554
    Slate	#8892b0
    Light Slate	#a8b2d1
    Lightest Slate	#ccd6f6
    White	#e6f1ff
    Green	#64ffda

   main
   text-slate-200 => header
   bg-teal-400/10


 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
