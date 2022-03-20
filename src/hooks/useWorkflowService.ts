import { useSelector } from '@xstate/react';
import { useContext } from 'react';

import { WorkflowContextType } from '../state/machine/types/context/WorkflowContext.type';
import { WorkflowContext } from '../state/WorkflowContext';

export function useWorkflowService(
  contextProperty?: keyof WorkflowContextType
) {
  const { workflowService } = useContext(WorkflowContext);

  return {
    send: workflowService.send,
    contextValue: useSelector(
      workflowService,
      (state) => contextProperty && state.context[contextProperty]
    ),
    stage: useSelector(workflowService, (state) => state.value)
  };
}
