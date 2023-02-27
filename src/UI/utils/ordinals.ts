export const appendOrdinal = (value: number) => {
  let day = value.toString();
  if (value % 10 == 1 && value != 11) {
    return (day = `${value}st`);
  } else if (value % 10 == 2 && value != 12) {
    return (day = `${value}nd`);
  } else if (value % 10 == 3 && value != 13) {
    return (day = `${value}rd`);
  } else {
    return (day = `${value}th`);
  }
};
