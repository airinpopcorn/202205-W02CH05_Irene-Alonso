import { countNeighbors } from './app';

describe('Given countNeighbors function with three parameters, an array and its position x and y', () => {
    describe('When the array is [[1,0],[1,1]] and the position is (0,0)', () => {
        test('Then should return a 5', () => {
            let grid = [
                [1, 0],
                [1, 1],
            ];
            let x = 0;
            let y = 0;
            let result = countNeighbors(grid, x, y);
            expect(result).toBe(5);
        });
    });
});
