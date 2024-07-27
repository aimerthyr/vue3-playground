<script setup lang="ts">
import { FieldItem, FieldMapping, FieldType } from '../../core';
import { MutipleChoice, Text } from '../../core/models';
import { FormFieldItem } from './form-field.type';

defineOptions({
  name: 'FormField',
});

const emit = defineEmits<{
  addFieldEmit: [field: FieldItem];
}>();

const formFields: FormFieldItem[] = [
  {
    label: '单行文本',
    type: 'text',
  },
  {
    label: '多项选择',
    type: 'mutipleChoice',
  },
];

function addField(type: FieldType) {
  const FeildMap: FieldMapping = {
    text: new Text(Text.getDefaultValue()),
    mutipleChoice: new MutipleChoice(MutipleChoice.getDefaultValue()),
  };
  emit('addFieldEmit', FeildMap[type]);
}
</script>

<template>
  <div class="vp-flex vp-h-full vp-flex-wrap vp-gap-8 vp-p-8">
    <el-tag
      @click="addField(item.type)"
      class="vp-w-[88px] vp-cursor-pointer"
      v-for="item in formFields"
      :key="item.label"
      effect="plain"
      :hit="false"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
