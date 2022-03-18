import React, { useContext } from 'react';
import { useSelector } from '@xstate/react';

import { SelectCategory } from '../stages/SelectCategory';
import { AddData } from '../stages/AddData';
import { WorkflowContext } from '../state/WorkflowProvider';

export const WorkflowView = (): JSX.Element => {
  const { workflowService } = useContext(WorkflowContext);
  const stage = useSelector(workflowService, (state) => state.value);

  return (
    <>
      {stage === 'select-category' && <SelectCategory />}
      {stage === 'add-data' && <AddData />}
    </>
  );
};
