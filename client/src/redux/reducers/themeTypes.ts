export type Theme = {
  id: number;
  name: string;
};

export type ThemesState = {
  themes: Theme[];
};

export type Action = { type: 'themes/load'; payload: Theme[] };
