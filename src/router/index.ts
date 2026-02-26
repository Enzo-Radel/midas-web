import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import DashboardView from '../views/DashboardView.vue'
import PlaceholderView from '../views/PlaceholderView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: DashboardView,
                    meta: { title: 'Dashboard' },
                },
                {
                    path: 'transacoes',
                    name: 'transacoes',
                    component: PlaceholderView,
                    meta: { title: 'Transações' },
                },
                {
                    path: 'carteira',
                    name: 'carteira',
                    component: PlaceholderView,
                    meta: { title: 'Carteira' },
                },
                {
                    path: 'investimentos',
                    name: 'investimentos',
                    component: PlaceholderView,
                    meta: { title: 'Investimentos' },
                },
                {
                    path: 'metas',
                    name: 'metas',
                    component: PlaceholderView,
                    meta: { title: 'Metas' },
                },
                {
                    path: 'relatorios',
                    name: 'relatorios',
                    component: PlaceholderView,
                    meta: { title: 'Relatórios' },
                },
                {
                    path: 'configuracoes',
                    name: 'configuracoes',
                    component: PlaceholderView,
                    meta: { title: 'Configurações' },
                },
            ],
        },
        // Rota legada /about pode ser mantida ou removida
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
    ],
})

export default router
