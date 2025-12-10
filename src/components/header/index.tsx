import { Link } from 'react-router-dom';
import Logo from '@/assets/Logo.svg';
import { useAuth } from '@/hooks/useAuth';
import { useAlert } from '@/hooks/useAlert';
import * as _ from './style';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { showLoginModal } = useAlert();

  const handleLogout = () => {
    logout();
  };

  return (
    <_.Container>
      <Link to="/">
        <_.Logo src={Logo} alt="logo image" />
      </Link>

      <_.loginArea>
        {isAuthenticated && user ? (
          <>
            <_.UserInfo>
              <_.UserName>{user.name}</_.UserName>
              <_.UserDetail>
                {user.grade}학년 {user.classNo}반
              </_.UserDetail>
            </_.UserInfo>
            <_.LogoutButton onClick={handleLogout}>로그아웃</_.LogoutButton>
          </>
        ) : (
          <_.linkText onClick={showLoginModal}>로그인</_.linkText>
        )}
      </_.loginArea>
    </_.Container>
  );
};

export default Header;
