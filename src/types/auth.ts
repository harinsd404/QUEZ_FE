export interface User {
  name: string;
  grade: number;
  classNo: number;
  role: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface QuizSession {
  success: boolean;
  sessionId: string;
  nextCursor: string;
  totalQuestions: number;
}

export interface QuizQuestion {
  success: boolean;
  questionId: string;
  question: string;
  options: string[];
  nextCursor: string;
  isEnd: boolean;
}

export interface QuizResult {
  success: boolean;
  score: number;
  correctCount: number;
  wrongCount: number;
  detail: {
    questionId: string;
    isCorrect: boolean;
  }[];
}

export interface ErrorResponse {
  message: string;
}
