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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
        verticalMarquee: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        glow: {
          '0%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(3) drop-shadow(0 0 25px rgba(255,191,0,0.9))' },
          '100%': { filter: 'brightness(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        scrollOpen: "scrollOpen 5s ease-in-out",
        scrollClose: "scrollClose 5s ease-in-out",
        "spin-slow": "spin 3s linear infinite",
        "vertical-marquee": "verticalMarquee 120s linear infinite",
        "vertical-marquee-reverse": "verticalMarquee 120s linear infinite reverse",
        scroll: "scroll var(--animation-duration, 1s) var(--animation-direction, forwards) linear infinite",
        'glow': 'glow 2s ease-in-out',
        'glow-infinite': 'glow 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      fontFamily: {
        samarkan: ["var(--font-samarkan)"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), 
  ],
};
