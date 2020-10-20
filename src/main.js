import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// router
import router from './router'
import store from './store'
// ant-design-vue
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
createApp(App)
  .use(router)
  .use(store)
  .use(antd)
  .mount('#app')
