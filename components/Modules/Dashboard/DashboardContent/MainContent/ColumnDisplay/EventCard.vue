<template>
	<div id="event-card-component">
        <div class="flex flex-wrap card-container">
            <div class="card break-words overflow-hidden"
                v-bind:class="{'is-select': day.isSelected}"
                v-for="(day, index) in tempDays"
                :key="`card-${index}`"
            >
                <div>
                    <div class="font-bold cursor-pointer" 
                        @click="onChangeLayout(day)"
                        v-if="day.date != ''"
                    >
                        {{ day.date | moment("D") }}
                    </div>
                    <div class="text-xs" v-if="day.description != ''">
                        {{day.description}}
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<style lang="css" scoped>
    .is-select {
        background: #edf2f7;
    }
    .card-container {
        border-color: #ccc;
    }
    .card {
        border-color: #ccc;
        border-bottom-width: 1px;
        height: 85px;
        width: 14.285%;
        padding: 4px;
    }
</style>
<script>
    import { getWeek } from '~/helpers/DefaultValues.js';

	export default {
        computed: {
            CALENDAR()
            {
                return this.$store.getters.CALENDAR;
            },
        },
        watch: {
            CALENDAR()
            {
                this.onSetDays();
            },
        },
		data() {
			return {
                tempDays: [],
			}
		},
		mounted(){
            this.onSetDays();
		},
		methods: {
            onChangeLayout(day)
            {
                this.$store.commit('SET_CALENDAR', {
					...this.CALENDAR,
                    type: 'day',
                    prevType: 'column',
                    day,
				});
            },
            onSetDays()
            {
                if(this.CALENDAR.days.length > 0) {
                    this.tempDays = this.CALENDAR.days;
                    const dayOne = parseInt(this.$moment(this.tempDays[0].date).format('d'));
                    if (dayOne > 0) {
                        this.tempDays = [
                            ...this.onAddColumn(dayOne),
                            ...this.tempDays
                        ];
                    }
                    let addColumn = (Math.ceil(this.tempDays.length / 7) * 7) - this.tempDays.length;
                    if ( addColumn > 0) {
                        this.tempDays = [
                            ...this.tempDays,
                            ...this.onAddColumn(addColumn),
                        ];
                    }
                }
            },
            onAddColumn(length)
            {
                let temp = []
                for (let i = 0; i < length; i++) {
                    temp.push({
                        date: '',
                        description: '',
                    });
                }
                return temp;
            },
		}
	}
</script>