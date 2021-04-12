/* Rough and ready controller class for development purposes; refine later */

import CastHexagram from './CastHexagram.js';
import PrintHexagram from './PrintFullHexagram.js';

export default class Controller {
  getReading(): void {
    const x = new CastHexagram();
    const reading = new PrintHexagram(x.hexagram().lines);
    if (!x.hexagram().isChanging) {
      return reading.printLines('static');
    } else {
      return reading.printLines('changing');
    }
  }
}
