import { assign, createMachine } from 'xstate';

import { WorkflowContextType } from './types/context/WorkflowContext.type';
import { WorkflowEvents } from './types/events/WorkflowEvents.type';
import { WorkflowState } from './types/state/WorkflowState.type';

export const workflowMachine = createMachine<
  WorkflowContextType,
  WorkflowEvents,
  { value: WorkflowState; context: WorkflowContextType }
>({
  id: 'workflow',
  initial: 'select-category',
  context: { category: null, selection: [] },
  states: {
    'select-category': {
      on: {
        SELECT_CATEGORY: {
          actions: assign({
            category: (_context, event) => event.category
          })
        },
        NEXT_STAGE: {
          target: 'add-selection'
        }
      }
    },
    'add-selection': {
      on: {
        STAGE_BACK: {
          target: 'select-category'
        }
      }
    }
  }
});
