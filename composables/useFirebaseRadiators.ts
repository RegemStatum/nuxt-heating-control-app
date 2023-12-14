import { MOCK_RADIATORS } from "@/constants/mock/radiators";

const START_HOUR = 0;
const END_HOUR = 23;

const useFirebaseRadiators = () => {
  const checkIsRadiator = (id: string) => {
    const isRadiator = MOCK_RADIATORS.hasOwnProperty(id);
    return isRadiator;
  };

  const getRadiatorStatus = (id: string) => {
    const isRadiator = checkIsRadiator(id);
    if (!isRadiator) {
      throw new Error(`There is no radiator with id: ${id}`);
    }
    const radiatorStatus = MOCK_RADIATORS[id].status;
    return radiatorStatus;
  };

  const getRadiatorTemperature = (id: string) => {
    const isRadiator = checkIsRadiator(id);
    if (!isRadiator) {
      throw new Error(`There is no radiator with id: ${id}`);
    }

    const randomAddSign = Math.random() > 0.5 ? 1 : -1;
    const randomAdd = randomAddSign * Math.floor(Math.random() * 3);

    const radiatorAverageTemperature = MOCK_RADIATORS[id].temperature;
    const radiatorTemperature = radiatorAverageTemperature + randomAdd;
    return radiatorTemperature;
  };

  interface RadiatorHourData {
    status: boolean;
    temperature: number;
  }

  type Hour = string;
  type RadiatorData = Record<Hour, RadiatorHourData>;

  type RadiatorId = string;
  interface RadiatorsData {
    date: string;
    radiators: Record<RadiatorId, RadiatorData>;
  }

  const getRadiatorsHistoryByDate = (date: string) => {
    const radiatorIds = Object.keys(MOCK_RADIATORS);
    const radiatorsHistory: RadiatorsData = {
      date,
      radiators: {},
    };

    for (let radiatorId of radiatorIds) {
      const radiatorDataByHours: RadiatorData = {};

      for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        const status = getRadiatorStatus(radiatorId);
        const temperature = getRadiatorTemperature(radiatorId);
        const hourRadiatorData = {
          status,
          temperature,
        };
        radiatorDataByHours[hour] = hourRadiatorData;
      }

      radiatorsHistory.radiators[radiatorId] = radiatorDataByHours;
    }

    return radiatorsHistory;
  };

  const getRadiatorsData = () => {
    return MOCK_RADIATORS;
  };

  return { getRadiatorsHistoryByDate, getRadiatorsData };
};

export default useFirebaseRadiators;
