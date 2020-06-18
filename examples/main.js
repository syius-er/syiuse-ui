import Vue from 'vue'
import App from './App.vue'
// import SyButton from './components/button.vue'
import './assets/fonts/font.scss'
import SyButtons from '../packages'

Vue.config.productionTip = false
// Vue.component(SyButton.name, SyButton)
Vue.use(SyButtons)

new Vue({
  render: h => h(App),
}).$mount('#app')
