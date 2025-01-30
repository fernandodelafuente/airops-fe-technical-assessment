import { airopsInstance } from '@/services/airops-client';

import { WorkflowOutput } from '@/types/workflow';

export const generateWorkflows = async ({ payload }: { payload: { inputs: { count: number } } }) => {
  const response = await airopsInstance.apps.execute({
    appId: import.meta.env.VITE_AIROPS_APP_ID,
    version: import.meta.env.VITE_AIROPS_APP_VERSION,
    payload,
  });

  const result = (await response.result()).output as WorkflowOutput;
  return result;
};
