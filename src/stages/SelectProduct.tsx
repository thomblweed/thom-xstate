import { useAtom } from 'jotai';
import React, { FormEvent, useState } from 'react';
import { Category } from '../state/workflowMachine';
import { workflowMachineAtom } from '../state/workflowMachineAtom';

export const SelectProduct = (): JSX.Element => {
  const [currentCategory, setCurrentCategory] = useState<Category | undefined>(
    undefined
  );
  const [, send] = useAtom(workflowMachineAtom);

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
        <button type='submit' disabled={!currentCategory}>
          Next
        </button>
      </form>
    </div>
  );
};
