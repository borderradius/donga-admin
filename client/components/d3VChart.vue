<template>
  <div class="svg-container">
    <svg id="graph" width="100%" height="600">
      <g id="xAxis" />
      <g id="yAxis" />
      <g id="bars" />
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import { Axis } from '../plugins/d3Axis'

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
    xAxisPos: {
      type: String,
      default: ''
    },
    yAxisPos: {
      type: String,
      default: ''
    },
    xAxisPadding: {
      type: Array,
      default: () => {
        return []
      }
    },
    yAxisPadding: {
      type: Array,
      default: () => {
        return []
      }
    },
    xAxisTranslate: {
      type: Array,
      default: () => {
        return []
      }
    },
    yAxisTranslate: {
      type: Array,
      default: () => {
        return []
      }
    },
    xAxisRange: {
      type: Array,
      default: () => {
        return []
      }
    },
    yAxisRange: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted() {
    this.makeXAxis().render()
    this.makeYAxis().render()
    this.makeGraph()
  },
  methods: {
    /**
     * 축 값에 따라 선택적 scale type 설정
     */
    getScaleType(axisData) {
      let scaleType = 'band'
      if (typeof axisData[0] === 'number' && typeof axisData[1] === 'number') {
        scaleType = 'linear'
      }
      return scaleType
    },
    /**
     * x 축 만들기
     */
    makeXAxis() {
      const xScaleType = this.getScaleType(this.xAxisData)
      const x = new Axis(xScaleType, this.xAxisPos)
        .domain(this.xAxisData)
        .padding(this.xAxisPadding[0], this.xAxisPadding[1])
        .select('#xAxis')
        .translate(this.xAxisTranslate[0], this.xAxisTranslate[1])
        .range(this.xAxisRange[0], this.xAxisRange[1])
      // .render()
      return x
    },
    /**
     * y 축 만들기
     */
    makeYAxis() {
      const yScaleType = this.getScaleType(this.yAxisData)
      const y = new Axis(yScaleType, this.yAxisPos)
        .domain(this.yAxisData)
        .padding(this.yAxisPadding[0], this.yAxisPadding[1])
        .select('#yAxis')
        .translate(this.yAxisTranslate[0], this.yAxisTranslate[1])
        .range(this.yAxisRange[0], this.yAxisRange[1])
      // .render()
      return y
    },
    /**
     * 트랜지션
     */
    makeTransition() {
      return d3
        .select('#graph')
        .transition()
        .duration(500)
        .ease(d3.easeQuad)
    },
    /**
     * 그래프 그리기
     */
    makeGraph() {
      // const rawData = [
      //   { country: 'ko', val: 2000 },
      //   { country: 'ch', val: 2000 },
      //   { country: 'jp', val: 2000 },
      //   { country: 'us', val: 2000 },
      //   { country: 'fr', val: 2000 },
      //   { country: 'en', val: 2000 }
      // ]
      // const xScaleType = this.getScaleType(this.xAxisData)
      // const x = new Axis(xScaleType, this.xAxisPos)
      //   .domain(this.xAxisData)
      //   .padding(this.xAxisPadding[0], this.xAxisPadding[1])
      //   .select('#bars')
      //   .translate(this.xAxisTranslate[0], this.xAxisTranslate[1])
      //   .range(this.xAxisRange[0], this.xAxisRange[1])
      // console.log(x)
      // const bars = d3.select('#bars') // 그래프 그려질 영역
      // const t = this.makeTransition() // 트랜지션
      // bars
      //   .selectAll('rect')
      //   .data(rawData)
      //   .join('rect')
      //   .attr('fill', () => '#FD82ED')
      //   .attr('x', 20)
      //   .attr('y', 20)
      //   .attr('width', y.bandwidth())
      // console.log(bars, t)
    }
    // makeAxis() {
    //   const xScaleType = this.getScaleType(this.xAxisData)
    //   const yScaleType = this.getScaleType(this.yAxisData)
    //   const x = new Axis(xScaleType, this.xAxisPos)
    //     .domain(this.xAxisData)
    //     .padding(this.xAxisPadding[0], this.xAxisPadding[1])
    //     .select(this.xAxisSelect)
    //     .translate(this.xAxisTranslate[0], this.xAxisTranslate[1])
    //     .listener('resize', function() {
    //       this.range(this.xAxisRange[0], this.xAxisRange[1]).render()
    //     })
    //   const y = new Axis(yScaleType, this.yAxisPos)
    //     .domain(this.yAxisData)
    //     .padding(this.yAxisPadding[0], this.yAxisPadding[1])
    //     .select(this.yAxisSelect)
    //     .translate(this.yAxisTranslate[0], this.yAxisTranslate[1])
    //     .listener('resize', function() {
    //       this.range(this.yAxisRange[0], this.yAxisRange[1]).render()
    //     })
    //   window.addEventListener('resize', () => {
    //     x.listener('resize')
    //     y.listener('resize')
    //   })
    //   x.listener('resize')()
    //   y.listener('resize')()
    // }
  }
}
</script>
