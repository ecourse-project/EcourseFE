import { CampaignAudience, CampaignOrders } from '@goldfishcode/homemeta-cmp-sdk/libs/api/campaigns/models';
import {
  NFTMetadataCampaigns,
  NFTMetadataCampaignsHomeowners,
  NFTMetadataCampaignsInteraction,
} from '@goldfishcode/homemeta-cmp-sdk/libs/api/campaign_metadata/models';
import { BlurImage, CampaignNFT, CampaignNFTArgs } from '@goldfishcode/homemeta-cmp-sdk/libs/api/campaign_nft/models';
import { Pagination } from '@goldfishcode/homemeta-cmp-sdk/libs/type';

export interface CampaignNftState {
  listCampaignNfts: Pagination<CampaignNFT>;
  campaignNftDetail: CampaignNFT | null;
  listCampaignAudience: CampaignAudience[] | null;
  listCampaignPastOrder: CampaignOrders[] | null;
  campaignPublicData: NFTMetadataCampaigns | null;
  campaignHomeownersMailed: Pagination<NFTMetadataCampaignsHomeowners>;
  campaignInteractions: Pagination<NFTMetadataCampaignsInteraction>;
  dataCampaign: any;
  blurImage: BlurImage | null;
}
