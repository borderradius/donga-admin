<template>
  <div>
    <ul class="flex">
      <li
        v-for="(item, index) in tabHeader"
        :key="index"
        class="mr-3"
        @click="isActive = item"
      >
        <a
          :class="{ active: isActive === item }"
          class="tab"
          href="javascript:;"
          >{{ item }}</a
        >
      </li>
    </ul>
    <div v-for="(item, index) in tabHeader" :key="item" class="mt-8">
      <slot v-if="isActive === item" :name="`tab-container-${index}`" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabHeader: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      isActive: this.tabHeader[0]
    }
  },
  methods: {
    tabClick(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped></style>
