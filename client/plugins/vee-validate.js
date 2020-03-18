import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  // message: 'This field is required'
  message(field) {
    // const rs = await window.$nuxt.$axios.get('contacts')
    // console.log(rs)
    return `${field}는 필수입니다.`
  }
})
extend('id', {
  message(field) {
    return `${field}는 영문이나 영문+숫자 조합으로 4~10자로 가능합니다.`
  },
  validate(value) {
    const strongRegex = new RegExp(/^[A-Za-z0-9]{4,14}$/)
    return strongRegex.test(value)
  }
})
extend('password', {
  message(field) {
    return `${field}는 영문+숫자 조합으로 8~24자로 적어주세요`
  },
  validate: (value) => {
    const strongRegex = new RegExp(/^[A-Za-z0-9-_!]{8,24}$/)
    return strongRegex.test(value)
  }
})
extend('image', {
  message(field) {
    return `${field}의 파일형식이 잘못되었습니다.`
  },
  validate: (value) => {
    const fileArr = ['jpg', 'jpeg', 'png']
    const fileName = value[0].name.split('.')
    const fileExtend = fileName[fileName.length - 1].toLowerCase()
    return fileArr.includes(fileExtend)
  }
})
// extend('password', (value) => {
//   if (value) {
//     const strongRegex = new RegExp(/^[A-Za-z0-9]{8,24}$/)
//     return strongRegex.test(value)
//   }
//   return '{_field_}는 영문+숫자 조합으로 8~24자로 적어주세요'
// })
extend('min', {
  message(field) {
    return `${field}값이 너무 적어요~ 조금만 더 적어주세요!`
  },
  validate(value, args) {
    return value.length >= args.length
  },
  params: ['length']
})

extend('minmax', {
  validate(value, { min, max } /** min,max는 args의 구조분해 */) {
    const length = value.length

    return length >= min && length <= max
  },
  params: ['min', 'max']
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Vue.component('ValidationProvider', ValidationProvider)
// import { extend } from 'vee-validate'
// import ko from 'vee-validate/dist/locale/ko'

// ko.attributes = {
//   id: '아이디',
//   name: '이름',
//   password: '비밀번호',
//   current_password: '현재 비밀번호',
//   new_password: '새 비밀번호',
//   new_password_confirm: '새 비밀번호 확인',
//   birth: '생년월일'
// }

// ko.messages = {
//   ...ko.messages,
//   required: (field) => `${field} 항목을 확인해주세요.`,
//   confirmed: (field) => `${field}(이)가 일치하지 않습니다.`,
//   verify_password: () =>
//     '비밀번호는 영문, 숫자를 포함하여 10자 이상 12자 이하로 입력해 주세요.',
//   verify_birth: () => '생년월일을 날짜형식에 맞는 8자리로 입력해 주세요.'
// }

// Vue.use(VeeValidate, { locale: 'ko', dictionary: { ko } })

// VeeValidate.Validator.extend('verify_password', {
//   validate: (value) => {
//     const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{10,12})')
//     return strongRegex.test(value)
//   }
// })

// VeeValidate.Validator.extend('verify_birth', {
//   validate: (value) => {
//     const strongRegex = new RegExp(
//       '^(19[0-9][0-9]|20[0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$'
//     )
//     return strongRegex.test(value)
//   }
// })
