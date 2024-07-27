<script setup lang="ts">
import FormField from './form-field/form-field.vue';
import FormPreview from './form-preview/form-preview.vue';
import FormConfig from './form-config/form-config.vue';
import { FieldItem } from '../core';
import { ref, watch } from 'vue';
defineOptions({
  name: 'FormEdit',
});

const props = defineProps<{
  fieldList: FieldItem[];
}>();

const currentFieldList = ref<FieldItem[]>([]);

watch(props.fieldList, value => {
  currentFieldList.value = value;
});
function addField(item: FieldItem) {
  currentFieldList.value.push(item);
}
</script>

<template>
  <div class="vp-flex vp-h-full">
    <FormField
      @addFieldEmit="addField"
      class="vp-h-full vp-w-[200px]"
    ></FormField>
    <FormPreview
      :fieldList="currentFieldList"
      class="vp-h-full vp-min-w-0 vp-flex-1"
    ></FormPreview>
    <FormConfig class="vp-h-full vp-w-[200px]"></FormConfig>
  </div>
</template>
