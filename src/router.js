import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import SearchHistory from "./views/SearchHistory.vue";
import book from "./views/book";
import user from "./views/user.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Home",
      name: "home",
      component: Home
    },
    {
      path: "/About",
      name: "about",
      component: About
    },
    {
      path: "/SearchHistory",
      name: "SearchHistory",
      component: SearchHistory
    },
    {
      path: "/book",
      name: "book",
      component: book
    },
    {
      path: "/user",
      name: "user",
      component: user
    },
    {
      path: "/Login",
      name: "login",
      component: Login
    }
  ],
  mode: "history"
});
