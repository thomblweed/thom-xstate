import React, { createContext, FC } from 'react';
import { useInterpret } from '@xstate/react';
import { InterpreterFrom } from 'xstate';

import { workflowMachine } from './workflowMachine';

export const WorkflowContext = createContext({
  workflowService: {} as InterpreterFrom<typeof workflowMachine>
});

export const WorkflowProvider: FC = ({ children }) => {
  const workflowService = useInterpret(workflowMachine);

  return (
    <WorkflowContext.Provider value={{ workflowService }}>
      {children}
    </WorkflowContext.Provider>
  );
};
