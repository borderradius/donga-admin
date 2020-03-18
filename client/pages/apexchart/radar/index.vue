<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Apec chart - radar
    </h2>
    <div slot="content-container">
      <div id="chart">
        <ApexCharts
          :options="chartOptions"
          :series="series"
          height="500"
          type="radar"
        />
      </div>
    </div>
  </ContentCard>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radar'
        },
        title: {
          text: 'Basic Radar Chart'
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
      }
    }
  }
}
</script>
