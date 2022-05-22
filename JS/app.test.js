import { checkValues, countNeighbors } from './app';

describe('Given countNeighbors function with three parameters, an array and its position x and y', () => {
    describe('When the array is [[1,0],[1,1]] and the position is (0,0)', () => {
        test('Then should return a 6', () => {
            let grid = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            let x = 2;
            let y = 2;
            let result = countNeighbors(grid, x, y);
            expect(result).toEqual(2);
        });
    });
});

describe('Given checkValues function', () => {
    describe('When the array is [[1,0],[1,1]] and check all the positions', () => {
        test('Then should return the new array [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]', () => {
            let grid = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            let cols = 5;
            let rows = 5;
            let result = checkValues(grid, cols, rows);
            expect(result).toEqual([
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ]);
        });
    });
});
