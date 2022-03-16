import React from 'react';
import { useAtom } from 'jotai';

import { workflowMachineAtom } from '../state/workflowMachineAtom';
import { SelectCategory } from '../stages/SelectCategory';
import { AddData } from '../stages/AddData';

export const WorkflowView = (): JSX.Element => {
  const [state] = useAtom(workflowMachineAtom);
  const stage = state.value;

  return (
    <>
      {stage === 'select-category' && <SelectCategory />}
      {stage === 'add-data' && <AddData />}
    </>
  );
};
