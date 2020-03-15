<template>
	<div id="row-display-component">
        <div class="flex flex-col card-container">
            <div class="card">
                <div class="flex"
                    v-if="CALENDAR.day.date != ''"
                >
                    <span class="mx-2 font-bold text-5xl cursor-pointer"
                        @click="onChangeLayout()"
                    >
                        {{ CALENDAR.day.date | moment("D") }}
                    </span>
                    <span class="mx-2 text-2xl">
                        {{ CALENDAR.day.date | moment("dddd") }}
                    </span>
                </div>
                <div class="mx-2 text-lg p-2"
                    v-if="CALENDAR.day.description != ''"
                >
                    {{CALENDAR.day.description}}
                </div>
            </div>
        </div>
	</div>
</template>
<style lang="css" scoped>
    .card-container {
        border-color: #ccc;
        border-left-width: 1px;
        border-top-width: 1px;
    }
    .card {
        border-color: #ccc;
        border-right-width: 1px;
        border-bottom-width: 1px;
        height: 50vh;
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
            onChangeLayout()
            {
                this.$store.commit('SET_CALENDAR', {
					...this.CALENDAR,
                    type: this.CALENDAR.prevType,
                    prevType: 'day',
                    day: {},
				});
            },
		}
	}
</script>