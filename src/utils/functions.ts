// export const truncateLocation = (
//   location: string,
//   maxLength: number = 50,
// ): string => {
//   if (location.length > maxLength) {
//     return `${location.substring(0, maxLength)}...`;
//   }
//   return location;
// };

export const truncateLocation = (location: string): string => {
  const parts = location.split(',');
  const truncated = parts.slice(0, 3).join(',');
  return truncated.trim();
};
