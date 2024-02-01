export type Theme = {
  id: number;
  name: string;
  Questions: [];
};

export type Question = {
  id: number;
  text: string;
  theme_id: number;
  score: number;
  answer: string;
  img: string;
};

export type ThemesState = {
  themes: Theme[];
};

export type Action = { type: 'themes/load'; payload: Theme[] };
