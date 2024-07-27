import { Field } from './field';
import { FeildOptions } from '../types';

/** 单行文字的值 */
type TextValue = string;

/** 单行文字 */
export class Text extends Field<TextValue> {
  readonly fieldType = 'text';
  /** 限制的最大字数 */
  limitWords: number;
  constructor(opitons: FeildOptions<Text>) {
    super(opitons);
    this.limitWords = opitons.limitWords;
  }

  static getDefaultValue(): FeildOptions<Text> {
    const defaultValue = super.getDefaultValue();
    return {
      ...defaultValue,
      fieldType: 'text',
      limitWords: 10,
    };
  }
}
