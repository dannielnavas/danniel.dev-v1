/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      aspectRatio: {
        "16/9": [16, 9],
        "4/3": [4, 3],
        "1/1": [1, 1],
        "3/2": [3, 2],
      },
    },
  },
  plugins: [],
};
