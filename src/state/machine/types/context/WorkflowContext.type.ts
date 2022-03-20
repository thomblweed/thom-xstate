export type Category = 'food' | 'drink';

export type WorkflowContextType = {
  category: Category | null;
  selection: unknown[];
};
