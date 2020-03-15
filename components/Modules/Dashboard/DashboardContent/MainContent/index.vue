<template>
	<div id="main-content-component"
        class="p-2"
    >
        <div class="text-center font-bold text-2xl"
            v-if="CALENDAR.year && CALENDAR.month"
        >
            {{`${CALENDAR.year} - ${CALENDAR.month.text}`}}
        </div>
        <ColumnDisplay 
            v-if="CALENDAR.type == 'column'"
        />
        <RowDisplay 
            v-if="CALENDAR.type == 'row'"
        />
        <DayDisplay 
            v-if="CALENDAR.type == 'day'"
        />
	</div>
</template>
<style lang="css" scoped>
</style>
<script>
    import ColumnDisplay from './ColumnDisplay';
    import RowDisplay from './RowDisplay';
    import DayDisplay from './DayDisplay';

	export default {
        components: {
            ColumnDisplay,
            RowDisplay,
            DayDisplay,
        },
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

		}
	}
</script>