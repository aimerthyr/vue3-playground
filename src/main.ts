import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import installIcons from './plugins/element-plus-icons';

const app = createApp(App);
installIcons(app);
app.use(router).mount('#app');
