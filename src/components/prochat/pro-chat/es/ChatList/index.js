import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["onActionsClick", "renderMessagesExtra", "className", "data", "type", "text", "showTitle", "itemShouldUpdate", "onMessageChange", "renderMessages", "renderErrorMessages", "loadingId", "renderItems", "enableHistoryCount", "renderActions", "historyCount", "chatItemRenderConfig", "markdownProps"];
import { Fragment, memo, useContext } from 'react';
import { ConfigProvider } from 'antd';
import ChatItem from "./ChatListItem";
import HistoryDivider from "./HistoryDivider";
import ShouldUpdateItem from "./ShouldUpdateItem";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * ChatList组件用于显示聊天列表。
 *
 * @component
 * @param {Object} props - 组件属性
 * @param {Function} props.onActionsClick - 点击操作按钮时的回调函数
 * @param {Function} props.renderMessagesExtra - 渲染额外的消息内容的回调函数
 * @param {string} props.className - 自定义类名
 * @param {Array} props.data - 聊天数据数组
 * @param {string} [props.type='chat'] - 聊天类型，默认为'chat'
 * @param {string} props.text - 文本内容
 * @param {boolean} props.showTitle - 是否显示标题
 * @param {Function} props.itemShouldUpdate - 判断聊天项是否需要更新的回调函数
 * @param {Function} props.onMessageChange - 消息内容变化时的回调函数
 * @param {Function} props.renderMessages - 渲染消息内容的回调函数
 * @param {Function} props.renderErrorMessages - 渲染错误消息的回调函数
 * @param {string} props.loadingId - 正在加载的聊天项的ID
 * @param {Function} props.renderItems - 渲染聊天项的回调函数
 * @param {boolean} props.enableHistoryCount - 是否启用历史记录计数
 * @param {Function} props.renderActions - 渲染操作按钮的回调函数
 * @param {number} [props.historyCount=0] - 历史记录计数
 * @param {Object} props.chatItemRenderConfig - 聊天项渲染配置
 * @returns {JSX.Element} 聊天列表组件
 */
var ChatList = /*#__PURE__*/memo(function (_ref) {
  var onActionsClick = _ref.onActionsClick,
    renderMessagesExtra = _ref.renderMessagesExtra,
    className = _ref.className,
    data = _ref.data,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'chat' : _ref$type,
    text = _ref.text,
    showTitle = _ref.showTitle,
    itemShouldUpdate = _ref.itemShouldUpdate,
    onMessageChange = _ref.onMessageChange,
    renderMessages = _ref.renderMessages,
    renderErrorMessages = _ref.renderErrorMessages,
    loadingId = _ref.loadingId,
    renderItems = _ref.renderItems,
    enableHistoryCount = _ref.enableHistoryCount,
    renderActions = _ref.renderActions,
    _ref$historyCount = _ref.historyCount,
    historyCount = _ref$historyCount === void 0 ? 0 : _ref$historyCount,
    chatItemRenderConfig = _ref.chatItemRenderConfig,
    markdownProps = _ref.markdownProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixClass = getPrefixCls('pro-chat');
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: cx(styles.container, "".concat(prefixClass, "-list"), className)
  }, props), {}, {
    children: data.map(function (item, index) {
      var itemProps = {
        loading: loadingId === item.id,
        onActionsClick: onActionsClick,
        onMessageChange: onMessageChange,
        renderActions: renderActions,
        renderErrorMessages: renderErrorMessages,
        renderItems: renderItems,
        renderMessages: renderMessages,
        renderMessagesExtra: renderMessagesExtra,
        showTitle: showTitle,
        text: text,
        type: type
      };
      var historyLength = data.length;
      var enableHistoryDivider = enableHistoryCount && historyLength > historyCount && historyCount === historyLength - index + 1;
      return /*#__PURE__*/_jsx(ShouldUpdateItem, _objectSpread(_objectSpread(_objectSpread({}, itemProps), item), {}, {
        shouldUpdate: itemShouldUpdate,
        children: /*#__PURE__*/_jsxs(Fragment, {
          children: [/*#__PURE__*/_jsx(HistoryDivider, {
            enable: enableHistoryDivider,
            text: text === null || text === void 0 ? void 0 : text.history
          }), /*#__PURE__*/_jsx(ChatItem, _objectSpread(_objectSpread(_objectSpread({}, itemProps), item), {}, {
            originData: item,
            chatItemRenderConfig: chatItemRenderConfig,
            markdownProps: markdownProps
          }))]
        })
      }), item.id);
    })
  }));
});
export default ChatList;