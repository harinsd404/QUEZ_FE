import React from 'react';
import * as _ from './style';
import Header from '@/components/header';
import MainQuiz from '@/components/mainQuiz';

const Quiz: React.FC = () => {
  return (
    <_.Container>
      <Header />
      <_.Main>
        <MainQuiz type="OX" />
      </_.Main>
    </_.Container>
  );
};

export default Quiz;
