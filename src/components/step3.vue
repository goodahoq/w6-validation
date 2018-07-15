<template>
    <div class="step3">
        <div class="row">
            <div class="title col-md-12">Update Profile Picture</div>
            <div class="subtitle col-md-12">We wanna know you more!</div>
            <div class="col-md-12">
                <input type="file" class="hidden" id="fileInput" @change="fileInput">
                <label class="w100 card-upload mT10" :class="{'isUploaded' : fileName != null }" for="fileInput">
                    <div class="card-placeHolder">
                        <div class="ph-img mR10 p5">
                            <i class="fas fa-images fa-3x"></i>
                        </div>
                        <div class="ph-content p10">
                            <div class="ph-main">UPLOAD UP YOUR PHOTOS</div>
                            <div v-if="fileName === null" class="ph-sub">Just one</div>
                            <div v-else class="ph-sub">{{fileName}}</div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
        <div class="submit mT40">
            <button :disabled="fileName === null" @click="nextStep" class="btn w100">I can't do it</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'step3',
    data() {
        return {
            fileName: null,
        };
    },
    methods: {
        fileInput(event) {
            console.log(event)
            this.fileName = event.target.files[0].name
        },
        nextStep() {
            if (this.fileName != null) this.$router.push({ path: '/step4' });
        },
    }
}
</script>

<style lang="scss">
</style>
