const board = require('../src/board.js');
import { hasDuplicates, massTest, completeBoard } from '../src/board.js'


test('checks for duplicate in array', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(hasDuplicates(arr)).toBe(false);
});

test('use hasDuplicates() but for an array with multiple arrays', () => {
    expect(massTest(completeBoard)).toBe(false);
});

