<template>
  <div :class="[size === 'lg' ? 'py-3' : 'py-1']" class="datepicker">
    <datepicker1
      :inline="false"
      :language="ko"
      :format="dateFormatter"
      input-class="datepicker-input"
      class="w-full"
      @selected="select"
    />
  </div>
</template>

<script>
import { ko } from 'vuejs-datepicker/dist/locale'

export default {
  props: {
    size: {
      type: String,
      default: ''
    },
    datepickerData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      ko
    }
  },
  methods: {
    dateFormatter(date) {
      return date === '' ? '' : this.$moment(date).format('YYYY-MM-DD')
    },
    select(a) {
      this.$emit('input', this.dateFormatter(a))
    }
  }
}
</script>
