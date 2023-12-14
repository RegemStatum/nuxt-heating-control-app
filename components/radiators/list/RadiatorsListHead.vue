<script setup lang="ts"></script>

<template>
  <thead class="table-head">
    <tr>
      <th scope="col" class="header name">Name</th>
      <th scope="col" class="header temperature">Temperature, °C</th>
      <th scope="col" class="header status">Status</th>
    </tr>
  </thead>
</template>

<style scoped lang="scss">
.header {
  $fontWeight: 600;
  font-weight: $fontWeight;
  text-align: center;

  &.name {
    width: 35%;
  }

  &.status {
    width: 20%;
  }

  &.temperature {
    width: 45%;
  }
}
</style>
