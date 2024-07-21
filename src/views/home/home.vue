<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NavItem } from './home.type';

defineOptions({
  name: 'Home',
});

const navList: NavItem[] = [
  {
    path: '/home/practise',
    label: '练习',
    children: [
      {
        path: '/home/practise/lowcode',
        label: '低代码',
      },
    ],
  },
];

const route = useRoute();
const router = useRouter();
// 默认活动路径
const activeRoute = ref('/home/practise/lowcode');
activeRoute.value = route.path;

function changeNav(path: string) {
  activeRoute.value = path;
  router.push(path);
}
</script>

<template>
  <div class="vp-flex vp-h-full vp-flex-col">
    <div
      class="vp-flex vp-h-[56px] vp-items-center vp-border vp-border-b vp-border-[#dcdfe6] vp-pl-12 vp-font-bold"
    >
      Vue3 Playground
    </div>
    <div class="vp-flex vp-min-h-0 vp-flex-1">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="vp-h-full vp-w-[200px]"
        :default-active="activeRoute"
        text-color="#fff"
        @select="changeNav"
      >
        <el-sub-menu v-for="nav in navList" :key="nav.path" :index="nav.path">
          <template #title>
            <el-icon><Notebook /></el-icon>
            <span>{{ nav.label }}</span>
          </template>
          <el-menu-item
            v-for="item in nav.children"
            :key="item.path"
            :index="item.path"
            >{{ item.label }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
      <div class="vp-h-full vp-min-w-0 vp-flex-1 vp-p-12">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
