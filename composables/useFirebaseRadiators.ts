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

  type RadiatorId = string;
  interface RadiatorsHourData {
    radiators: Record<RadiatorId, RadiatorHourData>;
  }

  type Hour = string;
  interface RadiatorsDateData {
    date: string;
    hours: Record<Hour, RadiatorsHourData>;
  }

  const getRadiatorsHistoryByDate = (date: string) => {
    const radiatorIds = Object.keys(MOCK_RADIATORS);
    const radiatorsHistory: RadiatorsDateData = {
      date,
      hours: {},
    };

    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
      const hourHistory: RadiatorsHourData = {
        radiators: {},
      };

      for (let radiatorId of radiatorIds) {
        const status = getRadiatorStatus(radiatorId);
        const temperature = getRadiatorTemperature(radiatorId);

        const radiatorData: RadiatorHourData = {
          status,
          temperature,
        };
        hourHistory.radiators[radiatorId] = radiatorData;
      }

      radiatorsHistory.hours[hour] = hourHistory;
    }

    return radiatorsHistory;
  };

  const getRadiatorsData = () => {
    return MOCK_RADIATORS;
  };

  return { getRadiatorsHistoryByDate, getRadiatorsData };
};

export default useFirebaseRadiators;
