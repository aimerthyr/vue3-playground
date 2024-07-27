<script setup lang="ts">
import { FieldItem } from '../types';
import { renderComponent } from '../render';
defineOptions({
  name: 'ReactiveForm',
});

const props = defineProps<{
  fieldList: FieldItem[];
}>();
</script>
<template>
  <div>
    <div v-for="field in props.fieldList" :key="field.fieldId">
      <component :is="renderComponent(field.fieldType)"></component>
    </div>
  </div>
</template>
