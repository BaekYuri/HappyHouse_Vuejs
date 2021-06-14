import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//board
import CreateArticle from "@/components/board/CreateArticle.vue";
import ListArticle from "@/components/board/ListArticle.vue";
import ModifyArticle from "@/components/board/ModifyArticle.vue";
import ViewArticle from "@/components/board/ViewArticle.vue";

//user
import login from "@/components/user/login.vue";
import AccountInfo from "@/components/user/account.vue";
import ModifyUserInfo from "@/components/user/modifyuserInfo.vue";
import SignUp from "@/components/user/signup.vue";
import interest from "@/components/user/interest.vue";
import joinSuccess from "@/components/user/joinsuccess.vue";
import deleteSuccess from "@/components/user/deletesuccess.vue";

import ApartSearch from "@/components/apart/ApartSearch.vue";
import BikeSearch from "@/components/bike/BikeSearch.vue";
import CountryMarket from "@/components/market/CountryMarket.vue";
import AllOfFunction from "@/components/AllOfFunction.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "CreateArticle",
    component: CreateArticle,
  },
  {
    path: "/list",
    name: "ListArticle",
    component: ListArticle,
  },
  {
    path: "/modify/:no",
    name: "ModifyArticle",
    component: ModifyArticle,
  },
  {
    path: "/view/:no",
    name: "ViewArticle",
    component: ViewArticle,
  },
  {

    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/account",
    name: "AccountInfo",
    component: AccountInfo,
  },
  {
    path: "/modifyuserInfo",
    name: "ModifyUserInfo",
    component: ModifyUserInfo,
  },
  {
    path: "/join",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/interest",
    name: "interest",
    component: interest,
  },
  {
    path: "/joinsuccess",
    name: "joinSuccess",
    component: joinSuccess,
  },
  {
    path: "/deletesuccess",
    name: "deleteSuccess",
    component: deleteSuccess,
  },
  {
    path: "/search",
    name: "AllOfFunction",
    component: AllOfFunction,
    children: [
      {
        path: "/apart",
        name: "ApartSearch",
        component: ApartSearch,
      },
      {
        path: "/bike",
        name: "BikeSearch",
        component: BikeSearch,
      },
      {
        path: "/market",
        name: "CountryMarket",
        component: CountryMarket,
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
