import styled from '@emotion/styled';

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 1.5rem;
  min-width: 320px;
  max-width: 400px;
  animation: slideIn 0.2s ease-out;

  @keyframes slideIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const IconWrapper = styled.div<{ type: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#EBF1FF';
      case 'error':
        return '#FFE5E5';
      case 'warning':
        return '#FFF4E5';
      default:
        return '#EBF1FF';
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#2962F6';
      case 'error':
        return '#E53E3E';
      case 'warning':
        return '#DD6B20';
      default:
        return '#2962F6';
    }
  }};
`;

export const Title = styled.h2`
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  text-align: center;
`;

export const Message = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  color: #4a5468;
  margin: 0;
  text-align: center;
  line-height: 1.5;
  white-space: pre-line;
`;

export const ButtonGroup = styled.div<{ showCancel: boolean }>`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  flex-direction: ${(props) => (props.showCancel ? 'row' : 'column')};
`;

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  flex: 1;
  display: flex;
  padding: 0.875rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s;

  ${(props) =>
    props.variant === 'primary'
      ? `
    background-color: #2962F6;
    color: white;
    &:hover {
      background-color: #1e4fd6;
    }
  `
      : `
    background-color: #E2E7F0;
    color: #4A5468;
    &:hover {
      background-color: #d1d7e0;
    }
  `}

  &:active {
    transform: scale(0.98);
  }
`;
