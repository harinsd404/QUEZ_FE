import * as _ from './style';
import Button from '../button';
import IconBlue from '@/assets/QuizIconBlue.svg';
import IconBlack from '@/assets/QuizIconBlack.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface quizBlockInterface {
  color: string;
  name: string;
  body: string;
  active: boolean;
  onClick?: string;
}

const QuizBlock = ({
  color,
  name,
  body,
  active,
  onClick,
}: quizBlockInterface) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const onClickHandle = () => {
    if (isAuthenticated) {
      navigate(`/${onClick}`);
    } else {
      console.log('로그인 ㄴㄴ');
    }
  };

  return (
    <_.Container>
      <_.Content>
        <_.header>
          <_.icon src={color == 'blue' ? IconBlue : IconBlack} />
          <_.title>{name}</_.title>
        </_.header>
        <_.body>{body}</_.body>
      </_.Content>
      <Button
        name="바로가기"
        type={active ? 'blue' : 'gray'}
        onClick={onClickHandle}
      />
    </_.Container>
  );
};
export default QuizBlock;
