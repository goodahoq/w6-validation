<template>
  <div id="app">
        <step-bar :step="4" :current-step="Number(currentStep)"/>
        <div class="stepContainer">
            <transition name="fade" mode="out-in" appear>
                <router-view :key="$route.fullPath" />
            </transition>
        </div>
  </div>
</template>

<script>
import stepBar from '@/components/stepBar';
export default {
    name: 'App',
    components: {
        stepBar
    },
    computed: {
        currentStep() {
            if (this.$route.name == 'done') return 5
            else return this.$route.name.substring(this.$route.name.length - 1)
        }
    }
}
</script>

<style lang="scss" src="./assets/style/main.scss">
</style>
