import { nanoid } from 'nanoid';
import { Field } from './field';
import { FeildOptions } from '../types';

/** 多项选择的值 */
export type MutipleChoiceValue = Array<{
  value: string;
  optId: string;
}>;

/** 多项选择 */
export class MutipleChoice extends Field<MutipleChoiceValue> {
  readonly fieldType = 'mutipleChoice';
  /** 选项列表 */
  choiceList: MutipleChoiceValue;
  constructor(opitons: FeildOptions<MutipleChoice>) {
    super(opitons);
    this.choiceList = opitons.choiceList;
  }

  static getDefaultValue(): FeildOptions<MutipleChoice> {
    const defaultValue = super.getDefaultValue();
    return {
      ...defaultValue,
      fieldType: 'mutipleChoice',
      choiceList: [
        { value: '未命名1', optId: nanoid(8) },
        { value: '未命名2', optId: nanoid(8) },
        { value: '未命名3', optId: nanoid(8) },
      ],
    };
  }
}
