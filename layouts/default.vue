<script setup lang="ts"></script>

<template>
  <div>
    <LayoutsAppLayoutAppHeader />
    <LayoutsAppLayoutAppSidebar />
    <main>
      <slot></slot>
    </main>
    <LayoutsAppLayoutAppFooter />
  </div>
</template>

<style scoped lang="scss"></style>
