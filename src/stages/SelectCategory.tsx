import React from 'react';

import { useWorkflowService } from '../hooks/useWorkflowService';
import { Category } from '../state/machine/enum/Category.enum';

export const SelectCategory = (): JSX.Element => {
  const { send, contextValue: category } = useWorkflowService('category');

  return (
    <div>
      <label>Select Category</label>
      <div>
        <input
          type='radio'
          name={Category.FOOD}
          checked={category === Category.FOOD}
          onChange={() =>
            send({ type: 'SELECT_CATEGORY', category: Category.FOOD })
          }
        />
        <label htmlFor={Category.FOOD}>Food</label>
      </div>
      <div>
        <input
          type='radio'
          name={Category.DRINK}
          checked={category === Category.DRINK}
          onChange={() =>
            send({ type: 'SELECT_CATEGORY', category: Category.DRINK })
          }
        />
        <label htmlFor={Category.DRINK}>Drink</label>
      </div>
      <button disabled={!category} onClick={() => send({ type: 'NEXT_STAGE' })}>
        Next
      </button>
    </div>
  );
};
