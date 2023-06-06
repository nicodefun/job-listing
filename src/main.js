import { createApp } from 'vue'
import App from './App.vue'
import ListDiv from './components/ListDiv.vue';

const app = createApp(App);

app.component('list-div', ListDiv);

app.mount('#app')
