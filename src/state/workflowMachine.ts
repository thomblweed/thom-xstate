import { assign, createMachine } from 'xstate';

export type Category = 'food' | 'drink';

type WorkflowStageData = {
  category: Category | null;
  // data: Category | null;
};

type SelectCategoryEvent = {
  type: 'SELECT_CATEGORY'; // event type is required
  category: Category;
};

type NextStageEvent = {
  type: 'NEXT_STAGE';
};

type PreviousStageEvent = {
  type: 'STAGE_BACK';
};

type WorkflowStageEvents =
  | SelectCategoryEvent
  | NextStageEvent
  | PreviousStageEvent;

export const workflowMachine = (data: WorkflowStageData) =>
  createMachine<WorkflowStageData, WorkflowStageEvents>({
    id: 'workflow',
    initial: 'select-category',
    context: data,
    states: {
      'select-category': {
        on: {
          SELECT_CATEGORY: {
            actions: assign({
              category: (_currentContext, { category }) => category
            })
          },
          NEXT_STAGE: {
            target: 'add-data'
          }
        }
      },
      'add-data': {
        on: {
          STAGE_BACK: {
            target: 'select-category'
          }
        }
      }
    }
  });
