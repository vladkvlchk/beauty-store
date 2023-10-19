<template>
  <div>
    <div class="title">_____________ Shopping Cart _____________</div>
    <div class="page">
      <nav>
        <router-link to="/"
          ><button>{{ "< back" }}</button></router-link
        >
      </nav>
      <main>
        <div class="itemList">
          <ul>
            <li v-for="item in items">
              <cart-item
                :key="item.id"
                :img_url="item.img_url"
                :title="item.title"
                :brand="item.brand"
                :price="item.price"
                :amount="item.amount"
              />
            </li>
          </ul>
        </div>
        <div class="order"></div>
      </main>
    </div>
  </div>
</template>
<script>
import CartItem from "@/components/CartItem";

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          img_url: "https://u.makeup.com.ua/b/b9/b9z0y9qlhc2b.jpg",
          title: "Calvin Klein CK One",
          brand: "Calvin Klein",
          price: 22.08,
          amount: 1,
        },
        {
          id: 7,
          img_url: "https://u.makeup.com.ua/5/5z/5zsn14gm1ecb.jpg",
          title: "Perfect Cover BB Cream SPF42/PA++ Moisturized Complexion",
          brand: "Missha",
          price: 8.33,
          amount: 2,
        },
      ],
    };
  },
};
</script>
<style scoped>
nav {
  position: relative;
}
button {
  border: 0;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
}
</style>
