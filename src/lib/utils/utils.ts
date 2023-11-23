import _ from 'lodash';
import moment from 'moment';
import { forceLogout } from './auth';
import { StorageKeys, TagState } from './enum';
import { RcFile } from 'antd/es/upload';
import { message } from 'antd';
import { UploadFile } from 'antd/lib';
import { PUNCTUATION_MARK } from './constant';

export interface DurationTime {
  days: number;
  hours: number;
  milliseconds: number;
  minutes: number;
  months: number;
  seconds: number;
  years: number;
}
export const formatDurationTime = (durationTime: string | number) => {
  return moment.duration(durationTime, 'second')['_data'] as DurationTime;
};

export const checkAccountPermission = async () => {
  const token = localStorage.getItem(StorageKeys.SESSION_KEY);
  if (!token) {
    forceLogout();
  }
};

export const uniqueArr = (arr: [any]) => [...new Set(arr)];

export const getFormatDate = (dateInput) => {
  const date = new Date(dateInput);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // timeZone: 'UTC',
  };

  const formattedDate = date.toLocaleString('en-US', options as any);
  return formattedDate;
};
export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  // const isLt2M = file.size / 1024 / 1024 < 2;
  // if (!isLt2M) {
  //   message.error('Image must smaller than 2MB!');
  // }
  return isJpgOrPng;
};
export const onPreview = async (file: UploadFile) => {
  let src = file.url as string;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj as RcFile);
      reader.onload = () => resolve(reader.result as string);
    });
  }
};

const htmlsToReplace = {
  '&quot;': `"`,
  '&amp;': '&',
  '&shy;': '-',
  '&eacute;': 'é',
  '&Uuml;': 'Ü',
  '&uuml;': `ü`,
  '&ldquo;': `‘`,
  '&rsquo;': `’`,
  '&#039;': `'`,
  '&euml;': `ë`,
  '&rdquo;': `”`,
  '&Iacute;': `Í`,
  '&aacute;': `á`,
  '&Aacute;': `Á`,
  '&ntilde;': `ñ`,
  '&pi;': `π`,
  '&ouml': `ö`,
  '&Ouml': `Ö`,
  '&iacute': `í`,
  '&deg;': `°`,
};

const removeHTMLCharacters = (string) => {
  let modifiedString = string;
  for (const [html, replacementString] of Object.entries(htmlsToReplace)) {
    modifiedString = _.replace(modifiedString, new RegExp(html, 'g'), replacementString);
  }
  return modifiedString;
};

export const convertToRegularString = (string) => {
  return removeHTMLCharacters(
    string &&
      string.replace(/&#(?:x([\da-f]+)|(\d+));/gi, function (_, hex, dec) {
        return String.fromCharCode(dec || +('0x' + hex));
      }),
  );
};

export const updateURLParams = (router, myNewParams) => {
  const { query } = router;
  const updatedQueryParams = { ...query, ...myNewParams };
  const newUrl = {
    pathname: router.pathname,
    query: updatedQueryParams,
  };
  router.push(newUrl, undefined, { shallow: true });
};

export function isIframeOrUrl(str) {
  // Regex pattern to match an iframe tag
  const iframeRegex = /<iframe.*>.*<\/iframe>/i;

  // Regex pattern to validate a URL
  const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;

  if (iframeRegex.test(str)) {
    return true;
  }
  return false;
}
export function isURL(str) {
  const pattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
  return pattern.test(str?.replaceAll(' ', '%20'));
}

export const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

export const AlphabetLetter = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export function replaceWordsInString(sentence = '', wordsArray: string[] = []) {
  const wordsInSentence = sentence.split(' ');
  const result = wordsInSentence.map((word) => {
    if (wordsArray.includes(word)) {
      return `[${word}]`;
    }
    return word;
  });
  const sentenceJoin = result.join(' ');
  let finalRes = sentenceJoin;
  PUNCTUATION_MARK.forEach((mark) => {
    finalRes = finalRes.replaceAll(' ' + mark, mark);
  });
  return finalRes;
}

export const splitSentence = (text = '') => {
  const x = text.match(/[\w'"’]+|[ ,;:.?!...:|]+/g);
  return x?.filter((v) => v !== ' ') || [];
};
