import Vue from 'vue'
import { Bar, Line, Radar } from 'vue-chartjs'

console.warn(Line)
const base = {
  // eslint-disable-next-line vue/require-prop-types
  props: ['data', 'options'],
  watch: {
    data: {
      handler() {
        this.renderData()
      },
      deep: true
    },

    options: {
      handler() {
        this.renderData()
      },
      deep: true
    }
  },
  mounted() {
    this.renderData()
  },

  methods: {
    renderData() {
      this.renderChart(this.data, this.options)
    }
  }
}

Vue.component('LineChart', {
  ...base,
  extends: Line
})

Vue.component('RadarChart', {
  ...base,
  extends: Radar
})

Vue.component('BarChart', {
  ...base,
  extends: Bar
})
