<template>
    <div class="step4">
        <div class="row">
            <div class="title col-md-12">Payment Method</div>
            <div class="subtitle col-md-12">Add your credit card infomation! </div>
            <div class="step-body text-left">
                <div class="step-card col-md-12">
                    <div class="card-title w100">Card Number</div>
                    <div class="card-input ">
                        <input class="w100 card-body" v-mask="'#### #### #### ####'" placeholder="1122 3344 5566 7788" v-validate="'required|credit_card'"
                        v-model="credit.number" name="creditNumber" :class="{'hasError': errors.has('creditNumber') }" type="tel">
                        <span v-if="cardType == '' && errors.has('creditNumber') && credit.number.length >= 19" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                        <span v-if="cardType == 1 && credit.number.length <= 19" class="bankIcon" :class="{'danger':errors.has('creditNumber') && credit.number.length >= 19,'allRight':!errors.has('creditNumber') && credit.number.length >= 19}"><i class="fab fa-lg fa-cc-visa"></i></span>
                        <span v-if="cardType == 2 && credit.number.length <= 19" class="bankIcon" :class="{'danger':errors.has('creditNumber') && credit.number.length >= 19,'allRight':!errors.has('creditNumber') && credit.number.length >= 19}"><i class="fab fa-lg fa-cc-mastercard"></i></span>
                        <span v-if="cardType == 3 && credit.number.length <= 19" class="bankIcon" :class="{'danger':errors.has('creditNumber') && credit.number.length >= 19,'allRight':!errors.has('creditNumber') && credit.number.length >= 19}"><i class="fab fa-lg fa-cc-jcb"></i></span>
                        <div v-if="errors.has('creditNumber') && credit.number.length >= 19" class="errorMsg errorRight">
                            <span class="arrow_l_int"></span>{{ errors.first('creditNumber') }}
                        </div>
                    </div>
                </div>
                <div class="step-card col-md-6">
                    <div class="card-title w100">Cardholder Name</div>
                    <div class="card-input">
                        <input class="w100 card-body" type="text" placeholder="Example Name" v-model="credit.holderName" data-vv-name="holderName" 
                        v-validate="'required'" :class="{'hasError': errors.has('holderName') }">
                        <span v-show="errors.has('holderName')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                        <div v-if="errors.has('holderName')" class="errorMsg errorLeft ">
                            <span class="arrow_r_int"></span>{{ errors.first('holderName') }}
                        </div>
                    </div>
                </div>
                <div class="step-card col-md-6">
                    <div class="card-title w100">Bank Name</div>
                    <div class="card-input">
                        <input class="w100 card-body" type="text" placeholder="Example Bank" v-model="credit.bank" data-vv-name="bank" 
                        v-validate="'required'" :class="{'hasError': errors.has('bank') }">
                        <span v-show="errors.has('bank')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                        <div v-if="errors.has('bank')" class="errorMsg errorRight ">
                            <span class="arrow_l_int"></span>{{ errors.first('bank') }}
                        </div>
                    </div>
                </div>
                <div class="step-card col-md-4">
                    <div class="card-title w100">CCV</div>
                    <div class="card-input">
                        <input class="w100 card-body" type="text" placeholder="123" v-model="credit.ccv" name="ccv" 
                        v-validate="'required|digits:3'" :class="{'hasError': errors.has('ccv') }">
                        <span v-show="errors.has('ccv')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                        <div v-if="errors.has('ccv')" class="errorMsg errorLeft ">
                            <span class="arrow_r_int"></span>{{ errors.first('ccv') }}
                        </div>
                    </div>
                </div>
                <div class="step-card col-md-8">
                     <div class="card-title w100">Expire Date</div>
                      <div class="card-input row">
                           <div class="card-select col-md-6">
                                <select v-cloak v-validate="'required'" v-model="credit.exp_month" class="w100" name="exp_month">
                                    <option value="" disabled checked>月份</option>
                                    <option v-for="(month, index) in cardMonth" :key="index" :value="month">{{ month }}</option>
                                </select>
                                <span v-show="errors.has('exp_month')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                                <div v-if="errors.has('exp_month')" class="errorMsg errorLeft ">
                                    <span class="arrow_r_int"></span>{{ errors.first('exp_month') }}
                                </div>
                           </div>
                           <div class="card-select col-md-6">
                                 <select v-cloak v-validate="'required'" v-model="credit.exp_year" class="w100" name="exp_year">
                                    <option value="" disabled checked>年</option>
                                    <option v-for="(year, index) in cardYear" :key="index" :value="year">{{ year }}</option>
                                </select>
                                <span v-show="errors.has('exp_year')" class="errorIcon"><i class="fas fa-exclamation-triangle"></i></span>
                                <div v-if="errors.has('exp_year')" class="errorMsg errorLeft ">
                                    <span class="arrow_r_int"></span>{{ errors.first('exp_year') }}
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
import { mask } from 'vue-the-mask'
export default {
    name: 'step4',
    directives: { mask },
    created: function () {
        var current = new Date().getFullYear();
        for (let i = current; i < current + 25; i++) {
            this.cardYear.push(i.toString().slice(2, 5));
        }

        for (let i = 1; i <= 12; i++) {
            if (i.toString().length == 1) {
                i = `0${i}`;
            }
            this.cardMonth.push(i);
        }
    },
    data() {
        return {
            isValidate: false,
            credit: {
                number: '',
                exp_month: '',
                exp_year: '',
                ccv: '',
                bank: '',
                holderName: '',
            },
            cardType: '',
            cardYear: [],
            cardMonth: [],
        }
    },
    watch: {
        'credit': {
            handler(val, oldval) {
                if (this.credit.number != '' && this.credit.exp_month != '' && this.credit.exp_year != '' &&
                    this.credit.ccv != '' && this.credit.bank != '' && this.credit.holderName != '') {
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
        },
        'credit.number': function (val) {
            //check for Visa
            if (/^4/.test(val)) {
                this.cardType = 1; //"visa"
            }
            //check for MasterCard
            else if (/^5[1-5]/.test(val)) {
                this.cardType = 2; //"mastercard";
            }
            //then check for JCB
            else if (/^35(2[89]|[3-8][0-9])/.test(val)) {
                this.cardType = 3 //"JCB";
            } else {
                this.cardType = '';
            }
        },
    },
    methods: {
        nextStep() {
            if (this.isValidate) {
                this.$router.push({ path: '/done' });
            }
        }
    }
}
</script>

<style lang="scss">
</style>
