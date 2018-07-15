<template>
    <div class="stepBar">
         <div class="sign__step-bar">
            <div class="step-circle"
                :class="classHandle(a-1)"
                v-for="a in step">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'stepBar',
    props: {
        step: {
            type: Number,
            default: 4,
        },
        currentStep: {
            type: Number,
            default: 1,
        }
    },
    data() {
        return {
            isDisabledArr1: [
                false, true, true, true
            ],
            classStr: '',
        }
    },
    computed: {
        isDisabledArr() {
            let arr = []
            for (let i = 1; i <= this.step; i++) arr.push('disabled')
            for (let i = 0; i < this.currentStep; i++) arr[i] = 'inprogress'
            return arr
        },
        isDoneArr() {
            let arr = []
            for (let i = 1; i <= this.step; i++) arr.push('inprogress')
            for (let i = 0; i < this.currentStep - 1; i++) arr[i] = 'done'
            return arr
        }
    },
    methods: {
        classHandle(a) {
            if (this.isDisabledArr[a] == 'disabled') return 'is-disabled'
            if (this.isDoneArr[a] == 'done') return 'is-done'
        }
    }
}
</script>

<style lang="scss">
</style>
