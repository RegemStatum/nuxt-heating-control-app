enum Radiator {
  KITCHEN = "kitchen",
  GUESTROOM = "guestroom",
  BEDROOM = "bedroom",
}

interface RadiatorData {
  name: Radiator;
  status: boolean;
  temperature: number;
}

const MOCK_RADIATORS: Record<string, RadiatorData> = {
  1: {
    name: Radiator.KITCHEN,
    status: false,
    temperature: 17,
  },
  2: {
    name: Radiator.GUESTROOM,
    status: true,
    temperature: 22,
  },
  3: {
    name: Radiator.BEDROOM,
    status: true,
    temperature: 20,
  },
};

export { MOCK_RADIATORS, Radiator };
