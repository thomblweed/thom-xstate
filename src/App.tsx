import React from 'react';
import { Provider } from 'jotai';

import { WorkflowView } from './views/WorkflowView';

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Provider>
        <div>
          <h1>thom app</h1>
          <WorkflowView />
        </div>
      </Provider>
    </React.StrictMode>
  );
};

export { App };
