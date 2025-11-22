import React from 'react';
import * as _ from './style';

const data = [
  { name: '사용자1', score: 55555 },
  { name: '사용자2', score: 12345 },
  { name: '사용자3', score: 4444 },
  { name: '사용자4', score: 1234 },
  { name: '사용자5', score: 333 },
  { name: '사용자6', score: 123 },
  { name: '사용자7', score: 22 },
  { name: '사용자8', score: 12 },
];

const Lanking = () => {
  return (
    <_.Container>
      <_.UserLangking user={true}>
        <_.UserDiv>
          <_.LangkingNum>1</_.LangkingNum>
          <_.UserName>박하린</_.UserName>
        </_.UserDiv>
        <_.Score>99999점</_.Score>
      </_.UserLangking>
      {data.map((data, idx) => (
        <_.UserLangking user={false} key={idx}>
          <_.UserDiv>
            <_.LangkingNum>{idx + 2}</_.LangkingNum>
            <_.UserName>{data.name}</_.UserName>
          </_.UserDiv>
          <_.Score>{data.score}점</_.Score>
        </_.UserLangking>
      ))}
    </_.Container>
  );
};
export default Lanking;
