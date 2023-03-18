import 'uno.css';
import { createSSRApp } from 'vue';
import App from './App.vue';
import store from '@/store';
export function createApp() {
  const app = createSSRApp(App).use(store);
  return {
    app
  };
}
