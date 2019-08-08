// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/styles/base.css'
import './assets/styles/border.css'
import axios from 'axios'
Vue.config.productionTip = false

axios.jsonp = function (url) {
  const callbackName = 'itcast_' + (new Date() - 0)
  url += 'callback=' + callbackName
  const script = document.createElement('script')
  script.src = url
  document.head.appendChild(script)
  return new Promise((resolve, reject) => {
    window[callbackName] = function (data) {
      resolve(data)
      delete window[callbackName]
      document.head.removeChild(script)
    }
  })
}
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
