export const intervalMap = new Map();

export function initTimeout(name, callback, duration) {
  intervalMap.set(name, setTimeout(callback, duration));
}
