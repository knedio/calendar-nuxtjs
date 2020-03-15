<template>
	<div id="row-display-component">
        <div class="flex flex-col card-container overflow-y-auto scroll max-h-75">
            <div
                v-bind:class="{'is-select': day.isSelected}"
                v-for="(day, index) in CALENDAR.days"
                :key="`card-${index}`"
            >
                <div class="card">
                    <div class="flex flex-row"
                        v-if="day.date != ''"
                    >
                        <span class="mx-2 font-bold text-3xl cursor-pointer"
                            @click="onChangeLayout(day)"
                        >
                            {{ day.date | moment("D") }}
                        </span>
                        <span class="mx-2 text-lg">
                            {{ day.date | moment("dddd") }}
                        </span>
                    </div>
                    <div v-if="day.description != ''"
                        class="mx-2 mb-2 text-base"
                    >
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
        border-left-width: 1px;
        border-top-width: 1px;
    }
    .card {
        border-color: #ccc;
        border-right-width: 1px;
        border-bottom-width: 1px;
        height: 85px;
        width: 100%;
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
		data() {
			return {
			}
		},
		mounted(){
		},
		methods: {
            onChangeLayout(day)
            {
                this.$store.commit('SET_CALENDAR', {
					...this.CALENDAR,
                    type: 'day',
                    prevType: 'row',
                    day,
				});
            },
		}
	}
</script>