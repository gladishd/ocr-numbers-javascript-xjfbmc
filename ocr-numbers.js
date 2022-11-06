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
  console.log("Let's see if this is true. ", zero == split, zero, split);

};
