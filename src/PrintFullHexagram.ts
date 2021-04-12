/*
 * Receive hexagram integer array as parameter, print changing or static hexagram based on argument to printLines method
 */

import chalk from 'chalk';
import type { HexagramLines } from './types';

export default class PrintHexagram {
  private readonly changingLines: HexagramLines = {
    6: chalk.red.bold('-x-'),
    7: chalk.blue.bold('---'),
    8: chalk.blue.bold('- -'),
    9: chalk.green.bold('-o-'),
  };
  private readonly staticLines: HexagramLines = {
    6: chalk.blue.bold('-x-'),
    7: chalk.blue.bold('---'),
    8: chalk.blue.bold('- -'),
    9: chalk.blue.bold('-o-'),
  };
  readonly hexagram: number[];

  constructor(hexagram: number[]) {
    this.hexagram = hexagram;
  }

  public printLines(hexagramState: string): void {
    for (const line of this.hexagram) {
      if (hexagramState !== 'changing') {
        console.log(this.staticLines[line]);
      } else {
        console.log(this.changingLines[line]);
      }
    }
  }
}
