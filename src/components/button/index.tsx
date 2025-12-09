import * as _ from './style';

interface buttonProps {
  name: string;
  type: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button = ({ name, type, onClick, fullWidth = false }: buttonProps) => {
  return (
    <_.Container onClick={onClick} type={type} fullWidth={fullWidth}>
      <_.Content type={type}>{name}</_.Content>
    </_.Container>
  );
};

export default Button;
