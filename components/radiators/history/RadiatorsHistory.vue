<script setup lang="ts">
const { getRadiatorsHistoryByDate } = useFirebaseRadiators();
const radiatorsHistory = useState("radiatorsHistory", () =>
  getRadiatorsHistoryByDate("14/12/2023")
);
console.log(radiatorsHistory);
</script>

<template>
  <p class="date">Date: {{ radiatorsHistory.date }}</p>
  <div v-for="(radiator, index) of radiatorsHistory.radiators" :key="index">
    <p class="radiator-name">{{ radiator.name }}</p>
    <table class="history-table">
      <RadiatorsHistoryHead />
      <RadiatorsHistoryBody :hours="radiator.hours" />
    </table>
  </div>
</template>

<style scoped lang="scss">
.date {
  padding-top: getInd(400);
}

.radiator-name {
  padding-top: getInd(800);
  padding-bottom: getInd(200);
  text-transform: capitalize;
  font-size: getFontSize(500);
  font-weight: 500;
}

.history-table {
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
