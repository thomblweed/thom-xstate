import React, { useContext } from 'react';
import { useActor } from '@xstate/react';

import { SelectProduct } from '../stages/SelectProduct';
import { WorkflowContext } from '../state/WorkflowProvider';

export const WorkflowView = (): JSX.Element => {
  const workflowServices = useContext(WorkflowContext);
  const [state] = useActor(workflowServices.workflowService);
  console.log('state', state.value);
  const stage = state.value;

  return (
    <>
      {stage === 'select-product' && <SelectProduct />}
      {stage === 'add-data' && <h2>Add Data</h2>}
    </>
  );
};
