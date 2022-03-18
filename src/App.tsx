import React from 'react';

import { WorkflowProvider } from './state/WorkflowProvider';
import { WorkflowView } from './views/WorkflowView';

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <WorkflowProvider>
        <div>
          <h1>thom workflow</h1>
          <WorkflowView />
        </div>
      </WorkflowProvider>
    </React.StrictMode>
  );
};

export { App };
