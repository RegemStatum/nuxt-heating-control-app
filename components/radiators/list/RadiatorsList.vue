<script setup lang="ts"></script>

<template>
  <div class="container">
    <table class="table">
      <RadiatorsListHead />
      <RadiatorsListBody />
    </table>
  </div>
</template>

<style scoped lang="scss">
.table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  :deep(.table-body),
  :deep(.table-head) {
    th,
    td {
      padding-top: getInd(300);
      padding-bottom: getInd(300);
    }
  }
}
</style>
