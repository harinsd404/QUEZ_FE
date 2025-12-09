import * as _ from './style';

const BSM_CLIENT_ID = import.meta.env.VITE_BSM_CLIENT_ID || '';
const BSM_REDIRECT_URI =
  import.meta.env.VITE_BSM_REDIRECT_URI || 'http://localhost:5173/callback';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const handleBSMLogin = () => {
    const bsmAuthUrl = `https://auth.bssm.kro.kr/oauth?clientId=${BSM_CLIENT_ID}&redirectURI=${BSM_REDIRECT_URI}`;
    window.location.href = bsmAuthUrl;
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <_.Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <_.ModalContainer>
        <_.CloseButton onClick={onClose}>×</_.CloseButton>
        <_.Title>QUEZ</_.Title>
        <_.Description>
          BSM 계정으로 로그인하여
          <br />
          큐즈를 이용해 보세요!
        </_.Description>
        <_.LoginButton onClick={handleBSMLogin}>
          <_.ButtonText>BSM 로그인</_.ButtonText>
        </_.LoginButton>
      </_.ModalContainer>
    </_.Overlay>
  );
};

export default LoginModal;
