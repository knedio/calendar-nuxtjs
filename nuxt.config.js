const env = require('dotenv').config();

export default {
	mode: 'spa',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css' },
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		'~/assets/css/styles.css',
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/vue-moment',
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth',
	],
	/**
	 * Auth
	 */
	auth: {
		redirect: {
			login: '/',
			logout: '/',
			callback: '/',
			home: '/',
			user: '/'
		},
		strategies: {
			local: {
				endpoints: {
					login: { url: '/sign-in', method: 'post', propertyName: 'token' },
					logout: { url: '/sign-out', method: 'post' },
					user: { url: '/auth-user-details', method: 'get', propertyName: 'user' },
				}
			},
		},
	},

	axios: {
		baseURL: env.API_URL,
		https: false,
		debug: true,
	},
	env: env.parsed,

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
