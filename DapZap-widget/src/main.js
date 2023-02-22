import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)
App.vuetify = vuetify
App.store = store
App.router = router
Vue.customElement('vue-widget', App)