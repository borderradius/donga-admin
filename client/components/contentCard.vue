<template>
  <div :class="size" class="content__card">
    <div class="content__card--title">
      <slot name="content-title" />
      <button
        :class="{ toggle: isHidden }"
        class="content__card--fold"
        @click="toggleContent"
      >
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-xs" />
      </button>
    </div>
    <div :class="{ hidden: isHidden }" class="content__card--container">
      <slot name="content-container" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: ''
    },
    toggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isHidden: this.toggle
    }
  },
  methods: {
    toggleContent() {
      this.isHidden = !this.isHidden
      if (!this.isHidden) this.$emit('getContract')
    }
  }
}
</script>

<style lang="scss" scoped></style>
