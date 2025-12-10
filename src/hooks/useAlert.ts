import { useContext } from 'react';
import { AlertContext } from '@/contexts/AlertContext';

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be used within AlertProvider');
  }

  const { showAlert, hideAlert, showLoginModal } = context;

  // 간편 함수들
  const alert = (message: string, title?: string) => {
    showAlert({
      message,
      title,
      type: 'info',
    });
  };

  const success = (message: string, title?: string) => {
    showAlert({
      message,
      title,
      type: 'success',
    });
  };

  const error = (message: string, title?: string) => {
    showAlert({
      message,
      title,
      type: 'error',
    });
  };

  const warning = (message: string, title?: string) => {
    showAlert({
      message,
      title,
      type: 'warning',
    });
  };

  const confirm = (
    message: string,
    onConfirm?: () => void,
    onCancel?: () => void,
    title?: string
  ) => {
    showAlert({
      message,
      title,
      type: 'info',
      showCancel: true,
      onConfirm,
      onCancel,
      confirmText: '확인',
      cancelText: '취소',
    });
  };

  return {
    showAlert,
    hideAlert,
    showLoginModal,
    alert,
    success,
    error,
    warning,
    confirm,
  };
};
