import ActionIconGroup from "../../../../ActionIconGroup";
import { useChatListActionsBar } from "../../../../hooks/useChatListActionsBar";
import { memo } from 'react';
import { ErrorActionsBar } from "../Actions/Error";
import { jsx as _jsx } from "react/jsx-runtime";
export var AssistantActionsBar = /*#__PURE__*/memo(function (_ref) {
  var text = _ref.text,
    id = _ref.id,
    onActionClick = _ref.onActionClick,
    error = _ref.error;
  var _useChatListActionsBa = useChatListActionsBar(text),
    regenerate = _useChatListActionsBa.regenerate,
    edit = _useChatListActionsBa.edit,
    copy = _useChatListActionsBa.copy,
    divider = _useChatListActionsBa.divider,
    del = _useChatListActionsBa.del;
  if (id === 'default') return;
  if (error) return /*#__PURE__*/_jsx(ErrorActionsBar, {
    onActionClick: onActionClick,
    text: text
  });
  return /*#__PURE__*/_jsx(ActionIconGroup, {
    dropdownMenu: [edit, copy, regenerate,
    // divider,
    // TODO: need a translate
    divider, del],
    items: [regenerate, copy],
    onActionClick: onActionClick,
    type: "ghost"
  });
});