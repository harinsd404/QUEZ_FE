import * as _ from './style';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/header';
import QuizBlock from '@/components/quizBlock';
import ScoreChart from '@/components/scoreChart';
import DailyQuiz from '@/components/dailyQuiz';
import Lanking from '@/components/lanking';

const Home = () => {
  const navigate = useNavigate();
  return (
    <_.Container>
      <Header />
      <_.Main>
        <_.QuizAreaGrid>
          <QuizBlock
            color="blue"
            name="퀴즈풀기"
            body="통합 과학 중 원소에 관한 퀴즈입니다. 
문제를 많이 맞출 수록 점수가 올라갑니다."
            active={true}
            onClick={() => navigate('/quiz')}
          />
          <QuizBlock
            color="black"
            name="오답노트"
            body="틀렸던 문제를 다시 풀 수 있습니다.
중간에 나가더라도 결과는 저장됩니다."
            active={true}
          />
          <QuizBlock
            color="blue"
            name="퀴즈생성"
            body="추후 개발 될 기능입니다.
현재 이용 불가능합니다."
            active={false}
          />
        </_.QuizAreaGrid>
        <_.QuizAreaGrid>
          <ScoreChart />
          <DailyQuiz />
        </_.QuizAreaGrid>
        <Lanking />
      </_.Main>
    </_.Container>
  );
};

export default Home;
