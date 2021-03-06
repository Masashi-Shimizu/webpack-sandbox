'use strict';

export default class CommonUtil {
  constructor() {
  }

  static numPad(str) {
    return ('0' + str).slice(-2);
  }

  static getDiffTime(startTime, endTime) {
    const end = new Date(endTime),
          start = new Date(startTime);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return false;
    const req = parseInt((end.getTime() - start.getTime()) / 1000);
    const hour = parseInt(req / 3600);
    const min = parseInt((req / 60) % 60);
    const sec = req % 60;
    return this.numPad(hour) + ':' + this.numPad(min) + ':' + this.numPad(sec); // 表示を更新
  }

  static timeCalculator(obj) {
    var now = new Date(),
        start = new Date(Number(obj.time)),
        req = parseInt((now.getTime() - start.getTime()) / 1000);
    return Number(req);
  };

  static fullDateTime(parse) {
    var d = (this.isset(parse)) ? new Date(Number(parse)) : new Date();
    return d.getFullYear() + this.numPad(d.getMonth() + 1) +
        this.numPad(d.getDate()) +
        this.numPad(d.getHours()) + this.numPad(d.getMinutes()) +
        this.numPad(d.getSeconds()) +
        this.numPad(Number(String(d.getMilliseconds()).slice(0, 2)));
  }

  static formatDateParse(parse) {
    const d = (this.isset(parse)) ? new Date(Number(parse)) : new Date();
    return d.getFullYear() + '/' + this.numPad(d.getMonth() + 1) + '/' +
        this.numPad(d.getDate()) + ' ' + this.numPad(d.getHours()) + ':' +
        this.numPad(d.getMinutes()) + ':' + this.numPad(d.getSeconds());
  }

  static makeUserId() {
    const d = new Date();
    return d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) +
        ('0' + d.getDate()).slice(-2) + d.getHours() + d.getMinutes() +
        d.getSeconds() + Math.floor(Math.random() * 1000);
  }

  static makeAccessId() {
    return ('000' + Math.floor(Math.random() * 10000)).slice(-4);
  }

  static getNow() {
    const d = new Date();
    return '【' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() +
        '】';
  }

  static getIp(socket) {
    let ip = '0.0.0.0';
    if (this.isset(socket.handshake.headers['x-forwarded-for'])) {
      ip = socket.handshake.headers['x-forwarded-for'];
    }
    return ip;
  }

  static isset(a) {
    if (a === null || a === '' || a === undefined || String(a) === 'null' ||
        String(a) === 'undefined') {
      return false;
    }
    return true;
  }

  static isKeyExists(obj, path) {
    const keys = path.split('.');
    for (let k in keys) {
      const key = keys[k];

      if (!obj.hasOwnProperty(key)) {
        return false;
      }

      if (keys.length > 1) {
        return CommonUtility.isKeyExists(obj[key], keys.splice(1).join('.'));
      }
      return true;
    }
  }

  static objectSort(object) {
    //戻り値用新オブジェクト生成
    var sorted = {};
    //キーだけ格納し，ソートするための配列生成
    var array = [];
    //for in文を使用してオブジェクトのキーだけ配列に格納
    for (var key in object) {
      //指定された名前のプロパティがオブジェクトにあるかどうかチェック
      if (object.hasOwnProperty(key)) {
        //if条件がtrueならば，配列の最後にキーを追加する
        array.push(key);
      }
    }
    //配列のソート
    array.sort();
    //配列の逆ソート
    //array.reverse();

    //キーが入った配列の長さ分だけfor文を実行
    for (var i = 0; i < array.length; i++) {
      /*戻り値用のオブジェクトに
      新オブジェクト[配列内のキー] ＝ 引数のオブジェクト[配列内のキー]を入れる．
      配列はソート済みなので，ソートされたオブジェクトが出来上がる*/
      sorted[array[i]] = object[array[i]];
    }
    //戻り値にソート済みのオブジェクトを指定
    return sorted;
  }

  static trimFrame(str) {
    return str.replace('_frame', '');
  }

  static isNumber(n) {
    return RegExp(/^([+\-])?\d+(.\d+)?$/).test(n);
  }

  static zeroPadding(num, length){
    if (String(num).length >= length) {
      return num;
    } else {
      return ('00000000000000000000' + num).slice(-length);
    }
  }

  static extend(obj1, obj2) {
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        obj1[key] = obj2[key];
      }
    }
    return obj1;
  }

  static changeColorCode (rgb) {
    let r, g, b;
    if (rgb.length === 3) {
      r = String(rgb.substr(0, 1)) + String(rgb.substr(0, 1));
      g = String(rgb.substr(1, 1)) + String(rgb.substr(1, 1));
      b = String(rgb.substr(2)) + String(rgb.substr(2));
    } else {
      r = String(rgb.substr(0, 2));
      g = String(rgb.substr(2, 2));
      b = String(rgb.substr(4));
    }

    let balloonR = String(255 - parseInt(r, 16));
    let balloonG = String(255 - parseInt(g, 16));
    let balloonB = String(255 - parseInt(b, 16));
    let codeR = parseInt(balloonR).toString(16);
    let codeG = parseInt(balloonG).toString(16);
    let codeB = parseInt(balloonB).toString(16);

    if (codeR.length === 1) {
      codeR = '0' + codeR;
    }

    if (codeG.length === 1) {
      codeG = '0' + codeG;
    }

    if (codeB.length === 1) {
      codeB = '0' + codeB;
    }

    return ('#' + codeR + codeG + codeB).toUpperCase();
  }

  static toNumeric(str) {
    var num = Number(str);
    if (isNaN(num)) {
      num = 0;
    }
    return num;
  }
}