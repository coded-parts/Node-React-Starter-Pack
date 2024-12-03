import React, { createContext, ReactNode, useReducer } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type State = {
  users: User[];
  loading: boolean;
  error?: string;
};

type Action =
  | { type: 'FETCH_USERS_START' }
  | { type: 'FETCH_USERS_SUCCESS'; payload: User[] }
  | { type: 'FETCH_USERS_ERROR'; payload: string };

const initialState: State = {
  users: [],
  loading: false,
  error: undefined,
};

const UserContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return { ...state, loading: true, error: undefined };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false };
    case 'FETCH_USERS_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
