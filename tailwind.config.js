/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      /*We can see under Tailwinds default configurations that the - height for screen - is "100vh" 
    The deal with it, is that we should override it to "100dvh" which is 100 dynamic viewport height, because the prior causes issues on mobile devices, so by changing it to dvh, this problem is solved.  */
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
