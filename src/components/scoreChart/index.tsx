import * as _ from './style';
import upScore from '@/assets/downScore.svg';
import { Tooltip, Area, AreaChart, ResponsiveContainer } from 'recharts';
import { useAuth } from '@/hooks/useAuth';
import { useAlert } from '@/hooks/useAlert';
import Button from '@/components/button';

const data = [
  { score: 80 },
  { score: 20 },
  { score: 30 },
  { score: 15 },
  { score: 50 },
  { score: 70 },
  { score: 55 },
];

const ScoreChart = () => {
  const { isAuthenticated } = useAuth();
  const { showLoginModal } = useAlert();

  const handleLoginClick = () => {
    showLoginModal();
  };

  return (
    <_.Wrapper>
      <_.Container>
        <_.Content isBlurred={!isAuthenticated}>
          <_.Header>
            <_.title>일주일 간 점수 변화</_.title>
            <_.score>
              <_.icon src={upScore} />
              <_.title>9999</_.title>
            </_.score>
          </_.Header>
          <_.line></_.line>
          <_.Chart>
            <ResponsiveContainer width="100%" height={184}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F6EFF" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#4F6EFF" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Tooltip />
                <Area
                  type="linear"
                  dataKey="score"
                  stroke="#4F6EFF"
                  fill="url(#colorScore)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </_.Chart>
        </_.Content>
        {!isAuthenticated && (
          <_.LoginPrompt>
            <_.Message>로그인 후 이용 가능합니다!</_.Message>
            <Button
              name="로그인 하러 가기"
              type="blue"
              onClick={handleLoginClick}
            />
          </_.LoginPrompt>
        )}
      </_.Container>
    </_.Wrapper>
  );
};

export default ScoreChart;
