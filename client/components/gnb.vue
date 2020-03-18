<template>
  <ul class="flex gnb">
    <!-- <li class="mr-1">
      <a class="gnb__active" href="javascript:;">
        pages
      </a>
    </li>
    <li class="mr-1">
      <a href="javascript:;">apps</a>
    </li>
    <li class="mr-1">
      <a href="javascript:;">features</a>
    </li> -->
    <li class="mr-1">
      <a href="javascript:;" @click="changeLang">en</a>
    </li>
    <li class="mr-1">
      <a href="javascript:;" @click="changeLang">fr</a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    changeLang(e) {
      // console.log(this.$i18n)
      this.$store.commit('SET_LANG', e.target.text)
      this.$i18n.locale = e.target.text
    }
  }
}
</script>

<style lang="scss" scoped></style>
