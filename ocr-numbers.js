export const convert = (whatAreTheProps) => {
  // throw new Error("Remove this statement and implement this function");
  let split = whatAreTheProps.split('');
  console.log(split);
  let zero = [
    ' ', '_', ' ', '\n',
    '|', ' ', '|', '\n',
    '|', '_', '|', '\n',
    ' ', ' ', ' '
  ];
  let one = [
    ' ', ' ', ' ', '\n',
    ' ', ' ', '|', '\n',
    ' ', ' ', '|', '\n',
    ' ', ' ', ' '
  ];
  console.log("Let's see if this is true. ", split);
  if (JSON.stringify(split) == JSON.stringify(zero)) return "0";
  if (JSON.stringify(split) == JSON.stringify(one)) return "1";
  if (whatAreTheProps == ' _ \n'
    + ' _|\n'
    + '|_ \n'
    + '   ') return "2";
  switch (whatAreTheProps) {
    case ' _ \n'
      + ' _|\n'
      + ' _|\n'
      + '   ': return "3"
  }
};
