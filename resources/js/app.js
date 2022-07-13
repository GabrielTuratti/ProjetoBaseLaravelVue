require('./bootstrap');

import { createApp } from 'vue';

import Main from './components/Login.vue'

const app = createApp({});

app.component('Login', Main);

app.mount('#app');