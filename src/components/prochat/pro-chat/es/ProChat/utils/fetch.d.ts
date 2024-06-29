import { ChatMessageError } from '../../types/message';
export declare const getMessageError: (response: Response) => Promise<ChatMessageError>;
type SSEFinishType = 'done' | 'error' | 'abort';
export interface FetchSSEOptions {
    onErrorHandle?: (error: ChatMessageError) => void;
    onMessageHandle?: (text: string, response: Response) => void;
    onAbort?: (text: string) => Promise<void>;
    onFinish?: (text: string, type: SSEFinishType) => Promise<void>;
}
/**
 * 使用流式方法获取数据
 * @param fetchFn
 * @param options
 */
export declare const fetchSSE: (fetchFn: () => Promise<Response>, options?: FetchSSEOptions) => Promise<Response>;
export {};
