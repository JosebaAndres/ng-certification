export function isArrayString(value: any): value is Array<string> {
  if (
    Array.isArray(value) &&
    value.every((item) => {
      if (typeof item === "string") {
        return true;
      } else {
        return false;
      }
    })
  ) {
    return true;
  } else {
    return false;
  }
}
