export function convertToGMT7(utcTime) {
  const date = new Date(utcTime);
  return date.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }); // GMT+7
}