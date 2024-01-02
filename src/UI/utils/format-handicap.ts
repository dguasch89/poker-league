export const formatHandicap = (handicap: number) => {
  if (handicap === 0) return '<span></span>';
  else if (handicap > 0) return `<span style="color: green">+ ${handicap}</span>`;
  else return `<span style="color: red"> ${handicap}</span>`;
};
