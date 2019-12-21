import { binarySearch, midPoint } from './binsearch';

describe('Binary Search', () => {
    test('even numbered array', () => {
        let array = [0, 1, 2, 3];
        expect(binarySearch(array, 2)).toBe(2);
    });

    test('odd numbered array', () => {
        let array = [0, 2, 4, 99, 100];
        expect(binarySearch(array, 99)).toBe(3);
    });

    test('single item array', () => {
        let array = [1];
        expect(binarySearch(array, 1)).toBe(0);
    });

    test('empty array', () => {
        let array = [];
        expect(binarySearch(array, 5)).toBeNull();
    });
});

describe('Midpoint', () => {
    test('Even sum', () => {
        expect(midPoint(10, 0)).toBe(5);
    });

    test('Odd sum should floor', () => {
        expect(midPoint(1, 2)).toBe(1);
    });
});
