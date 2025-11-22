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
        <Link to="/Log-in">
          <_.linkText>LogIn</_.linkText>
        </Link>
        <Link to="/Sign-up">
          <_.blueText>SignUp</_.blueText>
        </Link>
      </_.loginArea>
    </_.Container>
  );
};

export default Header;
