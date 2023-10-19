import ShoppingPage from "@/pages/ShoppingPage";
import CartPage from "@/pages/CartPage";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: ShoppingPage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;