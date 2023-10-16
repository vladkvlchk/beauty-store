<template>
  <div>
    <header>
      <h1>🐰 cute store 🐰</h1>
      <nav><button id="shoppingCart">Shopping Cart</button></nav>
    </header>
    <div class="title">_____________ Cosmetics _____________</div>
    <shopping-page />
  </div>
</template>

<script>

import ShoppingPage from "@/pages/ShoppingPage";

export default {
  components: {
    ShoppingPage,
  },
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sarabun', sans-serif;
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
