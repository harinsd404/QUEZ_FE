import * as _ from './style';

interface buttonProps {
  name: string;
  type: string;
  onClick?: () => void;
}

const Button = ({ name, type, onClick }: buttonProps) => {
  return (
    <_.Container onClick={onClick} type={type}>
      <_.Content type={type}>{name}</_.Content>
    </_.Container>
  );
};

export default Button;
