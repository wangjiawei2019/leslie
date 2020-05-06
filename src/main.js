/*
 * @Date: 2020-04-16 22:44:24
 * @LastEditors: wjw
 * @LastEditTime: 2020-05-06 14:28:18
 * @FilePath: /leslie/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
