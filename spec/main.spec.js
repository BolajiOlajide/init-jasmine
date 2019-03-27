const { add } = require('../src/main');


describe('Add function works correctly', () => {
    it('returns the sum of two numbers when called', () => {
        const result = add(2, 4);
        expect(result).toEqual(6);
    })

    it('returns the sum of two numbers when called', () => {
        const result = add(-1, 4);
        expect(result).toEqual(3);
    })

    it('returns the sum of two numbers when called', () => {
        const result = add(5, 5);
        expect(result).toEqual(10);
    })
})