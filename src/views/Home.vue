<!--
 * @Date: 2020-04-16 22:52:23
 * @LastEditors: wangjiawei
 * @LastEditTime: 2020-04-16 23:27:46
 * @FilePath: /leslie/src/views/Home.vue
 -->
<template>
  <button @click="increment">Count is: {{ state.count }}, double is: {{ state.double }}</button>
</template>

<script>
import { reactive, computed } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    };
  }
};
</script>

<style lang="scss">
</style>