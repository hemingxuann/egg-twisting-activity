<template>
    <div class="home">
        <EggTwistingMachine />
    </div>
</template>

<script>
import EggTwistingMachine from '@/components/egg-twisting-machine.vue'

export default {
    name: 'App',
    components: {
        EggTwistingMachine,
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
