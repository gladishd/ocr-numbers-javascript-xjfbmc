export const convert = (whatAreTheProps) => {
  // throw new Error("Remove this statement and implement this function");
  let split = whatAreTheProps.split('');
  let zero = ' _ \n'
    + '| |\n'
    + '|_|\n'
    + '   ';
  let one = '   \n'
    + '  |\n'
    + '  |\n'
    + '   ';
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
    case '   \n'
      + '|_|\n'
      + '  |\n'
      + '   ': return "4"
    case ' _ \n'
      + '|_ \n'
      + ' _|\n'
      + '   ': return "5"
    case ' _ \n'
      + '|_ \n'
      + '|_|\n'
      + '   ': return "6"
    case ' _ \n'
      + '  |\n'
      + '  |\n'
      + '   ': return "7"
    case ' _ \n'
      + '|_|\n'
      + '|_|\n'
      + '   ': return "8"
    case ' _ \n'
      + '|_|\n'
      + ' _|\n'
      + '   ': return "9"
    case '    _ \n'
      + '  || |\n'
      + '  ||_|\n'
      + '      ': return "10"
    case '   \n'
      + '| |\n'
      + '| |\n'
      + '   ': return "?"
  }
  let ten = '    _ \n'
    + '  || |\n'
    + '  ||_|\n'
    + '      ';
  let nine = ' _ \n'
    + '|_|\n'
    + ' _|\n'
    + '   ';
  let eight = ' _ \n'
    + '|_|\n'
    + '|_|\n'
    + '   ';
  let seven = ' _ \n'
    + '  |\n'
    + '  |\n'
    + '   ';
  let six = ' _ \n'
    + '|_ \n'
    + '|_|\n'
    + '   ';
  let five = ' _ \n'
    + '|_ \n'
    + ' _|\n'
    + '   ';
  let four = '   \n'
    + '|_|\n'
    + '  |\n'
    + '   ';
  let three = ' _ \n'
    + ' _|\n'
    + ' _|\n'
    + '   ';
  let two = ' _ \n'
    + ' _|\n'
    + '|_ \n'
    + '   ';
  let rows = whatAreTheProps.split('\n');
  let theGridQuantum = [];

  for (let i = 0; i < rows.length; i += 4) {
    // Take the next 4 rows, the height of the integer symbols
    let currentColumn;
    // What is the length of a row?
    let length = rows[i].length;
    /** How can we iterate over the length
     * of that row and then s0ke?
     */
    for (let j = 0; j < length; j += 3) {
      currentColumn = [];
      /**
       * This is our starting point. Let's go
       * 4 rows down.
       */
      for (let k = 0; k < 4; k++) {
        /** Can we mix indexing on strings and rows?
          * Now want to go across the columns 3 times */
        for (let m = 0; m < 3; m++) {
          // console.log("What is this is is ", rows[i + k][j + m]);
          currentColumn.push(rows[i + k][j + m]);
        }
        if (k < 3) currentColumn.push('\n');
        /** Interchange with the index at that row!
          * Instead of removing the last element from the array. */
      }
      theGridQuantum.push(currentColumn.join(''));
    }
    /** This is "awfully specific".
     * We "need" to iterate "down" that row. Then,
     * i stays the same.
     * Want to iterate over all rows.
     */
  }
  // console.log('NoW What IS THe Grid Quantum?', theGridQuantum, whatAreTheProps);
  console.log("HLSDFLKDSLKFJ the reduced ", theGridQuantum.reduce((previous, e) => {
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
      case ten: return "10"; // Yeah right!
    }
  }, ""));

  // console.log('the new value is ', theGridQuantum[0], theGridQuantum[0] == zero, zero, theGridQuantum[0].split(''), zero.split(''));
};

/** CodeSignal say don't write in the test specs..
    https://exercism.org/tracks/javascript/exercises/ocr-numbers/solutions/kylejw2
    Given a 3 x 4 grid of pipes as in README.md and on the above solution to the OCR number puzzle, we are able to see that each letter has a height of 4 and a width of 3. Instead of parsing each letter out individually, "what" if we could
    parse them out by column? Except then we'd need to parse out numbers like '100', which would require a "prohibitively expensive" table of values.
 */
