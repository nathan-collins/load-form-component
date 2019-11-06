const resolved = new WeakSet();
export const lazyLoad = directive((importPromise, value) => (part) => {
  if (!resolved.has(part)) {
    importPromise.then(() => resolved.add(part));
  }

  part.setValue(value);
});
