/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"login-bg": "url('/images/app-bg.jpg')",
			},
			spacing: {
				128: "32rem",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("tailwind-scrollbar")({ nocompatible: true }),
		require("flowbite/plugin"),
		require("daisyui")
	],
};
