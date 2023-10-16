<template>
  <form>
    <div class="itemsAmount">{{ itemsAmount }}</div>
    <div class="sortedBy">
      sorted by:
      <select>
        <option>name A-Z</option>
        <option>name Z-A</option>
        <option>price lower-higher</option>
        <option>price ↓</option>
        <option>popularity ↑</option>
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
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped></style>
