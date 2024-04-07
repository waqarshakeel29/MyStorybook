import React from 'react';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { Radio } from '../../components/Radio/Radio';

const ControlledRadioGroup = function() {
  const [selected, setSelected] = React.useState('1');

  const onChange = (id: any) => setSelected(id);

  return (
    <RadioGroup onChange={onChange} selected={selected}>
      <Radio id="1" label="Radio1" onChange={()=>{}} />
      <Radio id="2" label="Radio2" onChange={()=>{}} />
      <Radio id="3" label="Radio3" onChange={()=>{}} />
    </RadioGroup>
  );
};

export default ControlledRadioGroup;
