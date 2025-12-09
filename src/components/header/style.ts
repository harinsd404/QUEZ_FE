import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 8px 66px;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100vw;
  box-sizing: border-box;

  height: 63px;
  flex-direction: row;

  position: fixed;
  top: 0;
  left: 0;

  background-color: white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
`;
export const Logo = styled.img`
  margin-right: auto;
  width: 138px;
  height: 47px;
`;
export const loginArea = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const linkText = styled.h3`
  color: #2962f6;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  margin: 0;
  :hover {
    filter: brightness(70%);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const UserName = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  color: #2962f6;
`;

export const UserDetail = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  color: #4a5468;
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #e2e7f0;
  color: #4a5468;
  border: none;
  border-radius: 0.5rem;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #d0d5dd;
  }
`;
