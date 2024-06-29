import { ButtonProps } from 'antd';
import { ReactNode } from 'react';
import { TextAreaProps } from 'antd/es/input';
export type ChatInputAreaProps = {
    className?: string;
    onSend?: (message: string) => boolean | Promise<boolean>;
    inputRender?: (defaultDom: ReactNode, onMessageSend: (message: string) => void | Promise<any>, defaultProps: TextAreaProps) => ReactNode;
    sendButtonRender?: (defaultDom: ReactNode, defaultProps: ButtonProps) => ReactNode;
    inputAreaRender?: (defaultDom: ReactNode, onMessageSend: (message: string) => void | Promise<any>, onClearAllHistory: () => void) => ReactNode;
};
export declare const ChatInputArea: (props: ChatInputAreaProps) => string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode>;
export default ChatInputArea;
