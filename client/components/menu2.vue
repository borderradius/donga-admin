<template>
  <div class="overflow-hidden">
    <ul id="menu2">
      <li v-for="item in data" :key="item.menu2">
        <a
          :class="{ active: item.menu2 === isActive }"
          href="javascript:;"
          class="block w-full h-full flex items-baseline justify-between"
          @click="toggleActive(item)"
        >
          <h5>{{ item.menu2 }}</h5>
          <font-awesome-icon
            v-if="item.child"
            :icon="['fas', 'chevron-right']"
            class="text-xs chevron-right"
          />
        </a>
        <Menu3 v-if="item.child" :data="item.child" />
      </li>
    </ul>
  </div>
</template>

<script>
import Menu3 from './menu3.vue'

export default {
  components: {
    Menu3
  },
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
      this.isActive = item.menu2
      this.goPage(item.link)
    },
    goPage(link) {
      if (link) this.$router.push(`/${link}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
