import { useAtom } from 'jotai';
import React from 'react';

import { workflowMachineAtom } from '../state/workflowMachineAtom';

export const SelectCategory = (): JSX.Element => {
  const [state, send] = useAtom(workflowMachineAtom);
  const { category } = state.context;

  return (
    <div>
      <label>Select Category</label>
      <div>
        <input
          type='radio'
          name='food'
          value='food'
          checked={category === 'food'}
          onChange={() => send({ type: 'SELECT_CATEGORY', category: 'food' })}
        />
        <label htmlFor='food'>Food</label>
      </div>
      <div>
        <input
          type='radio'
          name='drink'
          value='drink'
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
