import { useSelector } from '@xstate/react';
import { useContext } from 'react';
import { StageData } from '../state/workflowMachine';

import { WorkflowContext } from '../state/WorkflowProvider';

export function useWorkflowService(stateProperty?: StageData) {
  const { workflowService } = useContext(WorkflowContext);

  return {
    send: workflowService.send,
    contextValue: useSelector(
      workflowService,
      (state) => stateProperty && state.context[stateProperty]
    ),
    stage: useSelector(workflowService, (state) => state.value)
  };
}
