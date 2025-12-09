import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f1f7;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;
export const ModalMain = styled.div`
  display: flex;
  width: 420px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e2e7f0;
`;
export const Text = styled.h3<{ color: string; size: number }>`
  color: ${(props) =>
    props.color == 'blue'
      ? `#2962F6`
      : props.color == 'gray'
        ? `#717D96`
        : `#1A202C`};
  text-align: center;
  font-family: Pretendard;
  font-size: ${(props) => props.size}px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ScoreDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;
export const AnswerAllDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;
export const AnswerRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
