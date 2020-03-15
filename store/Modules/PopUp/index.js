export default {
    state: () => ({
        popup: {
            isShow: false,
            message: ''
        }
    }),
    getters: {
        POPUP (state) 
        {
            return state.popup;
        },
    },
    mutations: {
        SET_POPUP (state, payload) 
        {
            state.popup = {
                ...state.popup,
                ...payload,
            };
        },
    },
    actions: {
        
    },
}