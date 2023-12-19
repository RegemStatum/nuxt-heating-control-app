<script setup lang="ts">
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Radiator } from "@/constants/mock/radiators";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);

const { getRadiatorsHistoryByDate } = useFirebaseRadiators();
const { radiators } = getRadiatorsHistoryByDate("12/12/2023");

const radiatorColors = {
  [Radiator.KITCHEN]: "#ef4444",
  [Radiator.BEDROOM]: "#22c55e",
  [Radiator.GUESTROOM]: "#3b82f6",
};

const radiatorsFirstId = Object.keys(radiators)[0];

const chartData = {
  labels: Object.keys(radiators[radiatorsFirstId].hours),
  datasets: Object.values(radiators).map((radiator) => {
    const temperaturesByHours = Object.values(radiator.hours).map(
      (radiatorHourData) => radiatorHourData.temperature
    );
    const radiatorName = radiator.name as Radiator;

    return {
      label: radiator.name,
      data: temperaturesByHours,
      lineTension: 0,
      backgroundColor: radiatorColors[radiatorName] || "red",
      borderColor: radiatorColors[radiatorName] || "red",
    };
  }),
};

const chartOptions = {
  legend: {
    display: true,
    position: "top",
    labels: {
      boxWidth: 80,
      fontColor: "black",
    },
  },
  scales: {
    y: {
      suggestedMin: 15,
      suggestedMax: 24,
    },
  },
};
</script>

<template>
  <Line id="my-chart" :options="chartOptions" :data="chartData" />
</template>

<style scoped lang="scss"></style>
