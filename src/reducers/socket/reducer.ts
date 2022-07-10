import { ActionBase } from '..';
import SocketAction from './action';
import { SocketState } from './model';

const initialState: SocketState = {
  connected: false,
  joined: false,
  webSocket: null,
  disconnected: false,
};

const socketReducer = (state = initialState, action: ActionBase): SocketState => {
  if (!action.type.includes('@socket')) {
    return state;
  }
  switch (action.type) {
    case SocketAction.USER_JOINED_SOCKET: {
      return {
        ...state,
        connected: true,
        joined: true,
        webSocket: action.payload,
      };
    }

    case SocketAction.SOCKET_DISCONNECT: {
      return {
        ...state,
        disconnected: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default socketReducer;
