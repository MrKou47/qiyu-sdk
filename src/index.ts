import { ApplyStaffOptions, QiyuMessageConstructor, ApplyStaffRes, SendMessageReq, SendMessageRes } from './interface';

import * as crypto from "crypto";
import * as request from "request";
import * as url from 'url';

const md5 = require('md5');

class QiyuMessage {
  readonly MESSAGE_URL = '/openapi/message/send';
  readonly APPLY_STAFF_URL = '/openapi/event/applyStaff';
  readonly basicReq = {
    protocol: 'https',
    hostname: 'qiyukf.com',
  };
  secret: string;
  key: string;
  constructor(options: QiyuMessageConstructor) {
    this.key = options.key;
    this.secret = options.secret;
  }

  async generateChecksum(message: SendMessageReq | ApplyStaffOptions): Promise<{ staffCheckNum: string; timeStamp: string}> {
    const sha1 = crypto.createHash('sha1');
    let timeStamp: string, staffCheckNum;
    try {
      timeStamp = new Date().valueOf().toString().substring(0, new Date().valueOf().toString().length - 3);
      staffCheckNum = sha1.update(this.secret + md5(JSON.stringify(message)) + timeStamp);
      staffCheckNum = sha1.digest('hex');
    } catch (error) {
      throw new Error(error);
    }
    return { staffCheckNum, timeStamp };
  }

  /**
   * 自定义的请求
   * @param requestOptions request module options
   */
  customizeReq(requestOptions: any): Promise<any> {
    return new Promise((resolve, reject) => {
      request(requestOptions, (err: any, res: any, data: any) => {
        if (err || res.statusCode !== 200) {
          return reject(new Error('request api failed'));
        }
        return resolve(data);
      });
    });
  }

  /**
   * 生成所需要的url
   * @param options 用于 format url 的 opions
   */
  _generateCurrentUrl(options: any) {
    return url.format(Object.assign({}, options, this.basicReq));
  }

  /**
   * 生成所需的request 的 options
   * @param requestUrl 请求的request url
   * @param body 发送的数据
   */
  async _generateCurrentRequestOpt(requestUrl: string, body: SendMessageReq | ApplyStaffOptions): Promise<object> {
    let checkSumRes;
    try {
      checkSumRes = await this.generateChecksum(body);
      const requestUrlOpt = {
        pathname: requestUrl,
        query: {
          appKey: this.key,
          checksum: checkSumRes.staffCheckNum,
          time: checkSumRes.timeStamp,
        },
      };
      const requestOptions = {
        url: this._generateCurrentUrl(requestUrlOpt),
        body,
        json: true,
        method: 'post',
      };
      return requestOptions;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * 请求分配客服
   * @param options post请求体 参与 生成checksum
   * @param callback callback
   */
  async applyStaff(options: ApplyStaffOptions, callback?: (args: ApplyStaffRes) => void): Promise<ApplyStaffRes> {
    try {
      const requestOpt = await this._generateCurrentRequestOpt(this.APPLY_STAFF_URL, options);
      const result: ApplyStaffRes = await this.customizeReq(requestOpt);
      if (callback) callback(result);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * 发送消息到七鱼
   * @param message  发送的消息
   * @param callback callback
   */
  async sendMessage(message: SendMessageReq, callback?: (data: SendMessageRes) => void): Promise<SendMessageRes> {
    try {
      const requestOpt = await this._generateCurrentRequestOpt(this.MESSAGE_URL, message);
      const result: SendMessageRes = await this.customizeReq(requestOpt);
      if (callback) callback(result);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}

// export default QiyuMessage; //for unit test
export = QiyuMessage;
