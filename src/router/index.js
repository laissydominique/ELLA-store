import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AcessoriesView from "../views/AcessoriesView.vue";
import ShortsView from "@/views/ShortsView.vue";
import BlousesView from "@/views/BlousesView.vue";
import PantsView from "@/views/PantsView.vue";
import SkirtsView from "@/views/SkirtsView.vue";
import DressesView from "@/views/DressesView.vue";
import BagsView from "@/views/BagsView.vue";
import BlazersView from "@/views/BlazersView.vue";
import SpecifcClothingView from "@/views/SpecifcClothingView.vue";
import SpecifcAcessorieView from "@/views/SpecifcAcessorieView.vue";
import ItemView from "@/views/ItemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shorts",
      name: "shorts",
      component: ShortsView,
    },
    {
      path: "/blouses",
      name: "blouses",
      component: BlousesView,
    },
    {
      path: "/pants",
      name: "pants",
      component: PantsView,
    },
    {
      path: "/skirts",
      name: "skirts",
      component: SkirtsView,
    },
    {
      path: "/dresses",
      name: "dresses",
      component: DressesView,
    },
    {
      path: "/blazers",
      name: "blazers",
      component: BlazersView,
    },
    {
      path: "/acessories",
      name: "acessories",
      component: AcessoriesView,
    },
    {
      path: "/bags",
      name: "bags",
      component: BagsView,
    },
    {
      path: "/clothes/:clothingId",
      name: "clothes",
      component: SpecifcClothingView,
      props: true,
    },
    {
      path: "/jewelry/:jewelryId",
      name: "jewelry",
      component: SpecifcAcessorieView,
      props: true,
    },
    {
      path: "/:item/:itemId",
      name: "item",
      component: ItemView,
      props: true,
    },
  ],
});

export default router;
