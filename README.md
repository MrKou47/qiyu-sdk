# qiyu-sdk

七鱼消息接口SDK, 用于简化 *nodejs* 对七鱼消息接口的调用。

## Install

> $ npm install qiyu-sdk --save

### Usage

```js
const QiyuSdk = require('qiyu-sdk');
const qySdk = new QiyuSdk(options);

qySdk.applyStaff({
  uid: 'i am a customer',
}).then((res) => {
  // ...your code
});

qySdk.sendMessage({
  uid: 'i am a customer',
  msgType: 'TEXT',
  content: 'hello!',
}).then((res) => {
  // ...your code
});
```

### API

 `applyStaff(options, callback(res))` 请求分配客服
 return Promise;

 `sendMessage(options)` 发送消息到七鱼
 return Promise;


### Options

#### options for `applyStaff()`

```js
// basic used
const applyStaffOpt = {
  uid: 'user id',
};
```
 - **uid**: 开发者的应用里的用户ID;
 - **fromPage**: 用户发起咨询客服操作的页面 url，比如商品链接，订单页面等。;
 - **fromTitle**: fromPage 页面的标题;
 - **fromIp**: 用户ip;
 - **deviceType**: 用户设备类型信息;
 - **productId**: 产品标识，可以是 Android 应用的报名，iOS 应用的 bundleid 等;
 - **staffType**: 请求分配的客服类型，如果传0，表示机器人，传1表示人工。默认为机器人;
 - **staffId**: 只请求该 ID 的客服，客服 ID 可在管理后台查看;
 - **groupId**: 只请求该客服分组 ID 内的客服，分组 ID 可在管理后台查看;
 - **robotShuntSwitch**: 申请人工客服之前是否先申请机器人开关，0代表关闭，1代表启用;
#### options for `sendMessage()`

```js
// send a normal text message
sendMessageOpt = {
  uid: '';
  msgType: "TEXT";
  content: '';
};
// send an image message
sendMessageOpt = {
  uid: '';
  msgType: "TEXT";
  content: {
    url: 'img_url';
    size: 1000; // byte
    md5: 'md5 code';
    w: 100;
    h: 100;
  };
};
// send an audio message
sendMessageOpt = {
  uid: '';
  msgType: "AUDIO";
  content: {
    url: 'audio url';
    size: 1024;
    dur: 1000; // ms
    md5: 'md5 code';
  };
};
```

**WARNING:** url需在同一个domain中 防止跨域;

 - **uid**: 开发者的应用里的用户ID;
 - **msgType**: 消息类型。（目前仅支持 TEXT, PICTURE, AUDIO 三种，分别是文本，图片和语音消息）;
 - **content**: 消息内容。文本消息是文本内容，图片和语音消息则是描述的 json， 该字段长度限制最大为 4000 个字符。

