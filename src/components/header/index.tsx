import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/Logo.svg';
import { useAuth } from '@/hooks/useAuth';
import LoginModal from '@/components/loginModal';
import * as _ from './style';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
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
            <_.linkText onClick={openLoginModal}>로그인</_.linkText>
          )}
        </_.loginArea>
      </_.Container>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default Header;
