import _ from 'lodash';
import moment from 'moment';
import { forceLogout } from './auth';
import { StorageKeys } from './enum';
import { RcFile } from 'antd/es/upload';
import { message } from 'antd';
import { UploadFile } from 'antd/lib';

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
  console.log('str', str);
  // Regex pattern to match an iframe tag
  const iframeRegex = /<iframe.*>.*<\/iframe>/i;

  // Regex pattern to validate a URL
  const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;

  if (iframeRegex.test(str)) {
    console.log('iframe');
    return true;
  }
  console.log('not iframe');
  return false;
}
