import { Form, FormInstance, Input, InputNumber, Radio, Select, Switch } from 'antd';
import DatasourceSet from '@/pages/LowCode/ConfigArea/DatasourceSet';
import { useModel } from '@/useModel';
import { RequestData } from './RequestData';

type CommonType = {
  label: string;
  name: string;
  value: string;
  onChange: (value: any) => void;
};

type SelectType = CommonType & { options: Array<{ label: string; value: string }> };

type InputItem = { type: 'input'; label: string; name: string; attr: 'props' | 'customAttr' };

type InputNumberItem = {
  type: 'input-number';
  label: string;
  name: string;
  attr: 'props' | 'customAttr';
};

type SelectItem = {
  type: 'select';
  label: string;
  name: string;
  attr: 'props' | 'customAttr';
  options: Array<{ label: string; value: string }>;
};
type SwitchItem = { type: 'switch'; label: string; name: string; attr: 'props' | 'customAttr' };
type RadioItem = {
  type: 'radio';
  label: string;
  name: string;
  attr: 'props' | 'customAttr';
  options: Array<{ label: string; value: string }>;
};

type TreeDatasourceItem = {
  type: 'tree-datasource';
  name: string;
};

type datasourceItem = {
  type: 'datasource';
  name: string;
};
type RequestDataItem = {
  type: 'request-data';
  name: string;
};

export type commonItem =
  | InputItem
  | SelectItem
  | SwitchItem
  | RadioItem
  | InputNumberItem
  | TreeDatasourceItem
  | datasourceItem
  | RequestDataItem;

export const FormInput = ({ label, name, value, onChange }: CommonType) => (
  <Form.Item label={label} name={name} initialValue={value}>
    <Input onChange={(e) => onChange(e.target.value)} placeholder="请输入" />
  </Form.Item>
);

export const FormSelect = ({ label, name, value, options, onChange }: SelectType) => (
  <Form.Item label={label} name={name} initialValue={value}>
    <Select options={options} onChange={(val) => onChange(val)} placeholder="请选择" />
  </Form.Item>
);

export const FormSwitch = ({ label, name, value, onChange }: CommonType) => (
  <Form.Item label={label} name={name} initialValue={value} layout={'horizontal'}>
    <Switch onChange={(val) => onChange(val)} />
  </Form.Item>
);

export const FormRadio = ({ label, name, value, options, onChange }: SelectType) => (
  <Form.Item label={label} name={name} initialValue={value}>
    <Radio.Group options={options} onChange={(e) => onChange(e.target.value)} />
  </Form.Item>
);

export const FormInputNumber = ({ label, name, value, onChange }: CommonType) => (
  <Form.Item label={label} name={name} initialValue={value} layout={'horizontal'}>
    <InputNumber onChange={(e) => onChange(e)} />
  </Form.Item>
);

export const renderFormItem = (
  item: commonItem,
  handleChangeCurComponent: { (attr: 'props' | 'customAttr', name: string, value: any): void },
  form: FormInstance,
) => {
  const { curComponent } = useModel('low_code');
  let value: any;
  if (item.type !== 'datasource' && item.type !== 'tree-datasource' && item.type !== 'request-data') {
    value = curComponent?.[item.attr]?.[item.name];
  }

  switch (item.type) {
    case 'input':
      return (
        <FormInput
          label={item.label}
          name={item.name}
          value={value}
          onChange={(val) => handleChangeCurComponent(item.attr, item.name, val)}
        />
      );
    case 'select':
      return (
        <FormSelect
          label={item.label}
          name={item.name}
          value={value}
          options={item.options}
          onChange={(val) => handleChangeCurComponent(item.attr, item.name, val)}
        />
      );
    case 'switch':
      return (
        <FormSwitch
          label={item.label}
          name={item.name}
          value={value}
          onChange={(val) => handleChangeCurComponent(item.attr, item.name, val)}
        />
      );
    case 'radio':
      return (
        <FormRadio
          label={item.label}
          name={item.name}
          value={value}
          options={item.options}
          onChange={(val) => handleChangeCurComponent(item.attr, item.name, val)}
        />
      );
    case 'input-number':
      return (
        <FormInputNumber
          label={item.label}
          name={item.name}
          value={value}
          onChange={(val) => handleChangeCurComponent(item.attr, item.name, val)}
        />
      );
    case 'tree-datasource':
      return <DatasourceSet name={item?.name} options={curComponent?.props[item?.name]} isTree={true} />;
    case 'datasource':
      return <DatasourceSet name={item?.name} options={curComponent?.props[item?.name]} isTree={false} />;
    case 'request-data':
      return <RequestData form={form} />;
    default:
      return null;
  }
};
