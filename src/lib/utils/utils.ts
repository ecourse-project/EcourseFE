import moment, { Moment } from 'moment';
import { forceLogout } from './auth';
import { StorageKeys } from './enum';

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
