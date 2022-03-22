import { useSelector } from '@xstate/react';
import { useContext } from 'react';

import { WorkflowContext } from '../state/WorkflowContext';

export function useWorkflowService() {
  const { workflowService } = useContext(WorkflowContext);

  return {
    send: workflowService.send,
    categories: useSelector(
      workflowService,
      (state) => state.context.categories
    ),
    category: useSelector(workflowService, (state) => state.context.category),
    stage: useSelector(workflowService, (state) => state.value)
  };
}
