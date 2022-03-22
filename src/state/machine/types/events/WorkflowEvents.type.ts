import { ResourcesType } from 'swapi-ts';

type SelectCategoryEvent = {
  type: 'SELECT_CATEGORY';
  category: ResourcesType;
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
