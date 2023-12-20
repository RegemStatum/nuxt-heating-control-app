<script setup lang="ts">
const { getRadiators } = useFirestoreRadiators();

const {
  data: radiators,
  pending,
  refresh,
} = await useAsyncData("radiators", () => getRadiators(), {
  lazy: true,
});

onMounted(() => {
  refresh();
});
</script>

<template>
  <div class="container">
    <table class="table">
      <RadiatorsListHead />
      <div v-if="pending">Loading...</div>
      <RadiatorsListBody v-else :radiators="radiators" />
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

    th[scope="col"] {
      padding-top: getInd(400);
      padding-bottom: getInd(400);
    }
  }
}
</style>
