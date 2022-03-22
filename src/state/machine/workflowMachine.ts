import { assign, createMachine } from 'xstate';
import { ResourcesType } from 'swapi-ts';

import { WorkflowContextType } from './types/context/WorkflowContext.type';
import { WorkflowEvents } from './types/events/WorkflowEvents.type';
import { WorkflowState } from './types/state/WorkflowState.type';
import { State } from './enum/WorkflowState.enum';

export const workflowMachine = createMachine<
  WorkflowContextType,
  WorkflowEvents,
  { value: WorkflowState; context: WorkflowContextType }
>({
  id: 'workflow',
  initial: State.SELECT_CATEGORY,
  context: {
    categories: Object.values(ResourcesType).map((resource) => resource),
    category: null,
    selection: []
  },
  states: {
    [State.SELECT_CATEGORY]: {
      on: {
        SELECT_CATEGORY: {
          actions: assign({
            category: (_context, event) => event.category
          })
        },
        NEXT_STAGE: {
          target: State.SELECTION_RESULTS
        }
      }
    },
    [State.SELECTION_RESULTS]: {
      on: {
        STAGE_BACK: {
          target: State.SELECT_CATEGORY
        }
      }
    }
  }
});
