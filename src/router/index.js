import { createRouter, createWebHistory } from "vue-router";
import Connexion from '@/views/MyConnexion.vue';
import Inscription from '@/views/MyInscription.vue';
import Home from '@/views/HelloWorld.vue';
import Admin from '@/views/AdminView.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
import ProfilUtilisateur from '@/views/ProfilUtilisateur.vue';
import SearchPage from '@/views/SearchPage.vue';
import Profil1 from '@/views/ProfilUser1.vue';
import Scrap from '@/views/AdminScap.vue';
import Test from '@/views/MyTest.vue';
import firebase from "firebase/compat/app";
import ListeOffre from '@/views/AdminListeOffre.vue';

const routes = [{
    name: 'Connexion',
    path: '/connexion',
    component: Connexion,
}, {
    name: 'Inscription',
    path: '/inscription',
    component: Inscription,
}, {
    name: 'Home',
    path: '/',
    component: Home,
}, {
    name: 'Test',
    path: '/test',
    component: Test,
}, {
    name: 'Profil',
    path: '/profil',
    component: ProfilUtilisateur,
    children: [{
        name: 'SearchPage',
        path: 'search',
        component: SearchPage,
    }, {
        name: 'Profil1',
        path: 'pro',
        component: Profil1,
    }]
}, {
    name: 'Admin',
    path: '/admin',
    component: Admin,
    meta: { requiresAuth: true },
    children: [{
        name: 'AdminD',
        path: 'dashboard',
        component: AdminDashboard,
    }, {
        name: 'AdminS',
        path: 'scrap',
        component: Scrap,
    }, {
        name: 'AdminL',
        path: 'listoffre',
        component: ListeOffre,
    }]
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const isAuth = to.matched.some(record => record.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser
    if (isAuth && !currentUser) {
        return {
            path: '/',
            query: { redirect: to.fullPath },
        }
    }
})

export default router