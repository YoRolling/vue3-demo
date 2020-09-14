import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "/@src/components/Home.vue";
import Editor from "/@src/components/Editor.vue";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },

        {
            path: "/blog/:id/view",
            name: "DetailView",
            component: defineAsyncComponent(() =>
                import("/@src/components/Detail.vue")
            ),
        },
        {
            path: "/blog/:id/edit",
            name: "EditorView",
            component: Editor,
        },
    ],
});
routes.beforeEach((to, from, next) => {
    console.log("log from vue-router beforeEach hook");
    next();
});
export default routes;
