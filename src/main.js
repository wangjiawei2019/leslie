/*
 * @Date: 2020-04-16 22:44:24
 * @LastEditors: wjw
 * @LastEditTime: 2020-04-20 18:42:16
 * @FilePath: /leslie/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'vue-echarts'
import 'echarts/extension/bmap/bmap'

Vue.use(VueCompositionApi)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
