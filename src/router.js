const routers = [
    {
        path: '/',
        meta: {
            title: 'My8 - Home'
        },
        component: (resolve) => require(['./views/home/index.vue'], resolve)
    },
    {
        path: '/register',
        meta: {
            title: 'My8 - Register'
        },
        component: (resolve) => require(['./views/auth/index.vue'], resolve)
    }
];
export default routers;
