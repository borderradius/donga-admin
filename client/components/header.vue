<template>
  <div class="bg-white p-2 border-b flex justify-between fixed header">
    <Gnb class="align-middle" />
    <UserInfo />
  </div>
</template>

<script>
import UserInfo from './userInfo.vue'
import Gnb from './gnb.vue'
export default {
  components: {
    UserInfo,
    Gnb
  }
}
</script>

<style lang="scss" scoped></style>
