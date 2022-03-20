import React from 'react';

import { AddData, SelectCategory } from '../stages';
import { useWorkflowService } from '../hooks/useWorkflowService';
import { WorkflowStageNames } from '../state/workflowMachine';

type Stages = {
  [key in WorkflowStageNames]: JSX.Element;
};

const stageFactory: Stages = {
  'select-category': <SelectCategory />,
  'add-data': <AddData />
};

export const WorkflowView = (): JSX.Element => {
  const { stage } = useWorkflowService();

  return stageFactory[stage as WorkflowStageNames];
};
