import { Category } from '../context/WorkflowContext.type';

type SelectCategoryEvent = {
  type: 'SELECT_CATEGORY';
  category: Category;
};
type NextStageEvent = {
  type: 'NEXT_STAGE';
};
type PreviousStageEvent = {
  type: 'STAGE_BACK';
};

export type WorkflowEvents =
  | SelectCategoryEvent
  | NextStageEvent
  | PreviousStageEvent;
