import React from 'react';

import { useWorkflowService } from '../hooks/useWorkflowService';

export const SelectCategory = (): JSX.Element => {
  const { send, categories, category } = useWorkflowService();

  return (
    <form>
      <label>Select Category</label>
      {categories?.map((currentCategory) => (
        <div key={currentCategory}>
          <input
            type='radio'
            name={currentCategory}
            value={currentCategory}
            checked={currentCategory === category}
            onChange={() =>
              send({ type: 'SELECT_CATEGORY', category: currentCategory })
            }
          />
          <label htmlFor={currentCategory}>{currentCategory}</label>
        </div>
      ))}
      <button disabled={!category} onClick={() => send({ type: 'NEXT_STAGE' })}>
        Next
      </button>
    </form>
  );
};
