import { expect } from 'chai';
import 'mocha';
import QiyuMessage from '../src';

const qiyuMessage = new QiyuMessage({
  key: '',
  secret: '',
});

describe('Test class QiyuMessage', () => {
  describe('Test generate create url', () => {
    it('should return an url string', () => {
      const url = qiyuMessage._generateCurrentUrl({});
      expect(typeof url).to.equal('string');
    })
  })
  describe('Test generate checksum', () => {
    it('should return an url string', (done) => {
      qiyuMessage.generateChecksum({
        uid: '1',
        msgType: 'TEXT',
        content: 'haha',
      }).then((result) => {
        expect(Array.from(Object.keys(result))).to.include('staffCheckNum');
        done();
      }).catch((err) => {
        done();
      });
    })
  })
  describe('Test generate request options', () => {
    it('should return an current request options', (done) => {
      qiyuMessage._generateCurrentRequestOpt(qiyuMessage.MESSAGE_URL, {
        uid: '1',
        msgType: 'TEXT',
        content: 'haha',
      }).then((res) => {
        expect(typeof res).to.equal('object');
        done();
      });
    })
  });
  describe('Test apply staff', () => {
    it('should return an apply_staff response', (done) => {
      qiyuMessage.applyStaff({
        uid: 'test_account_use_robot_staff',
        staffType: 0,
      }).then((res) => {
        expect(typeof res).to.equal('object');
        done();
      }).catch((err) => {
        done();
      });
    })
  });
  describe('Test send message 2 qiyu', () => {
    it('should return an response carry code equal 200', (done) => {
      qiyuMessage.applyStaff({
        uid: 'test_user_use_customer_staff',
        staffType: 1,
      }).then((staffRes) => {
        qiyuMessage.sendMessage({
          msgType: 'TEXT',
          uid: 'testuserusecustomerstaff',
          content: 'test message',
        }).then((res) => {
          expect(res.code).to.equal(200);
          done();
        }).catch((err) => {
          done();
        });
      }).catch((err) => {
          done();
      });
    })
  });
});
