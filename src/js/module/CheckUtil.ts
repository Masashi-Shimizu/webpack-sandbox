'use strict';

export default class CheckUtil {

  static isSmartphone() {
    let ua = this.getUserAgent();

    return (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0);
  }

  static isIOS() {
    let ua = this.getUserAgent();

    return (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('ipod') > 0);
  }

  static isAndroid() {
    let ua = this.getUserAgent();

    return ua.indexOf('android') > 0;
  }

  static isset(target: any) {
    if (target === null || target === '' || target === undefined || String(target) === 'null' ||
        String(target) === 'undefined') {
      return false;
    }
    if (typeof target === 'object') {
      let keys = Object.keys(target);
      return (Object.keys(target).length !== 0);
    }
    return true;
  }

  static objectPathExists(target: object, path: string) {

    let keys = path.split('.');
    for (let key in keys) {
      let property = keys[key];

      if (!target.hasOwnProperty(property)) { return false; }

      if (keys.length > 1) {
        return this.objectPathExists(target[property],
            keys.splice(1).join('.'));
      }

      return true;
    }
  }

  /**
   * @private
   * @returns {string}
   */
  static getUserAgent() {
    return navigator.userAgent.toLowerCase();
  }
}