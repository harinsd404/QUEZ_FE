import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 430px;
  padding: 32px 28px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 12px;
  background: #fff;
`;
export const UserLangking = styled.div<{ user: boolean }>`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  ${(props) => props.user && `background-color: #EBF1FF`};
`;
export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 2px;
`;
export const LangkingNum = styled.h3`
  color: #2962f6;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
export const UserName = styled.h3`
  color: #1a202c;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
export const Score = styled.h3`
  color: #1a202c;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
