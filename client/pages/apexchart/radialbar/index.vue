<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Apec chart - radialBar
    </h2>
    <div slot="content-container">
      <div id="chart">
        <ApexCharts
          :options="chartOptions"
          :series="series"
          height="500"
          type="radialBar"
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
        labels: ['Percent']
      },
      series: [81]
    }
  }
}
</script>
