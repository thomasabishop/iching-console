/*
 * Create library of every hexagram for later search and retrieval of cast hexagrams
 *
 * Run once at initialisation, enshrining the singleton design pattern.
 *
 * Although changing lines are essential to generating a reading, they are not part of the hexagram index. For indexing purposes, we need a static version of each hexagram stored as a hashed number array.
 */

import CastHexagram from './CastHexagram.js';
import type { LineReplacements } from './types';

export default class CreateLibrary {
  private library: Map<string, number[]> = new Map();

  private substituteChangingLines(changingArray: number[]): number[] {
    const solid: LineReplacements = {
      changing: 9,
      static: 7,
    };
    const broken: LineReplacements = {
      changing: 6,
      static: 8,
    };
    const staticArray = changingArray.map(function (element) {
      if (element === solid.changing) {
        return solid.static;
      } else if (element === broken.changing) {
        return broken.static;
      } else {
        return element;
      }
    });
    return staticArray;
  }

  createStaticHexagrams(): number[] {
    const dynamicHexagram = new CastHexagram();
    const staticHexagram = dynamicHexagram.hexagram().lines;
    return this.substituteChangingLines(staticHexagram);
  }

  //createHashKey
  // addLibraryEntry(staticHexagram: number[]) {
  //   return this.library.set();
  // }

  // generateLibrary(): string {
  //  while (this.library.length <= 63) {
  //    const hexagram = new CastHexagram();
  //   // const entry = hexagram.hexagram().toString();
  //  }
  // }
}
