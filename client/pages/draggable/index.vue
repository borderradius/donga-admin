<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Draggable
    </h2>
    <div slot="content-container">
      <!-- <div ref="bounder" class="container-for-draggable">
        <div v-draggable="draggableWithBoundries" class="draggable-container">
          drag me within my boundries
        </div>
      </div> -->
      <div ref="dragWrap" class="draggable--wrap">
        <img
          v-draggable="draggableValue"
          class="draggable--item"
          src="../../assets/img/search.svg"
        />
      </div>
    </div>
  </ContentCard>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'
export default {
  directives: {
    Draggable
  },
  data() {
    return {
      handleId: 'handle-id',
      draggableValue: {
        resetInitialPos: true,
        initialPosition: { left: 320, top: 300 },
        onPositionChange: this.onPosChanged
      }
    }
  },
  mounted() {
    this.draggableValue.boundingElement = this.$refs.dragWrap
  },
  methods: {
    onPosChanged(pos) {
      console.log(pos.x)
    }
  }
}
</script>

<style lang="scss" scoped>
.draggable {
  &--wrap {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    overflow: hidden;
    position: relative;
  }
  &--item {
    cursor: pointer;
  }
}
</style>
