import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AlertProvider } from '@/contexts/AlertContext';
import Alert from '@/components/Alert';
import Home from '@/Page/home';
import Quiz from '@/Page/quiz';
import Result from './Page/result';
import OAuthCallback from '@/Page/callback';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/result" element={<Result />} />
            <Route path="/callback" element={<OAuthCallback />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
        <Alert />
      </AlertProvider>
    </QueryClientProvider>
  );
};

export default App;
