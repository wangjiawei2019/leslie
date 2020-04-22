<!--
 * @Github: https://github.com/wangjiawei2019
 * @Date: 2020-04-17 18:26:54
 * @LastEditors: wjw
 * @LastEditTime: 2020-04-22 11:36:02
 -->
<template>
  <div class="test">
    <v-chart :options="options" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import shenzhen from '@/data/geo/市含县/440300_full.json'

export default {
  components: {
    ECharts
  },
  created() {
    ECharts.registerMap('深圳', shenzhen)
  },
  data() {
    return {
      options: {
        series: [
          {
            type: 'map',
            map: '深圳',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            aspectScale: 2,
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            // layoutSize: 100,
            itemStyle: {
              areaColor: '#2D3596',
              borderColor: '#0090E2',
              borderWidth: 1
            },
            label: {
              show: true,
              fontSize: 18.5,
              align: 'center',
              verticalAlign: 'middle'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.test {
  width: 1077px;
  height: 536px;
}
</style>