export const formatMovieName = (name) => {
  return name.toLowerCase().replace(/ /ig, `-`);
};

export const getRandomColor = () => {
  return `#` + Math.floor(Math.random() * 16777215).toString(16);
};

export const getRandomInteger = (min, max, isRound = true) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  if (!isRound) {
    return Number(rand.toFixed(1));
  } else {
    return Math.round(rand);
  }
};
