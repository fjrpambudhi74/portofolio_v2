// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fas

} from '@fortawesome/free-solid-svg-icons'
import {
  fab
} from '@fortawesome/free-brands-svg-icons'
import {
  far
} from '@fortawesome/free-regular-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import './assets/css/styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import VAnimateCss from 'v-animate-css';

library.add(fas, fab, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VAnimateCss);
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    AOS.init();
  },
  router
}).$mount('#app')