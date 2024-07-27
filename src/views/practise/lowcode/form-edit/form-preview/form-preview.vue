<script setup lang="ts">
import { FieldItem } from '../../core';
import ReactiveForm from '../../core/form/form.vue';
defineOptions({
  name: 'FormPreview',
});

const props = defineProps<{
  fieldList: FieldItem[];
}>();
</script>

<template>
  <ReactiveForm :fieldList="props.fieldList"></ReactiveForm>
</template>
