import {
  AgentNeighbourhood,
  Competitor,
  Agent,
  AgentSoldHouses,
} from '@goldfishcode/homemeta-cmp-sdk/libs/api/slipstream/models';
import { PaginationSubmission } from 'src/components/manager/tabs/ManagerAgent';
export interface HomeState {
  overviews_info: any;
  overviews: AgentNeighbourhood[];
  overviewsOnBoarding: AgentNeighbourhood[];
  soldHouse: AgentSoldHouses[];
  compareArea: Competitor[];
  userAgent: Agent | any;
  website_domain: any;
  listAgent: PaginationSubmission;
  is_refresh: boolean;
}
