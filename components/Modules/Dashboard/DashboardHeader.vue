<template>
	<div id="dashboard-header-component"
        class="header-container flex flex-row"
    >
        <span>
			Calendar
		</span>
		<div class="ml-auto">
			<button @click="onChangeLayout()"
				class="focus:outline-none focus:shadow-none"
			>
				<i v-if="CALENDAR.type == 'column'"
					class="fas fa-clock fa-th" >
				</i>
				<i v-else
					class="fas fa-clock fa-th-list">
				</i>
			</button>
		</div>
	</div>
</template>
<style lang="css" scoped>
    .header-container {
        font-size: 24px;
        font-weight: bold;
        padding: 4px 8px;
        border-color: #ccc;
        border-bottom-width: 1px;
    }
</style>
<script>
	export default {
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
			onChangeLayout()
			{
                this.$store.commit('SET_CALENDAR', {
					...this.CALENDAR,
					type: (this.CALENDAR.type == 'column') ? 'row' : 'column'
				});
			}
		}
	}
</script>