import React from 'react';

import { useWorkflowService } from '../hooks/useWorkflowService';

export const AddSelection = () => {
  const { send } = useWorkflowService();

  return (
    <div>
      <label>Add Data</label>
      <div>
        <button onClick={() => send({ type: 'STAGE_BACK' })}>Back</button>
      </div>
    </div>
  );
};
