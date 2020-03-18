<template>
  <div id="chart-container" />
</template>

<script>
import * as d3 from 'd3'
// import { OECDData } from '~/static/d3/d3Data'

export default {
  props: {
    xAxisData: {
      type: Array,
      default: () => {
        return []
      }
    },
    yAxisData: {
      type: Array,
      default: () => {
        return []
      }
    },
    chartData: {
      type: Array,
      default: () => {
        return []
      }
    },
    chartOptions: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      margin: {
        top: this.chartOptions.marginTop,
        right: this.chartOptions.marginRight,
        bottom: this.chartOptions.marginBottom,
        left: this.chartOptions.marginLeft
      }
    }
  },
  computed: {
    width() {
      return this.chartOptions.width - this.margin.left - this.margin.right
    },
    height() {
      return this.chartOptions.height - this.margin.top - this.margin.bottom
    }
  },
  mounted() {
    this.resizer()
  },
  methods: {
    resizer() {
      // const keyNm = Object.keys(this.chartData[0])[0]
      // const valNm = Object.keys(this.chartData[0])[1]

      const svg = d3
        .select('#chart-container')
        .append('svg')
        .attr('width', this.width + this.margin.left + this.margin.right)
        .attr('height', this.height + this.margin.top + this.margin.bottom)

      const x = d3
        .scaleBand()
        .domain(this.xAxisData)
        .range([this.margin.left, this.width - this.margin.right])
        .padding(0.3)

      const y = d3
        .scaleLinear()
        .domain(this.yAxisData)
        .nice()
        .range([this.height - this.margin.bottom, this.margin.top])

      // const t = svg
      //   .transition()
      //   .duration(500)
      //   .ease(d3.easeQuad)

      // Draw x, y Axis
      if (this.chartOptions.xAxisType) {
        svg
          .append('g')
          .attr(
            'transform',
            `translate(0, ${this.height - this.margin.bottom})`
          )
          .call(
            d3
              .axisBottom(x)
              // .tickFormat(d3.format('%'))
              .tickFormat((d) => d + this.chartOptions.xAxisType)
              .tickSizeOuter(0)
          )
      } else {
        svg
          .append('g')
          .attr(
            'transform',
            `translate(0, ${this.height - this.margin.bottom})`
          )
          .call(d3.axisBottom(x))
      }
      svg
        .append('g')
        .attr('transform', `translate(${this.margin.left}, 0)`)
        .call(d3.axisLeft(y))

      svg
        .append('g')
        .attr('fill', '#f502d4')
        .selectAll('rect')
        .data(this.chartData)
        .join('rect')
        .attr('x', (d) => x(d.country))
        .attr('y', (d) => y(d.val))
        .attr('width', x.bandwidth())
        // .transition()
        // .duration(500)
        // .ease(d3.easeQuad)
        .attr('height', (d) => y(0) - y(d.val))
        .on('mouseenter', function() {
          d3.select(this)
            .transition()
            .attr('fill', '#FD82ED')
        })
        .on('mouseleave', function() {
          d3.select(this)
            .transition()
            .attr('fill', '#f502d4')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  path {
    fill: none;
    stroke: grey;
    stroke-width: 1px;
  }
  line {
    stroke: grey;
  }
}
</style>
