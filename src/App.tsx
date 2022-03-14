import React from 'react';
import { useMachine } from '@xstate/react';

import { SelectCategory } from './stages/SelectProduct';
import { workflowMachine } from './state/workflowMachine';

const App = (): JSX.Element => {
  const [state] = useMachine(workflowMachine);
  const workflowStage = state.value;
  console.log('workflowStage', workflowStage);
  return (
    <div>
      <h1>thom app</h1>
      {workflowStage === 'select-category' && <SelectCategory />}
      {workflowStage === 'add-data' && <h2>Add data</h2>}
    </div>
  );
};

export { App };
