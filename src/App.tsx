import React from 'react';
import { WorkflowProvider } from './state/WorkflowProvider';
import { WorkflowView } from './views/WorkflowView';

const App = (): JSX.Element => {
  return (
    <WorkflowProvider>
      <div>
        <h1>thom app</h1>
        <WorkflowView />
      </div>
    </WorkflowProvider>
  );
};

export { App };
