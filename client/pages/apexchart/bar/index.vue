<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Apec chart - bar
    </h2>
    <div slot="content-container">
      <div id="chart">
        <ApexCharts
          :options="chartOptions"
          :series="series"
          height="500"
          type="bar"
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
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    }
  },
  methods: {
    updateChart() {
      const max = 90
      const min = 20
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]]
      }
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ]
    }
  }
}
</script>
