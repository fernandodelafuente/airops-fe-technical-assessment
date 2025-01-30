export type WorkflowOutput = {
  count: number;
  data: Workflow[];
};

export type Workflow = {
  id: number;
  last_updated: number;
  name: string;
  tags: WorkflowTag[];
  type: string;
};

export type WorkflowTag = {
  color: string;
  name: string;
};
