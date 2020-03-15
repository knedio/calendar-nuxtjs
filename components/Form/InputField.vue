<template>
	<div id="input-field-component">
        <label class="block text-left text-gray-700 text-sm font-bold mb-0">
            {{ label }}
        </label>
        <input class="input-field" 
            ref="inputField"
            :value="value"
            @input="onUpdateField()"
            :id="id" 
            :name="id"
            :type="type"
            v-bind:class="{ 'text-red-500 border-red-500': errors && errors.length > 0 }" 
        />
        <ErrorMessage 
            :errors="errors"
        />
	</div>
</template>
<style lang="css" scoped>
    
</style>
<script>
    import ErrorMessage from './FieldErrorMessage';

	export default {
        props: [
            'id', 
            'type',
            'label', 
            'value', 
            'errors', 
        ],
        components: {
            ErrorMessage,
        },
		data() {
			return {
			}
		},
		mounted(){

		},
		methods: {
            onUpdateField () 
            {
                this.$emit('input', this.$refs.inputField.value)
            },
		}
	}
</script>