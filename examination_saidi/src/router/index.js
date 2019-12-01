import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from "@/components/Index";
import List from "@/components/List";

export default new VueRouter({
    routes: [
    {
        path: "/",
        redirect: "/index",
        component: Index,
    },
    {
        path: "/index",
        component: Index,
    },
    {
        path: "/list",
        component: List,
    }
]
})
  