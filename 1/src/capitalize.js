export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// // alternative
// export const capitalize = (text) => {
//   const [firstSymbol = '', ...restSymbols] = text;
//   return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
// };