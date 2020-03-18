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
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct'
          ]
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter(val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 41, 98, 87, 44, 91, 81, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ]
    }
  },
  methods: {
    updateChart() {
      const max = 100
      const min = 20
      const newSeries = []
      this.series.map((s) => {
        const data = s.data.map(() => {
          return Math.floor(Math.random() * (max - min + 1)) + min
        })
        newSeries.push({ data })
      })
      this.series = newSeries
    }
  }
}
</script>
