import React, { useContext } from 'react';
import { WorkflowContext } from '../state/WorkflowProvider';

export const AddData = () => {
  const { workflowService } = useContext(WorkflowContext);
  const { send } = workflowService;

  return (
    <div>
      <label>Add Data</label>
      <div>
        <button onClick={() => send({ type: 'STAGE_BACK' })}>Back</button>
      </div>
    </div>
  );
};
