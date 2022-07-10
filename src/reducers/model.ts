import { AppState } from './app/model';
import { AuthState } from './auth/model';
import { UserState } from './user/model';
import { HomeState } from './home/model';
import { SocketState } from './socket/model';
import { MailingState } from './mailing/model';
import { CampaignNftState } from './campaign-nft/model';

export interface RootState {
  socket: SocketState;
  app: AppState;
  auth: AuthState;
  user: UserState;
  home: HomeState;
  mailing: MailingState;
  campaignNft: CampaignNftState;
}
