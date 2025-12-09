import * as _ from './style';
import RefreshIcon from '@/assets/refresh.svg';
import { useState } from 'react';

const DailyQuiz = () => {
  const [isSubmitQuiz, setIsSubmitQuiz] = useState<boolean>(false);
  return (
    <_.Container>
      <_.Title>데일리 퀴즈</_.Title>
      <_.QuizArea>
        <_.Quiz>
          {isSubmitQuiz ? (
            <_.CompletedMessage>데일리 퀴즈를 완료했습니다!</_.CompletedMessage>
          ) : (
            <>
              <_.QuestionArea>
                <_.QuestionTextBlue>Q.</_.QuestionTextBlue>
                <_.QuestionText>
                  다음 중 질소의 원소 기호를 고르시요.
                </_.QuestionText>
              </_.QuestionArea>
              <_.ButtonArea>
                <_.QuizButton onClick={() => setIsSubmitQuiz(true)}>
                  Au
                </_.QuizButton>
                <_.QuizButton onClick={() => setIsSubmitQuiz(true)}>
                  O
                </_.QuizButton>
                <_.QuizButton onClick={() => setIsSubmitQuiz(true)}>
                  H
                </_.QuizButton>
                <_.QuizButton onClick={() => setIsSubmitQuiz(true)}>
                  N
                </_.QuizButton>
              </_.ButtonArea>
            </>
          )}
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
