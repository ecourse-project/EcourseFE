import moment, { Moment } from 'moment';

export const currency = {
  USD: '$0,000',
};
export function formatPhoneNumber(value: string) {
  value = value.trim().replace(/([^0-9+])/g, '');
  const formatted = value.replace(
    /( ?\d{1,3})?( ?-?\d{1,3})?( ?-?\d{1,4})?(\d)?/,
    function (_, p1: string, p2: string, p3: string) {
      let output = '';
      if (p1) {
        if (p1.match(/[^A-Z0-9]/gi)) {
          output += `(${p1})`;
        } else {
          p1 = p1.replace(/[^A-Z0-9]/gi, '');
          output += `(${p1})`;
        }
      }
      if (p2) {
        if (p2.match(/[^A-Z0-9]/gi)) {
          output += ` ${p2}`;
        } else {
          p2 = p2.replace(/[^A-Z0-9]/gi, '');
          output += ` ${p2}`;
        }
      }
      if (p3) {
        if (p3.match(/[^A-Z0-9]/gi)) {
          output += `-${p3}`;
        } else {
          p3 = p3.replace(/[^A-Z0-9]/gi, '');
          output += `-${p3}`;
        }
      }
      return output;
    },
  );
  return formatted;
}

export const formatDate = (date: string | Moment): string => {
  return moment(date).format('DD/MM/YYYY');
};

export const formatDateAndHour = (date: string | Moment): string => {
  return moment(date).format('DD/MM/YYYY HH:mm:ss');
};

export const formatStartDate = (date: string | Moment): string => {
  return `${moment(date).format('YYYY/MM/DD')} 00:00:00`;
};

export const formatEndDate = (date: string | Moment): string => {
  return `${moment(date).format('YYYY/MM/DD')} 23:59:59`;
};

export const UpperCaseFirstLetter = (s: string) => {
  if (!s) return;

  const split = s.toLocaleLowerCase().split(' ');
  let newString = '';
  for (const i of split) {
    newString += i[0].toUpperCase() + i.slice(1) + ' ';
  }
  return newString.trim();
};
