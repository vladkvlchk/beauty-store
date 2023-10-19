<template>
  <div class="cart_item">
    <picture>
      <img :src="img_url" :alt="title" />
    </picture>
    <div class="info">
      <h3>{{ title }}</h3>
      <h4>{{ brand }}</h4>
    </div>
    <div class="amount">
      <div class="amount__box">
        <button>-</button>
        <b>{{ amount }}</b>
        <button>+</button>
      </div>
    </div>
    <div class="totalPrice">
      <b>${{ price * amount }}</b>
    </div>
    <div class="remove">
      <img
        src="https://makeup.com.ua/theme/img/icons/delete.svg"
        alt="delete"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img_url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.cart_item {
  display: flex;
  height: 100px;
  border: 1px solid red;
  margin: 12px;
}
picture {
  flex: 1;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
picture img {
  max-width: 100%;
  max-height: 100%;
}
.info {
  flex: 2;
  border: 1px solid red;
}
.info h4 {
  color: grey;
}
.amount {
  flex: 1;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.amount__box{
    
}
.amount button {
  border-radius: 0;
  border: 1px solid black;
  width: 50px;
  height: 50px;
}
.amount b {
  height: 50px;
  width: 50px;
  text-align: center;
  border: 1px solid grey;
}
.totalPrice {
  flex: 1;
  border: 1px solid red;
}
.remove {
  border: 1px solid red;
}
</style>
