import React from 'react';

import { AddSelection, SelectCategory } from '../stages';
import { useWorkflowService } from '../hooks/useWorkflowService';
import { WorkflowState } from '../state/machine/types/state/WorkflowState.type';

type Stages = {
  [key in WorkflowState]: JSX.Element;
};

const stageFactory: Stages = {
  'select-category': <SelectCategory />,
  'selection-results': <AddSelection />
};

export const WorkflowView = (): JSX.Element => {
  const { stage } = useWorkflowService();

  return stageFactory[stage as WorkflowState];
};
