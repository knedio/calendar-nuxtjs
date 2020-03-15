import { get, post } from '~/helpers/ApiService';

export default {
    state: () => ({
        events: [],
    }),
    getters: {
        EVENTS (state) 
        {
            return state.events;
        },
    },
    mutations: {
        SET_EVENTS (state, payload) 
        {
            state.events = payload;
        },
    },
    actions: {
        FETCH_EVENTS ({commit, state}, payload) 
        {
            return get(`/event`, {  }).then( ({data}) => {
                commit('SET_EVENTS', data.events);
                return data;
            }).catch( (err) => {
                throw err;
            });
        },
        FETCH_EVENTS_BY_YEAR_MONTH ({commit, state}, payload) 
        {
            return get(`/event/get-by-year-month`, payload).then( ({data}) => {
                commit('SET_EVENTS', data.events);
                return data;
            }).catch( (err) => {
                throw err;
            });
        },
        ADD_MULTIPLE_EVENTS ({commit, state}, payload) 
        {
            return post('/event/add-multiple', payload).then( ({data}) => {
                commit('SET_EVENTS', [
                    ...state.events,
                    ...data.events,
                ]);
                return data;
            }).catch( (err) => {
                throw err;
            });
        },
    },
}