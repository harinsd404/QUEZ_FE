import styled from '@emotion/styled';

export const Container = styled.div<{ type: string; fullWidth?: boolean }>`
  display: flex;
  padding: 1rem 1.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  ${(props) => props.fullWidth && `width: 100%;`}
  ${(props) =>
    props.type == 'blue'
      ? `background-color: #EBF1FF;`
      : props.type == 'gray'
        ? `background-color: #E2E7F0;`
        : `background-color: #2962F6`};
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
  ${(props) =>
    props.type == 'blue'
      ? `color: #2962F6;`
      : props.type == 'gray'
        ? `color: #4A5468`
        : `color: #fff`};
`;
