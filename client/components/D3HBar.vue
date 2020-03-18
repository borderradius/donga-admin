<template>
  <div>
    <div id="res" />
  </div>
</template>

<script>
import * as d3 from 'd3'
import { OECDData } from '~/static/d3/d3Data'

export default {
  data() {
    return {
      width: 0,
      height: 0,
      margin: {
        top: 15,
        right: 25,
        bottom: 25,
        left: 60
      },
      years: [],
      year: '',
      filterList: ['lower', 'higher', 'alphabetize'],
      filter: 'alphabetize'
    }
  },
  computed: {
    getWidth() {
      return 900 - this.margin.left - this.margin.right
    },
    getHeight() {
      return 1200 - this.margin.top - this.margin.bottom
    }
  },
  mounted() {
    this.width = this.getWidth
    this.height = this.getHeight
    this.years = Object.keys(OECDData[0]).slice(0, 4)
    this.year = this.years[0]
    this.resizer()
  },
  methods: {
    resizer() {
      // 데이터 정렬
      if (this.filter === 'higher') {
        // 오름차순
        OECDData.sort((a, b) => {
          return a[this.year] - b[this.year]
        })
      } else if (this.filter === 'lower') {
        // 내림차순
        OECDData.sort((a, b) => {
          return b[this.year] - a[this.year]
        })
      } else if (this.filter === 'alphabetize') {
        // 알파벳순
        const comp = (a, b) => {
          return a.country < b.country ? -1 : a.country > b.country ? 1 : 0
        }
        OECDData.sort(comp)
      }

      const country = OECDData.map((value) => value.country)
      const avg = OECDData.map((value) => value[this.year])
      const avgPercent = avg.reduce((a, b) => a + b) / OECDData.length
      const maxPercent = d3.max(OECDData.map((item) => item[this.year]))
      // const minPercent = d3.min(OECDData.map((item) => item[this.year]))
      d3.select('svg').remove()
      const svg = d3
        .select('#res')
        .append('svg')
        .attr('width', this.width + this.margin.left + this.margin.right)
        .attr('height', this.height + this.margin.top + this.margin.bottom)
        .attr('transform', `translate(${this.margin.left},${this.margin.top})`)
      const x = d3
        .scaleLinear()
        .domain([0, maxPercent])
        .nice()
        .range([this.margin.left, this.width - this.margin.right])
      const y = d3
        .scaleBand()
        .domain(country)
        .range([this.height, this.margin.bottom + this.margin.top])
        .padding(0.1)
      // x축 그리기
      svg
        .append('g')
        .attr('transform', `translate(${this.margin.right}, ${this.height})`)
        .call(d3.axisBottom(x).tickFormat((d) => d + '%'))
      // y축 그리기
      svg
        .append('g')
        .attr(
          'transform',
          `translate(${this.margin.left + this.margin.right}, 0)`
        )
        .call(d3.axisLeft(y))

      const t = svg
        .transition()
        .duration(500)
        .ease(d3.easeQuad)
      svg
        .append('g')
        .selectAll('text')
        .data(OECDData)
        .join((enter) =>
          enter
            .append('text')
            .attr('x', (d) => x(d[this.year]))
            .attr('y', (d) => y(d.country) + 18)
            .attr('fill', '#ccc')
            .attr('font-size', '12')
            .text((d) => {
              // console.log(d[country], d[this.year])
              return d[this.year]
            })
            .call(
              () => enter.transition(t).attr('x', (d) => x(d[this.year]) + 90),
              (exit) =>
                exit.call(() =>
                  exit
                    .transition(t)
                    .attr('x', (d) => x(d[this.year]))
                    .remove()
                )
            )
        )
      // bar 그리는 부분
      svg
        .append('g')
        .attr('transform', `translate(${this.margin.right + 1}, 0)`)
        .selectAll('rect')
        .data(OECDData)
        .join('rect')
        .attr('fill', (d) => {
          if (d[this.year] < avgPercent) {
            return '#FD82ED'
          } else {
            return '#f502d4'
          }
        })
        .attr('x', () => x(0))
        .attr('y', (d) => y(d.country))
        .attr('height', y.bandwidth())
        // .on('mouseenter', function(){
        //   d3.select(this)
        //     .transition()
        //     .attr('fill', '#FD82ED')
        // })
        // .on('mouseleave', function(){
        //   d3.select(this)
        //     .transition()
        //     .attr('fill', '#f502d4')
        // })
        .transition()
        .duration(500)
        .ease(d3.easeQuad)
        .attr('width', (d) => x(d[this.year]))

      // 기준선 dash style
      svg
        .append('line')
        .attr('x1', x(avgPercent) + this.margin.left)
        .attr('y1', this.height)
        .attr('x2', x(avgPercent) + this.margin.left)
        .attr('y2', 0)
        .attr('stroke-dasharray', '2 2')
        .attr('stroke', '#ff0')
    }
  }
}
</script>
<style lang="scss">
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
