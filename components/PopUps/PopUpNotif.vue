<template>
    <div
        v-if="POPUP.isShow"
        class="w-1/2 md:w-2/6 notif-container"
        role="alert"
    >
        <div class="flex">
            <div>
                <p class="font-bold">
                    {{POPUP.message}}
                </p>
                <!-- <p class="text-sm">Make sure you know how these changes affect you.</p> -->
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
    .notif-container {
        background-color: #fff;
        position: absolute;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border-top-width: 4px;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        -webkit-animation: fadeIn 0.8s;
        animation: fadeIn 0.8s;
    }
    @-webkit-keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>
<script>
    export default {
        computed: {
            POPUP()
            {
                return this.$store.getters.POPUP;
            },
        },
        watch: {
            POPUP(newVal, oldVal)
            {
                setTimeout( () => {
                    this.$store.commit('SET_POPUP', {
                        isShow: false,
                        message: ''
                    });
                }, 5000);
            },
        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {}
    };
</script>