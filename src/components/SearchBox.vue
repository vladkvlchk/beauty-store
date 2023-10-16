<template>
  <div class="search-component">
    <div class="search-icon"></div>
    <input placeholder="Search..." type="text" v-model="searchQuery" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  watch: {
    searchQuery(new_value){
        this.$emit('onChange', new_value)
    }
  }
};
</script>

<style scoped>
.search-component {
  display: flex;
  width: 312px;
  margin: 40px;
  font-size: 14px;
  line-height: 24px;
  padding: 0 4px;
}
.search-icon {
  width: 30px;
  height: 30px;
  right: 0;
  cursor: pointer;
  background: url("https://makeup.com.ua/theme/img/icons/search.svg") no-repeat
    center/24px 24px;
}
input {
  width: 100%;
  margin-left: 12px;
  font-size: 18px;
  border: 0;
  outline: none;
}
</style>
