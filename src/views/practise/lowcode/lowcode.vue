<script setup lang="ts">
import { ref } from 'vue';
import { FieldItem } from './core/types';
import FormEdit from './form-edit/form-edit.vue';
import { MutipleChoice } from './core/models';
defineOptions({
  name: 'Lowcode',
});
const fieldList = ref<FieldItem[]>([]);

setTimeout(() => {
  fieldList.value.push(new MutipleChoice(MutipleChoice.getDefaultValue()));
  console.log(fieldList.value, 'fieldList');
}, 2000);
</script>

<template>
  <FormEdit :fieldList="fieldList"></FormEdit>
</template>
