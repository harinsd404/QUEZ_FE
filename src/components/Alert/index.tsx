import React, { useContext } from 'react';
import * as _ from './style';
import { AlertContext } from '@/contexts/AlertContext';

const BSM_CLIENT_ID = import.meta.env.VITE_BSM_CLIENT_ID || '';
const BSM_REDIRECT_URI =
  import.meta.env.VITE_BSM_REDIRECT_URI || 'http://localhost:5173/callback';

const Alert: React.FC = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('Alert must be used within AlertProvider');
  }

  const { alertState, hideAlert } = context;

  if (!alertState || !alertState.isOpen) {
    return null;
  }

  const handleConfirm = () => {
    if (alertState.type === 'login') {
      const bsmAuthUrl = `https://auth.bssm.kro.kr/oauth?clientId=${BSM_CLIENT_ID}&redirectURI=${BSM_REDIRECT_URI}`;
      window.location.href = bsmAuthUrl;
      return;
    }

    if (alertState.onConfirm) {
      alertState.onConfirm();
    }
    hideAlert();
  };

  const handleCancel = () => {
    if (alertState.onCancel) {
      alertState.onCancel();
    }
    hideAlert();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hideAlert();
    }
  };

  const getIcon = () => {
    switch (alertState.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '!';
      case 'login':
        return null;
      default:
        return 'ℹ';
    }
  };

  return (
    <_.Overlay isOpen={alertState.isOpen} onClick={handleOverlayClick}>
      <_.AlertContainer>
        {alertState.type !== 'login' && (
          <_.IconWrapper type={alertState.type || 'info'}>
            {getIcon()}
          </_.IconWrapper>
        )}

        <_.TextDiv>
          {alertState.title && <_.Title>{alertState.title}</_.Title>}
          <_.Message>{alertState.message}</_.Message>
        </_.TextDiv>

        <_.ButtonGroup showCancel={alertState.showCancel || false}>
          {alertState.showCancel && (
            <_.Button variant="secondary" onClick={handleCancel}>
              {alertState.cancelText || '취소'}
            </_.Button>
          )}
          <_.Button variant="primary" onClick={handleConfirm}>
            {alertState.confirmText || '확인'}
          </_.Button>
        </_.ButtonGroup>
      </_.AlertContainer>
    </_.Overlay>
  );
};

export default Alert;
