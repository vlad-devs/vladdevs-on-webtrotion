import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import config from './constants-config.json';
const key_value_from_json = { ...config };
const theme_config_font_fonts = key_value_from_json["THEME"]['fontFamily-Google Fonts'];

const fontFamilySans = theme_config_font_fonts && theme_config_font_fonts['sans_font_name'] ? [theme_config_font_fonts['sans_font_name'], ...fontFamily.sans] : [...fontFamily.sans];
const fontFamilySerif = theme_config_font_fonts && theme_config_font_fonts['serif_font_name'] ? [theme_config_font_fonts['serif_font_name'], ...fontFamily.serif] : [...fontFamily.serif];
const fontFamilyMono = theme_config_font_fonts && theme_config_font_fonts['mono_font_name'] ? [theme_config_font_fonts['mono_font_name'], ...fontFamily.mono] : [...fontFamily.mono];


export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  corePlugins: {
    // disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
    aspectRatio: false,
    // disable some core plugins as they are included in the css, even when unused
    touchAction: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    scrollSnapType: false,
    borderOpacity: false,
    textOpacity: false,
    fontVariantNumeric: false,
  },
  theme: {
    extend: {
      colors: {
        bgColor: "rgb(var(--theme-bg) / <alpha-value>)",
        textColor: "rgb(var(--theme-text) / <alpha-value>)",
        link: "rgb(var(--theme-link) / <alpha-value>)",
        accent: "rgb(var(--theme-accent) / <alpha-value>)",
        "accent-2": "rgb(var(--theme-accent-2) / <alpha-value>)",
        quote: "rgb(var(--theme-quote) / <alpha-value>)",
      },
      fontFamily: {
        // Add any custom fonts here
        sans: fontFamilySans,
        serif: fontFamilySerif,
        mono: fontFamilyMono
      },
      transitionProperty: {
        height: "height",
      }
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".cactus-link": {
          "@apply bg-[size:100%_6px] bg-bottom bg-repeat-x": {},
          backgroundImage:
            "linear-gradient(transparent,transparent 5px,rgb(var(--theme-text)) 5px,rgb(var(--theme-text)))",
          "&:hover": {
            backgroundImage:
              "linear-gradient(transparent,transparent 4px,rgb(var(--theme-link)) 4px,rgb(var(--theme-link)))",
          },
        },
        ".title": {
          "@apply text-2xl font-semibold text-accent-2": {},
        },
      });
    }),
  ],
} satisfies Config;
