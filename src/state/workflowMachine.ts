import { assign, createMachine } from 'xstate';

type Category = 'food' | 'drink';

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

export const workflowMachine = createMachine<
  WorkflowStageData,
  WorkflowStageEvents
>(
  {
    id: 'workflow',
    initial: 'select-product',
    context: { data: null },
    states: {
      'select-product': {
        on: {
          ADD_DATA: {
            target: 'add-data',
            cond: 'productSelected' // condition as per the guards section
          },
          SELECT_CATEGORY: {
            actions: assign({
              data: (_currentContext, { category }) => category
            })
          }
        }
      },
      'add-data': {}
    }
  },
  {
    guards: {
      productSelected: (context) => context.data != null
    }
  }
);
