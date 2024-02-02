import React, { useState } from 'react';
import type { Question , Games} from '../../redux/reducers/themeTypes';
import QuestionModule from './QuestionModule';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

const QuestionItem = ({ question }: { question: Question }): JSX.Element => {
  const [view,setView]=useState(true)
  const [moduleView, setModuleView] = useState(false)
  const [answer,setAnswer]= useState('')
  
  const dispatch = useAppDispatch()
  const  openModule = () => {
    setModuleView(true)
  }

  const userId = useSelector((store:RootState) => store.auth.auth?.id)

  const questionModuleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault()
    const {id, score} = question
    const res = await fetch('/api/answers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
        score
      })
    })
    const data: {question: Question} = await( res.json())as {question:Question}
    dispatch({type: 'questions/update', payload: data.question})
    
    setModuleView(false)
  }
  return (
    <>
    {question.Games[0] && question.Games.some((el)=> el.user_id===userId)? (
      <button className='question-btn' >Отвечено</button>
      ):(
        <>
        <button className='question-btn' onClick={()=>openModule()}>{question.score}</button>
      </>
    )}
    {moduleView&&(
      <div className="question-module">
            <form onSubmit={questionModuleSubmit} >
            {question.text}
            {answer !=='' && answer !== question.answer &&(
              <div>Не правильно</div>
            )}
            {answer === question.answer &&(
              <div>Правильно</div>
            )}
            <input value={answer} onChange={(e)=> setAnswer(e.target.value)} type='text' placeholder="Ваш ответ"/>
            </form>
        </div>
    )}
    </>
  );
};

export default QuestionItem;
