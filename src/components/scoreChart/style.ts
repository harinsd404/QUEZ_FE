import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 410px;
  padding: 28px 31px;
  flex-direction: column;
  border-radius: 12px;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
export const title = styled.h3`
  color: #1a202c;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
export const score = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const icon = styled.img`
  width: 20px;
  height: 20px;
`;
export const line = styled.div`
  width: 100%;
  height: 1px;
  background: #ebf1ff;
`;
export const Chart = styled.div`
  width: 100%;
  height: 180px;

  .recharts-cartesian-axis-tick {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  .recharts-tooltip-wrapper {
    font-family: Pretendard;
  }
`;
