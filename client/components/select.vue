<template>
  <div>
    <div class="relative">
      <label
        v-if="label"
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-city"
      >
        {{ label }}
      </label>
      <select
        id="grid-state"
        ref="select"
        :value="defaultValue"
        :class="{ 'py-3': size === 'lg' }"
        class="block appearance-none w-full border bg-white border-grey-lighter text-grey-darker py-1 px-4 pr-8 rounded"
        @change="onChange"
      >
        <option :value="defaultValue">{{ defaultName }}</option>
        <option
          v-for="(op, index) in optionData"
          :key="index"
          :value="op[optionValueKey]"
        >
          {{ op[optionNameKey] }}
        </option>
      </select>
      <div
        :class="[size === 'lg' ? 'mt-4' : 'mt-2', label ? 'mt-12' : '']"
        class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker right-0 top-0"
      >
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    defaultName: {
      type: String,
      default: ''
    },
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    optionData: {
      type: Array,
      default: () => {
        return []
      }
    },
    optionNameKey: {
      type: String,
      default: ''
    },
    optionValueKey: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    onChange() {
      this.$emit('input', this.$refs.select.value)
    }
  }
}
</script>
