import apiClient from './client';
import type { QuizSession, QuizQuestion, QuizResult } from '@/types/auth';

export const startQuizSession = async (): Promise<QuizSession> => {
  const response = await apiClient.post<QuizSession>('/api/quiz/start');
  return response.data;
};

export const getQuizQuestion = async (
  sessionId: string,
  cursor: string,
  answer?: string
): Promise<QuizQuestion> => {
  const params = new URLSearchParams({
    sessionId,
    cursor,
    ...(answer && { answer }),
  });

  const response = await apiClient.get<QuizQuestion>(
    `/api/quiz/question?${params.toString()}`
  );
  return response.data;
};

export const getQuizResult = async (
  sessionId: string,
  lastAnswer?: string
): Promise<QuizResult> => {
  const params = new URLSearchParams({
    sessionId,
    ...(lastAnswer && { lastAnswer }),
  });

  const response = await apiClient.get<QuizResult>(
    `/api/quiz/result?${params.toString()}`
  );
  return response.data;
};
