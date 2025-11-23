import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/Page/home';
import Quiz from '@/Page/quiz';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-page" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
