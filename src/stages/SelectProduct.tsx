import React, { FormEvent, useState } from 'react';
import { useMachine } from '@xstate/react';

import { workflowMachine } from '../state/workflowMachine';

export const SelectCategory = (): JSX.Element => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [state, send] = useMachine(workflowMachine);
  console.log('state', state.value);
  return (
    <div>
      <form
        onSubmit={(formEvent: FormEvent<HTMLFormElement>) => {
          formEvent.preventDefault();
          const { target } = formEvent;
          const targetArray = Object.values(target);
          const selectedCategory = targetArray.find(
            (element) => element.checked === true
          );
          if (selectedCategory) {
            send({ type: 'SELECT_CATEGORY', category: selectedCategory.value });
          }
          send({ type: 'ADD_DATA' });
        }}
      >
        <label>Select Category</label>
        <div>
          <input
            type='radio'
            name='food'
            value='food'
            checked={currentCategory === 'food'}
            onChange={() => setCurrentCategory('food')}
          />
          <label htmlFor='food'>Food</label>
        </div>
        <div>
          <input
            type='radio'
            name='drink'
            value='drink'
            checked={currentCategory === 'drink'}
            onChange={() => setCurrentCategory('drink')}
          />
          <label htmlFor='drink'>Drink</label>
        </div>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};
