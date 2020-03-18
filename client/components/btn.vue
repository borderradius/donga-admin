<template>
  <button
    v-ripple.mouseover.500
    :type="mode"
    :class="[type ? `btn-${type}` : '', size ? `btn-${size}` : '']"
    class="btn"
    @click="btnClick"
  >
    {{ label }}
  </button>
</template>

<script>
import Vue from 'vue'
import Ripple from 'vue-ripple-directive'

Ripple.color = 'rgba(255, 255, 255, 0.35)'
Ripple.zIndex = 55

Vue.directive('ripple', Ripple)

export default {
  name: 'Btn',
  props: {
    label: {
      type: String,
      default: '버튼'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    btnClick() {
      this.$emit('btnClick')
    }
  }
}
</script>

<style lang="scss" scoped></style>
