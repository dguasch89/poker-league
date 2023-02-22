export const appendOrdinal = (gameNumber: number) => {
  let day = gameNumber.toString();
  if (day === '2') {
    return (day = `${gameNumber}nd`);
  } else if (day === '3') {
    return (day = `${gameNumber}rd`);
  } else {
    return (day = `${gameNumber}th`);
  }
};
