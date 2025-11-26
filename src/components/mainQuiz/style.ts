import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 648px;
  height: auto;
  padding: 40px 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
export const QuizTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const QuizText = styled.h3<{ color: string }>`
  ${(props) => (props.color == 'blue' ? `color: #2962f6;` : `color: #1a202c;`)}
  margin: 0;
`;
export const ContentArea = styled.div`
  display: flex;
  height: 194px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 10px;
  border: 1px solid #717d96;
  background: #f0f1f7;
`;
export const ContentText = styled.h1`
  color: #1a202c;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const answerInputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`;
export const answerInput = styled.input`
  display: flex;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #a0abc0;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  :focus {
    border: #2962f6;
  }
`;

export const ChoiceInputGrid = styled.div`
  display: grid;
  height: 140px;
  row-gap: 18px;
  column-gap: 18px;
  align-self: stretch;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
export const ChoiceButton = styled.button`
  display: flex;
  padding: 16px 27px;
  align-items: center;
  gap: 14px;
  justify-self: stretch;
  border-radius: 6px;
  border: 2px solid #cbd2e0;
  background: #fff;
  :hover {
    border: 2px solid #cbd2e0;
    filter: brightness(0.9);
  }
`;
export const ChoiceButtonText = styled.h3<{ color: string }>`
  ${(props) => (props.color == 'blue' ? `color: #2962f6;` : `color: #1a202c;`)}
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const OXButtonArea = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  align-self: stretch;
  width: 100%;
`;
export const OXBtn = styled.button<{ color: string }>`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  ${(props) =>
    props.color == 'O'
      ? `background: #2962f6; color: #fff;`
      : `background: #fff; color: #2962f6;`}

  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: ${(props) => (props.color == 'O' ? `none` : `solid 2px #CBD2E0`)};

  :hover {
    filter: brightness(0.9);
    border: ${(props) => (props.color == 'O' ? `none` : `solid 2px #CBD2E0`)};
  }
`;
export const IDontKnow = styled.button`
  background: none;
  color: #2962f6;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  text-decoration-line: underline;

  outline: none;
  border: none;

  :hover {
    outline: none;
    border: none;
    filter: brightness(0.8);
  }
  :focus {
    outline: none;
    border: none;
  }
`;
