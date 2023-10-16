<template>
  <form>
    <div class="itemsAmount">{{ itemsAmount }} products</div>
    <div class="sort">
      Sorted by:
      <select v-model="selectedOption" @change="emitValueChange">
        <option value="name-growth">name A-Z</option>
        <option value="name-decline">name Z-A</option>
        <option value="price-growth">price ↑</option>
        <option value="price-decline">price ↓</option>
        <option value="rating-growth">rating ↑</option>
        <option value="rating-decline">rating ↓</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    itemsAmount: {
      type: [Number, String],
      required: true,
    },
    sortBy: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: this.sortBy,
    };
  },
  methods: {
    emitValueChange() {
      this.$emit("updateSortBy", this.selectedOption);
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
}
.itemsAmount {
  color: grey;
}
.sort {
  color: grey;
}
select {
  border: 0;
  font-weight: bold;
}
</style>
