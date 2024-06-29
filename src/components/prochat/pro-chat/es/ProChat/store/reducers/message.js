import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { produce } from 'immer';
import { nanoid } from "../../utils/uuid";
export var messagesReducer = function messagesReducer(state, payload) {
  switch (payload.type) {
    case 'addMessage':
      {
        return produce(state, function (draftState) {
          var mid = payload.id || nanoid();
          draftState.push({
            content: payload.message,
            createAt: Date.now(),
            id: mid,
            parentId: payload.parentId,
            role: payload.role,
            updateAt: Date.now()
          });
        });
      }
    case 'deleteMessage':
      {
        return state.map(function (m) {
          if (m.id !== payload.id) return m;
          return false;
        }).filter(Boolean);
      }
    case 'updateMessage':
      {
        return produce(state, function (draftState) {
          var id = payload.id,
            key = payload.key,
            value = payload.value;
          var message = draftState.find(function (m) {
            return m.id === id;
          });
          if (!message) return;

          // @ts-ignore
          message[key] = value;
          message.updateAt = Date.now();
        });
      }
    case 'updateMessageExtra':
      {
        return produce(state, function (draftState) {
          var id = payload.id,
            key = payload.key,
            value = payload.value;
          var message = draftState.find(function (m) {
            return m.id === id;
          });
          if (!message) return;
          if (!message.extra) {
            message.extra = _defineProperty({}, key, value);
          } else {
            message.extra[key] = value;
          }
          message.updateAt = Date.now();
        });
      }
    case 'resetMessages':
      {
        return [];
      }
    default:
      {
        throw new Error('暂未实现的 type，请检查 reducer');
      }
  }
};