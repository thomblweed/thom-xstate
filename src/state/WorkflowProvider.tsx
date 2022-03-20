import React, { FC } from 'react';
import { useInterpret } from '@xstate/react';

import { workflowMachine } from './machine/workflowMachine';
import { WorkflowContext } from './WorkflowContext';

export const WorkflowProvider: FC = ({ children }) => {
  const workflowService = useInterpret(workflowMachine);

  return (
    <WorkflowContext.Provider value={{ workflowService }}>
      {children}
    </WorkflowContext.Provider>
  );
};
