/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-labeling-415471-framer-app-2002x1208-default-mine-shaft":
          "#282828",
        "navy-labeling-415471-framer-app-2002x1208-default-rolling-stone":
          "#7c7f82",
        "navy-labeling-415471-framer-app-2002x1208-default-nero": "#fff",
        "navy-labeling-415471-framer-app-2002x1208-default-mine-shaft1": "#333",
        dimgray: "#595959",
        "navy-labeling-415471-framer-app-2002x1208-default-gallery": "#ebebeb",
        gray: "rgba(0, 0, 0, 0.3)",
        "navy-labeling-415471-framer-app-2002x1208-default-cod-gray": "#1c1c1c",
        "navy-labeling-415471-framer-app-2002x1208-default-rolling-stone-48":
          "rgba(124, 127, 130, 0.48)",
        "navy-labeling-415471-framer-app-2002x1208-default-copper-53":
          "rgba(163, 123, 57, 0.53)",
        "navy-labeling-415471-framer-app-2002x1208-default-black": "#000",
        "navy-labeling-415471-framer-app-2002x1208-default-mine-shaft2":
          "#2b2b2b",
        "navy-labeling-415471-framer-app-2002x1208-default-mine-shaft3":
          "#393939",
      },
      spacing: {},
      fontFamily: {
        "navy-labeling-415471-framer-app-2002x1208-default-inter-regular-1488":
          "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "481xl": "500px",
      },
    },
    fontSize: {
      sm: "14px",
      "mini-9": "14.9px",
      "3xs": "10px",
      base: "16px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
