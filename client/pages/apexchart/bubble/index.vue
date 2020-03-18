<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Apec chart - bubble
    </h2>
    <div slot="content-container">
      <div id="chart">
        <ApexCharts
          :options="chartOptions"
          :series="series"
          height="500"
          type="bubble"
        />
      </div>
    </div>
  </ContentCard>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8,
          gradient: {
            enabled: false
          }
        },
        title: {
          text: 'Simple Bubble Chart'
        },
        xaxis: {
          tickAmount: 12,
          type: 'category'
        },
        yaxis: {
          max: 70
        }
      },
      series: [
        {
          name: 'Bubble1',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Bubble2',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Bubble3',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Bubble4',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ]
    }
  },
  methods: {
    generateData(baseval, count, yrange) {
      let i = 0
      const series = []
      while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15
        series.push([x, y, z])
        baseval += 86400000
        i++
      }
      return series
    }
  }
}
</script>
