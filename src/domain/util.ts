export function sortBy<T, K>(array: T[], keySelector: (v: T) => K, order: 'asc' | 'desc') {
  return [...array].sort(function(a, b) {
    const keyA = keySelector(a);
    const keyB = keySelector(b);
    const compareResult = (Number(keyA > keyB) - Number(keyB > keyA));
    return (order === 'desc' ? -1 : 1) * compareResult;
  });
}

export function maxBy<T, K>(array: T[], keySelector: (v: T) => K) {
  return sortBy(array, keySelector, 'desc')[0];
}
