import _ from "lodash";

export function replaceStrChar(str, oldChar, newChar) {
  return str.split(oldChar).join(newChar);
}
export function urlParser(str) {
  return _.snakeCase(str);
}
