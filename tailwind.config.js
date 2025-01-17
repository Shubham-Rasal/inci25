/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "scroll-top": "url('top.png')",
        "scroll-bottom": "url('bot.png')",
        "scroll-body": "url('scroll.png')",
      },
      keyframes: {
        scrollOpen: {
          "0%": { height: "50px", width: "100px" },
          "100%": { height: "400px", width: "600px" },
        },
        scrollClose: {
          "0%": { height: "400px", width: "600px" },
          "100%": { height: "50px", width: "100px" },
        },
      },
      animation: {
        scrollOpen: "scrollOpen 5s ease-in-out",
        scrollClose: "scrollClose 5s ease-in-out",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
