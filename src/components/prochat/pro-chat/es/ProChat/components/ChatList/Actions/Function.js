import ActionIconGroup from "../../../../ActionIconGroup";
import { useChatListActionsBar } from "../../../../hooks/useChatListActionsBar";
import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export var FunctionActionsBar = /*#__PURE__*/memo(function (_ref) {
  var text = _ref.text,
    onActionClick = _ref.onActionClick;
  var _useChatListActionsBa = useChatListActionsBar(text),
    regenerate = _useChatListActionsBa.regenerate,
    divider = _useChatListActionsBa.divider,
    del = _useChatListActionsBa.del;
  return /*#__PURE__*/_jsx(ActionIconGroup, {
    dropdownMenu: [regenerate, divider, del],
    items: [regenerate],
    onActionClick: onActionClick,
    type: "ghost"
  });
});