<template>
	<div id="select-field-component" 
        class="w-full"
    >
        <label class="block text-left text-gray-700 text-sm font-bold mb-0">
            {{ label }}
        </label>
        <select 
            ref="inputField"
            class="input-field"
            v-bind:class="{ 'text-red-500 border-red-500': errors.length > 0 }" 
            :id="id"
            :name="id"
            :value="(typeof value.value != 'undefined') ? value.value : value "
            @change="onUpdateField()"
        >
            <option
                v-for="(option, index) in options"
                :key="`${id}-${index}`"
                :value="(typeof option.value != 'undefined') ? option.value : option"
            >
                {{ option.text || option }}
            </option>
        </select>
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
            'label', 
            'value', 
            'errors', 
            'options', 
        ],
        components: {
            ErrorMessage,
        },
        watch: {
            value(){
            }
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
                let val = this.$refs.inputField.value;
                let inputValue = (typeof this.value.value != 'undefined') 
                    ? this.options.filter( option => option.value == val)[0]
                    : val
                this.$emit('input', inputValue );
            },
		}
	}
</script>