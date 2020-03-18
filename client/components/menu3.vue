<template>
  <div class="overflow-hidden">
    <ul id="menu3">
      <li v-for="item in data" :key="item.menu3">
        <a
          :class="{ active: item.menu3 === isActive }"
          href="javascript:;"
          class="block w-full h-full flex items-center"
          @click="toggleActive(item)"
        >
          <font-awesome-icon :icon="['fas', 'circle']" class="circle" />
          <h6>{{ item.menu3 }}</h6>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      isActive: ''
    }
  },
  methods: {
    toggleActive(item) {
      this.isActive = item.menu3
      this.goPage(item.link)
    },
    goPage(link) {
      if (link) this.$router.push(`/${link}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
