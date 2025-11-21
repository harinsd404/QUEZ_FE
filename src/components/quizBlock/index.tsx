import React from 'react';
import * as _ from './style';
import Button from '../button';
import IconBlue from '@/assets/QuizIconBlue.svg';
import IconBlack from '@/assets/QuizIconBlack.svg';

interface quizBlockInterface {
  color: string;
  name: string;
  body: string;
  active: Boolean;
}

const QuizBlock = ({ color, name, body, active }: quizBlockInterface) => {
  return (
    <_.Container>
      <_.Content>
        <_.header>
          <_.icon src={color == 'blue' ? IconBlue : IconBlack} />
          <_.title>{name}</_.title>
        </_.header>
        <_.body>{body}</_.body>
      </_.Content>
      <Button name="바로가기" type={active ? 'blue' : ''} />
    </_.Container>
  );
};
export default QuizBlock;
