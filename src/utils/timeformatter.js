const formatTimeWithLeadingZero = (val) => {
  let value = val.toString();
  if (value.length < 2) {
    value = "0" + value;
  }
  return value;
};

export const formatSecondsToHumanTime = (time) => {
  const secs = ~~(time % 60);
  const mins = ~~((time % 3600) / 60);
  const hours = ~~(time / 3600);

  const humantime = `${formatTimeWithLeadingZero(
    hours
  )}:${formatTimeWithLeadingZero(mins)}:${formatTimeWithLeadingZero(
    secs
  )}`;

  return humantime;
};
