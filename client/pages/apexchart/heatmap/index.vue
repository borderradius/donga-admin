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
          type="heatmap"
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
        colors: ['#008FFB'],
        xaxis: {
          type: 'category'
        },
        title: {
          text: 'HeatMap Chart (Single color)'
        }
      },
      series: [
        {
          name: 'Metric1',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric2',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric3',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric4',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric5',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric6',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric7',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric8',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric9',
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        }
      ]
    }
  },
  methods: {
    generateData(count, yrange) {
      let i = 0
      const series = []
      while (i < count) {
        const x = (i + 1).toString()
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        series.push({
          x,
          y
        })
        i++
      }
      return series
    }
  }
}
</script>
