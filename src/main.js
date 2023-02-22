import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

import * as Cesium from 'cesium';

const app = createApp(App);

console.log(Cesium);

app.use(router).mount('#app');
