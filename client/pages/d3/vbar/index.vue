<template>
  <div>
    <ContentCard size="full">
      <h2 slot="content-title">
        Data Driven Documents
      </h2>
      <div slot="content-container">
        <D3VBar
          :x-axis-data="xAxisData"
          :y-axis-data="yAxisData"
          :chart-data="chartData"
          :chart-options="chartOptions"
        />
        <!-- <D3HBar />
        <D3VChart
          :xAxisData="xAxisData"
          :yAxisData="yAxisData"
          :xAxisPadding="xAxisPadding"
          :yAxisPadding="yAxisPadding"
          :xAxisTranslate="xAxisTranslate"
          :yAxisTranslate="yAxisTranslate"
          :xAxisRange="xAxisRange"
          :yAxisRange="yAxisRange"
          x-axis-pos="bottom"
          y-axis-pos="left"
        /> -->
      </div>
    </ContentCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [
        { country: '2000', val: 2234 },
        { country: '2001', val: 3234 },
        { country: '2002', val: 6234 },
        { country: '2003', val: 1234 },
        { country: '2004', val: 4234 },
        { country: '2005', val: 7234 }
        // { country: 'ko', val: 2234 },
        // { country: 'ch', val: 3234 },
        // { country: 'jp', val: 6234 },
        // { country: 'us', val: 1234 },
        // { country: 'fr', val: 4234 },
        // { country: 'en', val: 7234 }
      ],
      xAxisData: ['2000', '2001', '2002', '2003', '2004', '2005'],
      // xAxisData: ['ko', 'ch', 'jp', 'us', 'fr', 'en'],
      yAxisData: [0, 8284],
      chartOptions: {
        width: 1000,
        height: 600,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 70,
        marginLeft: 40,
        xAxisType: '년'
      }
      // xAxisPadding: [0, 0],
      // yAxisPadding: [0, 0],
      // xAxisTranslate: [80, 500],
      // yAxisTranslate: [80, 0],
      // xAxisRange: [0, 900],
      // yAxisRange: [500, 0]
    }
  },
  methods: {
    getElements() {
      /**
       * Use CSV File ----------------------------
       */
      // d3.csv('stocks.csv', function(stocks) {
      //   const a = stocks.date.substr(stocks.date.length - 4, 4)
      //   console.log(a)
      // })
      // -----------------------------------------
      /**
       * Linear, Domain, Range -------------------
       */
      // const scaleX = d3
      //   .scaleLinear()
      //   .domain([0, 8284])
      //   .range([0, 900])
      // console.warn(scaleX)
      // svg
      //   .append('g')
      //   .attr('transform', 'translate(20, 20)')
      //   .call(d3.axisBottom(a.scale))
      // -----------------------------------------
    }
  }
}
</script>
<style lang="scss" scoped></style>
