<template>
    <div class="step1 row">
        <div class="title col-md-12">Create Account</div>
        <div class="subtitle col-md-12">Glad to see you here!</div>
        <div class="step-body row text-left">
            <div class="step-card col-md-12">
                <div class="card-title w100">Account</div>
                <div class="card-input w100">
                    <input class="w100 card-body"  placeholder="example@email.com" v-validate="'required|email'" data-vv-name="email" 
                    :class="{'hasError': errors.has('email') }" type="type" v-model="user.email">
                    <span v-show="errors.has('email')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                    <div v-if="errors.has('email')" class="errorMsg errorRight">
                        <span class="arrow_l_int"></span>{{ errors.first('email') }}
                    </div>
                </div>
            </div>
            <div class="step-card col-md-12">
                <div class="card-title w100">Password</div>
                <div class="card-input">
                    <input class="w100 card-body"  placeholder="●●●●●●●●" v-validate="'required|min:8'" data-vv-name="password" 
                    :class="{'hasError': errors.has('password') }" type="password" :attr="{maxlength:20}" 
                    v-model="user.password">
                    <span v-show="errors.has('password')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                    <div v-if="errors.has('password')" class="errorMsg errorRight">
                        <span class="arrow_l_int"></span>{{ errors.first('password') }}
                    </div>
                </div>
            
            </div>
            <div class="step-card col-md-12">
                <div class="card-title w100">Comfirm Password</div>
                <div class="card-input">
                    <input class="w100 card-body" placeholder="●●●●●●●●" v-validate="{'required': 'true', 'is': user.password,min:8}" data-vv-name="repassword" 
                    :class="{'hasError' :errors.has('repassword') }" type="password" :attr="{maxlength:20}" 
                    v-model="user.repassword">
                    <span v-show="errors.has('repassword')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                    <div v-if="errors.has('repassword')" class="errorMsg errorRight">
                        <span class="arrow_l_int"></span>{{ errors.first('repassword') }}
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
import { Validator } from 'vee-validate'
export default {
    name: 'step1',
    data() {
        return {
            isValidate: false,
            user: {
                email: '',
                password: '',
                repassword: ''
            }
        }
    },
    watch: {
        'user': {
            handler(val, oldval) {
                if (this.user.email != '' && this.user.password != '' && this.user.repassword != '') {
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
                this.$router.push({ path: '/step2' });
            }
        },
    }
}
</script>

<style lang="scss">
</style>
