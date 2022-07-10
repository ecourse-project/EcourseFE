import { Pagination } from '@goldfishcode/homemeta-cmp-sdk/libs/type';
import { MailingList } from '@goldfishcode/homemeta-cmp-sdk/libs/api/mailing/models';

export interface MailingState {
  mailingList: Pagination<MailingList>;
}
