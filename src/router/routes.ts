// import HomePage from "../pages/HomePage.vue";
// import AboutPage from "../pages/AboutPage.vue";

export default [
    {
        path: '/app2', component: () => import("../pages/HomePage.vue"),
    },
    {
        path: '/app2/about',
        name: 'About', component: () => import("../pages/AboutPage.vue")
        // name: 'About', component: AboutPage
    },
]
