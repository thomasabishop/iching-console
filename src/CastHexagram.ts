/*
 * Randomly generate six sets of three integers of value 2 or 3
 * and sum to create the six broken or unbroken lines of an
 * I Ching hexagram. Add to array in reverse so that hexagram is drawn
 : * from the bottom up.
 */

import type { HexagramPacket } from './types';

export default class CastHexagram {
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

  private isChanging(lines: number[]): boolean {
    return lines.some((line: number) => line === 6 || line === 9);
  }

  public hexagram(): HexagramPacket {
    const hexagram: number[] = [];
    for (let i = 1; i <= 6; i++) {
      hexagram.unshift(this.line);
    }
    if (!this.isChanging(hexagram)) {
      return {
        lines: hexagram,
        isChanging: false,
      };
    } else {
      return {
        lines: hexagram,
        isChanging: true,
      };
    }
  }
}
