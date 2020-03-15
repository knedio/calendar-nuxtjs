<template>
	<div id="column-display-component"
        class="p-2 overflow-y-auto scroll max-h-75"
    >
        <EventHeader />
        <EventCard />
	</div>
</template>
<style lang="css" scoped>
</style>
<script>
    import EventHeader from './EventHeader';
    import EventCard from './EventCard';

	export default {
        components: {
            EventHeader,
            EventCard,
        },
		props: [],
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