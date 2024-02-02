import React, { useState } from 'react';
import type { Question, Games } from '../../redux/reducers/themeTypes';
import QuestionModule from './QuestionModule';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

const QuestionItem = ({ question }: { question: Question }): JSX.Element => {
  const [view, setView] = useState(true);
  const [moduleView, setModuleView] = useState(false);
  const [answer, setAnswer] = useState('');
  const [answerTrue, setaAswerTrue] = useState(false);

  const dispatch = useAppDispatch();
  const openModule = () => {
    setModuleView(true);
  };

  const userId = useSelector((store: RootState) => store.auth.auth?.id);

  const questionModuleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();
    setaAswerTrue(true);
    let score = 0;
    if (answer === question.answer) {
      score = question.score;
    }
    const { id } = question;
    const res = await fetch('/api/answers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
        score,
      }),
    });
    const data: { question: Question } = (await res.json()) as {
      question: Question;
    };
    dispatch({ type: 'questions/update', payload: data.question });
    setTimeout(() => setModuleView(false), 5000);
    setTimeout(() => setAnswer(''), 5000);
  };
  return (
    <>
      {question.Games[0] &&
      question.Games.some((el) => el.user_id === userId) ? (
        <button className="question-btn">Отвечено</button>
      ) : (
        <>
          <button className="question-btn" onClick={() => openModule()}>
            {question.score}
          </button>
        </>
      )}
      {moduleView && (
        <div className="question-module">
          <form onSubmit={questionModuleSubmit}>
            <div className="question-img">
              <img src={question.img} alt="" />
            </div>
            <div className="question-name">{question.text}</div>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              placeholder="Ваш ответ"
            />
            {answerTrue && (
              <>
                {answer !== '' &&
                  answer.toLowerCase() !== question.answer.toLowerCase() && (
                    <div className="answer-false">Неправильно</div>
                  )}
                {answer.toLowerCase() === question.answer.toLowerCase() && (
                  <div className="answer-true">Правильно</div>
                )}
              </>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default QuestionItem;
