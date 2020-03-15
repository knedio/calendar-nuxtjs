<template>
	<div id="field-error-message-component"
		class="text-sm"
		v-if="errors && errors.length > 0">
        <p class="text-red-500 italic" 
            :key="'error-'+i"
            v-for="(error,i) in errors">
                <small>{{ error }}</small>
        </p>
	</div>
</template>
<style lang="css" scoped>
    
</style>
<script>
	export default {
		props: ['errors'],
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