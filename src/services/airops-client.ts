import AirOps from '@airops/airops-js';

export const airopsInstance = AirOps.identify({
  userId: 'YOUR_USER_ID',
  workspaceId: import.meta.env.VITE_AIROPS_WORKSPACE_ID,
  hashedUserId: 'YOUR_USER_ID_HASHED',
});
