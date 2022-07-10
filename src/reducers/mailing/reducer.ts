import MailingAction from 'src/reducers/mailing/action';
import { ActionBase } from '..';
import { MailingState } from 'src/reducers/mailing/model';
import { deleteMailingListFromState, updateMailingListState } from 'src/utils/mailing';

const initialState: MailingState = {
  mailingList: {
    count: 0,
    results: [],
  },
};

const mailingReducer = (state = initialState, action: ActionBase): MailingState => {
  if (!action.type.includes('@mailing')) {
    return state;
  }
  switch (action.type) {
    case MailingAction.LIST_MAILING_LIST_SUCCESS:
      return {
        ...state,
        mailingList: action.payload,
      };

    case MailingAction.UPDATE_MAILING_LIST_SUCCESS:
      return {
        ...state,
        mailingList: updateMailingListState(action.payload, state.mailingList),
      };

    case MailingAction.DELETE_MAILING_LIST_SUCCESS:
      return {
        ...state,
        mailingList: deleteMailingListFromState(action.payload, state.mailingList),
      };

    default: {
      return state;
    }
  }
};

export default mailingReducer;
