import { Question, Theme } from "../../redux/reducers/themeTypes";
import QuestionItem from "./QuestionItem";

const ThemeItem = ({ theme }: { theme: Theme }): JSX.Element => {
  const sortedQuestions = theme.Questions.sort((a, b) => a.score - b.score);
  return (
    <div>
      <div className="question-container">
        <div className="theme-name">{theme.name}</div>
        {theme.Questions.map((question: Question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default ThemeItem;
