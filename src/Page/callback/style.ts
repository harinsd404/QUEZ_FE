import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const LoadingText = styled.p`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  color: #4a5468;
  margin: 0;
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 4px solid #e2e7f0;
  border-top: 4px solid #2962f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 1rem;
`;

export const ErrorText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  color: #d32f2f;
  margin: 0;
`;

export const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #2962f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1e4fd6;
  }
`;
