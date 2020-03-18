<template>
  <ul id="menu1">
    <li
      v-for="item in data"
      :key="item.menu1"
      class="overflow-hidden cursor-pointer"
    >
      <a
        :class="{ active: item.menu1 === isActive }"
        href="javascript:;"
        class="block w-full h-full flex items-baseline justify-between menu1"
        @click="toggleActive(item)"
      >
        <h4>
          <font-awesome-icon
            :icon="[item.icon1, item.icon2]"
            class="text-xs pre-icon"
          />
          {{ item.menu1 }}
        </h4>
        <font-awesome-icon
          v-if="item.child"
          :icon="['fas', 'chevron-right']"
          class="text-xs chevron-right"
        />
      </a>
      <Menu2 v-if="item.child" :data="item.child" />
    </li>
  </ul>
</template>

<script>
import Menu2 from './menu2'

export default {
  components: {
    Menu2
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
      isActive: '대시보드'
    }
  },
  methods: {
    toggleActive(item) {
      const resetActive = document.getElementsByClassName('active')
      if (resetActive.length > 1) {
        const iter = resetActive[Symbol.iterator]()
        iter.next()
        for (const a of iter) {
          a.classList.remove('active')
        }
      }
      this.isActive = item.menu1
      this.goPage(item.link)
    },
    goPage(link) {
      if (link) this.$router.push(`/${link}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
