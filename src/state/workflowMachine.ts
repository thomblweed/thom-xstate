import { assign, createMachine } from 'xstate';

type WorkflowStageData = {
  data: any | null;
};

type SelectCategoryEvent = {
  type: 'SELECT_CATEGORY'; // event type is required
  category: 'food' | 'drink';
};

type NextWorkflowEvent = {
  type: 'ADD_DATA';
};

type WorkflowStageEvents = SelectCategoryEvent | NextWorkflowEvent;

export const workflowMachine = createMachine<
  WorkflowStageData,
  WorkflowStageEvents
>(
  {
    id: 'workflow',
    initial: 'select-category',
    context: { data: null },
    states: {
      'select-category': {
        meta: {
          name: 'select-category'
        },
        on: {
          ADD_DATA: {
            target: 'add-data',
            cond: 'categorySelected' // condition as per the guards section
          },
          SELECT_CATEGORY: {
            actions: assign({
              data: (_currentContext, { category }) => category
            })
          }
        }
      },
      'add-data': {
        meta: {
          name: 'add-data'
        }
      }
    }
  },
  {
    guards: {
      categorySelected: (context) => context.data != null
    }
  }
);
