import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
  border-radius: 12px;
  background: #fff;
`;
export const Title = styled.h3`
  color: #1a202c;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  margin: 0;
`;
export const QuestionArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  margin: 0;

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;
export const QuestionTextBlue = styled.p`
  color: #2962f6;
  margin: 0;
`;
export const QuestionText = styled.h3`
  color: #1a202c;
  margin: 0;
`;
export const QuizArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  align-self: stretch;
`;
export const Quiz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 14px;
  gap: 4px;
  align-self: stretch;
  border-radius: 10px;
  background-color: #f0f1f7;
`;
export const ButtonArea = styled.div`
  display: grid;
  height: 94px;
  row-gap: 8px;
  column-gap: 8px;
  align-self: stretch;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
export const QuizButton = styled.button`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: #fff;

  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  :hover {
    border: none;
    filter: brightness(0.9);
  }
  ::after {
    border: none;
  }
`;
export const Refresh = styled.div`
  display: flex;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #2962f6;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
