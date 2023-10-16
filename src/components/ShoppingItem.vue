<template>
  <div class="item" @mouseover="hovered = true" @mouseout="hovered = false">
    <picture><img :alt="title" :src="img_url" /></picture>
    <div class="info-top">
      <h3 class="title">{{ title }}</h3>
      <h4 class="brand">{{ brand }}</h4>
    </div>
    <div class="info-bottom">
      <div class="simple-slider-list__reviews">
        <div class="star-list">
          <div class="star-list__item"></div>
          <div class="star-list__item"></div>
          <div class="star-list__item"></div>
          <div class="star-list__item"></div>
          <div class="star-list__item star-list__item-gray"></div>
        </div>
      </div>
      <div class="price">
        <p>{{ price }}$</p>
      </div>
      <button v-show="true" :class="{ addBtn: true, show: hovered }">
        Buy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    img_url: {
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
  },
  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style scoped>
.item {
  min-height: 510px;
  width: 300px;
  margin: 8px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
picture {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 255);
  height: 352px;
  padding: 40px 32px;
  font-size: 0;
}
picture img {
  max-width: 100%;
  max-height: auto;
}
.title {
  margin: 8px;
  text-align: left;
  font-weight: bold;
}
.brand {
  margin: 8px;
  color: grey;
}
.info-bottom {
  margin-top: auto;
}
.star-list {
  display: flex;
  align-items: center;
  margin: 8px;
}
.star-list .star-list__item {
  display: flex;
  width: 10px;
  height: 10px;
  margin: 0 3px 0 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0.48 0 10.33 10'%3E%3Cpath fill='%23212121' fill-rule='evenodd' d='M5.643 7.896 2.453 10l.978-3.74-2.95-2.44 3.795-.208L5.643 0l1.368 3.612 3.795.208-2.95 2.44.978 3.74-3.19-2.104Z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 10px 10px;
}
.star-list .star-list__item.star-list__item-gray {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0.48 0 10.33 10'%3E%3Cpath fill='%23B3B3B3' fill-rule='evenodd' d='M5.643 7.896 2.453 10l.978-3.74-2.95-2.44 3.795-.208L5.643 0l1.368 3.612 3.795.208-2.95 2.44.978 3.74-3.19-2.104Z' clip-rule='evenodd'/%3E%3C/svg%3E")
    no-repeat center center;
}

.price {
  margin: 8px;
}

.addBtn {
  position: absolute;
  width: 0px;
  font-size: 14px;
  height: 0;
  background-color: black;
  color: white;
  cursor: pointer;
  opacity: 0;
  z-index: 4;
  transform: translateY(-100%);
  transition: opacity 0.4s, transform 0.3s;
}
.addBtn.show {
  opacity: 1;
  transform: translateY(0);
  height: 3.5em;
  width: 300px;
  border-radius: 4px;
  margin-top: 6px;
}
.addBtn:hover {
  opacity: 0.8;
}
</style>
