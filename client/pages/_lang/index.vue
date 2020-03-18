<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ this.$t('about.title') }}</h1>
      <p>{{ this.$t('home.introduction') }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: this.$t('about.title'),
      introduction: this.$t('home.introduction')
    }
  },
  mounted() {
    console.log(this.$i18n)
  },
  head() {
    return { title: this.$t('about.title') }
  }
}
</script>
