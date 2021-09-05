import { createRouter, createWebHashHistory } from 'vue-router';
import StatBlockDisplay from './views/StatBlockDisplay.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: '/:id?', component: StatBlockDisplay }]
});

export default router;
