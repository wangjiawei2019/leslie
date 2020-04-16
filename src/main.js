/*
 * @Date: 2020-04-16 22:44:24
 * @LastEditors: wangjiawei
 * @LastEditTime: 2020-04-16 23:28:12
 * @FilePath: /leslie/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
