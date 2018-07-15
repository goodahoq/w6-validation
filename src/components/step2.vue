<template>
    <div class="step2 row">
        <div class="title col-md-12">General Infomation</div>
        <div class="subtitle col-md-12">Tell us who you are!</div>
        <div class="step-body row text-left">
            <div class="step-card col-md-6">
                <div class="card-title w100">Name*</div>
                <div class="card-input">
                    <input class="w100 card-body" type="text" placeholder="Example Name" v-model="user.name" data-vv-name="name" 
                    v-validate="'required'" :class="{'hasError': errors.has('name') }">
                    <span v-show="errors.has('name')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                    <div v-if="errors.has('name')" class="errorMsg errorLeft ">
                        <span class="arrow_r_int"></span>{{ errors.first('name') }}
                    </div>
                </div>
            </div>
            <div class="step-card col-md-6">
                <div class="card-title w100">Phone*</div>
                <div class="card-input">
                    <input class="w100 card-body" type="text" placeholder="0912 345 678" v-model="user.phone" data-vv-name="phone" 
                    v-validate="'required|numeric|tw_phone'" :class="{'hasError': errors.has('phone') }">
                    <span v-show="errors.has('phone')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                    <div v-if="errors.has('phone')" class="errorMsg errorRight ">
                        <span class="arrow_l_int"></span>{{ errors.first('phone') }}
                    </div>
                </div>
            </div>
            <div class="step-card col-md-12">
                <div class="card-title w100">Birth Date<small>(Optional)</small></div>
                <div class="card-input row">
                    <div class="card-select col-md-4">
                         <el-date-picker
                            class="w100"
                            format="yyyy"
                            v-model="user.year"
                            type="year"
                            placeholder="YYYY">
                        </el-date-picker>
                    </div>
                    <div class="card-select col-md-4">
                         <el-date-picker
                            class="w100"
                            format="MM"
                            v-model="user.month"
                            type="month"
                            placeholder="MM">
                        </el-date-picker>
                    </div>
                    <div class="card-select col-md-4">
                         <el-date-picker
                            class="w100"
                            format="dd"
                            v-model="user.date"
                            type="date"
                            placeholder="DD">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <div class="step-card col-md-12">
                <div class="card-title w100">Address*</div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card-input">
                            <input class="w100 card-body" type="text" placeholder="City" v-model="user.city" data-vv-name="city" 
                            v-validate="'required'" :class="{'hasError': errors.has('city') }">
                            <span v-show="errors.has('city')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                            <div v-if="errors.has('city')" class="errorMsg errorLeft">
                                <span class="arrow_r_int"></span>{{ errors.first('city') }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-input">
                            <input class="w100 card-body" type="text" placeholder="Dist" v-model="user.dist" data-vv-name="dist" 
                            v-validate="'required'" :class="{'hasError': errors.has('dist') }">
                            <span v-show="errors.has('dist')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                            <div v-if="errors.has('dist')" class="errorMsg errorRight">
                                <span class="arrow_l_int"></span>{{ errors.first('dist') }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mT25">
                        <div class="card-input">
                            <input class="w100 card-body" type="text" placeholder="Address Detail" v-model="user.addDetail" data-vv-name="addDetail" 
                            v-validate="'required'" :class="{'hasError': errors.has('addDetail') }">
                            <span v-show="errors.has('addDetail')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                            <div v-if="errors.has('addDetail')" class="errorMsg errorRight">
                                <span class="arrow_l_int"></span>{{ errors.first('addDetail') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit">
            <button :disabled="!isValidate" @click="nextStep" class="btn w100">SUBMIT & NEXT</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'step2',

    data() {
        return {
            user: {
                name: '',
                phone: '',
                year: '',
                month: '',
                date: '',
                city: '',
                dist: '',
                addDetail: '',
            },
            isValidate: false,
        }
    },
    watch: {
        'user': {
            handler(val, oldval) {
                if (this.user.name != '' && this.user.phone != '' && this.user.year != '' &&
                    this.user.month != '' && this.user.date != '' && this.user.city != '' && this.user.dist != '' &&
                    this.user.addDetail != '') {
                    this.$validator.validateAll().then((res) => {
                        if (res) {
                            this.isValidate = true;
                        } else {
                            this.isValidate = false;
                        }
                    }).catch((error) => {
                        console.log(error)
                        this.$route.push({ path: '/step1' });
                    });
                }
            },
            deep: true,
        }
    },
    methods: {
        nextStep() {
            if (this.isValidate) {
                this.$router.push({ path: '/step3' });
            }
        },
    }
}
</script>

<style lang="scss">
</style>
