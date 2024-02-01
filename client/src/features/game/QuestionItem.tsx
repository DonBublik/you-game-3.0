import React from 'react';
import { Question } from '../../redux/reducers/themeTypes';

const QuestionItem = ({ question }: { question: Question }): JSX.Element => {
  

  return (
    <>
      <div>{question.text}</div>
    </>
  );
};

export default QuestionItem;
