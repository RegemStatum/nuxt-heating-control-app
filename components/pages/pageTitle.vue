<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <h1 class="heading">{{ title }}</h1>
</template>

<style scoped lang="scss">
.heading {
  font-size: getFontSize(700);
  line-height: getLineHeight(700);
}
</style>
