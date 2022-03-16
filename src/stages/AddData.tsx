import React from 'react';
import { useAtom } from 'jotai';

import { workflowMachineAtom } from '../state/workflowMachineAtom';

export const AddData = () => {
  const [, send] = useAtom(workflowMachineAtom);

  return (
    <div>
      <label>Add Data</label>
      <div>
        <button onClick={() => send({ type: 'STAGE_BACK' })}>Back</button>
      </div>
    </div>
  );
};
