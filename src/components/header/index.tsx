import { Link } from 'react-router-dom';
import Logo from '@/assets/Logo.svg';
import * as _ from './style';

const Header = () => {
  return (
    <_.Container>
      <Link to="/">
        <_.Logo src={Logo} alt="logo image" />
      </Link>

      <_.loginArea>
        <Link to="/">
          <_.linkText>로그인</_.linkText>
        </Link>
      </_.loginArea>
    </_.Container>
  );
};

export default Header;
