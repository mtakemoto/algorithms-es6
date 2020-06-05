import { mergeArray } from './sorting-searching';

describe("Merge Sorted Array (LC #88)", () => {
    test("basic case", () => {
        let actual = mergeArray(6, [1, 2, 3, 0, 0, 0], 3, [2, 5, 6]);
        expect(actual).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test("same number", () => {
        let actual = mergeArray(6, [1, 2, 3, 0, 0, 0], 3, [1, 1, 1]);
        expect(actual).toEqual([1, 1, 1, 1, 2, 3]);
    });

    test("small array", () => {
        let actual = mergeArray(4, [1, 3, 0, 0], 2, [30, 42]);
        expect(actual).toEqual([1, 3, 30, 42]);
    });

    test("empty n2", () => {
        let actual = mergeArray(2, [1, 2], 0, []);
        expect(actual).toEqual([1, 2]);
    });

    test("both empty", () => {
        let actual = mergeArray(0, [], 0, []);
        expect(actual).toEqual([]);
    });
});