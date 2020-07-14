export const arrayFromOneToN = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i);
  }

  return res;
};

export const arrayFromOtoN = n =>
  Array.apply(null, { length: n }).map(Number.call, Number);

export const randInt = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const clearTimeouts = timeouts => {
  timeouts.forEach(clearTimeout);
  while (timeouts.length) {
    timeouts.pop();
  }
};
