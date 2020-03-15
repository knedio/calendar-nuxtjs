import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Auth from './Modules/Auth';
import Calendar from './Modules/Calendar';
import Event from './Modules/Event';
import PopUp from './Modules/PopUp';

export default {
	modules: {
		auth: Auth,
		calendar: Calendar,
		event: Event,
		popUp: PopUp,
	}
}