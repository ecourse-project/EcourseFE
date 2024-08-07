import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["avatar", "title", "backgroundColor"];
import { gLocaleObject } from "../../../locale";
import { getSlicedMessagesWithConfig } from "../../utils/message";
// 当前激活的消息列表
export var currentChats = function currentChats(s) {
  if (Object.keys(s.chats).length === 0) return [];
  var getMeta = function getMeta(message) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _s$userMeta = s.userMeta,
      avatar = _s$userMeta.avatar,
      title = _s$userMeta.title,
      backgroundColor = _s$userMeta.backgroundColor,
      rest = _objectWithoutProperties(_s$userMeta, _excluded);
    var assistant = s.assistantMeta;
    switch (message === null || message === void 0 ? void 0 : message.role) {
      case 'user':
        {
          return _objectSpread({
            avatar: avatar,
            title: title
          }, rest);
        }
      case 'system':
        {
          return assistant;
        }
      case 'assistant':
        {
          return {
            avatar: assistant === null || assistant === void 0 ? void 0 : assistant.avatar,
            backgroundColor: assistant === null || assistant === void 0 ? void 0 : assistant.backgroundColor,
            title: assistant === null || assistant === void 0 ? void 0 : assistant.title
          };
        }
    }
    return _objectSpread({}, message);
  };
  var basic = s.chats
  // 映射头像关系
  .map(function (m) {
    return _objectSpread(_objectSpread({}, m), {}, {
      meta: getMeta(m)
    });
  });
  var finalList = [];
  var addItem = function addItem(item) {
    var isExist = finalList.findIndex(function (i) {
      return item.id === i.id;
    }) > -1;
    if (!isExist) {
      finalList.push(item);
    }
  };

  // 基于添加逻辑进行重排序
  var _iterator = _createForOfIteratorHelper(basic),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      // 先判存在与否，不存在就加入
      addItem(item);
      var _iterator2 = _createForOfIteratorHelper(basic),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var another = _step2.value;
          if (another.parentId === item.id) {
            addItem(another);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return finalList;
};

// 针对新助手添加初始化时的自定义消息
export var currentChatsWithGuideMessage = function currentChatsWithGuideMessage(s) {
  var _s$helloMessage;
  var data = currentChats(s);

  // TODO: need topic inject
  var isBrandNewChat = data.length === 0;
  if (!isBrandNewChat) return data;
  var emptyInboxGuideMessage = _objectSpread({
    content: (_s$helloMessage = s.helloMessage) !== null && _s$helloMessage !== void 0 ? _s$helloMessage : gLocaleObject(s.locale).defaultHelloMessage,
    createAt: Date.now(),
    extra: {},
    id: 'default',
    meta: s.assistantMeta,
    role: 'hello',
    updateAt: Date.now()
  }, data);
  return [emptyInboxGuideMessage];
};
export var currentChatsWithHistoryConfig = function currentChatsWithHistoryConfig(s) {
  var chats = currentChats(s);
  return getSlicedMessagesWithConfig(chats, s.config);
};
export var chatsMessageString = function chatsMessageString(s) {
  var chats = currentChatsWithHistoryConfig(s);
  return chats.map(function (m) {
    return m.content;
  }).join('');
};