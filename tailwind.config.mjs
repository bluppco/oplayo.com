/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"primary": "#313540",
				"oplayo_green": "#4daf2f",
				"oplayo_dark_gray": "#444444",
				"oplayo_light_gray": "#f3f6f6",
				"oplayo_zinc": "#b1b5c0",
				"oplayo_slate": "#999999",
				"oplayo_midnight_blue": "#313543",
				"oplayo_dark_slate": "#3a3f4e"

			},
			fontFamily: {

				"lato": [ "Lato", "sans-serif" ],
				"bebas_neue": [ "Bebas Neue", "display" ],
				"roboto_condensed": ["Roboto Condensed", "sans-serif" ]

			},
			screens: {

				"mac": "1440px"

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
