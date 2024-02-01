import { Action, ThemesState } from "./themeTypes";

const initState: ThemesState = {
  themes: [];
}

export const themesReducer = (state: ThemesState = initState, action: Action): ThemesState => {
  switch (action.type) {
    case 'themes/load':
      return {
        ...state,
        themes: action.payload
      }

  
    default:
      return state;
  }
}