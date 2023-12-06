<script setup lang="ts">
import AppFooterControlMenu from "./AppFooterControlMenu.vue";
import AppFooterControlHome from "../../navigation/NavigationHome.vue";
import AppFooterControlCharts from "../../navigation/NavigationCharts.vue";

const route = useRoute();

const appStore = useAppStore();
const { closeSidebar } = appStore;
</script>

<template>
  <nav class="control">
    <AppFooterControlMenu />
    <AppFooterControlHome
      :isActive="route.path === '/'"
      @click="closeSidebar"
    />
    <AppFooterControlCharts
      :isActive="route.path === '/charts'"
      @click="closeSidebar"
    />
  </nav>
</template>

<style scoped lang="scss">
.control {
  display: flex;
  justify-content: space-around;
}

:deep(.link),
:deep(.button) {
  flex: 1 0 auto;

  .control-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      $iconSize: 30px;
      width: $iconSize;
      height: $iconSize;
    }

    .text {
      font-size: getFontSize(300);
      line-height: getLineHeight(1000);

      &.active {
        $activeLinkFontWeight: 600;
        font-weight: $activeLinkFontWeight;
      }
    }
  }
}

:deep(.link) {
  color: inherit;
  text-decoration: none;
}
</style>
