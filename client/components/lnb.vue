<template>
  <div class="lnb">
    <Menu1 :data="lnbData" />
  </div>
</template>

<script>
import { lnbData } from '../static/lnbData.js'
import Menu1 from './menu1.vue'

export default {
  components: {
    Menu1
  },
  data() {
    return {
      lnbData
    }
  }
}
</script>

<style lang="scss" scoped></style>
