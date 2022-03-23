import Vue from 'vue';
import App from './App.vue';
import AppFunctions from '@/utils/AppFunctions';

Vue.config.productionTip = false;
Vue.use(AppFunctions);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
