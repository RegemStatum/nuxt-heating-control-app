<script setup lang="ts">
const { user } = useFirebaseAuth();
</script>

<template>
  <NuxtLink to="/user" class="container">
    <p class="text">{{ user?.email?.trim().substring(0, 2) }}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
.container {
  padding: getInd(200) getInd(300);
  border-radius: getBorderRadius(400);
  background-color: getColor("nt-9");
  text-transform: capitalize;
  text-decoration: none;
  color: inherit;

  .text {
    $fontWeight: 500;
    font-weight: $fontWeight;
  }
}
</style>
