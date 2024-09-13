export const add = (numbers) => {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiters: comma or newline

  // Check for custom delimiter format (e.g., "//;\n1;2")
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    // Extract the custom delimiter between "//" and "\n"
    delimiter = new RegExp(`[${numbers.slice(2, delimiterEndIndex)}]`);
    numbers = numbers.slice(delimiterEndIndex + 1); // Remove delimiter declaration from the string
  }

  // Split the string using the delimiter and convert the elements to numbers
  const numArray = numbers.split(delimiter).map((num) => {
    if (num === "") return 0; // Handle empty input gracefully
    return Number(num);
  });

  // Check for negative numbers
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  // Calculate the sum of the numbers
  return numArray.reduce((sum, num) => sum + num, 0);
};