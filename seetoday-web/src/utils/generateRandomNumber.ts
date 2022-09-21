const generateRandomNumber = (max: number, min = 0, isCeil = true) => {
  if (isCeil) return Math.ceil(Math.random() * max) + min;
  return Math.random() * max + min;
};

export default generateRandomNumber;
