const generateRandomNumber = (max: number, min = 0, isCeil = true) => {
  if (isCeil) return Math.ceil(Math.random() * (max - min)) + min;
  return Math.random() * (max - min) + min;
};

export default generateRandomNumber;
