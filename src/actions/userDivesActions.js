export const addUserDive = (
  date,
  deep,
  duration,
  gas,
  localisation,
  hour_diving
) => {
  return {
    type: "ADD_DIVE",
    payload: { date, deep, duration, gas, localisation, hour_diving },
  };
};
