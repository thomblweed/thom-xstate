import React, { StrictMode } from 'react';

import { WorkflowProvider } from './state/WorkflowProvider';
import { WorkflowView } from './views/WorkflowView';

const App = (): JSX.Element => {
  return (
    <StrictMode>
      <div>
        <h1>thom workflow</h1>
        <WorkflowProvider>
          <WorkflowView />
        </WorkflowProvider>
      </div>
    </StrictMode>
  );
};

export { App };
