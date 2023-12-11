<script setup lang="ts">
interface Props {
  hintText: string;
  linkText: string;
  linkTo: string;
}
defineProps<Props>();
</script>

<template>
  <p class="hint">
    {{ hintText }}
    <NuxtLink :to="linkTo" class="link">{{ linkText }}</NuxtLink>
  </p>
</template>

<style scoped lang="scss">
.hint {
  font-size: getFontSize(300);
  line-height: getLineHeight(300);
}
</style>
