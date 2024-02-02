export type Theme = {
  id: number;
  name: string;
  Questions: [];
};

export type Question = {
  Games: any;
  id: number;
  text: string;
  theme_id: number;
  score: number;
  answer: string;
  img: string;
};

export type Games = {
  id:number,
  question_id:number,
  user_id:number
}

export type ThemesState = {
  themes: Theme[];
};
export type QuestionState = {
  questions: Question[]
}
export type Action = { type: 'themes/load'; payload: Theme[] } | { type: 'questions/update'; payload: Question }
