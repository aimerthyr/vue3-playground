<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'TextAccessor',
});

const input = ref('');
</script>

<template>
  <el-input v-model="input" placeholder="请输入内容" />
</template>
