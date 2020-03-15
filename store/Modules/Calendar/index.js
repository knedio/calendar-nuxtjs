export default {
    state: () => ({
        calendar: {
            type: 'column',
            prevType: '',
            day: {},
            year: null,
            month: {},
            days: [],
        },
    }),
    getters: {
        CALENDAR (state) 
        {
            return state.calendar;
        },
    },
    mutations: {
        SET_CALENDAR (state, payload) 
        {
            state.calendar = {
                ...state.calendar,
                ...payload,
            };
        },
        SET_CALENDAR_BY_EVENTS (state, payload) 
        {
            const days = state.calendar.days.map( (day) => {
                for(let i = 0; i < payload.length; i++) {
                    if(day.date == payload[i].date) {
                        day = {
                            date: payload[i].date,
                            description: payload[i].description,
                            isSelected: false,
                        };
                        break;
                    }
                }
                return day;
            });
            state.calendar = {
                ...state.calendar,
                days
            };
        },
    },
    actions: {
        
    },
}