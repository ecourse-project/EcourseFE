/// <reference types="react" />
import { type ActionIconGroupProps } from "../ActionIconGroup";
/**
 * ActionsBar组件的属性类型定义
 */
export interface ActionsBarProps extends ActionIconGroupProps {
    /**
     * 文本内容
     */
    text?: {
        /**
         * 复制文本
         */
        copy?: string;
        /**
         * 删除文本
         */
        delete?: string;
        /**
         * 编辑文本
         */
        edit?: string;
        /**
         * 重新生成文本
         */
        regenerate?: string;
    };
    /**
     * 内容
     */
    content?: React.ReactNode | undefined;
}
/**
 * ActionsBar 组件
 * 用于渲染操作按钮组。
 */
declare const ActionsBar: import("react").NamedExoticComponent<ActionsBarProps>;
export default ActionsBar;
