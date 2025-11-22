import React from 'react';
import * as _ from './style';
import RefreshIcon from '@/assets/refresh.svg';

const DailyQuiz: React.FC = () => {
  return (
    <_.Container>
      <_.Title>데일리 퀴즈</_.Title>
      <_.QuizArea>
        <_.Quiz>
          <_.QuestionArea>
            <_.QuestionTextBlue>Q.</_.QuestionTextBlue>
            <_.QuestionText>
              다음 중 질소의 원소 기호를 고르시요.
            </_.QuestionText>
          </_.QuestionArea>
          <_.ButtonArea>
            <_.QuizButton>Au</_.QuizButton>
            <_.QuizButton>O</_.QuizButton>
            <_.QuizButton>H</_.QuizButton>
            <_.QuizButton>N</_.QuizButton>
          </_.ButtonArea>
        </_.Quiz>
        <_.Refresh>
          새로고침
          <_.Icon src={RefreshIcon} />
        </_.Refresh>
      </_.QuizArea>
    </_.Container>
  );
};
export default DailyQuiz;
