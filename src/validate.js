import Vue from 'vue';
import VeeValidate, {
  Validator,
  Field
} from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);

export default function vali() {
  const Veeconfig = {
    locale: 'zh_CN',
    events: 'blur'
  };
  Vue.use(VeeValidate, Veeconfig);

  const dictionary = {
    en: {
      messages: {
        min: (str, num) => {
          return `MINIMUM ${num} CHARACTERS`
        },
        email: () => {
          return "INVALID EMAIL"
        },
        is: () => {
          return "NOT MATCH"
        },
        required: () => {
          return "REQUIRED FILED"
        },
        numeric: () => {
          return "NUMBERS ONLY"
        },
        tw_phone: () => {
          return "INVALID PHONE"
        },
        credit_card: () => {
          return "INVALID NUMBER"
        },
        digits: (str, num) => {
          return `MAXIMUN ${num} CHARACTERS`
        }
      }
    }
  };
  Validator.localize(dictionary);
  Validator.extend('tw_phone', {
    validate: value => {
      return /^[09]{2}[0-9]{8}$/.test(value);
    }
  })
}
