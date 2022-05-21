import { add } from './app';

describe('Given add function with two parameters', () => {
    describe('When the parameters are 2, 3', () => {
        test('Then should return 5', () => {
            let result = add(2, 3);
            expect(result).toBe(5);
        });
    });
});
