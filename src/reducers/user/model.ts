import { CampaignOrder, CampaignOverview } from '@goldfishcode/homemeta-cmp-sdk/libs/api/postalytics/models';
import { ConstantValue } from '@goldfishcode/homemeta-cmp-sdk/libs/api/settings/models';
import { User } from '@goldfishcode/homemeta-cmp-sdk/libs/api/user/models';

export interface UserState {
  publicProfile: User | null;
  userAssets: ConstantValue | null;
  agentPastOrders: CampaignOrder[] | null;
  campaignAssets: CampaignOverview | any;
  listMembersSearch: any;
  listMembersSearchfile: any;
  is_agentlookup: boolean;
  is_skipsetup: boolean;
  isProspectLookup: boolean;
  saveCardList: any;
}
