/*
 * Randomly generate six sets of three integers of value 2 or 3
 * and sum to create the six broken or unbroken lines of an
 * I Ching hexagram. Add to array in reverse so that hexagram is drawn
 * from the bottom up.
 */

export class CastHexagram {
  private readonly states: number[] = [2, 3];

  private randomInteger(): number {
    return Math.floor(Math.random() * Math.floor(2));
  }

  private get line(): number {
    const coinThrows: number[] = [];
    for (let i = 1; i <= 3; i++) {
      coinThrows.push(this.states[this.randomInteger()]);
    }
    const line = coinThrows.reduce((value, accumulator) => value + accumulator);
    return line;
  }

  public hexagram(): number[] {
    const hexagramLines: number[] = [];
    for (let i = 1; i <= 6; i++) {
      hexagramLines.unshift(this.line);
    }
    return hexagramLines;
  }
}
