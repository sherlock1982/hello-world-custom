import {createApp, defineCustomElement} from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

customElements.define('custom-app', defineCustomElement(App));
