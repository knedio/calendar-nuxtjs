<template>
	<div id="sidebar-filter-form-component">
		<div class="flex flex-row">
			<SelectField
                @input="onFilter()"
				class="m-2"
				label="Year"
				id="year"
				:errors="[]"
                :options="years"
				v-model="filter.year"
			/>
			<SelectField
                @input="onFilter()"
				class="m-2"
				label="Month"
				id="month"
				:errors="[]"
                :options="months"
				v-model="filter.month"
			/>
		</div>
	</div>
</template>
<style lang="css" scoped>
    
</style>
<script>
	import SelectField from '~/components/Form/SelectField';
    import { getAllMonths } from '~/helpers/DefaultValues.js';

	export default {
		components: {
			SelectField,
        },
		props: [],
        computed: {
            CALENDAR()
            {
                return this.$store.getters.CALENDAR;
            },
            EVENTS()
            {
                return this.$store.getters.EVENTS;
            },
        },
		data() {
			return {
				submitting: false,
				filter: {
					year: '',
                    month: '',
                    days: [],
                },
                years: [],
                months: getAllMonths,
			}
		},
		mounted(){
			(async() => {
                this.getYears();
                this.filter.month = this.months[new Date().getMonth()];
                this.onFilter();
			})();
		},
		methods: {
            async onFilter()
            {
                await this.fetchEvents();
                const { year, month } = this.filter;
                this.getDays(year, month.value);
                this.$store.commit('SET_CALENDAR', this.filter);
                this.$store.commit('SET_CALENDAR_BY_EVENTS', this.EVENTS);
            },
            getYears() 
            {
                let currentYear = new Date().getFullYear();
                this.filter.year = currentYear;
                while ( currentYear >= 1980 ) {
                    this.years.push(currentYear--);
                }   
            },
            getDays(year, month) {
                this.filter.days = [];
                let date = new Date(year, month, 1);
                let days = [];
                while (date.getMonth() === month) {
                    this.filter.days.push({
                        date: this.$moment(date).format('YYYY-MM-DD'),
                        description: '',
                        isSelected: false,
                    });
                    date.setDate(date.getDate() + 1);
                }
                return true;
            },
            fetchEvents()
            {
				return this.$store.dispatch('FETCH_EVENTS_BY_YEAR_MONTH', {
                    year: this.filter.year,
                    month: this.filter.month.value+1,
                });
            }
		}
	}
</script>