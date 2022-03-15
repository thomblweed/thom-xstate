import React from 'react';
import { useAtom } from 'jotai';

import { SelectProduct } from '../stages/SelectProduct';
import { workflowMachineAtom } from '../state/workflowMachineAtom';

export const WorkflowView = (): JSX.Element => {
  const [state] = useAtom(workflowMachineAtom);
  console.log('state', state.value);
  const stage = state.value;

  return (
    <>
      {stage === 'select-product' && <SelectProduct />}
      {stage === 'add-data' && <h2>Add Data</h2>}
    </>
  );
};
