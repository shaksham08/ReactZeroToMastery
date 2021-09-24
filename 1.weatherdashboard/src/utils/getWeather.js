export const getWeather = (lat) => {
  const date = new Date();
  const month = date.getMonth();

  if (!lat) {
    return null;
  }

  if (month <= 1 || month >= 11) {
    if (lat < 0) {
      return "summer";
    } else {
      return "winter";
    }
  } else if (month >= 2 && month <= 4) {
    if (lat < 0) {
      return "autum";
    } else {
      return "spring";
    }
  } else if (month >= 5 && month <= 7) {
    if (lat < 0) {
      return "winter";
    } else {
      return "summer";
    }
  } else if (month >= 8 && month <= 10) {
    if (lat < 0) {
      return "spring";
    } else {
      return "autum";
    }
  }
};
