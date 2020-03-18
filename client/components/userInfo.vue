<template>
  <div class="userInfo" @click="isHidden = !isHidden">
    <span class="inline-block mr-2 text-md">
      <span v-if="isLoggedIn" class="text-sm text-gray-500">Hi,</span> John
      doe</span
    >
    <span class="userInfo__initial">j</span>
    <div
      :class="{ hidden: isHidden }"
      class="bg-white rounded-sm absolute mt-3 p-2 shadow-lg userInfo__popMenu"
    >
      <!-- <button >log out</button> -->
      <!-- <n-link class="uppercase text-xs" to="/user/auth">sign out</n-link> -->
      <a href="javascript:;" class="uppercase text-xs" @click="signOut"
        >Sign out</a
      >
    </div>
    <!-- <button
      @click="isShow = !isShow"
      :class="{ hidden: isShow }"
      class="h-screen w-screen fixed top-0 left-0 cursor-default"
    /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isHidden: true
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.loggedIn
    })
  },
  mounted() {
    // const body = document.getElementsByTagName('body')
    // console.log(body[0])
    // window.addEventListener('click', this.toggleMenu)
  },
  methods: {
    async signOut() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/user/auth')
    }
    // toggleMenu() {
    //   console.log('haha')
    //   this.isShow = true
    // }
  }
}
</script>

<style lang="scss" scoped></style>
