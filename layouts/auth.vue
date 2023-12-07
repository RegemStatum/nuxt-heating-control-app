<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style lang="scss">
.main {
  $pageWidth: 100vw;
  $pageHeight: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  width: $pageWidth;
  height: $pageHeight;
}
</style>
