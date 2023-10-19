<template>
  <div>
    <header>
      <h1>🐰 cute store 🐰</h1>
      <nav>
        <router-link to="/cart">
          <button id="shoppingCart">Shopping Cart</button>
        </router-link>
      </nav>
    </header>
    <router-view> </router-view>
  </div>
</template>

<script>
import ShoppingPage from "@/pages/ShoppingPage";
import CartPage from "@/pages/CartPage";

export default {
  components: {
    ShoppingPage,
    CartPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sarabun", sans-serif;
}
header {
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
}
h1 {
  position: absolute;
  text-align: center;
}
nav {
  position: absolute;
  margin: 0 36px;
  right: 0;
}
.title {
  text-align: center;
}

main {
  display: flex;
}
</style>
