import { atom } from 'jotai';
import { atomWithMachine } from 'jotai/xstate';

import { workflowMachine } from './workflowMachine';

const defaultDataAtom = atom({ data: null });

export const workflowMachineAtom = atomWithMachine((get) =>
  workflowMachine(get(defaultDataAtom))
);
