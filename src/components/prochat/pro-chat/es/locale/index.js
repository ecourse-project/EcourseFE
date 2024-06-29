import enUSLocal from "./en-US";
import zhCNLocal from "./zh-CN";
import zhHKLocal from "./zh-HK";
var locales = {
  'en-US': enUSLocal,
  'zh-CN': zhCNLocal,
  'zh-HK': zhHKLocal,
  en: enUSLocal
};
export var gLocaleObject = function gLocaleObject(gLocale) {
  return locales[gLocale] || locales['en-US'];
};
