'use strict';

import $ from 'jquery';
import CommonUtil from './module/CommonUtil';
import CheckUtil from './module/CheckUtil';
import '../scss/main.scss'; 

(() => {
  console.log(CommonUtil.getNow());
  $('body').append('append from jquery');
  $('body').append('isset' + CheckUtil.isset('hoge'));
})();
