import { Category } from '../../enum/Category.enum';

export type WorkflowContextType = {
  category: Category | null;
  selection: unknown[];
};
