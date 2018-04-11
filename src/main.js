// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import AV from '../node_modules/leancloud-storage/dist/av'

Vue.prototype.AV=AV
const APP_ID = 'WuXFm7CHJmMv0Ii2ei85EWAD-gzGzoHsz';
const APP_KEY = '8ea5eSyn15R1Heez3NJm7Gep';

Vue.prototype.AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
