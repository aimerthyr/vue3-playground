import { FieldType } from '../types';
import TextAccessor from '../components/text-accessor.vue';

export function renderComponent(type: FieldType) {
  switch (type) {
    case 'text': {
      return TextAccessor;
    }
  }
}
