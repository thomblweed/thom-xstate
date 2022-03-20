import { assign, createMachine } from 'xstate';

export type Category = 'food' | 'drink';

export type StageCategory = 'category';

export type StageData = StageCategory;

export type WorkflowStageData = {
  [key in StageCategory]: Category | null;
};

export type WorkflowStageNames = 'select-category' | 'add-data';

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

export const workflowMachine = createMachine<
  WorkflowStageData,
  WorkflowStageEvents,
  { value: WorkflowStageNames; context: WorkflowStageData }
>({
  id: 'workflow',
  initial: 'select-category',
  context: { category: null },
  states: {
    'select-category': {
      on: {
        SELECT_CATEGORY: {
          actions: assign({
            category: (_context, event) => event.category
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
