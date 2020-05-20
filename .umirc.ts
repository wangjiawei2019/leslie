/*
 * @Date: 2020-05-20 23:06:18
 * @LastEditors: wangjiawei
 * @LastEditTime: 2020-05-20 23:13:51
 * @FilePath: /leslie/.umirc.ts
 */

import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
})
