export type User = {
  id: number;
  name: string;
  password: string;
  max_result: number;
  email: string;
  img: string;
};

export type UsersState = {
  users: User[];
};

export type Action = { type: 'users/load'; payload: User[] };
