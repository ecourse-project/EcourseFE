import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import ChatList from "../../../ChatList";
import isEqual from 'fast-deep-equal';
import { memo, useMemo } from 'react';
import { useStore } from "../../store";
import { chatSelectors } from "../../store/selectors";
import useProChatLocale from "../../hooks/useProChatLocale";
import { useRefFunction } from "../../hooks/useRefFunction";
import { renderActions } from "./Actions";
import { renderMessagesExtra } from "./Extras";
import { renderMessages } from "./Messages";
import SkeletonList from "./SkeletonList";
import { jsx as _jsx } from "react/jsx-runtime";
var List = /*#__PURE__*/memo(function (_ref) {
  var showTitle = _ref.showTitle,
    itemShouldUpdate = _ref.itemShouldUpdate,
    chatItemRenderConfig = _ref.chatItemRenderConfig,
    renderErrorMessages = _ref.renderErrorMessages,
    markdownProps = _ref.markdownProps;
  var data = useStore(chatSelectors.currentChatsWithGuideMessage, isEqual);
  var _useProChatLocale = useProChatLocale(),
    localeObj = _useProChatLocale.localeObject;
  var locale = useStore(function (s) {
    return s.locale;
  });
  var _useStore = useStore(function (s) {
      var config = s.config;
      return [s.init, s.displayMode, config.enableHistoryCount, config.historyCount, s.chatLoadingId, s.deleteMessage, s.resendMessage, s.dispatchMessage];
    }),
    _useStore2 = _slicedToArray(_useStore, 8),
    init = _useStore2[0],
    displayMode = _useStore2[1],
    enableHistoryCount = _useStore2[2],
    historyCount = _useStore2[3],
    chatLoadingId = _useStore2[4],
    deleteMessage = _useStore2[5],
    resendMessage = _useStore2[6],
    dispatchMessage = _useStore2[7];
  var onActionsClick = useRefFunction(function (action, _ref2) {
    var id = _ref2.id,
      error = _ref2.error;
    switch (action.key) {
      case 'del':
        {
          deleteMessage(id);
          break;
        }
      case 'regenerate':
        {
          resendMessage(id);

          // if this message is an error message, we need to delete it
          if (error) deleteMessage(id);
          break;
        }
    }

    // TODO: need a custom callback
  });
  var onMessageChange = useRefFunction(function (id, content) {
    return dispatchMessage({
      id: id,
      key: 'content',
      type: 'updateMessage',
      value: content
    });
  });
  var textObj = useMemo(function () {
    return {
      cancel: localeObj.cancel,
      confirm: localeObj.confirm,
      copy: localeObj.copy,
      copySuccess: localeObj.copySuccess,
      delete: localeObj.delete,
      edit: localeObj.edit,
      history: localeObj.history,
      regenerate: localeObj.regenerate
    };
  }, [locale]);
  if (!init) return /*#__PURE__*/_jsx(SkeletonList, {});
  return /*#__PURE__*/_jsx(ChatList, {
    showTitle: showTitle,
    data: data,
    itemShouldUpdate: itemShouldUpdate,
    enableHistoryCount: enableHistoryCount,
    historyCount: historyCount,
    loadingId: chatLoadingId,
    onActionsClick: onActionsClick,
    onMessageChange: onMessageChange
    // renderActions: renderActions
    // need support custom Render
    ,
    renderMessages: renderMessages,
    renderErrorMessages: renderErrorMessages,
    renderMessagesExtra: renderMessagesExtra,
    style: {
      marginTop: 24
    },
    chatItemRenderConfig: chatItemRenderConfig,
    text: textObj,
    type: displayMode || 'chat',
    markdownProps: markdownProps
  });
});
export default List;
