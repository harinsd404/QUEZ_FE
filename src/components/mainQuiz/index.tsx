import React from 'react';
import * as _ from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface mainQuizProps {
  type: string;
}

const MainQuiz: React.FC<mainQuizProps> = ({ type }) => {
  const [answerText, setAnswerText] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (answerText.trim()) {
      console.log('제출된 답:', answerText);
      navigate('/quiz/result');
      setAnswerText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <_.Container>
      <_.QuizTitleDiv>
        <_.QuizText color="blue">Q1.</_.QuizText>
        <_.QuizText color="black">다음 원소의 이름을 쓰시오.</_.QuizText>
      </_.QuizTitleDiv>
      <_.ContentArea>
        <_.ContentText>N</_.ContentText>
      </_.ContentArea>
      <_.answerInputDiv>
        {type == 'subjective' && (
          <_.answerInput
            placeholder="정답을 입력해주세요"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
        {type == 'choice' && (
          <_.ChoiceInputGrid>
            <_.ChoiceButton>
              <_.ChoiceButtonText color="blue">A</_.ChoiceButtonText>
              <_.ChoiceButtonText color="black">질소</_.ChoiceButtonText>
            </_.ChoiceButton>
            <_.ChoiceButton>
              <_.ChoiceButtonText color="blue">B</_.ChoiceButtonText>
              <_.ChoiceButtonText color="black">마그네슘</_.ChoiceButtonText>
            </_.ChoiceButton>
            <_.ChoiceButton>
              <_.ChoiceButtonText color="blue">C</_.ChoiceButtonText>
              <_.ChoiceButtonText color="black">산소</_.ChoiceButtonText>
            </_.ChoiceButton>
            <_.ChoiceButton>
              <_.ChoiceButtonText color="blue">D</_.ChoiceButtonText>
              <_.ChoiceButtonText color="black">플루오린</_.ChoiceButtonText>
            </_.ChoiceButton>
          </_.ChoiceInputGrid>
        )}
        {type == 'OX' && (
          <_.OXButtonArea>
            <_.OXBtn color="O">O</_.OXBtn>
            <_.OXBtn color="X">X</_.OXBtn>
          </_.OXButtonArea>
        )}

        <_.IDontKnow>모르겠어요</_.IDontKnow>
      </_.answerInputDiv>
    </_.Container>
  );
};
export default MainQuiz;
