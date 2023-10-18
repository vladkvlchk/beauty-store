import ShoppingPage from "@/pages/ShoppingPage";
import CartPage from "@/pages/CartPage";
import { createWebHashHistory, createRouter } from "vue-router";

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
  history: createWebHashHistory(),
});

export default router;
