import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 528px;
  padding: 60px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
export const HeaderText = styled.h3<{ color: string; size: number }>`
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
