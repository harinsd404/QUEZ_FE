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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 2rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4a5468;
  padding: 0.5rem;

  &:hover {
    color: #2962f6;
  }
`;

export const Title = styled.h1`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 700;
  color: #2962f6;
  margin: 0;
`;

export const Description = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  color: #4a5468;
  margin: 0;
  text-align: center;
  line-height: 1.5;
`;

export const LoginButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #2962f6;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1e4fd6;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonText = styled.span`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;
