import { SocketIO } from '@goldfishcode/homemeta-cmp-sdk';

export interface SocketState {
  connected: boolean;
  joined: boolean;
  webSocket: SocketIO | null;
  disconnected: boolean;
}
