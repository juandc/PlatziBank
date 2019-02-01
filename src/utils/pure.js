export const compose = (...fns) => {
  return fns.reduceRight((prevFn, nextFn) => {
    return (...args) => {
      return prevFn(nextFn(...args));
    };
  });
}
