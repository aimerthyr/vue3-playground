import { MutipleChoice } from '../models/mutiple-choice';
import { Text } from '../models/text';

// 提取某个类里的所有属性的类型
type ClassProperties<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

export type FeildOptions<T> = ClassProperties<T>;

/** 字段映射 */
export interface FieldMapping {
  /** 单行文字 */
  text: Text;
  /** 多项选择 */
  mutipleChoice: MutipleChoice;
}

export type FieldType = keyof FieldMapping;

export type Width = '25%' | '50%' | '75%' | '100%';

/** 字段类型组成的合集 */
export type FieldItem = FieldMapping[FieldType];
