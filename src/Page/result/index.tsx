import Header from '@/components/header';
import * as _ from './styled';
import Button from '@/components/button';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  return (
    <_.Container>
      <Header />
      <_.Main>
        <_.ModalMain>
          <_.Text color="blue" size={20}>
            최종결과
          </_.Text>
          <_.ScoreDiv>
            <_.Text color="black" size={32}>
              100점
            </_.Text>
            <_.Text color="gray" size={18}>
              / 100
            </_.Text>
          </_.ScoreDiv>
          <_.AnswerAllDiv>
            <_.AnswerRowDiv>
              <_.Text color="gray" size={14}>
                맞힌 문제:
              </_.Text>
              <_.Text color="gray" size={14}>
                10개
              </_.Text>
            </_.AnswerRowDiv>
            <_.AnswerRowDiv>
              <_.Text color="gray" size={14}>
                틀린 문제:
              </_.Text>
              <_.Text color="gray" size={14}>
                0개
              </_.Text>
            </_.AnswerRowDiv>
          </_.AnswerAllDiv>
          <Button
            name="다음으로"
            type="primary"
            onClick={() => navigate('/')}
            fullWidth
          />
        </_.ModalMain>
      </_.Main>
    </_.Container>
  );
};

export default Result;
