import apiClient from './client';
import type { AuthResponse } from '@/types/auth';

export const authenticateWithBSM = async (
  code: string
): Promise<AuthResponse> => {
  const response = await apiClient.get<AuthResponse>(
    `/bsm/auth/oauth?code=${code}`
  );
  return response.data;
};
