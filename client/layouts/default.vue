<template>
  <div class="flex">
    <div class="left">
      <Lnb />
    </div>
    <div class="right">
      <Header />
      <Breadcrumb />
      <div class="container p-4 mt-34">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Lnb from '../components/lnb.vue'
import Breadcrumb from '../components/breadcrumb.vue'

export default {
  components: {
    Lnb,
    Header,
    Breadcrumb
  }
}
</script>

<style></style>
