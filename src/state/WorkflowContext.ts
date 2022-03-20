import { createContext } from 'react';
import { InterpreterFrom } from 'xstate';

import { workflowMachine } from './machine/workflowMachine';

export const WorkflowContext = createContext({
  workflowService: {} as InterpreterFrom<typeof workflowMachine>
});
