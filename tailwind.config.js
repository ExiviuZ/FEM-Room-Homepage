/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "desktop-x": "clamp(3rem, -4.3846rem + 11.5385vw, 6rem);",
      },
      colors: {
        "app-black": "hsl(0, 0%, 0%)",
        "app-white": "hsl(0, 0%, 100%)",
        "app-dark-gray": "hsl(0, 0%, 63%)",
        "app-very-dark-gray": "hsl(0, 0%, 27%)",
      },
      gridTemplateColumns: {
        "bottom-gallery": "repeat(auto-fit, minmax(400px, 1fr) )",
      },
    },
  },
  plugins: [],
};
