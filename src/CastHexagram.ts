export class CastHexagram {
  private readonly states: number[];

  constructor() {
    this.states = [2, 3];
  }

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
