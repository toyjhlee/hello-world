import helloWorld from '..';

describe('Hello, world!', () => {
    it('returns value', () => {
        const returnValue = helloWorld();
        expect(returnValue).toEqual('Hello, world!');
    });
});
