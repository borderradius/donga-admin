<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Heatmap
    </h2>
    <div slot="content-container">
      <div id="chart" />
      <div id="dataset-picker" />
    </div>
  </ContentCard>
</template>

<script>
import * as d3 from 'd3'

export default {
  data() {
    return {
      datasets: ['data.tsv', 'data1.tsv']
    }
  },
  mounted() {
    this.make()
  },
  methods: {
    make() {
      const margin = { top: 50, right: 0, bottom: 100, left: 30 }
      const width = 960 - margin.left - margin.right
      const height = 430 - margin.top - margin.bottom
      const gridSize = Math.floor(width / 24)
      // const legendElementWidth = gridSize * 2
      const buckets = 9
      const colors = [
        '#ffffd9',
        '#edf8b1',
        '#c7e9b4',
        '#7fcdbb',
        '#41b6c4',
        '#1d91c0',
        '#225ea8',
        '#253494',
        '#081d58'
      ]
      const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
      const times = [
        '1a',
        '2a',
        '3a',
        '4a',
        '5a',
        '6a',
        '7a',
        '8a',
        '9a',
        '10a',
        '11a',
        '12a',
        '1p',
        '2p',
        '3p',
        '4p',
        '5p',
        '6p',
        '7p',
        '8p',
        '9p',
        '10p',
        '11p',
        '12p'
      ]
      const svg = d3.select('#chart').append('svg')

      svg
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

      // yAxis
      const dayLabels = svg.selectAll('.dayLabel')
      dayLabels
        .data(days)
        .enter()
        .append('text')
        .text((d) => d)
        .attr('x', 0)
        .attr('y', (d, i) => {
          return (i + 1) * gridSize
        })
        .style('text-anchor', 'end')
        .attr('transform', `translate(30, ${gridSize / 1.5})`)
        .attr('class', (d, i) => {
          return i >= 0 && i <= 4
            ? 'dayLabel mono axis axis-workweek'
            : 'dayLabel mono axis'
        })
      // xAxis
      const timeLabels = svg.selectAll('.timeLabel')
      timeLabels
        .data(times)
        .enter()
        .append('text')
        .text((d) => d)
        .attr('x', (d, i) => {
          return (i + 1) * gridSize
        })
        .attr('y', 0)
        .style('text-anchor', 'middle')
        .attr('transform', `translate(${gridSize / 2}, 30)`)
        .attr('class', (d, i) => {
          return i >= 7 && i <= 16
            ? 'timeLabel mono axis axis-worktime'
            : 'timeLabel mono axis'
        })

      // draw chart fx
      const heatmap = function(tsvFile) {
        d3.tsv(tsvFile, type).then(function(data) {
          const colorScale = d3
            .scaleQuantile()
            .domain([
              0,
              buckets - 1,
              d3.max(data, (d) => {
                return d.value
              })
            ])
            .range(colors)

          const cards = svg
            .selectAll('.hour')
            .data(data, (d) => `${d.day}:${d.hour}`)

          // cards.append('title')
          cards
            .enter()
            .append('rect')
            .attr('x', (d) => d.hour * gridSize)
            .attr('y', (d) => d.day * gridSize)
            // .attr('rx', 2)
            // .attr('ry', 2)
            .attr('class', 'hour bordered')
            .attr('width', gridSize)
            .attr('height', gridSize)
            .style('fill', colors[0])
          // .style('fill', (d) => {
          //   return colorScale(d.value)
          // })

          cards
            .transition()
            .duration(1000)
            .style('fill', (d) => {
              return colorScale(d.value)
            })

          // cards.select('title').text((d) => d.value)
          cards.exit().remove()

          // const legend = svg.selectAll('legend')
          // legend.data([0].concat(colorScale), (d) => d)
          // legend
          //   .enter()
          //   .append('g')
          //   .attr('class', 'legend')

          // legend
          //   .append('rect')
          //   .attr('x', (d, i) => legendElementWidth * i)
          //   .attr('y', height)
          //   .attr('width', legendElementWidth)
          //   .attr('height', gridSize / 2)
          //   .style('fill', (d, i) => colors[i])

          // legend
          //   .append('text')
          //   .attr('class', 'mono')
          //   .text((d) => `>= ${Math.round(d)}`)
          //   .attr('x', (d, i) => legendElementWidth * i)
          //   .attr('y', height + gridSize)

          // legend.exit().remove()
        })
      }

      function type(d) {
        return {
          day: +d.day,
          hour: +d.hour,
          value: +d.value
        }
      }

      heatmap(this.datasets[0])

      const datasetpicker = d3
        .select('#dataset-picker')
        .selectAll('.dataset-button')
        .data(this.datasets)

      datasetpicker
        .enter()
        .append('input')
        .attr('value', (d) => d)
        .attr('type', 'button')
        .attr('class', 'btn btn-info mr-2')
        .on('click', (d) => heatmap(d))
    }
  }
}
</script>

<style lang="scss" scoped>
rect.bordered {
  stroke: #e6e6e6;
  stroke-width: 2px;
}

text.mono {
  font-size: 9pt;
  font-family: Consolas, courier;
  fill: #aaa;
}

text.axis-workweek {
  fill: #000;
}

text.axis-worktime {
  fill: #000;
}
</style>
