export function omitFromObject(key, obj) {
  const { [key]: omited, ...restProps } = obj;
  return restProps;
}

export function sortDate(list, desc = false) {
  if (Array.isArray(list)) {
    return list.slice().sort((a, b) => {
      const first = new Date(a.date);
      const second = new Date(b.date);
      const result = (value) => (desc ? value * -1 : value);

      if (first > second) return result(1);
      if (first < second) return result(-1);
    });
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
