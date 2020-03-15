<template>
	<div id="event-card-component">
        <div class="flex flex-wrap card-container">
            <div class="card"
                v-for="(day, index) in week"
                :key="`card-${index}`"
            >
                {{day}}
            </div>
        </div>
	</div>
</template>
<style lang="css" scoped>
    .card-container {
    }
    .card {
        border-color: #ccc;
        border-bottom-width: 1px;
        height: 40px;
        width: 14.285%;
        padding: 4px;
        font-weight: bold;
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
                week: getWeek
			}
		},
		mounted(){

		},
		methods: {

		}
	}
</script>