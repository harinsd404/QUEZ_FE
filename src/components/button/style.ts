import styled from '@emotion/styled';

export const Container = styled.div<{ type: string }>`
  display: flex;
  padding: 1rem 1.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  ${(props) =>
    props.type == 'blue'
      ? `background-color: #EBF1FF;`
      : `background-color: #E2E7F0;`};
  &:hover {
    filter: brightness(0.9);
  }
`;
export const Content = styled.p<{ type: string }>`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  ${(props) => (props.type == 'blue' ? `color: #2962F6;` : `color:#4A5468`)};
`;
