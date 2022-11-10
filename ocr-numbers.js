export const convert = (whatAreTheProps) => {
  const zero = ' _ \n'
    + '| |\n'
    + '|_|\n'
    + '   ',
    one = '   \n'
      + '  |\n'
      + '  |\n'
      + '   ',
    nine = ' _ \n'
      + '|_|\n'
      + ' _|\n'
      + '   ',
    eight = ' _ \n'
      + '|_|\n'
      + '|_|\n'
      + '   ',
    seven = ' _ \n'
      + '  |\n'
      + '  |\n'
      + '   ',
    six = ' _ \n'
      + '|_ \n'
      + '|_|\n'
      + '   ',
    five = ' _ \n'
      + '|_ \n'
      + ' _|\n'
      + '   ',
    four = '   \n'
      + '|_|\n'
      + '  |\n'
      + '   ',
    three = ' _ \n'
      + ' _|\n'
      + ' _|\n'
      + '   ',
    two = ' _ \n'
      + ' _|\n'
      + '|_ \n'
      + '   '
  const rows = whatAreTheProps.split('\n');
  const theGridQuantum = [];
  for (let i = 0; i < rows.length; i += 4) {
    const length = rows[i].length;
    for (let j = 0; j < length; j += 3) {
      const currentColumn = [];
      for (let k = 0; k < 4; k++) {
        for (let m = 0; m < 3; m++) currentColumn.push(rows[i + k][j + m]);
        k < 3 && currentColumn.push('\n');
      }
      theGridQuantum.push(currentColumn.join(''));
    }
    i < rows.length - 4 && theGridQuantum.push(',');
  }
  let grid = theGridQuantum.map((e) => {
    switch (e) {
      case zero: return "0";
      case one: return "1";
      case two: return "2";
      case three: return "3";
      case four: return "4";
      case five: return "5";
      case six: return "6";
      case seven: return "7";
      case eight: return "8";
      case nine: return "9";
      case ",": return ",";
    }
    return "?";
  });
  return grid.join('');
};
