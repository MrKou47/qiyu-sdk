export interface ApplyStaffOptions {
    uid: string;
    fromPage?: string;
    fromTitle?: string;
    fromIp?: string;
    deviceType?: string;
    productId?: string;
    staffType?: 0 | 1;
    staffId?: number;
    groupId?: number;
    robotShuntSwitch?: 0 | 1;
}
export interface QiyuMessageConstructor {
    key: string;
    secret: string;
}
export declare type StaffEvaluationModelList = Array<{
    name: string;
    value: number;
}>;
export interface ApplyStaffRes {
    code: number;
    staffId: number;
    message: string;
    count: number;
    sessionId: number;
    staffName: string;
    staffType: number;
    staffIcon: string;
    evaluationModel: {
        title: string;
        note: string;
        type: number;
        list: StaffEvaluationModelList;
    };
}
export declare type TxtContent = string;
export interface PicContent {
    url: string;
    size: number;
    md5: string;
    w: number;
    h: number;
}
export interface AudioContent {
    url: string;
    size: number;
    dur: number;
    md5: string;
}
export interface SendMessageReq {
    uid: string;
    msgType: "TEXT" | "PICTURE" | "AUDIO";
    content: TxtContent | PicContent | AudioContent;
}
export interface SendMessageRes {
    code: number;
}
