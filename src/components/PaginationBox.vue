<template>
  <div class="pagination">
    <div class="button-more">More goods</div>
    <div class="page-list">
      <ul class="page">
        <li class="page__item">1</li>
        <li class="page__item">2</li>
        <li class="page__item">3</li>
        <li class="page__item">4</li>
        <li class="page__item">5</li>
        <li class="page__item">...</li>
        <li class="page__item">2775</li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.pagination {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button-more {
  height: 40px;
  width: 220px;
  border: 1px solid black;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.button-more:hover{
    border: 1px solid #65256F;
    color: #65256F;
}
ul {
  list-style: none;
  display: flex;
  margin-top: 24px;
}
li {
  margin: 0.7em;
  cursor: pointer;
  transition: color 0.2s;
  font-weight: 900;
}
li:hover {
    color: #65256F;
}
</style>
