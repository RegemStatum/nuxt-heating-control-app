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
  padding-top: getInd(200);
  padding-bottom: getInd(200);
  font-size: getFontSize(700);
  line-height: getLineHeight(700);
}

@include lg {
  .heading {
    line-height: getLineHeight(600);
  }
}
</style>
