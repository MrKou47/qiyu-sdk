import { ApplyStaffOptions, QiyuMessageConstructor, ApplyStaffRes, SendMessageReq, SendMessageRes } from './interface';
declare class QiyuMessage {
    readonly MESSAGE_URL: string;
    readonly APPLY_STAFF_URL: string;
    readonly basicReq: {
        protocol: string;
        hostname: string;
    };
    secret: string;
    key: string;
    constructor(options: QiyuMessageConstructor);
    generateChecksum(message: SendMessageReq | ApplyStaffOptions): Promise<{
        staffCheckNum: string;
        timeStamp: string;
    }>;
    /**
     * 自定义的请求
     * @param requestOptions request module options
     */
    customizeReq(requestOptions: any): Promise<any>;
    /**
     * 生成所需要的url
     * @param options 用于 format url 的 opions
     */
    _generateCurrentUrl(options: any): string;
    /**
     * 生成所需的request 的 options
     * @param requestUrl 请求的request url
     * @param body 发送的数据
     */
    _generateCurrentRequestOpt(requestUrl: string, body: SendMessageReq | ApplyStaffOptions): Promise<object>;
    /**
     * 请求分配客服
     * @param options post请求体 参与 生成checksum
     * @param callback callback
     */
    applyStaff(options: ApplyStaffOptions, callback?: (args: ApplyStaffRes) => void): Promise<ApplyStaffRes>;
    /**
     * 发送消息到七鱼
     * @param message  发送的消息
     * @param callback callback
     */
    sendMessage(message: SendMessageReq, callback?: (data: SendMessageRes) => void): Promise<SendMessageRes>;
}
export default QiyuMessage;
