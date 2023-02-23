export function getRandomNumber({ min, max }: { min?: number; max?: number }) {
  const maximum = max || 10000;
  const minimum = min || 0;

  const result = Math.random() * (maximum - minimum) + minimum;

  return parseInt(result.toFixed(0), 10);
}
