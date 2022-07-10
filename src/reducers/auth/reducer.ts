import AuthAction from 'src/reducers/auth/action';
import { AuthState } from 'src/reducers/auth/model';
import { ActionBase } from '..';

const initialState: AuthState = {};

const authReducer = (state = initialState, action: ActionBase): AuthState => {
  if (!action.type.includes('@auth')) {
    return state;
  }
  switch (action.type) {
    case AuthAction.UPDATE_MY_PROFILE:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          ...action.payload,
        },
      };

    default: {
      return state;
    }
  }
};

export default authReducer;
