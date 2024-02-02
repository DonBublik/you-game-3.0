import { Action, QuestionState, ThemesState } from './themeTypes';

const initState: QuestionState = {

  questions: []
}

export const questionsReducer = (
  state: QuestionState = initState,
  action: Action
): QuestionState => {
  switch (action.type) {
    case 'questions/update':
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};
