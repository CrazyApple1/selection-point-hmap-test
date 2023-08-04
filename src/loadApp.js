/*
|--------------------------------------------------------------------------
|
| 用于本地调试组件，配合 npm script 的 VUE_APP_COMP 参数来决定载入哪个组件调试
|
|--------------------------------------------------------------------------
*/
import Vue from 'vue';
import App from './components/App.vue';
// import './style/index.scss'
// const compName = process.env.VUE_APP_COMP || 'App';

if (Vue.version.startsWith('3.')) {
  // 如果是 vue3，渲染入口调整为 createApp
  Vue.createApp(App).mount('#app');
} else {
  new Vue({
    render: h => h(App),
  }).$mount('#app');
}
