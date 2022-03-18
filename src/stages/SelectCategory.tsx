import React, { useContext } from 'react';
import { useSelector } from '@xstate/react';

import { WorkflowContext } from '../state/WorkflowProvider';

export const SelectCategory = (): JSX.Element => {
  const { workflowService } = useContext(WorkflowContext);
  const { send } = workflowService;
  const category = useSelector(
    workflowService,
    (state) => state.context.category
  );

  console.log('category', category);

  return (
    <div>
      <label>Select Category</label>
      <div>
        <input
          type='radio'
          name='food'
          checked={category === 'food'}
          onChange={() => send({ type: 'SELECT_CATEGORY', category: 'food' })}
        />
        <label htmlFor='food'>Food</label>
      </div>
      <div>
        <input
          type='radio'
          name='drink'
          checked={category === 'drink'}
          onChange={() => send({ type: 'SELECT_CATEGORY', category: 'drink' })}
        />
        <label htmlFor='drink'>Drink</label>
      </div>
      <button disabled={!category} onClick={() => send({ type: 'NEXT_STAGE' })}>
        Next
      </button>
    </div>
  );
};
