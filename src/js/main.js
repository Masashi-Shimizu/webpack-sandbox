'use strict';

import $ from 'jquery';
import CommonUtil from './module/CommonUtil';
import '../scss/main.scss'; 

(() => {
  console.log(CommonUtil.getNow());
  $('body').append('append from jquery');
})();
