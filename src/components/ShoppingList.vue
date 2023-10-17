<template>
  <div class="list">
    <div v-for="item in items">
      <shopping-item
        :title="item.title"
        :img_url="item.img_url"
        :brand="item.brand"
        :price="item.price"
      />
    </div>
    <pagination-box />
  </div>
</template>
<script>
import ShoppingItem from "@/components/ShoppingItem";
import PaginationBox from "@/components/PaginationBox";

export default {
  components: {
    ShoppingItem,
    PaginationBox,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.list {
  position: relative;
  display: flex;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease-in-out;
  position: relative;
  overflow: scroll;
  flex-wrap: wrap;
  width: auto;
}
</style>
