export const makeQueryString = (
  queryParams: Record<string, unknown>
): string => {
  const paramsEntries = Object.entries(queryParams);
  if (paramsEntries.length === 0) {
    return "";
  }
  const paramsStrs = Object.entries(queryParams).map(
    ([key, value]) => `${key}=${value}`
  );
  return `?${paramsStrs.join("&")}`;
};
