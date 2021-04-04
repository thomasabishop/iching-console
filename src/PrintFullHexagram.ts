import chalk from 'chalk';
import type { HexagramLines } from './types';

export default class PrintFullHexagram {
  protected readonly lookupLines: HexagramLines;
  readonly hexagram: number[];

  constructor(hexagram: number[]) {
    this.hexagram = hexagram;
    this.lookupLines = {
      6: chalk.red.bold('-x-'),
      7: chalk.blue.bold('---'),
      8: chalk.blue.bold('- -'),
      9: chalk.green.bold('-o-'),
    };
  }

  public print(): void {
    for (const line of this.hexagram) {
      console.log(this.lookupLines[line]);
    }
  }
}
