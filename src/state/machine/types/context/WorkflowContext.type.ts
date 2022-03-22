import { ResourcesType } from 'swapi-ts';

export type WorkflowContextType = {
  categories: ResourcesType[] | null;
  category: ResourcesType | null;
  selection: unknown[];
};
