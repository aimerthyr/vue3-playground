import { nanoid } from 'nanoid';
import { FeildOptions, FieldType, Width } from '../types';

export abstract class Field<T = any> {
  /** 字段 id */
  fieldId: string;
  /** 字段类型 */
  abstract fieldType: FieldType;
  /** 字段名称 */
  fieldName: string;
  /** 提示信息 */
  hintMsg: string;
  /** 字段宽度 */
  width: Width;
  /** 是否必填 */
  required: boolean;
  /** 字段值 */
  value: T;
  /** 默认值 */
  defaultValue: T;

  constructor(opitons: FeildOptions<Field>) {
    this.fieldId = opitons.fieldId;
    this.fieldName = opitons.fieldName;
    this.hintMsg = opitons.hintMsg;
    this.width = opitons.width;
    this.required = opitons.required;
    this.value = opitons.value;
    this.defaultValue = opitons.defaultValue;
  }

  static getDefaultValue(): FeildOptions<Field> {
    return {
      fieldId: nanoid(8),
      fieldType: null,
      fieldName: null,
      required: false,
      hintMsg: null,
      value: null,
      defaultValue: null,
      width: '50%',
    };
  }
}
