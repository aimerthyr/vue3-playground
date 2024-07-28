<script setup lang="ts">
import { onMounted } from 'vue';

defineOptions({
  name: 'RouterAnalysis',
});

onMounted(() => {
  // 监听hash的变化，然后从routes中找到对应的组件，然后渲染到对应的位置
  window.addEventListener('hashchange', () => {
    const routes = [
      {
        path: '/a',
        comp: '<h3>我是 A页面<h3/>',
      },
      {
        path: '/b',
        comp: '<h3>我是 B页面<h3/>',
      },
      {
        path: '*',
        comp: '<h3>我是 404页面<h3/>',
      },
    ];
    const comp =
      routes.find(item => `#${item.path}` === location.hash)?.comp ||
      routes.find(item => item.path === '*').comp;
    const container = document.querySelector('#container');
    container.innerHTML = comp;
  });
});
</script>

<template>
  <div>
    <h1 class="vp-mb-4">hash模式</h1>
    <div>
      <a
        class="vp-mr-8 vp-border vp-border-dashed vp-border-[#ccc] vp-p-4"
        href="#/a"
        >A页面</a
      >
      <a
        class="vp-mr-8 vp-border vp-border-dashed vp-border-[#ccc] vp-p-4"
        href="#/b"
        >B页面</a
      >
    </div>
    <div id="container" class="vp-mt-4"></div>
  </div>
</template>
