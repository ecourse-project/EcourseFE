import { LocaleProps } from "../types/locale";
export type Locale = 'en-US'| 'zh-CN' | 'zh-HK';
export declare const gLocaleObject: (gLocale: Locale) => LocaleProps;
