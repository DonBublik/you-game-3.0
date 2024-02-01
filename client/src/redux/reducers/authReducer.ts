export type User = {
    id: number;
    img: string;
    name: string;
    email: string;
    password: string
}

type AuthState = {
    auth: User | undefined
}

const initState: AuthState = {
    auth: undefined
}

export type Actions = 
| { type: 'auth/sign-up'; payload: User }
| { type: 'auth/sign-in'; payload: User }
| { type: 'auth/logout' };

export const authReducer = (state: AuthState = initState, action: Actions): AuthState => {
    switch (action.type) {
        case 'auth/sign-up':
            return {
                ...state,
                auth: action.payload
            };
            case 'auth/sign-in':
                return {
                    ...state,
                    auth: action.payload
                };
                case 'auth/logout':
                    return {
                        ...state,
                        auth: undefined
                    }
        default:
            return state
    }
}