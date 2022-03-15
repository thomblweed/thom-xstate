import { assign, createMachine } from 'xstate';

export type Category = 'food' | 'drink';

type WorkflowStageData = {
  data: Category | null;
};

type SelectCategoryEvent = {
  type: 'SELECT_CATEGORY'; // event type is required
  category: Category;
};

type NextWorkflowEvent = {
  type: 'ADD_DATA';
};

type WorkflowStageEvents = SelectCategoryEvent | NextWorkflowEvent;

export const workflowMachine = (data: WorkflowStageData) =>
  createMachine<WorkflowStageData, WorkflowStageEvents>(
    {
      id: 'workflow',
      initial: 'select-product',
      context: data,
      states: {
        'select-product': {
          on: {
            SELECT_CATEGORY: {
              actions: assign({
                data: (_currentContext, { category }) => category
              }),
              target: 'add-data',
              cond: 'productSelected'
            }
          }
        },
        'add-data': {}
      }
    },
    {
      guards: {
        productSelected: (currentContext) => currentContext.data == null
      }
    }
  );
