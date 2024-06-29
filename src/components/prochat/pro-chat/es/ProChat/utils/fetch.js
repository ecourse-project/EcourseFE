import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
export var getMessageError = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
    var chatMessageError;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          chatMessageError = {
            message: "response error, status: ".concat(response.statusText),
            type: response.status
          };
          return _context.abrupt("return", chatMessageError);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getMessageError(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 使用流式方法获取数据
 * @param fetchFn
 * @param options
 */
export var fetchSSE = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fetchFn) {
    var options,
      response,
      _options$onErrorHandl,
      chatMessageError,
      returnRes,
      data,
      reader,
      decoder,
      done,
      _options$onMessageHan,
      _yield$reader$read,
      value,
      doneReading,
      chunkValue,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          _context2.next = 3;
          return fetchFn();
        case 3:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 10;
            break;
          }
          _context2.next = 7;
          return getMessageError(response);
        case 7:
          chatMessageError = _context2.sent;
          (_options$onErrorHandl = options.onErrorHandle) === null || _options$onErrorHandl === void 0 || _options$onErrorHandl.call(options, chatMessageError);
          return _context2.abrupt("return");
        case 10:
          returnRes = response.clone();
          data = response.body;
          if (data) {
            _context2.next = 14;
            break;
          }
          return _context2.abrupt("return");
        case 14:
          reader = data.getReader();
          decoder = new TextDecoder();
          done = false;
        case 17:
          if (done) {
            _context2.next = 28;
            break;
          }
          _context2.next = 20;
          return reader.read();
        case 20:
          _yield$reader$read = _context2.sent;
          value = _yield$reader$read.value;
          doneReading = _yield$reader$read.done;
          done = doneReading;
          chunkValue = decoder.decode(value, {
            stream: !doneReading
          });
          (_options$onMessageHan = options.onMessageHandle) === null || _options$onMessageHan === void 0 || _options$onMessageHan.call(options, chunkValue, returnRes);
          _context2.next = 17;
          break;
        case 28:
          return _context2.abrupt("return", returnRes);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchSSE(_x2) {
    return _ref2.apply(this, arguments);
  };
}();