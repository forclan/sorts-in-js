export const generateRandomArray = randomFunc => length => {
  return Array.apply(null, Array(length)).map(_ => randomFunc());
}

export const generateArraySmallThan100 = generateRandomArray(() => Math.floor(Math.random()*100));
