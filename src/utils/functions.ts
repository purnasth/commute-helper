// export const truncateLocation = (
//   location: string,
//   maxLength: number = 50,
// ): string => {
//   if (location.length > maxLength) {
//     return `${location.substring(0, maxLength)}...`;
//   }
//   return location;
// };

// Function to truncate location string
export const truncateLocation = (location: string): string => {
  const parts = location.split(',');
  const truncated = parts.slice(0, 3).join(',');
  return truncated.trim();
};

// Function to highlight the matched text
export const highlightMatch = (text: string, query: string) => {
  const regex = new RegExp(`(${query})`, 'gi'); // Create a regex to match the query
  return text.replace(
    regex,
    (match) => `<span class="bg-teal-100 font-medium">${match}</span>`,
  );
};
