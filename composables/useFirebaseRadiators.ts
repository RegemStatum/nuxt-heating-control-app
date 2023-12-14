import { MOCK_RADIATORS } from "@/constants/mock/radiators";

const START_HOUR = 0;
const END_HOUR = 23;

const useFirebaseRadiators = () => {
  const checkIsRadiator = (radiatorId: string) => {
    const isRadiator = MOCK_RADIATORS.hasOwnProperty(radiatorId);
    return isRadiator;
  };

  const validateRadiator = (radiatorId: string) => {
    const isRadiator = checkIsRadiator(radiatorId);
    if (!isRadiator) {
      throw new Error(`There is no radiator with id: ${radiatorId}`);
    }
  };

  const getRadiatorStatus = (radiatorId: string) => {
    validateRadiator(radiatorId);

    const radiatorStatus = MOCK_RADIATORS[radiatorId].status;
    return radiatorStatus;
  };

  const getRadiatorTemperature = (radiatorId: string) => {
    validateRadiator(radiatorId);

    const randomAddSign = Math.random() > 0.5 ? 1 : -1;
    const randomAdd = randomAddSign * Math.floor(Math.random() * 3);

    const radiatorAverageTemperature = MOCK_RADIATORS[radiatorId].temperature;
    const radiatorTemperature = radiatorAverageTemperature + randomAdd;
    return radiatorTemperature;
  };

  const getRadiatorName = (radiatorId: string) => {
    validateRadiator(radiatorId);

    const name = MOCK_RADIATORS[radiatorId].name;
    return name;
  };

  interface RadiatorHourData {
    status: boolean;
    temperature: number;
  }

  type Hour = string;
  interface RadiatorData {
    name: string;
    hours: Record<Hour, RadiatorHourData>;
  }

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
      const radiatorName = getRadiatorName(radiatorId);
      const radiatorDataByHours: RadiatorData = {
        name: radiatorName,
        hours: {},
      };

      for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        const status = getRadiatorStatus(radiatorId);
        const temperature = getRadiatorTemperature(radiatorId);
        const hourRadiatorData = {
          status,
          temperature,
        };
        radiatorDataByHours.hours[hour] = hourRadiatorData;
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
