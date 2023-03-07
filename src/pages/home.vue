<template>
    <div class="home">
        <EggTwistingMachine />
    </div>
</template>

<script>
import EggTwistingMachine from '@/components/egg-twisting-machine.vue'
import { activityConfig, activityPerschedule } from '@/api/index.js'

export default {
    name: 'App',
    components: {
        EggTwistingMachine,
    },
    mounted() {
        this.getActivityConfig()
        this.getActivityPerschedule()
    },
    methods: {
        getActivityConfig: async () => {
            const res = await activityConfig({
                atsid: '4',
            })
            console.log(res.data, 'resres')
        },
        getActivityPerschedule: async () => {
            const res = await activityPerschedule({
                atsid: '4',
            })
            console.log(res.data, '122222')
        },
    },
}
</script>

<style>
.home {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: relative;
    display: flex;
    align-items: center;
}
</style>
