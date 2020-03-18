<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      ref="input"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :class="[size === 'lg' ? 'py-3' : 'py-1']"
      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded px-4"
      @input="updateInput"
      @keyup.enter="sendEvent"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Input Search Text'
    },
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendEvent() {
      this.$emit('inputEnter')
    },
    updateInput() {
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>
