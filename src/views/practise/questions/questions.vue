<script setup lang="ts">
import { toRefs } from 'vue';
import { MdPreview } from 'md-editor-v3';
import { questions } from './question';

defineOptions({
  name: 'Questions',
});

const ques = toRefs<string[]>(questions);
</script>

<template>
  <h1>笔试题</h1>
  <MdPreview
    :codeFoldable="false"
    v-for="(text, index) in ques"
    :key="index"
    v-model="text.value"
  />
  <!-- <button ref="btn">我是按钮</button>
  <div>
    防抖的输入框
    <el-input v-model="iptValue1" @input="inputChange" />
  </div>

  <div>
    节流的输入框
    <el-input v-model="iptValue2" @input="inputChange2" />
  </div> -->
</template>
