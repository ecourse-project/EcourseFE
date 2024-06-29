import { ChatMessage } from "../../types";
import { ChatStore } from '../store';
export interface ProChatInstance extends Pick<ChatStore, 'resendMessage' | 'stopGenerateMessage' | 'sendMessage' | 'deleteMessage' | 'clearMessage'> {
    /**
     * 获取当前聊天列表对象
     * @returns ChatStore['chats']
     */
    getChats: () => ChatStore['chats'];
    /**
     * 往数据流中推送消息
     * @returns void
     */
    pushChat: (chats: {
        id?: string;
        content: string;
        role: string;
    }) => void;
    /**
     * 获取当前聊天消息列表
     * @returns ChatMessage[]
     */
    getChatMessages: () => ChatMessage[];
    /**
     * 设置消息内容
     * @param id
     * @param content
     * @returns  void
     */
    setMessageContent: (id: string, content: string) => void;
    /**
     * 修改消息的某个属性
     * @param id
     * @param key
     * @param value
     * @returns  void
     */
    setMessageValue: (id: string, key: keyof ChatMessage<Record<string, any>>, value: any) => void;
    /**
     * 滚动到底部
     * @returns
     */
    scrollToBottom?: () => void;
    /**
     * 获取当前 loading 生成的消息 id
     * @returns  消息 id ｜ undefined
     */
    getChatLoadingId: () => string | undefined;
}
export declare const useProChat: () => ProChatInstance;
