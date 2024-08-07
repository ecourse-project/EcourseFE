/// <reference types="react" />
import { ChatItemProps } from "..";
export interface TitleProps {
    avatar: ChatItemProps['avatar'];
    placement?: ChatItemProps['placement'];
    showTitle?: ChatItemProps['showTitle'];
    time?: ChatItemProps['time'];
    className?: string;
}
declare const Title: import("react").NamedExoticComponent<TitleProps>;
export default Title;
