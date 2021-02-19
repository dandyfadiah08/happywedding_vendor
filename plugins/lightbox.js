import Vue from 'vue'

import LightBox from 'vue-it-bigger'
import('@/assets/css/style.css')

const plugin = {
  install() {
    Vue.component('LightBox', LightBox)
  },
}

Vue.use(plugin)
