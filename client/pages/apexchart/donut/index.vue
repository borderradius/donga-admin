<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Apec chart - donut
    </h2>
    <div slot="content-container">
      <div id="chart">
        <ApexCharts
          :options="chartOptions"
          :series="series"
          height="500"
          type="donut"
        />

        <button @click="updateChart">Update!</button>
      </div>
    </div>
  </ContentCard>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        labels: ['Blue', 'Green', 'Yellow', 'Red']
      },
      series: [11, 32, 45, 32]
    }
  },
  methods: {
    updateChart() {
      const max = 90
      const min = 20
      const newData = this.series.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      this.series = newData
    }
  }
}
</script>
