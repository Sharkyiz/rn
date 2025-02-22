/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('src/assets/background.png')",
      },
      backgroundBlendMode: {
        overlay: "overlay",
      },
    },
  },
  plugins: [],
};
