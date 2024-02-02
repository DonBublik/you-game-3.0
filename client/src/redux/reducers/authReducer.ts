export type User = {
  id: number;
  img: string;
  name: string;
  email: string;
  password: string;
  max_result: number;
};

type AuthState = {
  auth: User | undefined;
  users: User[];
};

const initState: AuthState = {
  auth: undefined,
  users: [],
};

export type Actions =
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' }
  | { type: 'load/users'; payload: User[] };

export const authReducer = (
  state: AuthState = initState,
  action: Actions
): AuthState => {
  switch (action.type) {
    case 'auth/sign-up':
      return {
        ...state,
        auth: action.payload,
      };
    case 'auth/sign-in':
      return {
        ...state,
        auth: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        auth: undefined,
      };
    case 'load/users':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
