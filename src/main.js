import { createApp } from 'vue'
import axios from 'axios'

import App from './App.vue'
import './index.css'
import store from './store/index'
import routes from '/@src/router/index'

const app = createApp(App, {})
app.config.globalProperties.$http = axios
app.use(store).use(routes).mount('#app')
