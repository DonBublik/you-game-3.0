export type Theme = {
  id: number;
  name: string;
  Question: [];
};

export type ThemesState = {
  themes: Theme[];
};

export type Action = { type: 'themes/load'; payload: Theme[] };
