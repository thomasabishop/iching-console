import Controller from './Controller.js';
import CreateLibrary from './CreateLibrary.js';
import CastHexagram from './CastHexagram.js';

const test = new Controller();
//test.getReading();

const libraryTest = new CreateLibrary();
console.log(libraryTest.createStaticHexagrams());
