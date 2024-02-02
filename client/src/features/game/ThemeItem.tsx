import { Question, Theme } from '../../redux/reducers/themeTypes';
import QuestionItem from './QuestionItem';

const ThemeItem = ({ theme }: { theme: Theme }): JSX.Element => {
  return (
    <div>
      <div className='themes-container'>
      <div className='question-container'>
      <div>{theme.name}</div>
      {theme.Questions.map((question: Question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
      </div>
      </div>
    </div>
  );
};

export default ThemeItem;
