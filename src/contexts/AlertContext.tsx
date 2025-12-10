import React, { createContext, useState, useCallback, ReactNode } from 'react';

export interface AlertOptions {
  title?: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error' | 'login';
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
  showLoginModal: () => void;
  alertState: AlertState | null;
}

interface AlertState extends AlertOptions {
  isOpen: boolean;
}

export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alertState, setAlertState] = useState<AlertState | null>(null);

  const showAlert = useCallback((options: AlertOptions) => {
    setAlertState({
      ...options,
      isOpen: true,
      type: options.type || 'info',
      confirmText: options.confirmText || '확인',
      showCancel: options.showCancel ?? false,
    });
  }, []);

  const showLoginModal = useCallback(() => {
    setAlertState({
      title: 'QUEZ',
      message: 'BSM 계정으로 로그인하여\n큐즈를 이용해 보세요!',
      type: 'login',
      isOpen: true,
      confirmText: 'BSM 로그인',
      showCancel: false,
    });
  }, []);

  const hideAlert = useCallback(() => {
    setAlertState(null);
  }, []);

  return (
    <AlertContext.Provider
      value={{ showAlert, hideAlert, showLoginModal, alertState }}
    >
      {children}
    </AlertContext.Provider>
  );
};
