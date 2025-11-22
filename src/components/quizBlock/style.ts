import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 28px;
  width: 288px;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  border-radius: 12px;
  background: #fff;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
export const header = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const icon = styled.img`
  width: 24px;
  height: 24px;
`;
export const title = styled.h3`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  word-wrap: break-word;
`;
export const body = styled.p`
  color: #717d96;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  word-wrap: break-word;
  white-space: pre-wrap;
`;
