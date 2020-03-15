<template>
	<div id="sidebar-calendar-form-component">
        <form @submit.prevent=""
			class="flex flex-col w-full"
		>
			<InputField
				class="p-2 w-full"
				label="Event: "
				id="event"
				type="text"
				:errors="errorMessages.description"
				v-model="calendarForm.description"
			/>
			<div class="w-full">
				<div class="flex flex-row">
					<InputField
						@input="onChangeDate()"
						class="w-1/2 p-2 pb-0"
						label="From: "
						id="dateFrom"
						type="date"
						:errors="errorMessages.dateFrom"
						v-model="dateFrom"
					/>
					<InputField
						@input="onChangeDate()"
						class="w-1/2 p-2 pb-0"
						label="To: "
						id="dateTo"
						type="date"
						:errors="errorMessages.dateTo"
						v-model="dateTo"
					/>
				</div>
				<ErrorMessage 
					:errors="errorMessages.dates"
				/>
			</div>
			<div class="flex flex-wrap">
				<div
					class=" flex items-center"
					v-for="(day, index) in week"
					:key="`${day}-${index}`"
				>
					<label class="text-xs p-1">
						{{ day.substring(0,3) }}
					</label>
					<input 
						@change="onChangeDate()"
						type="checkbox" 
						:disabled="dateFrom == '' && dateTo == ''"
						:id="`${day}-${index}`"
						v-model="calendarForm.week"
						:value="day"
					/>
				</div>
			</div>
			<button type="submit"
				@click="onSubmit()"
				class="ml-auto text-sm aos-text-gray font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-none"
				:disabled="submitting">
				<div v-if="submitting" class="sm-spinner"></div>
				<span v-else>
					Submit
				</span>
			</button>
		</form>
	</div>
</template>
<style lang="css" scoped>
    
</style>
<script>
	import InputField from '~/components/Form/InputField';
    import ErrorMessage from '~/components/Form/FieldErrorMessage';
    import { getWeek } from '~/helpers/DefaultValues';
    import { setCalendarDate } from '~/helpers/CustomFunctions';

	export default {
		components: {
			InputField,
			ErrorMessage,
        },
        computed: {
            CALENDAR()
            {
                return this.$store.getters.CALENDAR;
            },
		},
		watch: {
			CALENDAR(newVal, oldVal) {
				if( (newVal.year != oldVal.year) || (newVal.month != oldVal.month) ){
					this.onChangeFilter();
				}
			}
		},
		data() {
			return {
				dateFrom: '',
				dateTo: '',
				submitting: false,
				calendarForm: {
					description: '',
					dates: [],
					year: '',
					month: '',
					week: [],
				},
				week: getWeek,
				dateErrorMessage: '',
				errorMessages: [],
			}
		},
		mounted(){
			this.onResetForm();
			this.onChangeFilter();
		},
		methods: {
			async onSubmit()
			{
				this.errorMessages = [];
				this.submitting = true;
				this.calendarForm.year = this.CALENDAR.year;
				this.calendarForm.month = parseInt(this.CALENDAR.month.value)+1;
				this.$store.dispatch('ADD_MULTIPLE_EVENTS', this.calendarForm)
				.then( ({events, message}) => {
					this.$store.commit('SET_CALENDAR_BY_EVENTS', events);
					this.onResetForm();
					this.submitting = false;
					this.$store.commit('SET_POPUP', {
						isShow: true,
						message
					});
				}).catch( err => {
					this.submitting = false;
					if(err.response && err.response.status == 422) {
						this.errorMessages = err.response.data.errors;
					}
				});
			},
			onChangeFilter()
			{
				const { year, month } = this.CALENDAR;
				if(year && month){
					let day = (month.value == this.$moment().month()) ? this.$moment().date() : 1;
					this.dateFrom = this.$moment([year, month.value, day]).format('YYYY-MM-DD');
					this.dateTo = this.$moment([year, month.value, day]).format('YYYY-MM-DD');
					this.onChangeDate();
				}
			},
			onChangeDate()
			{
				this.dates = [];
				this.errorMessages.dates = [];
				let dateFrom = (this.dateFrom != '') ? this.$moment(this.dateFrom) : '';
				let dateTo = (this.dateTo != '') ? this.$moment(this.dateTo) : '';
				
				// Check if date from and to are empty
				const isEmptyDate = (dateFrom != '' && dateTo != '')

				if(dateFrom == '' && dateTo == '') {
					this.calendarForm.week = [];
				}

				//Message Validation for date filter 
				if((isEmptyDate) && dateTo.isBefore(dateFrom,'day')) {
					this.errorMessages.dates.push('The date "To" must be after or equal to date "From".');
				}
				const { data, formattedData } = setCalendarDate(this.CALENDAR.days, this.calendarForm.week, dateFrom, dateTo);
				this.$store.commit('SET_CALENDAR', {
					...this.CALENDAR,
					days: data
				});
				this.calendarForm.dates = formattedData;
			},
			onResetForm()
			{
				this.dateFrom = '';
				this.dateTo = '';
				this.calendarForm = {
					description: '',
					dates: [],
					year: '',
					month: '',
					week: [],
				};
			}
		},
	}
</script>