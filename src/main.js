import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import WlcUi from './packages'
import './packages/theme/index.less'
import './views/theme/index.less'
Vue.use(WlcUi)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
